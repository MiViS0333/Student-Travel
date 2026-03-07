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

gsap.registerPlugin(ScrollTrigger);

const tours = [
  { image: '/media/tour/tour_1.png', title: 'Serene Lakeside Escapes', location: 'Banf National Park, Canada', days: 6, persons: 6, price: 5000 },
  { image: '/media/tour/tour_2.png', title: 'Hidden Lake Gems', location: 'Banf National Park, Canada', days: 6, persons: 6, price: 4200 },
  { image: '/media/tour/tour_3.png', title: 'Pristine Natural Waters', location: 'Banf National Park, Canada', days: 6, persons: 6, price: 3800 },
  { image: '/media/tour/tour_4.png', title: 'Mystical Blue Horizons', location: 'Banf National Park, Canada', days: 6, persons: 6, price: 5500 },
];

const destinations = [
  { name: 'Чарвакское водохранилище', image: '/media/banner/charvak.png', reverse: true },
  { name: 'Чимганские горы', image: '/media/banner/chimgan.png', reverse: false },
  { name: 'Самарканд', image: '/media/banner/samarkand.png', reverse: true },
];

const destinationOptions = [
  { value: 'kyoto', label: 'Киото, Япония' },
  { value: 'bali', label: 'Бали, Индонезия' },
  { value: 'paris', label: 'Париж, Франция' },
  { value: 'hawaii', label: 'Гавайи, США' },
  { value: 'rome', label: 'Рим, Италия' },
];

const departureOptions = [
  { value: 'tashkent', label: 'Ташкент, Узбекистан' },
  { value: 'samarkand', label: 'Самарканд, Узбекистан' },
  { value: 'bukhara', label: 'Бухара, Узбекистан' },
  { value: 'khiva', label: 'Хива, Узбекистан' },
  { value: 'fergana', label: 'Фергана, Узбекистан' },
];

const typeOptions = [
  { value: 'adventure', label: 'Приключения' },
  { value: 'historical', label: 'Исторические/Культурные' },
  { value: 'beach', label: 'Пляжные' },
  { value: 'relaxation', label: 'Отдых' },
  { value: 'romantic', label: 'Романтические' },
];

const defaultDescription = 'Studentravel предлагает лучшие туры для студентов по всему миру. Мы заботимся о вашем отдыхе, предоставляя незабываемые впечатления и отличный сервис.';

export default function HomePage() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);

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

  return (
    <>
      {/* Hero Section */}
      <section className="hero-banner-1 banner-content-parallax" id="hero" ref={heroRef}>
        <div className="container-fluid">
          <h1 className="title banner-caption-title ph-appear">
            <div className="banner-title-parallax">TRAVEL</div>
          </h1>
          <div className="content">
            <div className="text-center sub-title">
              <h3 className="font-sec color-white">Путешествуйте туда, куда зовёт ваше сердце!</h3>
            </div>
            <form action="/tours">
              <div className="find-banner-row">
                <div className="form-group white-input">
                  <NiceSelect name="destination" options={destinationOptions} placeholder="Куда?" />
                </div>
                <div className="form-group white-input">
                  <NiceSelect name="departure" options={departureOptions} placeholder="Откуда" />
                </div>
                <div className="form-group white-input">
                  <NiceSelect name="type" options={typeOptions} placeholder="Тип тура" />
                </div>
                <div className="ui-btn ui-btn-primary">
                  <button type="submit" data-hover="НАЙТИ">НАЙТИ</button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <img src="/media/banner/mask-layer.png" alt="" className="mask-layer mask-layer-desktop" />
        <img src="/media/banner/tabmask.png" alt="" className="mask-layer mask-layer-tab" />
        <img src="/media/banner/mobilemask.png" alt="" className="mask-layer mask-layer-phone" />
      </section>

      <div className="about-trigger-1" id="page-content" ref={aboutRef}>
        {/* About Section */}
        <section className="about-features-1 about-1 position-relative z-2">
          <div className="container-fluid">
            <div className="all-content">
              <div className="row align-items-center">
                <div className="col-xl-6 col-md-7">
                  <div className="text-block text-md-start text-center">
                    <h3 className="mb-8 font-sec color-primary">о нас :</h3>
                    <h2 className="mb-24">
                      ГДЕ СТРАСТЬ<br /> ВСТРЕЧАЕТСЯ С ПРИКЛЮЧЕНИЯМИ,<br /> РАЗЖИГАЯ ВАШЕ ЖЕЛАНИЕ<br /> ПУТЕШЕСТВОВАТЬ
                    </h2>
                    <div className="ui-btn ui-btn-primary mx-auto ms-md-0">
                      <Link href="/about" data-hover="УЗНАТЬ БОЛЬШЕ">УЗНАТЬ БОЛЬШЕ</Link>
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
              <h3 className="font-sec color-primary">список туров :</h3>
              <h2>ПОТРЯСАЮЩИЕ ТУРЫ ДЛЯ ВАС</h2>
            </div>
            <div className="row mb-16">
              {tours.map((tour, i) => (
                <div key={i} className={`col-xxl-3 col-lg-4 col-sm-6${i === 3 ? ' d-xxl-block d-lg-none' : ''}`}>
                  <TourCard {...tour} href={`/tours/${i + 1}`} />
                </div>
              ))}
            </div>
            <div className="text-center">
              <div className="ui-btn ui-btn-primary">
                <Link href="/tours" data-hover="Посмотреть все">Посмотреть все</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Destinations */}
        <section className="position-relative z-2 py-64">
          <div className="container-fluid">
            <div className="heading mb-48">
              <h3 className="font-sec color-primary">направления :</h3>
              <h2>ЛУЧШИЕ МЕСТА ДЛЯ ПУТЕШЕСТВИЙ</h2>
            </div>
            {destinations.map((dest, i) => (
              <div key={i} className="row py-64 align-items-center">
                {dest.reverse ? (
                  <>
                    <div className="col-lg-5 order-lg-1 order-2">
                      <h2 className="mb-8">{dest.name}</h2>
                      <p className="pe-sm-5">{defaultDescription}</p>
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
                      <p className="pe-sm-5">{defaultDescription}</p>
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
        <BlogsSlider />

        {/* Gallery */}
        <GallerySlider />
      </div>
    </>
  );
}
