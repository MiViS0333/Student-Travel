import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Preloader from '../components/Preloader'
import SearchPopup from '../components/SearchPopup'

const testimonials = [
    { user: 'user_1.png', name: 'Julia Fernandez' },
    { user: 'user_2.png', name: 'Henry Patel' },
    { user: 'user_3.png', name: 'Beckham Dsilva' },
    { user: 'user_4.png', name: 'Rouge Redstar' },
    { user: 'user_1.png', name: 'Julia Fernandez' },
]

const galleryImages = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6]

export default function AboutPage() {
    const videoRef = useRef(null)

    useEffect(() => {
        const gsap = window.gsap
        const ScrollTrigger = window.ScrollTrigger
        const ScrollSmoother = window.ScrollSmoother
        if (!gsap || !ScrollTrigger || !ScrollSmoother) return

        gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
        let smoother
        if (window.innerWidth > 124) {
            smoother = ScrollSmoother.create({
                wrapper: '#scroll-wrapper',
                content: '#smooth-content',
                smooth: 2, effects: true, smoothTouch: 1,
            })
            smoother.scrollTo(0)
        }

        // About 1 animation
        if (document.querySelector('.about-trigger-1')) {
            const anim1 = gsap.timeline({ default: { ease: 'power2.inOut' } })
            anim1.to('.about-1 .images-area .v-4', { rotation: 21, duration: 0.3 })
            anim1.to('.about-1 .images-area .v-3', { x: '0', duration: 0.3 }, '<')
            anim1.to('.about-1 .images-area .v-3', { rotation: 15, duration: 0.3 })
            anim1.to('.about-1 .images-area .v-2', { x: '0' }, '<')
            anim1.to('.about-1 .images-area .v-2', { rotation: 7, duration: 0.3 })
            anim1.to('.about-1 .images-area .v-1', { x: '0', duration: 0.3 }, '<')
            anim1.to('.about-1 .images-area .v-1', { rotation: 2, duration: 0.3 })
            ScrollTrigger.create({ trigger: '.about-trigger-1', scrub: true, pin: true, start: 'top top', end: '+=300%', animation: anim1 })
        }

        // About 2 animation
        if (document.querySelector('.about-trigger-2')) {
            const anim2 = gsap.timeline({ default: { ease: 'power2.inOut' } })
            anim2.to('.about-2 .images-area .v-4', { rotation: -21, duration: 0.3 })
            anim2.to('.about-2 .images-area .v-3', { x: '0', duration: 0.3 }, '<')
            anim2.to('.about-2 .images-area .v-3', { rotation: -15, duration: 0.3 })
            anim2.to('.about-2 .images-area .v-2', { x: '0' }, '<')
            anim2.to('.about-2 .images-area .v-2', { rotation: -7, duration: 0.3 })
            anim2.to('.about-2 .images-area .v-1', { x: '0', duration: 0.3 }, '<')
            anim2.to('.about-2 .images-area .v-1', { rotation: -2, duration: 0.3 })
            ScrollTrigger.create({ trigger: '.about-trigger-2', scrub: true, pin: true, start: 'top top', end: '+=300%', animation: anim2 })
        }

        // Auto-play video
        if (videoRef.current) {
            videoRef.current.play().catch(() => { })
        }

        return () => {
            ScrollTrigger.getAll().forEach(t => t.kill())
            if (smoother) smoother.kill()
        }
    }, [])

    const testimonialSettings = {
        speed: 800, lazyLoad: 'progressive', arrows: false, infinite: true, dots: true, autoplay: true,
        slidesToShow: 4, slidesToScroll: 1,
        responsive: [
            { breakpoint: 1399, settings: { slidesToShow: 3 } },
            { breakpoint: 1199, settings: { slidesToShow: 2 } },
            { breakpoint: 650, settings: { slidesToShow: 1 } },
        ],
    }

    const gallerySettings = {
        slidesToShow: 6, arrows: false, dots: false, infinite: true, autoplay: true,
        cssEase: 'linear', autoplaySpeed: 0, speed: 6000, pauseOnFocus: false, pauseOnHover: false,
        responsive: [
            { breakpoint: 1399, settings: { slidesToShow: 5 } },
            { breakpoint: 1199, settings: { slidesToShow: 4 } },
            { breakpoint: 992, settings: { slidesToShow: 3 } },
            { breakpoint: 600, settings: { slidesToShow: 3 } },
            { breakpoint: 492, settings: { slidesToShow: 2 } },
            { breakpoint: 340, settings: { slidesToShow: 1 } },
        ],
    }

    return (
        <>
            <Preloader />
            <div id="scroll-wrapper">
                <div id="smooth-content">
                    <main>
                        <Header />

                        {/* Page Header */}
                        <section className="page-header">
                            <h1 className="color-white">ABOUT US</h1>
                        </section>

                        {/* About Section 1 */}
                        <section className="about-features-1 about-trigger-1 position-relative z-2">
                            <div className="about-1">
                                <div className="container-fluid">
                                    <div className="all-content">
                                        <div className="row align-items-center">
                                            <div className="col-xl-6 col-md-7">
                                                <div className="text-block text-md-start text-center">
                                                    <h3 className="mb-8 font-sec color-primary">about us :</h3>
                                                    <h2 className="mb-24">WHERE PASSION<br /> MEETS ADVENTURE,<br /> FUELING YOUR<br /> WANDERLUST DESIRES</h2>
                                                    <p>Lorem ipsum dolor sit amet consectetur. Aliquam in neque eleifend placerat scelerisque tincidunt erat porttitor. Sed sed in suscipit lorem. Ut felis velit tristique posuere tellus sed. Arcu convallis nam massa leo viverra volutpat facilisis. Nulla sagittis nam pellentesque sagittis in turpis nulla et.</p>
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-md-5">
                                                <div className="images-area">
                                                    <div className="images-block">
                                                        {[1, 2, 3, 4].map(n => (
                                                            <div key={n} className={`about-img-card box-blur-bg v-${n}`}>
                                                                <img src={`/assets/media/about/about-img-${n}.png`} alt="" className="b-radius-20" />
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* About Section 2 */}
                        <section className="about-features-2 about-trigger-2 position-relative z-2">
                            <div className="about-2">
                                <div className="container-fluid">
                                    <div className="all-content">
                                        <div className="row align-items-center">
                                            <div className="col-xl-6 col-md-7 order-md-2">
                                                <div className="text-block text-md-start text-center">
                                                    <h3 className="mb-8 font-sec color-primary">about us :</h3>
                                                    <h2 className="mb-24">WE WANT TO GIVE THE BEST TOURS</h2>
                                                    <p>Lorem ipsum dolor sit amet consectetur. Aliquam in neque eleifend placerat scelerisque tincidunt erat porttitor. Sed sed in suscipit lorem. Ut felis velit tristique posuere tellus sed. Arcu convallis nam massa leo viverra volutpat facilisis. Nulla sagittis nam pellentesque sagittis in turpis nulla et. Lorem ipsum dolor sit amet consectetur. Aliquam in neque eleifend placerat scelerisque tincidunt erat porttitor. Sed sed in suscipit lorem. Ut felis velit tristique posuere tellus sed. Arcu convallis nam massa leo viverra volutpat facilisis. Nulla sagittis nam pellentesque sagittis in turpis nulla et.</p>
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-md-5 order-md-1">
                                                <div className="images-area">
                                                    <div className="images-block">
                                                        {[1, 2, 3, 4].map(n => (
                                                            <div key={n} className={`about-img-card box-blur-bg v-${n}`}>
                                                                <img src={`/assets/media/about/about-img-${n}.png`} alt="" className="b-radius-20" />
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Video Area */}
                        <div className="py-64">
                            <div className="container-fluid">
                                <div className="box-blur-bg">
                                    <div className="bg-video b-radius-20">
                                        <video ref={videoRef} id="videoPlayer" loop playsInline muted>
                                            <source src="/assets/media/inner-banner-video.mp4" type="video/mp4" />
                                        </video>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Testimonials */}
                        <section className="py-64">
                            <div className="container-fluid">
                                <div className="heading mb-48">
                                    <h3 className="font-sec color-primary">testimonials :</h3>
                                    <h2>WHAT PEOPLE SAY ABOUT US!</h2>
                                </div>
                                <Slider {...testimonialSettings} className="testimonials-slider">
                                    {testimonials.map((t, idx) => (
                                        <div key={idx}>
                                            <div className="testimonial-card mb-32 box-blur-bg">
                                                <div className="content b-radius-20">
                                                    <img src="/assets/media/icons/comment.png" alt="" className="mb-16 comment-icon" />
                                                    <div className="review">
                                                        <p>Lorem ipsum dolor sit amet consectetur. Aliquam in neque eleifend placerat scelerisque tincidunt erat porttitor. Sed sed in suscipit lorem. Ut felis velit tristique posuere tellus sed. Arcu convallis nam massa leo viverra volutpat facilisis. Nulla sagittis nam pellentesque sagittis in turpis nulla et.</p>
                                                        <div className="reviewer">
                                                            <img src={`/assets/media/users/${t.user}`} alt="" className="reviewer-img" />
                                                            <div>
                                                                <h6 className="mb-4p">{t.name}</h6>
                                                                <div className="rating">
                                                                    {[...Array(5)].map((_, i) => <i key={i} className="fa-solid fa-star"></i>)}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </Slider>
                            </div>
                        </section>

                        {/* Gallery */}
                        <section className="py-64">
                            <div className="heading mb-48">
                                <h3 className="font-sec color-primary">instagram :</h3>
                                <h2>TRAVEL GALLERIES</h2>
                            </div>
                            <Slider {...gallerySettings} className="gallery-slider">
                                {galleryImages.map((num, idx) => (
                                    <a key={idx} href="#" className="gallery-img-block">
                                        <img src={`/assets/media/gallery/gallery_${num}.png`} alt="" />
                                    </a>
                                ))}
                            </Slider>
                        </section>

                        <Footer />
                    </main>
                </div>
            </div>
            <SearchPopup />
        </>
    )
}
