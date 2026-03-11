import Link from 'next/link';
import { notFound } from 'next/navigation';
import PageHeader from '@/components/shared/PageHeader';
import BlogsSlider from '@/components/ui/BlogsSlider';
import TourCard from '@/components/ui/TourCard';
import initTranslations from '@/lib/i18n';
import { blogsService } from '@/lib/api';
import { API_BASE_URL } from '@/lib/api/config';

interface PageProps {
    params: Promise<{ locale: string; id: string }>;
}

export default async function BlogDetailPage({ params }: PageProps) {
    const resolvedParams = await params;
    const locale = (resolvedParams.locale || 'ru').toUpperCase();
    const id = resolvedParams.id;
    const { t } = await initTranslations(locale.toLowerCase(), ['common']);

    try {
        const [blog, recentBlogsRes] = await Promise.all([
            blogsService.getBlogById(id, locale),
            blogsService.getBlogs({ lang: locale, limit: 10 })
        ]);

        if (!blog) {
            return notFound();
        }

        const langData = blog.languages?.find(l => l.languageCode === locale) || blog.languages?.[0];
        const title = langData?.title || 'BLOG DETAIL';
        const content = langData?.content || '';
        const excerpt = langData?.excerpt || '';

        const getImageUrl = (path: string | null | undefined) => {
            if (!path) return '/media/blogs/blog_1.png';
            if (path.startsWith('http')) return path;
            return `${API_BASE_URL}/storage/${path}`;
        };

        const mainImage = getImageUrl(blog.card_image);
        const date = blog.createdAt ? new Date(blog.createdAt).toLocaleDateString(resolvedParams.locale || 'ru', {
            day: 'numeric',
            month: 'short',
            year: 'numeric'
        }) : '';

        const getDays = (start: string | null | undefined, end: string | null | undefined) => {
            if (!start || !end) return 0;
            const s = new Date(start).getTime();
            const e = new Date(end).getTime();
            return Math.ceil(Math.abs(e - s) / (1000 * 60 * 60 * 24));
        };

        const tour = blog.tour;
        let tourData = null;
        if (tour) {
            const tourLangData = tour.languages?.find(l => l.languageCode === locale) || tour.languages?.[0];
            tourData = {
                image: tour.card_image || tour.image || '',
                title: tourLangData?.title || '',
                location: tourLangData?.destination || '',
                days: getDays(tour.departure_time, tour.return_time),
                persons: tour.max_person || 0,
                price: tour.price || 0,
                href: `/${locale.toLowerCase()}/tours/${tour.id}`
            };
        }

        return (
            <>
                <PageHeader title={title.toUpperCase()} />

                <section className="py-64">
                    <div className="container-fluid">
                        <div className="row">
                            <div className={`col-xl-${tourData ? '8' : '8 mx-auto'} col-lg-${tourData ? '8' : '10 mx-auto'}`}>
                                <article className="blog-detail">
                                    <div className="box-blur-bg mb-32">
                                        <div className="position-relative">
                                            {date && <span className="date">{date}</span>}
                                            <img style={{ aspectRatio: '16/9', objectFit: 'cover' }} src={mainImage} alt={title} className="b-radius-20 w-100" />
                                        </div>
                                    </div>
                                    <h2 className="mb-24">{title}</h2>

                                    {content ? (
                                        <div
                                            dangerouslySetInnerHTML={{ __html: content }}
                                            className="wysiwyg mb-48"
                                        />
                                    ) : (
                                        <p className="mb-48">{excerpt}</p>
                                    )}
                                </article>
                            </div>
                            
                            {tourData && (
                                <div className="col-xl-4 col-lg-4">
                                    <aside className="sticky-top" style={{ top: '120px' }}>
                                        <h4 className="mb-32">{t('related_tour')}</h4>
                                        <TourCard {...tourData} />
                                    </aside>
                                </div>
                            )}
                        </div>
                    </div>
                </section>

                <BlogsSlider blogs={recentBlogsRes.data || []} locale={resolvedParams.locale || 'ru'} />
            </>
        );
    } catch (error) {
        console.error('Failed to fetch blog details', error);
        return notFound();
    }
}
