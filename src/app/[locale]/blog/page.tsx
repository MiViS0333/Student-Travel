import Link from 'next/link';
import PageHeader from '@/components/shared/PageHeader';
import BlogCard from '@/components/ui/BlogCard';

const blogs = [
    { image: '/media/blogs/blog_1.png', title: 'Идеи для идеального пикника', authorImg: '/media/users/author.png', authorName: 'Julia Fernandez' },
    { image: '/media/blogs/blog_2.png', title: 'Полное руководство по пикникам', authorImg: '/media/users/author-2.png', authorName: 'Carlos Taylor' },
    { image: '/media/blogs/blog_3.png', title: 'Лучшие места для отдыха', authorImg: '/media/users/author.png', authorName: 'Julia Fernandez' },
    { image: '/media/blogs/blog_4.png', title: 'Вкусные рецепты для поездки', authorImg: '/media/users/author.png', authorName: 'Julia Fernandez' },
    { image: '/media/blogs/blog_1.png', title: 'Гид по необходимому снаряжению', authorImg: '/media/users/author-2.png', authorName: 'Carlos Taylor' },
    { image: '/media/blogs/blog_2.png', title: 'Романтические места отдыха', authorImg: '/media/users/author.png', authorName: 'Julia Fernandez' },
    { image: '/media/blogs/blog_3.png', title: 'Приключения для всей семьи', authorImg: '/media/users/author.png', authorName: 'Julia Fernandez' },
    { image: '/media/blogs/blog_4.png', title: 'Сезонные идеи для пикника', authorImg: '/media/users/author-2.png', authorName: 'Carlos Taylor' },
];

const defaultExcerpt = 'Узнайте больше в нашей новой статье, где мы делимся интересными фактами...';

export default function BlogGridPage() {
    return (
        <>
            <PageHeader title="БЛОГ" />

            <section className="py-64">
                <div className="container-fluid">
                    <div className="heading mb-48">
                        <h3 className="font-sec color-primary">блог :</h3>
                        <h2>ЧИТАЙТЕ УВЛЕКАТЕЛЬНЫЕ ИСТОРИИ</h2>
                    </div>
                    <div className="row">
                        {blogs.map((b, i) => (
                            <div key={i} className="col-xxl-3 col-lg-4 col-sm-6">
                                <BlogCard
                                    image={b.image}
                                    date="12-Oct-2024"
                                    title={b.title}
                                    excerpt={defaultExcerpt}
                                    authorImg={b.authorImg}
                                    authorName={b.authorName}
                                    href={`/blog/${i + 1}`}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
