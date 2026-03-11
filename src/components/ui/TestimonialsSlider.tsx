'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import TestimonialCard from './TestimonialCard';
import { useTranslation } from 'react-i18next';

const testimonials = [
    { image: '/media/users/user_1.png', name: 'Julia Fernandez', rating: 5 },
    { image: '/media/users/user_2.png', name: 'Henry Patel', rating: 5 },
    { image: '/media/users/user_3.png', name: 'Beckham Dsilva', rating: 5 },
    { image: '/media/users/user_4.png', name: 'Rouge Redstar', rating: 5 },
    { image: '/media/users/user_1.png', name: 'Julia Fernandez', rating: 5 },
];

export default function TestimonialsSlider() {
    const { t } = useTranslation('common');
    const defaultReview = t('default_review');

    return (
        <section className="py-64">
            <div className="container-fluid">
                <div className="heading mb-48">
                    <h3 className="font-sec color-primary">{t('reviews_subtitle')}</h3>
                    <h2>{t('reviews_title')}</h2>
                </div>
                <Swiper
                    className="testimonials-slider"
                    modules={[Autoplay, Pagination]}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    speed={800}
                    loop={true}
                    pagination={{ clickable: true }}
                    spaceBetween={24}
                    slidesPerView={4}
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        650: { slidesPerView: 2 },
                        1199: { slidesPerView: 3 },
                        1399: { slidesPerView: 4 },
                    }}
                >
                    {testimonials.map((t, i) => (
                        <SwiperSlide key={i}>
                            <TestimonialCard {...t} review={defaultReview} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
