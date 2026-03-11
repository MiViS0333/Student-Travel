'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { useTranslation } from 'react-i18next';

const galleryImages = [
    '/media/gallery/sdvb.png',
    '/media/gallery/sdvsdv-1.png',
    '/media/gallery/sdvsdv.png',
    '/media/gallery/sdvsvb.png',
    '/media/gallery/vsdv.png',
    '/media/gallery/vsdvsb.png',
    '/media/gallery/sdvb.png',
    '/media/gallery/sdvsdv-1.png',
    '/media/gallery/sdvsdv.png',
    '/media/gallery/sdvsvb.png',
    '/media/gallery/vsdv.png',
    '/media/gallery/vsdvsb.png',
];

export default function GallerySlider() {
    const { t } = useTranslation('common');

    return (
        <section className="py-64">
            <div className="heading mb-48">
                <h3 className="font-sec color-primary">{t('instagram_subtitle')}</h3>
                <h2>{t('gallery_title')}</h2>
            </div>
            <Swiper
                className="gallery-slider"
                style={{ pointerEvents: 'none' }}
                modules={[Autoplay]}
                observer={true}
                observeParents={true}
                loop={true}
                autoplay={{ delay: 0, disableOnInteraction: false }}
                speed={6000}
                spaceBetween={24}
                slidesPerView={6}
                allowTouchMove={false}
                breakpoints={{
                    0: { slidesPerView: 1 },
                    340: { slidesPerView: 2 },
                    492: { slidesPerView: 3 },
                    992: { slidesPerView: 4 },
                    1199: { slidesPerView: 5 },
                    1399: { slidesPerView: 6 },
                }}
            >
                {galleryImages.map((img, i) => (
                    <SwiperSlide key={i}>
                        <div className="gallery-img-block" style={{ pointerEvents: 'none', userSelect: 'none' }}>
                            <img src={img} alt={`Gallery ${i + 1}`} draggable={false} style={{ pointerEvents: 'none', userSelect: 'none' }} />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}
