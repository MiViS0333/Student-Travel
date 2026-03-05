import Link from 'next/link';
import PageHeader from '@/components/shared/PageHeader';
import BlogsSlider from '@/components/ui/BlogsSlider';

export default function BlogDetailPage() {
    return (
        <>
            <PageHeader title="BLOG DETAIL" />

            <section className="py-64">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-8 col-lg-10 mx-auto">
                            <article className="blog-detail">
                                <div className="box-blur-bg mb-32">
                                    <img src="/media/blogs/blog_1.png" alt="Blog" className="b-radius-20 w-100" />
                                </div>
                                <div className="blog-meta mb-24">
                                    <span className="date">12-Oct-2024</span>
                                    <span className="author">
                                        <img src="/media/users/author.png" alt="" className="author-img" />
                                        Julia Fernandez
                                    </span>
                                </div>
                                <h2 className="mb-24">PERFECT OUTDOOR PICNIC IDEAS</h2>
                                <p className="mb-24">
                                    Lorem ipsum dolor sit amet consectetur. Aliquam in neque eleifend placerat scelerisque tincidunt
                                    erat porttitor. Sed sed in suscipit lorem. Ut felis velit tristique posuere tellus sed. Arcu
                                    convallis nam massa leo viverra volutpat facilisis. Nulla sagittis nam pellentesque sagittis in
                                    turpis nulla et. Varius felis pellentesque molestie justo semper id. Donec tortor dui et etiam.
                                    Vitae fermentum nibh nam ac aliquet fringilla ante integer.
                                </p>
                                <p className="mb-24">
                                    Convallis vitae commodo quis a integer. Lectus facilisis non vel vel sit. Turpis enim feugiat
                                    tincidunt neque cursus proin amet eleifend sagittis. Magna eget facilisi posuere dignissim neque.
                                    Scelerisque adipiscing eget nisl ut molestie. Nulla sagittis nam pellentesque sagittis in turpis
                                    nulla et.
                                </p>
                                <blockquote className="mb-24">
                                    <p>
                                        &ldquo;Lorem ipsum dolor sit amet consectetur. Aliquam in neque eleifend placerat scelerisque
                                        tincidunt erat porttitor. Sed sed in suscipit lorem.&rdquo;
                                    </p>
                                </blockquote>
                                <p className="mb-48">
                                    Lorem ipsum dolor sit amet consectetur. Ultrices pretium malesuada nisi arcu egestas at ac
                                    consectetur enim. Sollicitudin ultrices morbi adipiscing scelerisque accumsan erat quam pharetra
                                    quisque. In sem gravida in magna. Diam sodales sodales malesuada senectus enim nullam.
                                </p>
                                <div className="row mb-48">
                                    <div className="col-6">
                                        <img src="/media/blogs/blog_2.png" alt="" className="b-radius-20 w-100" />
                                    </div>
                                    <div className="col-6">
                                        <img src="/media/blogs/blog_3.png" alt="" className="b-radius-20 w-100" />
                                    </div>
                                </div>
                                <p className="mb-48">
                                    Convallis vitae commodo quis a integer. Lectus facilisis non vel vel sit. Turpis enim feugiat
                                    tincidunt neque cursus proin amet eleifend sagittis. Magna eget facilisi posuere dignissim neque.
                                </p>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            <BlogsSlider />
        </>
    );
}
