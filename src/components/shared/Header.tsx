'use client';

import { useState, useCallback, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import gsap from 'gsap';

interface HeaderProps {
}

interface SubmenuItem {
    label: string;
    href: string;
    children?: SubmenuItem[];
    active?: boolean;
}

const menuItems: { label: string; href: string; active?: boolean }[] = [
    { label: 'Главная', href: '/' },
    { label: 'О нас', href: '/about' },
    { label: 'Туры', href: '/tours' },
    { label: 'Блог', href: '/blog' },
    { label: 'Контакты', href: '/contact' },
];

export default function Header({ }: HeaderProps) {
    const [menuOpen, setMenuOpen] = useState(false);
    const [openSubmenus, setOpenSubmenus] = useState<Set<string>>(new Set());
    const overlayRef = useRef<HTMLElement>(null);
    const menuListRef = useRef<HTMLUListElement>(null);
    const animatingRef = useRef(false);

    const toggleMenu = useCallback(() => {
        if (animatingRef.current) return;
        animatingRef.current = true;

        if (!menuOpen) {
            setMenuOpen(true);
            document.documentElement.classList.add('ui-no-scroll');
            document.body.classList.add('ui-ol-menu-open');

            setTimeout(() => {
                const tl = gsap.timeline({
                    onComplete: () => { animatingRef.current = false; },
                });
                if (overlayRef.current) {
                    tl.to(overlayRef.current, { duration: 0.4, autoAlpha: 1 });
                }
                if (menuListRef.current) {
                    tl.from(menuListRef.current.children, {
                        duration: 0.4,
                        y: 80,
                        autoAlpha: 0,
                        stagger: 0.05,
                        ease: 'power2.out',
                        clearProps: 'all',
                    });
                }
            }, 10);
        } else {
            const tl = gsap.timeline({
                onComplete: () => {
                    setMenuOpen(false);
                    setOpenSubmenus(new Set());
                    document.documentElement.classList.remove('ui-no-scroll');
                    document.body.classList.remove('ui-ol-menu-open');
                    animatingRef.current = false;
                },
            });
            if (menuListRef.current) {
                tl.to(Array.from(menuListRef.current.children), {
                    duration: 0.4,
                    y: -80,
                    autoAlpha: 0,
                    stagger: 0.05,
                    ease: 'power2.in',
                });
            }
            if (overlayRef.current) {
                tl.to(overlayRef.current, { duration: 0.4, autoAlpha: 0, clearProps: 'all' }, '+=0.2');
            }
            if (menuListRef.current) {
                tl.set(Array.from(menuListRef.current.children), { clearProps: 'all' });
            }
        }
    }, [menuOpen]);

    const toggleSubmenu = useCallback((key: string) => {
        setOpenSubmenus((prev) => {
            const next = new Set(prev);
            if (next.has(key)) {
                next.delete(key);
            } else {
                next.add(key);
            }
            return next;
        });
    }, []);

    const handleLinkClick = useCallback(() => {
        if (menuOpen) {
            toggleMenu();
        }
    }, [menuOpen, toggleMenu]);


    return (
        <header id="ui-header">
            <div className="ui-header-inner container-fluid">
                <div className="ui-header-col">
                    <div className="ui-logo">
                        <Link href="/">
                            <img src="/media/logoStudent (1).png" className="ui-logo-light" alt="Logo" />
                            <img src="/media/logoStudent (1).png" className="ui-logo-dark" alt="Logo" />
                        </Link>
                    </div>
                </div>

                <div className="ui-header-col">
                    <nav className="ui-overlay-menu ui-ol-menu-center ui-ol-menu-count" ref={overlayRef}>
                        <div className="ui-ol-menu-holder">
                            <div className="ui-ol-menu-inner ui-wrap">
                                <div>
                                    <div className="container-fluid">
                                        <div className="ui-ol-menu-content">
                                            <ul className="ui-ol-menu-list" ref={menuListRef}>
                                                {menuItems.map((item, i) => {
                                                    const key = `menu-${i}`;
                                                    return (
                                                        <li key={key}>
                                                            <Link href={item.href} onClick={handleLinkClick}>{item.label}</Link>
                                                        </li>
                                                    );
                                                })}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>

                    <div className="ui-header-tools">
                        <div id="ui-ol-menu-toggle-btn-wrap">
                            <div className="ui-ol-menu-toggle-btn-holder">
                                <a href="#" className="ui-ol-menu-toggle-btn" onClick={(e) => { e.preventDefault(); toggleMenu(); }}>
                                    <span></span>
                                </a>
                            </div>
                            <div className="ui-ol-menu-toggle-btn-text" onClick={(e) => { e.preventDefault(); toggleMenu(); }} style={{ cursor: 'pointer' }}>
                                <span className="text-menu h6 color-white" data-hover="МЕНЮ">МЕНЮ</span>
                                <span className="text-close h6">ЗАКРЫТЬ</span>
                            </div>
                        </div>
                        <div className="ui-btn ui-btn-primary hide-on-mobile">
                            <Link href="/tours/booking" data-hover="ЗАБРОНИРОВАТЬ">ЗАБРОНИРОВАТЬ</Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
