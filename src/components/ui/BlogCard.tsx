import Link from 'next/link';

interface BlogCardProps {
    image: string;
    date: string;
    title: string;
    excerpt: string;
    href: string;
}

export default function BlogCard({ image, date, title, excerpt, href }: BlogCardProps) {
    return (
        <div className="blog-card mb-32 box-blur-bg">
            <div className="content b-radius-20">
                <span className="date">{date}</span>
                <Link href={href} className="image-block">
                    <img style={{ aspectRatio: '16/9', objectFit: 'cover' }} src={image} alt={title} className="blog-img" />
                </Link>
                <div className="text-block">
                    <Link href={href} className="mb-16 h6">{title}</Link>
                    <p className="mb-40">{excerpt}</p>
                    <div className="bottom-row justify-content-end">
                        <Link href={href} className="ui-link-arrow">
                            <i className="fa-light fa-arrow-right arrow"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
