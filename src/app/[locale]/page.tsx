'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TourCard from '@/components/ui/TourCard';
import DiscountBanner from '@/components/ui/DiscountBanner';
import TestimonialsSlider from '@/components/ui/TestimonialsSlider';
import BlogsSlider from '@/components/ui/BlogsSlider';
import GallerySlider from '@/components/ui/GallerySlider';

gsap.registerPlugin(ScrollTrigger);

const tours = [
  { image: '/media/tour/tour_1.png', title: 'Serene Lakeside Escapes', location: 'Banf National Park, Canada', days: 6, persons: 6, price: '$5000' },
  { image: '/media/tour/tour_2.png', title: 'Hidden Lake Gems', location: 'Banf National Park, Canada', days: 6, persons: 6, price: '$5000' },
  { image: '/media/tour/tour_3.png', title: 'Pristine Natural Waters', location: 'Banf National Park, Canada', days: 6, persons: 6, price: '$5000' },
  { image: '/media/tour/tour_4.png', title: 'Mystical Blue Horizons', location: 'Banf National Park, Canada', days: 6, persons: 6, price: '$5000' },
];

const destinations = [
  { name: 'NETHERLANDS', image: '/media/tour/tour_destination_1.png', reverse: true },
  { name: 'GREECE', image: '/media/tour/tour_destination_2.png', reverse: false },
  { name: 'ITALY', image: '/media/tour/tour_destination_3.png', reverse: true },
];

const defaultDescription = 'Lorem ipsum dolor sit amet consectetur. Aliquam in neque eleifend placerat scelerisque tincidunt erat porttitor. Sed sed in suscipit lorem. Ut felis velit tristique posuere tellus sed. Arcu convallis nam massa leo viverra volutpat facilisis. Nulla sagittis nam pellentesque sagittis in turpis nulla et. Varius felis pellentesque molestie justo semper id. Donec tortor dui et etiam. Vitae fermentum nibh nam ac aliquet fringilla ante integer. Scelerisque adipiscing eget nisl ut molestie.';

export default function HomePage() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Hero parallax
    if (heroRef.current) {
      const titleEl = heroRef.current.querySelector('.banner-caption-title');
      if (titleEl) {
        const inner = document.createElement('div');
        inner.className = 'banner-title-parallax';
        inner.innerHTML = titleEl.innerHTML;
        titleEl.innerHTML = '';
        titleEl.appendChild(inner);

        gsap.timeline({
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        }).to('.banner-title-parallax', { y: -40 }, 0);
      }
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

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="hero-banner-1 banner-content-parallax" id="hero" ref={heroRef}>
        <div className="container-fluid">
          <h1 className="title banner-caption-title ph-appear">TRAVEL</h1>
          <div className="content">
            <div className="text-center sub-title">
              <h3 className="font-sec color-white">Travel where your heart takes you!</h3>
            </div>
            <form action="/tours">
              <div className="find-banner-row">
                <div className="form-group white-input">
                  <select name="destination" className="has-nice-select cus-form-control" defaultValue="">
                    <option value="" disabled>Where to?</option>
                    <option value="kyoto">Kyoto, Japan</option>
                    <option value="bali">Bali, Indonesia</option>
                    <option value="paris">Paris, France</option>
                    <option value="hawaii">Hawaii, USA</option>
                    <option value="rome">Rome, Italy</option>
                  </select>
                </div>
                <div className="form-group white-input">
                  <select name="departure" className="has-nice-select cus-form-control" defaultValue="">
                    <option value="" disabled>Select Departure</option>
                    <option value="mumbai">Mumbai, India</option>
                    <option value="toronto">Toronto, Canada</option>
                    <option value="rome">Rome, Italy</option>
                    <option value="istanbul">Istanbul, Turkey</option>
                    <option value="cairo">Cairo, Egypt</option>
                  </select>
                </div>
                <div className="form-group white-input">
                  <select name="type" className="has-nice-select cus-form-control" defaultValue="">
                    <option value="" disabled>Select Type</option>
                    <option value="adventure">Adventure</option>
                    <option value="historical">Historical/Cultural</option>
                    <option value="beach">Beach</option>
                    <option value="relaxation">Relaxation</option>
                    <option value="romantic">Romantic</option>
                  </select>
                </div>
                <div className="ui-btn ui-btn-primary">
                  <button type="submit" data-hover="FIND NOW">FIND NOW</button>
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
                    <h3 className="mb-8 font-sec color-primary">about us :</h3>
                    <h2 className="mb-24">
                      WHERE PASSION<br /> MEETS ADVENTURE,<br /> FUELING YOUR<br /> WANDERLUST DESIRES
                    </h2>
                    <div className="ui-btn ui-btn-primary mx-auto ms-md-0">
                      <Link href="/about" data-hover="LEARN MORE">LEARN MORE</Link>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-md-5">
                  <div className="images-area">
                    <div className="images-block">
                      {[1, 2, 3, 4].map((n) => (
                        <div key={n} className={`about-img-card box-blur-bg v-${n}`}>
                          <img src={`/media/about/about-img-${n}.png`} alt="" className="b-radius-20" />
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
              <h3 className="font-sec color-primary">tour list :</h3>
              <h2>AWESOME TOURS FOR YOU</h2>
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
                <Link href="/tours" data-hover="Explore All">Explore All</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Destinations */}
        <section className="position-relative z-2 py-64">
          <div className="container-fluid">
            <div className="heading mb-48">
              <h3 className="font-sec color-primary">destinations :</h3>
              <h2>BEST TRAVEL PLACES</h2>
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
