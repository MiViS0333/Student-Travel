'use client';

import { useRef, useLayoutEffect, useEffect } from 'react';
import Link from 'next/link';

const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TourCard from '@/components/ui/TourCard';
import DiscountBanner from '@/components/ui/DiscountBanner';
import TestimonialsSlider from '@/components/ui/TestimonialsSlider';
import BlogsSlider from '@/components/ui/BlogsSlider';
import GallerySlider from '@/components/ui/GallerySlider';
import NiceSelect from '@/components/ui/NiceSelect';
import { useTranslation } from 'react-i18next';

import { Tour, Blog } from '@/lib/api';

gsap.registerPlugin(ScrollTrigger);

// Fixed destinations for UI showcase

interface SelectOption {
    value: string;
    label: string;
}

interface HomePageClientProps {
    tours: Tour[];
    departures: SelectOption[];
    destinations: SelectOption[];
    tourTypes: SelectOption[];
    blogs: Blog[];
    locale: string;
}

export default function HomePageClient({ tours, departures, destinations: serverDestinations, tourTypes, blogs, locale }: HomePageClientProps) {
    const { t } = useTranslation('home');
    const aboutRef = useRef<HTMLDivElement>(null);
    const heroRef = useRef<HTMLElement>(null);

    const uiDestinations = [
        { name: t('dest_charvak'), image: '/media/banner/charvak.png', reverse: true },
        { name: t('dest_chimgan'), image: '/media/banner/chimgan.png', reverse: false },
        { name: t('dest_samarkand'), image: '/media/banner/samarkand.png', reverse: true },
    ];

    useIsomorphicLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Hero parallax
            if (heroRef.current) {
                gsap.timeline({
                    scrollTrigger: {
                        trigger: heroRef.current,
                        start: 'top top',
                        end: 'bottom top',
                        scrub: true,
                    },
                }).to('.banner-title-parallax', { y: -40 }, 0);
            }

            // About scroll animation
            if (aboutRef.current) {
                const sideAnimation = gsap.timeline({ defaults: { ease: 'power2.inOut' } });
                sideAnimation.to('.about-1 .images-area .v-4', { rotation: 21, duration: 0.3 });
                sideAnimation.to('.about-1 .images-area .v-3', { x: '0', duration: 0.3 }, '<');
                sideAnimation.to('.about-1 .images-area .v-3', { rotation: 15, duration: 0.3 });
                sideAnimation.to('.about-1 .images-area .v-2', { x: '0' }, '<');
                sideAnimation.to('.about-1 .images-area .v-2', { rotation: 7, duration: 0.3 });
                sideAnimation.to('.about-1 .images-area .v-1', { x: '0', duration: 0.3 }, '<');
                sideAnimation.to('.about-1 .images-area .v-1', { rotation: 2, duration: 0.3 });

                ScrollTrigger.create({
                    trigger: aboutRef.current,
                    scrub: true,
                    pin: true,
                    start: 'top top',
                    end: '+=300%',
                    animation: sideAnimation,
                });
            }
        });

        return () => ctx.revert();
    }, []);

    const getTourTitle = (tour: Tour) => {
        const langData = tour.languages?.find(l => l.languageCode === locale.toUpperCase());
        return langData?.title || 'Unknown Tour';
    };

    const getTourLocation = (tour: Tour) => {
        const langData = tour.languages?.find(l => l.languageCode === locale.toUpperCase());
        return `${langData?.departure || ''} - ${langData?.destination || ''}`;
    };

    return (
        <>
            {/* Hero Section */}
            <section className="hero-banner-1 banner-content-parallax" id="hero" ref={heroRef}>
                <div className="container-fluid">
                    <h1 className="title banner-caption-title ph-appear">
                        {/* <div className="banner-title-parallax">{t('hero_title')}</div> */}
                    </h1>
                    <div className="content">
                        <div className="text-center sub-title">
                            {/* <h3 className="font-sec color-white">{t('hero_subtitle')}</h3> */}
                        </div>
                        <form action={`/${locale}/tours`}>
                            <div className="find-banner-row">
                                <div className="form-group white-input">
                                    <NiceSelect name="destination" options={serverDestinations.length ? serverDestinations : [{ value: '', label: t('no_data') }]} placeholder={t('search_destination_placeholder')} />
                                </div>
                                <div className="form-group white-input">
                                    <NiceSelect name="departure" options={departures.length ? departures : [{ value: '', label: t('no_data') }]} placeholder={t('search_departure_placeholder')} />
                                </div>
                                <div className="form-group white-input">
                                    <NiceSelect name="type" options={tourTypes.length ? tourTypes : [{ value: '', label: t('no_data') }]} placeholder={t('search_type_placeholder')} />
                                </div>
                                <div className="ui-btn ui-btn-primary">
                                    <button type="submit" data-hover={t('search_button')}>{t('search_button')}</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            <div className="about-trigger-1" id="page-content" ref={aboutRef}>
                {/* About Section */}
                <section className="about-features-1 about-1 position-relative z-2">
                    <div className="container-fluid">
                        <div className="all-content">
                            <div className="row align-items-center">
                                <div className="col-xl-6 col-md-7">
                                    <div className="text-block text-md-start text-center">
                                        <h3 className="mb-8 font-sec color-primary">{t('about_subtitle')}</h3>
                                        <h2 className="mb-24" dangerouslySetInnerHTML={{ __html: t('about_title') }} />
                                        <div className="ui-btn ui-btn-primary mx-auto ms-md-0">
                                            <Link href={`/${locale}/about`} data-hover={t('about_button')}>{t('about_button')}</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-md-5">
                                    <div className="images-area">
                                        <div className="images-block">
                                            {[
                                                '/media/fwev.png',
                                                '/media/rgewfes.png',
                                                '/media/wefwe.png',
                                                '/media/wefwv.png'
                                            ].map((src, i) => (
                                                <div key={i} className={`about-img-card box-blur-bg v-${i + 1}`}>
                                                    <img src={src} alt="" className="b-radius-20" />
                                                </div>
                                            ))}
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
                            <h3 className="font-sec color-primary">{t('tours_subtitle')}</h3>
                            <h2>{t('tours_title')}</h2>
                        </div>

                        {tours.length === 0 ? (
                            <div className="text-center py-4">{t('tours_empty')}</div>
                        ) : (
                            <div className="row mb-16">
                                {tours.map((tour, i) => (
                                    <div key={tour.id} className={`col-xxl-3 col-lg-4 col-sm-6${i === 3 ? ' d-xxl-block d-lg-none' : ''}`}>
                                        <TourCard
                                            image={tour.card_image || tour.image || ''}
                                            title={getTourTitle(tour)}
                                            location={getTourLocation(tour)}
                                            days={tour.max_person || 6}
                                            persons={tour.max_person || 1}
                                            price={tour.price}
                                            href={`/${locale}/tours/${tour.id}`}
                                        />
                                    </div>
                                ))}
                            </div>
                        )}

                        <div className="text-center">
                            <div className="ui-btn ui-btn-primary">
                                <Link href={`/${locale}/tours`} data-hover={t('tours_view_all')}>{t('tours_view_all')}</Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Destinations */}
                <section className="position-relative z-2 py-64">
                    <div className="container-fluid">
                        <div className="heading mb-48">
                            <h3 className="font-sec color-primary">{t('dest_subtitle')}</h3>
                            <h2>{t('dest_title')}</h2>
                        </div>
                        {uiDestinations.map((dest, i) => (
                            <div key={i} className="row py-64 align-items-center">
                                {dest.reverse ? (
                                    <>
                                        <div className="col-lg-5 order-lg-1 order-2">
                                            <h2 className="mb-8">{dest.name}</h2>
                                            <p className="pe-sm-5">{t('dest_desc_default')}</p>
                                        </div>
                                        <div className="col-lg-6 offset-lg-1 order-lg-2 order-1">
                                            <div className="box-blur-bg mb-16 mb-lg-0">
                                                <img src={dest.image} alt={dest.name} className="b-radius-20 w-100" />
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div className="col-lg-6">
                                            <div className="box-blur-bg mb-16 mb-lg-0">
                                                <img src={dest.image} alt={dest.name} className="b-radius-20 w-100" />
                                            </div>
                                        </div>
                                        <div className="col-lg-5 offset-lg-1">
                                            <h2 className="mb-8">{dest.name}</h2>
                                            <p className="pe-sm-5">{t('dest_desc_default')}</p>
                                        </div>
                                    </>
                                )}
                            </div>
                        ))}
                    </div>
                </section>

                {/* Discount Banner */}
                <DiscountBanner />

                {/* Testimonials */}
                <TestimonialsSlider />

                {/* Blogs */}
                <BlogsSlider blogs={blogs} locale={locale} />

                {/* Gallery */}
                <GallerySlider />
            </div>
        </>
    );
}
