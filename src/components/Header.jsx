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
                            <span className="text-menu h6 color-white" data-hover="OPEN">MENU</span>
                            <span className="text-close h6">CLOSE</span>
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
                                                <li><Link to="/">Home</Link></li>
                                                <li><Link to="/about">About Us</Link></li>

                                                {/* Tours submenu */}
                                                <li className="ui-ol-submenu-wrap">
                                                    <div className={`ui-ol-submenu-trigger${openSubmenus.tours ? ' ui-ol-submenu-open' : ''}`}>
                                                        <a href="#" onClick={(e) => toggleSubmenu('tours', e)}>Tours</a>
                                                        <div className="ui-ol-submenu-caret-wrap" onClick={(e) => toggleSubmenu('tours', e)}>
                                                            <div className="ui-ol-submenu-caret"></div>
                                                        </div>
                                                    </div>
                                                    <div className="ui-ol-submenu" style={{ display: openSubmenus.tours ? 'block' : 'none' }}>
                                                        <ul className="ui-ol-submenu-list">
                                                            <li className="ui-ol-submenu-wrap">
                                                                <div className={`ui-ol-submenu-trigger${openSubmenus.tourLists ? ' ui-ol-submenu-open' : ''}`}>
                                                                    <a href="#" className="ui-ol-submenu-link" onClick={(e) => toggleSubmenu('tourLists', e)}>Tour Lists</a>
                                                                    <div className="ui-ol-submenu-caret-wrap" onClick={(e) => toggleSubmenu('tourLists', e)}>
                                                                        <div className="ui-ol-submenu-caret"></div>
                                                                    </div>
                                                                </div>
                                                                <div className="ui-ol-submenu" style={{ display: openSubmenus.tourLists ? 'block' : 'none' }}>
                                                                    <ul className="ui-ol-submenu-list">
                                                                        <li><Link to="/tours">Tour Grid</Link></li>
                                                                        <li><Link to="/tours/left-sidebar">Tour Grid (Sidebar Left)</Link></li>
                                                                        <li><Link to="/tours/right-sidebar">Tour Grid (Sidebar Right)</Link></li>
                                                                    </ul>
                                                                </div>
                                                            </li>
                                                            <li className="ui-ol-submenu-wrap">
                                                                <div className={`ui-ol-submenu-trigger${openSubmenus.tourDetail ? ' ui-ol-submenu-open' : ''}`}>
                                                                    <a href="#" className="ui-ol-submenu-link" onClick={(e) => toggleSubmenu('tourDetail', e)}>Tour detail</a>
                                                                    <div className="ui-ol-submenu-caret-wrap" onClick={(e) => toggleSubmenu('tourDetail', e)}>
                                                                        <div className="ui-ol-submenu-caret"></div>
                                                                    </div>
                                                                </div>
                                                                <div className="ui-ol-submenu" style={{ display: openSubmenus.tourDetail ? 'block' : 'none' }}>
                                                                    <ul className="ui-ol-submenu-list">
                                                                        <li><Link to="/tour-detail">Tour Detail</Link></li>
                                                                        <li><Link to="/tour-detail-sidebar">Tour Detail(Sidebar)</Link></li>
                                                                    </ul>
                                                                </div>
                                                            </li>
                                                            <li><Link to="/booking">Tour Booking</Link></li>
                                                        </ul>
                                                    </div>
                                                </li>

                                                {/* Blogs submenu */}
                                                <li className="ui-ol-submenu-wrap">
                                                    <div className={`ui-ol-submenu-trigger${openSubmenus.blogs ? ' ui-ol-submenu-open' : ''}`}>
                                                        <a href="#" onClick={(e) => toggleSubmenu('blogs', e)}>Blogs</a>
                                                        <div className="ui-ol-submenu-caret-wrap" onClick={(e) => toggleSubmenu('blogs', e)}>
                                                            <div className="ui-ol-submenu-caret"></div>
                                                        </div>
                                                    </div>
                                                    <div className="ui-ol-submenu" style={{ display: openSubmenus.blogs ? 'block' : 'none' }}>
                                                        <ul className="ui-ol-submenu-list">
                                                            <li><Link to="/blog">Blog Grid</Link></li>
                                                            <li><Link to="/blog/left-sidebar">Blog Grid (Sidebar Left)</Link></li>
                                                            <li><Link to="/blog/right-sidebar">Blog Grid (Sidebar Right)</Link></li>
                                                            <li><Link to="/blog-detail">Blog Detail</Link></li>
                                                        </ul>
                                                    </div>
                                                </li>

                                                <li><Link to="/account">Account</Link></li>
                                                <li><Link to="/contact">Contact</Link></li>
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
                            <Link to="/booking" data-hover="BOOK NOW">BOOK NOW</Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
