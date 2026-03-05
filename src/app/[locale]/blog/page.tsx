import Link from 'next/link';
import PageHeader from '@/components/shared/PageHeader';
import BlogCard from '@/components/ui/BlogCard';

const blogs = [
    { image: '/media/blogs/blog_1.png', title: 'Perfect Outdoor Picnic Ideas', authorImg: '/media/users/author.png', authorName: 'Julia Fernandez' },
    { image: '/media/blogs/blog_2.png', title: 'Ultimate Guide to Picnicking', authorImg: '/media/users/author-2.png', authorName: 'Carlos Taylor' },
    { image: '/media/blogs/blog_3.png', title: 'Best Picnic Spots Worldwide', authorImg: '/media/users/author.png', authorName: 'Julia Fernandez' },
    { image: '/media/blogs/blog_4.png', title: 'Delicious Picnic Food Ideas', authorImg: '/media/users/author.png', authorName: 'Julia Fernandez' },
    { image: '/media/blogs/blog_1.png', title: 'Essential Picnic Gear Guide', authorImg: '/media/users/author-2.png', authorName: 'Carlos Taylor' },
    { image: '/media/blogs/blog_2.png', title: 'Romantic Picnic Settings', authorImg: '/media/users/author.png', authorName: 'Julia Fernandez' },
    { image: '/media/blogs/blog_3.png', title: 'Family Picnic Adventures', authorImg: '/media/users/author.png', authorName: 'Julia Fernandez' },
    { image: '/media/blogs/blog_4.png', title: 'Seasonal Picnic Ideas', authorImg: '/media/users/author-2.png', authorName: 'Carlos Taylor' },
];

const defaultExcerpt = 'Lorem ipsum dolor sit amet consectetur. Aliquam in neque eleifend placerat scelerisque tincidunt erat porttitor.';

export default function BlogGridPage() {
    return (
        <>
            <PageHeader title="BLOGS" />

            <section className="py-64">
                <div className="container-fluid">
                    <div className="heading mb-48">
                        <h3 className="font-sec color-primary">blogs :</h3>
                        <h2>READ EXCITING STORIES</h2>
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
