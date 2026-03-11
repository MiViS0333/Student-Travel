'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import BlogCard from './BlogCard';
import { useTranslation } from 'react-i18next';

import { API_BASE_URL, Blog } from '@/lib/api';

interface BlogsSliderProps {
    blogs: Blog[];
    locale: string;
}

export default function BlogsSlider({ blogs, locale }: BlogsSliderProps) {
    const { t } = useTranslation('common');

    const getBlogTitle = (blog: Blog) => {
        const langData = blog.languages?.find(l => l.languageCode === locale.toUpperCase());
        return langData?.title || 'Unknown Title';
    };
    const getImageUrl = (path: string | null | undefined) => {
        if (!path) return '/media/blogs/blog_1.png';
        if (path.startsWith('http')) return path;
        return `${API_BASE_URL}/storage/${path}`;
    };
    const getBlogExcerpt = (blog: Blog) => {
        const langData = blog.languages?.find(l => l.languageCode === locale.toUpperCase());
        return langData?.excerpt || '';
    };

    return (
        <section className="py-64">
            <div className="container-fluid">
                <div className="heading mb-48">
                    <h3 className="font-sec color-primary">{t('blog_subtitle')}</h3>
                    <h2>{t('blog_title')}</h2>
                </div>
                <Swiper
                    className="blogs-slider"
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
                    {blogs && blogs.length > 0 ? blogs.map((b, i) => (
                        <SwiperSlide key={b.id || i}>
                            <BlogCard
                                image={getImageUrl(b.card_image)}
                                date={b.createdAt ? new Date(b.createdAt).toLocaleDateString() : '12-Oct-2024'}
                                title={getBlogTitle(b)}
                                excerpt={getBlogExcerpt(b)}
                                href={`/${locale}/blog/${b.id || i}`}
                            />
                        </SwiperSlide>
                    )) : (
                        <div className="text-center py-4">{t('no_blogs')}</div>
                    )}
                </Swiper>
            </div>
        </section>
    );
}
