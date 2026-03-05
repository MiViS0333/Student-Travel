'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PageHeader from '@/components/shared/PageHeader';
import TestimonialsSlider from '@/components/ui/TestimonialsSlider';
import GallerySlider from '@/components/ui/GallerySlider';

gsap.registerPlugin(ScrollTrigger);

export default function AboutPage() {
    useEffect(() => {
        // About 1 animation
        const aboutTrigger1 = document.querySelector('.about-trigger-1');
        if (aboutTrigger1) {
            const sideAnimation1 = gsap.timeline({ defaults: { ease: 'power2.inOut' } });
            sideAnimation1.to('.about-1 .images-area .v-4', { rotation: 21, duration: 0.3 });
            sideAnimation1.to('.about-1 .images-area .v-3', { x: '0', duration: 0.3 }, '<');
            sideAnimation1.to('.about-1 .images-area .v-3', { rotation: 15, duration: 0.3 });
            sideAnimation1.to('.about-1 .images-area .v-2', { x: '0' }, '<');
            sideAnimation1.to('.about-1 .images-area .v-2', { rotation: 7, duration: 0.3 });
            sideAnimation1.to('.about-1 .images-area .v-1', { x: '0', duration: 0.3 }, '<');
            sideAnimation1.to('.about-1 .images-area .v-1', { rotation: 2, duration: 0.3 });

            ScrollTrigger.create({
                trigger: '.about-trigger-1',
                scrub: true,
                pin: true,
                start: 'top top',
                end: '+=300%',
                animation: sideAnimation1,
            });
        }

        // About 2 animation
        const aboutTrigger2 = document.querySelector('.about-trigger-2');
        if (aboutTrigger2) {
            const sideAnimation2 = gsap.timeline({ defaults: { ease: 'power2.inOut' } });
            sideAnimation2.to('.about-2 .images-area .v-4', { rotation: -21, duration: 0.3 });
            sideAnimation2.to('.about-2 .images-area .v-3', { x: '0', duration: 0.3 }, '<');
            sideAnimation2.to('.about-2 .images-area .v-3', { rotation: -15, duration: 0.3 });
            sideAnimation2.to('.about-2 .images-area .v-2', { x: '0' }, '<');
            sideAnimation2.to('.about-2 .images-area .v-2', { rotation: -7, duration: 0.3 });
            sideAnimation2.to('.about-2 .images-area .v-1', { x: '0', duration: 0.3 }, '<');
            sideAnimation2.to('.about-2 .images-area .v-1', { rotation: -2, duration: 0.3 });

            ScrollTrigger.create({
                trigger: '.about-trigger-2',
                scrub: true,
                pin: true,
                start: 'top top',
                end: '+=300%',
                animation: sideAnimation2,
            });
        }

        // Video autoplay
        const video = document.getElementById('videoPlayer') as HTMLVideoElement | null;
        if (video) video.play();

        return () => { ScrollTrigger.getAll().forEach((t) => t.kill()); };
    }, []);

    const aboutText = 'Lorem ipsum dolor sit amet consectetur. Aliquam in neque eleifend placerat scelerisque tincidunt erat porttitor. Sed sed in suscipit lorem. Ut felis velit tristique posuere tellus sed. Arcu convallis nam massa leo viverra volutpat facilisis. Nulla sagittis nam pellentesque sagittis in turpis nulla et.';

    return (
        <>
            <PageHeader title="ABOUT US" />

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
                                        <p>{aboutText}</p>
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
                                        <p>{aboutText} {aboutText}</p>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-md-5 order-md-1">
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
                </div>
            </section>

            {/* Video Area */}
            <div className="py-64">
                <div className="container-fluid">
                    <div className="box-blur-bg">
                        <div className="bg-video b-radius-20">
                            <video id="videoPlayer" loop playsInline muted autoPlay>
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
