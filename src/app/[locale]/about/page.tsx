'use client';

import { useRef, useLayoutEffect, useEffect } from 'react';

const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PageHeader from '@/components/shared/PageHeader';
import TestimonialsSlider from '@/components/ui/TestimonialsSlider';
import GallerySlider from '@/components/ui/GallerySlider';

gsap.registerPlugin(ScrollTrigger);

export default function AboutPage() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const about1Ref = useRef<HTMLDivElement>(null);
    const about2Ref = useRef<HTMLDivElement>(null);

    useIsomorphicLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // About 1 animation
            if (about1Ref.current) {
                const sideAnimation1 = gsap.timeline({ defaults: { ease: 'power2.inOut' } });
                sideAnimation1.to('.about-1 .images-area .v-4', { rotation: 21, duration: 0.3 });
                sideAnimation1.to('.about-1 .images-area .v-3', { x: '0', duration: 0.3 }, '<');
                sideAnimation1.to('.about-1 .images-area .v-3', { rotation: 15, duration: 0.3 });
                sideAnimation1.to('.about-1 .images-area .v-2', { x: '0' }, '<');
                sideAnimation1.to('.about-1 .images-area .v-2', { rotation: 7, duration: 0.3 });
                sideAnimation1.to('.about-1 .images-area .v-1', { x: '0', duration: 0.3 }, '<');
                sideAnimation1.to('.about-1 .images-area .v-1', { rotation: 2, duration: 0.3 });

                ScrollTrigger.create({
                    trigger: about1Ref.current,
                    scrub: true,
                    pin: true,
                    start: 'top top',
                    end: '+=300%',
                    animation: sideAnimation1,
                });
            }

            // About 2 animation
            if (about2Ref.current) {
                const sideAnimation2 = gsap.timeline({ defaults: { ease: 'power2.inOut' } });
                sideAnimation2.to('.about-2 .images-area .v-4', { rotation: -21, duration: 0.3 });
                sideAnimation2.to('.about-2 .images-area .v-3', { x: '0', duration: 0.3 }, '<');
                sideAnimation2.to('.about-2 .images-area .v-3', { rotation: -15, duration: 0.3 });
                sideAnimation2.to('.about-2 .images-area .v-2', { x: '0' }, '<');
                sideAnimation2.to('.about-2 .images-area .v-2', { rotation: -7, duration: 0.3 });
                sideAnimation2.to('.about-2 .images-area .v-1', { x: '0', duration: 0.3 }, '<');
                sideAnimation2.to('.about-2 .images-area .v-1', { rotation: -2, duration: 0.3 });

                ScrollTrigger.create({
                    trigger: about2Ref.current,
                    scrub: true,
                    pin: true,
                    start: 'top top',
                    end: '+=300%',
                    animation: sideAnimation2,
                });
            }
        });

        return () => ctx.revert();
    }, []);

    useEffect(() => {
        // Video autoplay
        if (videoRef.current) {
            const playPromise = videoRef.current.play();
            if (playPromise !== undefined) {
                playPromise.catch((error) => {
                    console.log('Video auto-play prevented:', error);
                });
            }
        }
    }, []);

    const aboutText = 'Studentravel предлагает лучшие туры для студентов по всему миру. Мы заботимся о вашем отдыхе, предоставляя незабываемые впечатления и отличный сервис.';

    const section1Images = ['asvbbs.png', 'bsfnsns.png', 'dsvbsdb.png', 'sbfdsfbs.png'];
    const section2Images = ['sbsdvsbs.png', 'sdbsbsdb.png', 'sdvbs.png', 'sdvsdv.png'];

    return (
        <>
            <PageHeader title="О НАС" />

            {/* About Section 1 */}
            <div className="about-trigger-1" ref={about1Ref}>
                <section className="about-features-1 position-relative z-2">
                    <div className="about-1">
                        <div className="container-fluid">
                            <div className="all-content">
                                <div className="row align-items-center">
                                    <div className="col-xl-6 col-md-7">
                                        <div className="text-block text-md-start text-center">
                                            <h3 className="mb-8 font-sec color-primary">о нас :</h3>
                                            <h2 className="mb-24">ГДЕ СТРАСТЬ<br /> ВСТРЕЧАЕТСЯ С ПРИКЛЮЧЕНИЯМИ,<br /> РАЗЖИГАЯ ВАШЕ ЖЕЛАНИЕ<br /> ПУТЕШЕСТВОВАТЬ</h2>
                                            <p>{aboutText}</p>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-md-5">
                                        <div className="images-area">
                                            <div className="images-block">
                                                {section1Images.map((imgName, index) => {
                                                    const n = index + 1;
                                                    return (
                                                        <div key={n} className={`about-img-card box-blur-bg v-${n}`}>
                                                            <img src={`/media/about_studenTravel/${imgName}`} alt="" className="b-radius-20" />
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            {/* About Section 2 */}
            <div className="about-trigger-2" ref={about2Ref}>
                <section className="about-features-2 position-relative z-2">
                    <div className="about-2">
                        <div className="container-fluid">
                            <div className="all-content">
                                <div className="row align-items-center">
                                    <div className="col-xl-6 col-md-7 order-md-2">
                                        <div className="text-block text-md-start text-center">
                                            <h3 className="mb-8 font-sec color-primary">о нас :</h3>
                                            <h2 className="mb-24">МЫ ХОТИМ ПРЕДОСТАВЛЯТЬ ЛУЧШИЕ ТУРЫ</h2>
                                            <p>{aboutText} {aboutText}</p>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-md-5 order-md-1">
                                        <div className="images-area">
                                            <div className="images-block">
                                                {section2Images.map((imgName, index) => {
                                                    const n = index + 1;
                                                    return (
                                                        <div key={n} className={`about-img-card box-blur-bg v-${n}`}>
                                                            <img src={`/media/about_studenTravel/${imgName}`} alt="" className="b-radius-20" />
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            {/* Video Area */}
            <div className="py-64">
                <div className="container-fluid">
                    <div className="box-blur-bg">
                        <div className="bg-video b-radius-20">
                            <video id="videoPlayer" ref={videoRef} loop playsInline muted autoPlay>
                                <source src="/media/inner-banner-video.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </div>
                </div>
            </div>

            <TestimonialsSlider />
            <GallerySlider />
        </>
    );
}
