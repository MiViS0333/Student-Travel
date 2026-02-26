import React, { useEffect, useRef } from 'react'
import PageLayout from '../components/PageLayout'
import { Link } from 'react-router-dom'

export default function TourDetailPage() {
    const sidebarRef = useRef(null)
    const contentRef = useRef(null)

    useEffect(() => {
        const gsap = window.gsap
        const ScrollTrigger = window.ScrollTrigger

        if (!gsap || !ScrollTrigger || !sidebarRef.current) return

        let mm = gsap.matchMedia()

        mm.add("(min-width: 992px)", () => {
            ScrollTrigger.create({
                trigger: sidebarRef.current,
                start: "top 100px",
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

    return (
        <PageLayout>
            <section className="page-header">
                <h1 className="color-white">ДЕТАЛИ ТУРА</h1>
            </section>
            <section className="position-relative z-2 py-64" ref={contentRef}>
                <div className="container-fluid">
                    <div className="row align-items-start">
                        <div className="col-lg-8">
                            <div className="box-blur-bg mb-32">
                                <img src="/assets/media/tour/tour_destination_1.png" alt="" className="b-radius-20 w-100" />
                            </div>
                            <h2 className="mb-16">Спокойный отдых на берегу озера</h2>
                            <div className="info-detail mb-24">
                                <ul className="unstyled">
                                    <li><i className="fa-light fa-location-crosshairs"></i><p>Национальный парк Банф, Канада</p></li>
                                    <li><i className="fa-solid fa-period dot"></i></li>
                                    <li><i className="fa-light fa-calendar"></i><p>6 дней</p></li>
                                    <li><i className="fa-solid fa-period dot"></i></li>
                                    <li><i className="fa-light fa-user"></i><p>6 человек</p></li>
                                </ul>
                            </div>
                            <p className="mb-24">Мы верим, что каждое путешествие — это уникальная история, которую стоит прожить. Наша команда стремится сделать ваш отдых не просто поездкой, а настоящим приключением, наполненным яркими эмоциями и незабываемыми открытиями. Мы заботимся о каждой детали, чтобы вы могли полностью погрузиться в атмосферу новых мест и наслаждаться каждым моментом своего отпуска.</p>

                            <h4 className="mb-24">Преимущества тура</h4>
                            <div className="row mb-32">
                                <div className="col-md-4 mb-16">
                                    <div className="tour-advantage-card">
                                        <i className="fa-light fa-mountain-sun advantage-icon"></i>
                                        <h6>Лучшие виды</h6>
                                        <p className="mb-0">Панорамные виды на горы и озера прямо из окон.</p>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-16">
                                    <div className="tour-advantage-card">
                                        <i className="fa-light fa-shield-check advantage-icon"></i>
                                        <h6>Безопасность</h6>
                                        <p className="mb-0">Личное сопровождение и страховка включены.</p>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-16">
                                    <div className="tour-advantage-card">
                                        <i className="fa-light fa-utensils advantage-icon"></i>
                                        <h6>Всё включено</h6>
                                        <p className="mb-0">Трехразовое питание от лучших шеф-поваров.</p>
                                    </div>
                                </div>
                            </div>

                            <p className="mb-24">Наша цель — предложить вам самые интересные и качественные туристические маршруты по всему миру. Мы тщательно отбираем направления и партнеров, чтобы гарантировать безопасность, комфорт и высокий уровень обслуживания на каждом этапе вашего пути.</p>

                            <div className="text-block text-start mb-48">
                                <h3 className="font-sec color-primary">программа :</h3>
                                <h2 className="mb-24">Программа тура</h2>
                            </div>
                            <div className="program-timeline mb-48">
                                <div className="program-step">
                                    <div className="program-step-dot"></div>
                                    <div className="program-step-content">
                                        <span className="program-step-number">День 01</span>
                                        <h5>Прибытие и размещение</h5>
                                        <p>Встреча в аэропорту, трансфер до отеля и приветственный ужин с видом на озеро в лучах заходящего солнца.</p>
                                    </div>
                                </div>
                                <div className="program-step">
                                    <div className="program-step-dot"></div>
                                    <div className="program-step-content">
                                        <span className="program-step-number">День 02</span>
                                        <h5>Горный поход к ледникам</h5>
                                        <p>Увлекательная прогулка по старинным горным тропам с профессиональным гидом, открывающим секреты природы.</p>
                                    </div>
                                </div>
                                <div className="program-step">
                                    <div className="program-step-dot"></div>
                                    <div className="program-step-content">
                                        <span className="program-step-number">День 03</span>
                                        <h5>День отдыха и спа</h5>
                                        <p>Насладитесь абсолютным спокойствием природы или посетите эксклюзивный спа-центр нашего отеля для полного релакса.</p>
                                    </div>
                                </div>
                                <div className="program-step">
                                    <div className="program-step-dot"></div>
                                    <div className="program-step-content">
                                        <span className="program-step-number">День 04</span>
                                        <h5>Водная прогулка на катере</h5>
                                        <p>Исследование самых потаенных и живописных уголков озера на комфортабельном катере VIP-класса.</p>
                                    </div>
                                </div>
                            </div>

                            <h4 className="mb-16">Основные моменты</h4>
                            <ul className="mb-24">
                                <li>Захватывающие горные пейзажи</li>
                                <li>Кристально чистые озерные воды</li>
                                <li>Профессиональные гиды</li>
                                <li>Комфортное проживание</li>
                                <li>Знакомство с местной кухней</li>
                            </ul>
                        </div>
                        <div className="col-lg-4">
                            <div className="sticky-sidebar" ref={sidebarRef}>
                                <div className="box-blur-bg mb-32">
                                    <div className="b-radius-20 bg-white p-4">
                                        <h4 className="mb-16">Забронировать этот тур</h4>
                                        <h2 className="color-primary mb-24">$5000</h2>
                                        <div className="ui-btn ui-btn-primary w-100 text-center">
                                            <Link to="/booking" data-hover="ЗАБРОНИРОВАТЬ">ЗАБРОНИРОВАТЬ</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </PageLayout>
    )
}
