'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import BlogCard from './BlogCard';

const blogs = [
    { image: '/media/blogs/blog_1.png', title: 'Perfect Outdoor Picnic Ideas', authorImg: '/media/users/author.png', authorName: 'Julia Fernandez' },
    { image: '/media/blogs/blog_2.png', title: 'Ultimate Guide to Picnicking', authorImg: '/media/users/author-2.png', authorName: 'Carlos Taylor' },
    { image: '/media/blogs/blog_3.png', title: 'Best Picnic Spots Worldwide', authorImg: '/media/users/author.png', authorName: 'Julia Fernandez' },
    { image: '/media/blogs/blog_4.png', title: 'Delicious Picnic Food Ideas', authorImg: '/media/users/author.png', authorName: 'Julia Fernandez' },
    { image: '/media/blogs/blog_2.png', title: 'Ultimate Guide to Picnicking', authorImg: '/media/users/author-2.png', authorName: 'Carlos Taylor' },
];

const defaultExcerpt = 'Lorem ipsum dolor sit amet consectetur. Aliquam in neque eleifend placera...';

export default function BlogsSlider() {
    return (
        <section className="py-64">
            <div className="container-fluid">
                <div className="heading mb-48">
                    <h3 className="font-sec color-primary">blogs :</h3>
                    <h2>READ EXCITING STORIES</h2>
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
                    {blogs.map((b, i) => (
                        <SwiperSlide key={i}>
                            <BlogCard
                                image={b.image}
                                date="12-Oct-2024"
                                title={b.title}
                                excerpt={defaultExcerpt}
                                authorImg={b.authorImg}
                                authorName={b.authorName}
                                href={`/blog/${i + 1}`}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
