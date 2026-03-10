import Link from 'next/link';
import PageHeader from '@/components/shared/PageHeader';
import BlogCard from '@/components/ui/BlogCard';
import { API_BASE_URL, blogsService } from '@/lib/api';

export default async function BlogGridPage({ params, searchParams }: { params: Promise<{ locale: string }>, searchParams: Promise<any> }) {
    const resolvedParams = await params;
    const locale = (resolvedParams.locale || 'ru').toUpperCase();
    const resolvedSearchParams = await searchParams;
    const page = Number(resolvedSearchParams.page) || 1;
    const limit = 8;

    const blogsData = await blogsService.getBlogs({ lang: locale, limit, page });

    const getBlogTitle = (blog: any) => {
        const langData = blog.languages?.find((l: any) => l.languageCode === locale);
        return langData?.title || 'Unknown Title';
    };

    const getBlogExcerpt = (blog: any) => {
        const langData = blog.languages?.find((l: any) => l.languageCode === locale);
        return langData?.excerpt || ''
    };

    const formatDate = (dateString?: string) => {
        if (!dateString) return '';
        const date = new Date(dateString);
        return date.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }).replace(/ /g, '-');
    };
    const getImageUrl = (path: string | null | undefined) => {
        if (!path) return '/media/blogs/blog_1.png';
        if (path.startsWith('http')) return path;
        return `${API_BASE_URL}/storage/${path}`;
    };
    const currentPage = blogsData.meta.page;
    const totalPages = blogsData.meta.totalPages;

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
                        {blogsData.data && blogsData.data.length > 0 ? (
                            blogsData.data.map((b) => (
                                <div key={b.id} className="col-xxl-3 col-lg-4 col-sm-6">
                                    <BlogCard
                                        image={getImageUrl(b.card_image)}
                                        date={formatDate(b.createdAt)}
                                        title={getBlogTitle(b)}
                                        excerpt={getBlogExcerpt(b)}
                                        href={`/${locale.toLowerCase()}/blog/${b.id}`}
                                    />
                                </div>
                            ))
                        ) : (
                            <div className="col-12 text-center py-64">
                                <h3 className="color-primary">Блоги не найдены.</h3>
                            </div>
                        )}
                    </div>

                    {/* Pagination */}
                    {totalPages > 1 && (
                        <ul className="pagination text-center mt-32">
                            <li className={`prev ${currentPage <= 1 ? 'disabled' : ''}`}>
                                <Link href={currentPage > 1 ? `?page=${currentPage - 1}` : '#'}>
                                    <i className="fa-light fa-arrow-left"></i>
                                </Link>
                            </li>
                            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                                <li key={p} className={currentPage === p ? 'active' : ''}>
                                    <Link href={`?page=${p}`}>{p}</Link>
                                </li>
                            ))}
                            <li className={`next ${currentPage >= totalPages ? 'disabled' : ''}`}>
                                <Link href={currentPage < totalPages ? `?page=${currentPage + 1}` : '#'}>
                                    <i className="fa-light fa-arrow-right"></i>
                                </Link>
                            </li>
                        </ul>
                    )}
                </div>
            </section>
        </>
    );
}
