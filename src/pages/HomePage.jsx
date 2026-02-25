import React, { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Preloader from '../components/Preloader'
import SearchPopup from '../components/SearchPopup'
import CustomSelect from '../components/CustomSelect'
import samarkandImg from '../assets/Img/samarkand.png'
import chimganImg from '../assets/Img/chimgan.png'
import charvakImg from '../assets/Img/charvak.png'

// Tour card data
const tours = [
    { img: 'tour_1.png', title: 'Serene Lakeside Escapes', location: 'Banf National Park, Canada', days: '6 Days', persons: '6 Person', price: '$5000' },
    { img: 'tour_2.png', title: 'Hidden Lake Gems', location: 'Banf National Park, Canada', days: '6 Days', persons: '6 Person', price: '$5000' },
    { img: 'tour_3.png', title: 'Pristine Natural Waters', location: 'Banf National Park, Canada', days: '6 Days', persons: '6 Person', price: '$5000' },
    { img: 'tour_4.png', title: 'Mystical Blue Horizons', location: 'Banf National Park, Canada', days: '6 Days', persons: '6 Person', price: '$5000' },
]

const testimonials = [
    { user: 'user_1.png', name: 'Julia Fernandez' },
    { user: 'user_2.png', name: 'Henry Patel' },
    { user: 'user_3.png', name: 'Beckham Dsilva' },
    { user: 'user_4.png', name: 'Rouge Redstar' },
    { user: 'user_1.png', name: 'Julia Fernandez' },
]

const blogs = [
    { img: 'blog_1.png', title: 'Perfect Outdoor Picnic Ideas', author: 'Julia Fernandez', authorImg: 'author.png' },
    { img: 'blog_2.png', title: 'Ultimate Guide to Picnicking', author: 'Carlos Taylor', authorImg: 'author-2.png' },
    { img: 'blog_3.png', title: 'Best Picnic Spots Worldwide', author: 'Julia Fernandez', authorImg: 'author.png' },
    { img: 'blog_4.png', title: 'Delicious Picnic Food Ideas', author: 'Julia Fernandez', authorImg: 'author.png' },
    { img: 'blog_2.png', title: 'Ultimate Guide to Picnicking', author: 'Carlos Taylor', authorImg: 'author-2.png' },
]

const galleryImages = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6]

const locationOptions = [
    { label: 'Kyoto, Japan', value: 'kyoto' },
    { label: 'Bali, Indonesia', value: 'bali' },
    { label: 'Paris, France', value: 'paris' },
    { label: 'Hawaii, USA', value: 'hawaii' },
    { label: 'Rome, Italy', value: 'rome' },
]

const departureOptions = [
    { label: 'Mumbai, India', value: 'mumbai' },
    { label: 'Toronto, Canada', value: 'toronto' },
    { label: 'Rome, Italy', value: 'rome' },
    { label: 'Istanbul, Turkey', value: 'istanbul' },
    { label: 'Cairo, Egypt', value: 'cairo' },
    { label: 'Paris, France', value: 'paris' },
    { label: 'Beijing, China', value: 'beijing' },
]

const typeOptions = [
    { label: 'Adventure', value: 'adventure' },
    { label: 'Historical/Cultural', value: 'history' },
    { label: 'Beach', value: 'beach' },
    { label: 'Relaxation', value: 'relax' },
    { label: 'Romantic', value: 'romantic' },
]

export default function HomePage() {
    const [wishlist, setWishlist] = useState({})
    const [searchForm, setSearchForm] = useState({
        destination: '',
        departure: '',
        type: ''
    })
    const scrollWrapperRef = useRef(null)
    const smoothContentRef = useRef(null)

    const handleSearchChange = (e) => {
        const { name, value } = e.target
        setSearchForm(prev => ({ ...prev, [name]: value }))
    }

    const toggleWishlist = (idx, e) => {
        e.preventDefault()
        setWishlist(prev => ({ ...prev, [idx]: !prev[idx] }))
    }

    // GSAP effects
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
                smooth: 2,
                effects: true,
                smoothTouch: 1,
            })
            smoother.scrollTo(0)
        }

        // Banner parallax
        const heroEl = document.getElementById('hero')
        if (heroEl && heroEl.classList.contains('banner-content-parallax')) {
            const titleEl = document.querySelector('.banner-caption-title')
            if (titleEl && !titleEl.querySelector('.banner-title-parallax')) {
                const inner = titleEl.innerHTML
                titleEl.innerHTML = `<div class="banner-title-parallax">${inner}</div>`
            }

            gsap.timeline({
                scrollTrigger: {
                    trigger: '#hero',
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true,
                },
            }).to('.banner-title-parallax', { y: -40 }, 0)
        }

        // About 1 pin animation
        const aboutTrigger = document.querySelector('.about-trigger-1')
        if (aboutTrigger) {
            const sideAnimation1 = gsap.timeline({ default: { ease: 'power2.inOut' } })
            sideAnimation1.to('.about-1 .images-area .v-4', { rotation: 21, duration: 0.3 })
            sideAnimation1.to('.about-1 .images-area .v-3', { x: '0', duration: 0.3 }, '<')
            sideAnimation1.to('.about-1 .images-area .v-3', { rotation: 15, duration: 0.3 })
            sideAnimation1.to('.about-1 .images-area .v-2', { x: '0' }, '<')
            sideAnimation1.to('.about-1 .images-area .v-2', { rotation: 7, duration: 0.3 })
            sideAnimation1.to('.about-1 .images-area .v-1', { x: '0', duration: 0.3 }, '<')
            sideAnimation1.to('.about-1 .images-area .v-1', { rotation: 2, duration: 0.3 })

            ScrollTrigger.create({
                trigger: '.about-trigger-1',
                scrub: true,
                pin: true,
                markers: false,
                start: 'top top',
                end: '+=300%',
                animation: sideAnimation1,
            })
        }

        // Page header appear
        const phAppearEls = document.querySelectorAll('.ph-appear')
        if (phAppearEls.length) {
            gsap.from('.ph-appear', {
                duration: 2.0,
                y: 60,
                autoAlpha: 0,
                stagger: 0.3,
                ease: 'expo.out',
                clearProps: 'all',
                delay: 2.0,
            })
        }

        // Search bar entrance
        gsap.from('.find-banner-row', {
            duration: 1.5,
            y: 30,
            autoAlpha: 0,
            ease: 'back.out(1.7)',
            delay: 2.5
        })

        return () => {
            ScrollTrigger.getAll().forEach(t => t.kill())
            if (smoother) smoother.kill()
        }
    }, [])

    // Slider settings
    const testimonialSettings = {
        speed: 800,
        lazyLoad: 'progressive',
        arrows: false,
        infinite: true,
        dots: true,
        autoplay: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            { breakpoint: 1399, settings: { slidesToShow: 3 } },
            { breakpoint: 1199, settings: { slidesToShow: 2 } },
            { breakpoint: 650, settings: { slidesToShow: 1 } },
        ],
    }

    const blogSettings = {
        speed: 800,
        lazyLoad: 'progressive',
        arrows: false,
        infinite: true,
        dots: true,
        autoplay: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            { breakpoint: 1399, settings: { slidesToShow: 3 } },
            { breakpoint: 1199, settings: { slidesToShow: 2 } },
            { breakpoint: 650, settings: { slidesToShow: 1 } },
        ],
    }

    const gallerySettings = {
        slidesToShow: 6,
        arrows: false,
        dots: false,
        infinite: true,
        autoplay: true,
        cssEase: 'linear',
        autoplaySpeed: 0,
        speed: 6000,
        pauseOnFocus: false,
        pauseOnHover: false,
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
            <div id="scroll-wrapper" ref={scrollWrapperRef}>
                <div id="smooth-content" ref={smoothContentRef}>
                    <main>
                        <Header />

                        {/* Hero Section */}
                        <section className="hero-banner-1 banner-content-parallax" id="hero">
                            <div className="container-fluid">
                                <h1 className="title banner-caption-title ph-appear">TRAVEL</h1>
                                <div className="content">
                                    <div className="text-center sub-title">
                                        <h3 className="font-sec color-white">Доступно. Безопасно. Незабываемо.</h3>
                                    </div>
                                    <form action="/tours" onSubmit={(e) => { e.preventDefault(); console.log('Search:', searchForm); }}>
                                        <div className="find-banner-row glass-panel">
                                            <div className="form-group">
                                                <CustomSelect
                                                    name="destination"
                                                    options={locationOptions}
                                                    value={searchForm.destination}
                                                    onChange={handleSearchChange}
                                                    placeholder="Where to?"
                                                />
                                            </div>
                                            <div className="form-group">
                                                <CustomSelect
                                                    name="departure"
                                                    options={departureOptions}
                                                    value={searchForm.departure}
                                                    onChange={handleSearchChange}
                                                    placeholder="Select Departure"
                                                />
                                            </div>
                                            <div className="form-group">
                                                <CustomSelect
                                                    name="type"
                                                    options={typeOptions}
                                                    value={searchForm.type}
                                                    onChange={handleSearchChange}
                                                    placeholder="Select Type"
                                                />
                                            </div>
                                            <div className="ui-btn ui-btn-primary">
                                                <button type="submit" data-hover="FIND NOW">FIND NOW</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <img src="/assets/media/banner/mask-layer.png" alt="" className="mask-layer mask-layer-desktop" />
                            <img src="/assets/media/banner/tabmask.png" alt="" className="mask-layer mask-layer-tab" />
                            <img src="/assets/media/banner/mobilemask.png" alt="" className="mask-layer mask-layer-phone" />
                        </section>

                        <div className="about-trigger-1" id="page-content">
                            {/* About Section */}
                            <section className="about-features-1 about-1 position-relative z-2">
                                <div className="container-fluid">
                                    <div className="all-content">
                                        <div className="row align-items-center">
                                            <div className="col-xl-6 col-md-7">
                                                <div className="text-block text-md-start text-center">
                                                    <h3 className="mb-8 font-sec color-primary">about us :</h3>
                                                    <h2 className="mb-24">WHERE PASSION<br /> MEETS ADVENTURE,<br /> FUELING YOUR<br /> WANDERLUST DESIRES</h2>
                                                    <div className="ui-btn ui-btn-primary mx-auto ms-md-0">
                                                        <Link to="/about" data-hover="LEARN MORE">LEARN MORE</Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-md-5">
                                                <div className="images-area">
                                                    <div className="images-block">
                                                        <div className="about-img-card box-blur-bg v-1">
                                                            <img src="/assets/media/about/about-img-1.png" alt="" className="b-radius-20" />
                                                        </div>
                                                        <div className="about-img-card box-blur-bg v-2">
                                                            <img src="/assets/media/about/about-img-2.png" alt="" className="b-radius-20" />
                                                        </div>
                                                        <div className="about-img-card box-blur-bg v-3">
                                                            <img src="/assets/media/about/about-img-3.png" alt="" className="b-radius-20" />
                                                        </div>
                                                        <div className="about-img-card box-blur-bg v-4">
                                                            <img src="/assets/media/about/about-img-4.png" alt="" className="b-radius-20" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Tour List */}
                            <section className="position-relative z-2 py-64">
                                <div className="container-fluid">
                                    <div className="heading mb-48">
                                        <h3 className="font-sec color-primary">tour list :</h3>
                                        <h2>AWESOME TOURS FOR YOU</h2>
                                    </div>
                                    <div className="row mb-16">
                                        {tours.map((tour, idx) => (
                                            <div key={idx} className={`col-xxl-3 col-lg-4 col-sm-6${idx === 3 ? ' d-xxl-block d-lg-none' : ''}`}>
                                                <div className="tour-card mb-32">
                                                    <Link to="/tour-detail" className="image-box">
                                                        <img src={`/assets/media/tour/${tour.img}`} alt="" className="tour-img" />
                                                        <div className="wishlist-icon" onClick={(e) => toggleWishlist(idx, e)}>
                                                            <i className={`fa-light fa-heart${wishlist[idx] ? ' fa-solid' : ''}`}></i>
                                                        </div>
                                                    </Link>
                                                    <div className="card-info">
                                                        <Link to="/tour-detail" className="h5">{tour.title}</Link>
                                                        <div className="location">
                                                            <i className="fa-light fa-location-crosshairs"></i>
                                                            <h6>{tour.location}</h6>
                                                        </div>
                                                        <div className="info-detail">
                                                            <ul className="unstyled">
                                                                <li><i className="fa-light fa-calendar"></i><p>{tour.days}</p></li>
                                                                <li><i className="fa-solid fa-period dot"></i></li>
                                                                <li><i className="fa-light fa-user"></i><p>{tour.persons}</p></li>
                                                            </ul>
                                                            <div className="right-block">
                                                                <h6>{tour.price}</h6>
                                                                <Link to="/tour-detail" className="ui-link-arrow">
                                                                    <i className="fa-light fa-arrow-right arrow"></i>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="text-center">
                                        <div className="ui-btn ui-btn-primary">
                                            <Link to="/about" data-hover="Explore All">Explore All</Link>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Tour Destinations */}
                            <section className="position-relative z-2 py-64">
                                <div className="container-fluid">
                                    <div className="heading mb-48">
                                        <h3 className="font-sec color-primary">destinations :</h3>
                                        <h2>BEST TRAVEL PLACES</h2>
                                    </div>
                                    {/* Netherlands */}
                                    <div className="row py-64 align-items-center">
                                        <div className="col-lg-5 order-lg-1 order-2">
                                            <h2 className="mb-8">NETHERLANDS</h2>
                                            <p className="pe-sm-5">Lorem ipsum dolor sit amet consectetur. Aliquam in neque eleifend placerat scelerisque tincidunt erat porttitor. Sed sed in suscipit lorem. Ut felis velit tristique posuere tellus sed. Arcu convallis nam massa leo viverra volutpat facilisis. Nulla sagittis nam pellentesque sagittis in turpis nulla et. Varius felis pellentesque molestie justo semper id. Donec tortor dui et etiam. Vitae fermentum nibh nam ac aliquet fringilla ante integer. Scelerisque adipiscing eget nisl ut molestie.</p>
                                        </div>
                                        <div className="col-lg-6 offset-lg-1 order-lg-2 order-1">
                                            <div className="box-blur-bg mb-16 mb-lg-0">
                                                <img src={samarkandImg} alt="" className="b-radius-20 w-100" />
                                            </div>
                                        </div>
                                    </div>
                                    {/* Greece */}
                                    <div className="row py-64 align-items-center">
                                        <div className="col-lg-6">
                                            <div className="box-blur-bg mb-16 mb-lg-0">
                                                <img src={chimganImg} alt="" className="b-radius-20 w-100" />
                                            </div>
                                        </div>
                                        <div className="col-lg-5 offset-lg-1">
                                            <h2 className="mb-8">GREECE</h2>
                                            <p className="pe-sm-5">Lorem ipsum dolor sit amet consectetur. Aliquam in neque eleifend placerat scelerisque tincidunt erat porttitor. Sed sed in suscipit lorem. Ut felis velit tristique posuere tellus sed. Arcu convallis nam massa leo viverra volutpat facilisis. Nulla sagittis nam pellentesque sagittis in turpis nulla et. Varius felis pellentesque molestie justo semper id. Donec tortor dui et etiam. Vitae fermentum nibh nam ac aliquet fringilla ante integer. Scelerisque adipiscing eget nisl ut molestie.</p>
                                        </div>
                                    </div>
                                    {/* Italy */}
                                    <div className="row py-64 align-items-center">
                                        <div className="col-lg-5 order-lg-1 order-2">
                                            <h2 className="mb-8">ITALY</h2>
                                            <p className="pe-sm-5">Lorem ipsum dolor sit amet consectetur. Aliquam in neque eleifend placerat scelerisque tincidunt erat porttitor. Sed sed in suscipit lorem. Ut felis velit tristique posuere tellus sed. Arcu convallis nam massa leo viverra volutpat facilisis. Nulla sagittis nam pellentesque sagittis in turpis nulla et. Varius felis pellentesque molestie justo semper id. Donec tortor dui et etiam. Vitae fermentum nibh nam ac aliquet fringilla ante integer. Scelerisque adipiscing eget nisl ut molestie.</p>
                                        </div>
                                        <div className="col-lg-6 offset-lg-1 order-lg-2 order-1">
                                            <div className="box-blur-bg mb-16 mb-lg-0">
                                                <img src={charvakImg} alt="" className="b-radius-20 w-100" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Discount Banner */}
                            <section className="position-relative z-2 py-64">
                                <div className="container-fluid">
                                    <div className="box-blur-bg">
                                        <div className="discount-banner b-radius-20">
                                            <div className="row">
                                                <div className="col-lg-6 order-lg-1 order-2">
                                                    <div className="img-block text-center">
                                                        <img src="/assets/media/banner/dicount-banner/main-object.png" alt="" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 order-lg-2 order-1">
                                                    <div className="content">
                                                        <div className="text-block">
                                                            <div className="title-block">
                                                                <div className="discount-tag">
                                                                    <h2 className="color-white">30%</h2>
                                                                    <h4 className="color-white">OFF</h4>
                                                                </div>
                                                                <h1 className="mb-16 color-white position-relative z-3">INTERESTED?</h1>
                                                            </div>
                                                            <h5 className="mb-16 color-primary">DISCOUNT IF YOU BOOK NOW</h5>
                                                            <p className="mb-48 color-white">Lorem ipsum dolor sit amet consectetur. Aliquam in neque eleifend <br />placerat scelerisque tincidunt erat porttitor. Sed sed in suscipit <br />lorem. Ut felis velit tristique posuere tellus sed. </p>
                                                            <div className="ui-btn ui-btn-primary">
                                                                <Link to="/booking" data-hover="GET IN TOUCH">GET IN TOUCH</Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

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
                                                                        {[...Array(5)].map((_, i) => (
                                                                            <i key={i} className="fa-solid fa-star"></i>
                                                                        ))}
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

                            {/* Blogs */}
                            <section className="py-64">
                                <div className="container-fluid">
                                    <div className="heading mb-48">
                                        <h3 className="font-sec color-primary">blogs :</h3>
                                        <h2>READ EXCITING STORIES</h2>
                                    </div>
                                    <Slider {...blogSettings} className="blogs-slider">
                                        {blogs.map((blog, idx) => (
                                            <div key={idx}>
                                                <div className="blog-card mb-32 box-blur-bg">
                                                    <div className="content b-radius-20">
                                                        <span className="date">12-Oct-2024</span>
                                                        <Link to="/blog-detail" className="image-block">
                                                            <img src={`/assets/media/blogs/${blog.img}`} alt="" className="blog-img" />
                                                        </Link>
                                                        <div className="text-block">
                                                            <Link to="/blog-detail" className="mb-16 h6">{blog.title}</Link>
                                                            <p className="mb-40">Lorem ipsum dolor sit amet consectetur. Aliquam in neque eleifend placera...</p>
                                                            <div className="bottom-row">
                                                                <div className="author">
                                                                    <img src={`/assets/media/users/${blog.authorImg}`} alt="" className="author-img" />
                                                                    <p>{blog.author}</p>
                                                                </div>
                                                                <Link to="/blog-detail" className="ui-link-arrow">
                                                                    <i className="fa-light fa-arrow-right arrow"></i>
                                                                </Link>
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
                        </div>

                        <Footer />
                    </main>
                </div>
            </div>
            <SearchPopup />
        </>
    )
}
