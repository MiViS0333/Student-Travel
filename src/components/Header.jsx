import React, { useState, useRef, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false)
    const [openSubmenus, setOpenSubmenus] = useState({})
    const location = useLocation()

    useEffect(() => {
        // Close menu on navigation
        setMenuOpen(false)
        setOpenSubmenus({})
        document.documentElement.classList.remove('ui-no-scroll')
        document.body.classList.remove('ui-ol-menu-open')
    }, [location.pathname])

    const toggleMenu = (e) => {
        e.preventDefault()
        setMenuOpen(prev => !prev)
        document.documentElement.classList.toggle('ui-no-scroll')
        document.body.classList.toggle('ui-ol-menu-open')

        if (!document.body.classList.contains('ui-ol-menu-open')) {
            // Menu closing - animate out with GSAP
            if (window.gsap) {
                const tl = window.gsap.timeline()
                tl.to('.ui-ol-menu-list > li', {
                    duration: 0.4, y: -80, autoAlpha: 0, stagger: 0.05, ease: 'power2.in'
                })
                tl.to('.ui-overlay-menu', {
                    duration: 0.4, autoAlpha: 0, clearProps: 'all'
                }, '+=0.2')
                tl.set('.ui-ol-menu-list > li', { clearProps: 'all' })
            }
            setTimeout(() => setOpenSubmenus({}), 500)
        } else {
            // Menu opening - animate in
            if (window.gsap) {
                const tl = window.gsap.timeline()
                tl.to('.ui-overlay-menu', { duration: 0.4, autoAlpha: 1 })
                tl.from('.ui-ol-menu-list > li', {
                    duration: 0.4, y: 80, autoAlpha: 0, stagger: 0.05,
                    ease: 'power2.out', clearProps: 'all'
                })
            }
        }
    }

    const toggleSubmenu = (key, e) => {
        e.preventDefault()
        setOpenSubmenus(prev => ({ ...prev, [key]: !prev[key] }))
    }

    const handleSearchClick = (e) => {
        e.preventDefault()
        if (window.__searchToggle) window.__searchToggle()
    }

    return (
        <header id="ui-header">
            <div className="ui-header-inner container-fluid">
                <div className="ui-header-col">
                    <div className="ui-logo">
                        <Link to="/">
                            <img src="/assets/media/logo.png" className="ui-logo-light" alt="Logo" />
                            <img src="/assets/media/logo-dark.png" className="ui-logo-dark" alt="Logo" />
                        </Link>
                    </div>
                </div>
                <div className="ui-header-col">
                    <div id="ui-ol-menu-toggle-btn-wrap">
                        <div className="ui-ol-menu-toggle-btn-holder">
                            <a href="#" className="ui-ol-menu-toggle-btn" onClick={toggleMenu}><span></span></a>
                        </div>
                        <div className="ui-ol-menu-toggle-btn-text" onClick={toggleMenu}>
                            <span className="text-menu h6 color-white" data-hover="ОТКРЫТЬ">МЕНЮ</span>
                            <span className="text-close h6">ЗАКРЫТЬ</span>
                        </div>
                    </div>
                </div>

                <div className="ui-header-col">
                    <nav className="ui-overlay-menu ui-ol-menu-center ui-ol-menu-count">
                        <div className="ui-ol-menu-holder">
                            <div className="ui-ol-menu-inner ui-wrap">
                                <div className="">
                                    <div className="container-fluid">
                                        <div className="ui-ol-menu-content">
                                            <ul className="ui-ol-menu-list">
                                                <li><Link to="/">Главная</Link></li>
                                                <li><Link to="/about">О нас</Link></li>

                                                {/* Tours link */}
                                                <li><Link to="/tours">Туры</Link></li>

                                                {/* Blogs link */}
                                                <li><Link to="/blog/left-sidebar">Блоги</Link></li>

                                                <li><Link to="/account">Личный кабинет</Link></li>
                                                <li><Link to="/contact">Контакты</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>

                    <div className="ui-header-tools">
                        <a href="#" className="ui-header-tools-item search-toggler" onClick={handleSearchClick}>
                            <i className="fa-regular fa-magnifying-glass"></i>
                        </a>
                        <Link to="/account" className="ui-header-tools-item">
                            <i className="fa-regular fa-user"></i>
                        </Link>
                        <div className="ui-btn ui-btn-primary hide-on-mobile">
                            <Link to="/booking" data-hover="ЗАБРОНИРОВАТЬ">ЗАБРОНИРОВАТЬ</Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
