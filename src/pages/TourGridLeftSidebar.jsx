import React, { useState, useMemo, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import PageLayout from '../components/PageLayout'
import { Link } from 'react-router-dom'
import CustomSelect from '../components/CustomSelect'
import './TourGridLeftSidebar.css'

const TOURS_DATA = [
    { id: 1, title: 'Банф, Канада', price: 5000, category: 'Приключения', duration: '6 Дней', persons: 6, image: 1, hit: true, relevance: 98 },
    { id: 2, title: 'Гранд-Каньон, США', price: 3500, category: 'Культура', duration: '4 Дня', persons: 4, image: 2, hit: false, relevance: 95 },
    { id: 3, title: 'Мальдивы, Пляж', price: 7000, category: 'Пляжный', duration: '7 Дней', persons: 2, image: 3, hit: true, relevance: 99 },
    { id: 4, title: 'Альпы, Релакс', price: 4200, category: 'Отдых', duration: '5 Дней', persons: 2, image: 4, hit: false, relevance: 88 },
    { id: 5, title: 'Париж, Романтика', price: 6000, category: 'Романтика', duration: '3 Дня', persons: 2, image: 1, hit: true, relevance: 92 },
    { id: 6, title: 'Киото, Культура', price: 4800, category: 'Культура', duration: '8 Дней', persons: 1, image: 2, hit: false, relevance: 90 },
    { id: 7, title: 'Исландия, Приключения', price: 8500, category: 'Приключения', duration: '10 Дней', persons: 4, image: 3, hit: true, relevance: 97 },
    { id: 8, title: 'Бали, Релакс', price: 3200, category: 'Отдых', duration: '14 Дней', persons: 2, image: 4, hit: true, relevance: 94 },
]

export default function TourGridLeftSidebar() {
    const [selectedCategory, setSelectedCategory] = useState('Все')
    const [maxPrice, setMaxPrice] = useState(10000)
    const [sortBy, setSortBy] = useState('relevance')
    const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false)
    const [mounted, setMounted] = useState(false)

    const sidebarRef = useRef(null)
    const contentRef = useRef(null)

    useEffect(() => {
        setMounted(true)
    }, [])

    useEffect(() => {
        if (isMobileFilterOpen) {
            document.body.classList.add('no-scroll')
        } else {
            document.body.classList.remove('no-scroll')
        }
        return () => document.body.classList.remove('no-scroll')
    }, [isMobileFilterOpen])

    useEffect(() => {
        const gsap = window.gsap
        const ScrollTrigger = window.ScrollTrigger

        if (!gsap || !ScrollTrigger || !sidebarRef.current) return

        gsap.registerPlugin(ScrollTrigger)

        let mm = gsap.matchMedia()

        mm.add("(min-width: 992px)", () => {
            ScrollTrigger.create({
                trigger: sidebarRef.current,
                start: "top 0",
                endTrigger: contentRef.current,
                end: "bottom bottom",
                pin: true,
                pinSpacing: false,
                invalidateOnRefresh: true
            })
        })

        return () => {
            mm.revert()
        }
    }, [])

    const categories = ['Все', 'Приключения', 'Культура', 'Пляжный', 'Отдых', 'Романтика']

    const filteredTours = useMemo(() => {
        let result = TOURS_DATA.filter(tour => {
            const matchCategory = selectedCategory === 'Все' || tour.category === selectedCategory
            const matchPrice = tour.price <= maxPrice
            return matchCategory && matchPrice
        })

        if (sortBy === 'price-asc') {
            result.sort((a, b) => a.price - b.price)
        } else if (sortBy === 'price-desc') {
            result.sort((a, b) => b.price - a.price)
        } else if (sortBy === 'hits') {
            result.sort((a, b) => (b.hit ? 1 : 0) - (a.hit ? 1 : 0))
        } else {
            result.sort((a, b) => b.relevance - a.relevance)
        }

        return result
    }, [selectedCategory, maxPrice, sortBy])

    return (
        <PageLayout>
            <section className="page-header">
                <h1 className="color-white">Туры</h1>
            </section>
            <section className="position-relative z-2 py-64" ref={contentRef}>
                <div className="container-fluid">
                    <div className="row align-items-stretch">
                        {mounted && createPortal(
                            <>
                                <div className={`mobile-filter-overlay d-lg-none ${isMobileFilterOpen ? 'mobile-open' : ''}`} onClick={() => setIsMobileFilterOpen(false)}></div>
                                <div className={`d-lg-none filter-sidebar-wrapper ${isMobileFilterOpen ? 'mobile-open' : ''}`}>
                                    <div className="mobile-filter-header d-lg-none mb-24 d-flex justify-content-between align-items-center">
                                        <h5 className="mb-0">Фильтры</h5>
                                        <button type="button" className="btn-close" aria-label="Close" onClick={() => setIsMobileFilterOpen(false)} style={{ fontSize: '1.2rem' }}></button>
                                    </div>
                                    <div className="sidebar-widget mb-32">
                                        <div className="widget-title-row"><h6>КАТЕГОРИИ</h6><i className="fa-light fa-horizontal-rule"></i></div>
                                        <div className="widget-content-block">
                                            <ul className="unstyled item-list mobile-category-list">
                                                {categories.map(cat => (
                                                    <li key={cat}>
                                                        <a href="#"
                                                            className={selectedCategory === cat ? 'color-primary fw-bold' : ''}
                                                            onClick={(e) => { e.preventDefault(); setSelectedCategory(cat) }}>
                                                            {cat}
                                                        </a>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="sidebar-widget mb-32">
                                        <div className="widget-title-row"><h6>ЦЕНОВОЙ ДИАПАЗОН</h6><i className="fa-light fa-horizontal-rule"></i></div>
                                        <div className="widget-content-block">
                                            <div className="price-filter">
                                                <input
                                                    type="range"
                                                    className="w-100"
                                                    min="0"
                                                    max="10000"
                                                    step="100"
                                                    value={maxPrice}
                                                    onChange={(e) => setMaxPrice(parseInt(e.target.value))}
                                                />
                                                <div className="d-flex justify-content-between mt-8">
                                                    <span>$0</span>
                                                    <span className="color-primary fw-bold">${maxPrice}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>,
                            document.body
                        )}
                        <div className="col-lg-3 d-none d-lg-block">
                            <div className="sticky-sidebar glass-panel p-24" ref={sidebarRef}>
                                <div className="sidebar-widget mb-32">
                                    <div className="widget-title-row"><h6>КАТЕГОРИИ</h6><i className="fa-light fa-horizontal-rule"></i></div>
                                    <div className="widget-content-block">
                                        <ul className="unstyled item-list">
                                            {categories.map(cat => (
                                                <li key={cat}>
                                                    <a href="#"
                                                        className={selectedCategory === cat ? 'color-primary fw-bold' : ''}
                                                        onClick={(e) => { e.preventDefault(); setSelectedCategory(cat) }}>
                                                        {cat}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <div className="sidebar-widget mb-32">
                                    <div className="widget-title-row"><h6>ЦЕНОВОЙ ДИАПАЗОН</h6><i className="fa-light fa-horizontal-rule"></i></div>
                                    <div className="widget-content-block">
                                        <div className="price-filter">
                                            <input
                                                type="range"
                                                className="w-100"
                                                min="0"
                                                max="10000"
                                                step="100"
                                                value={maxPrice}
                                                onChange={(e) => setMaxPrice(parseInt(e.target.value))}
                                            />
                                            <div className="d-flex justify-content-between mt-8">
                                                <span>$0</span>
                                                <span className="color-primary fw-bold">${maxPrice}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <div className="heading mb-16">
                                <h3 className="font-sec color-primary">список туров :</h3>
                                <h2>ЛУЧШИЕ ТУРЫ ДЛЯ ВАС</h2>
                            </div>
                            <div className="d-flex justify-content-between align-items-center mb-24">
                                <button className="d-lg-none d-flex align-items-center justify-content-center gap-8" onClick={() => setIsMobileFilterOpen(true)} style={{ background: 'var(--color-primary)', color: '#0d0d0c', border: 'none', borderRadius: '12px', padding: '12px 20px', fontWeight: '600', height: '100%' }}>
                                    <i className="fa-light fa-sliders"></i> Фильтры
                                </button>
                                <div className="grid-sort-panel d-flex align-items-center gap-12 py-4 px-12 ms-auto">
                                    <span className="h6 mb-0 text-muted white-space-nowrap d-none d-sm-block">Сортировка:</span>
                                    <div style={{ width: '230px' }} className="sort-select-mobile">
                                        <CustomSelect
                                            name="sortBy"
                                            options={[
                                                { label: 'По актуальности', value: 'relevance' },
                                                { label: 'Сначала дешевые', value: 'price-asc' },
                                                { label: 'Сначала дорогие', value: 'price-desc' },
                                            ]}
                                            value={sortBy}
                                            onChange={(e) => setSortBy(e.target.value)}
                                            placeholder="Сортировка"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="row mb-16">
                                {filteredTours.length > 0 ? filteredTours.map((tour) => (
                                    <div key={tour.id} className="col-lg-4 col-sm-6">
                                        <div className="tour-card mb-32">
                                            <Link to="/tour-detail" className="image-box">
                                                <img src={`/assets/media/tour/tour_${tour.image}.png`} alt={tour.title} className="tour-img" />
                                                <div className="wishlist-icon"><i className="fa-light fa-heart"></i></div>
                                            </Link>
                                            <div className="card-info">
                                                <Link to="/tour-detail" className="h5">{tour.title}</Link>
                                                <div className="location"><i className="fa-light fa-location-crosshairs"></i><h6>{tour.category}</h6></div>
                                                <div className="info-detail">
                                                    <ul className="unstyled">
                                                        <li><i className="fa-light fa-calendar"></i><p>{tour.duration}</p></li>
                                                        <li><i className="fa-solid fa-period dot"></i></li>
                                                        <li><i className="fa-light fa-user"></i><p>{tour.persons} чел.</p></li>
                                                    </ul>
                                                    <div className="right-block">
                                                        <h6>${tour.price}</h6>
                                                        <Link to="/tour-detail" className="ui-link-arrow"><i className="fa-light fa-arrow-right arrow"></i></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )) : (
                                    <div className="col-12 text-center py-64">
                                        <h4>Туры не найдены</h4>
                                        <p>Попробуйте изменить параметры фильтрации</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </PageLayout>
    )
}
