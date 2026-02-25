import React from 'react'
import PageLayout from '../components/PageLayout'
import { Link } from 'react-router-dom'

export default function BlogDetailPage() {
    return (
        <PageLayout>
            <section className="page-header">
                <h1 className="color-white">BLOG DETAIL</h1>
            </section>
            <section className="py-64">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="box-blur-bg mb-32">
                                <img src="/assets/media/blogs/blog_1.png" alt="" className="b-radius-20 w-100" />
                            </div>
                            <div className="mb-16">
                                <span className="date me-3">12-Oct-2024</span>
                                <span className="author-inline">by Julia Fernandez</span>
                            </div>
                            <h2 className="mb-24">Perfect Outdoor Picnic Ideas</h2>
                            <p className="mb-24">Lorem ipsum dolor sit amet consectetur. Aliquam in neque eleifend placerat scelerisque tincidunt erat porttitor. Sed sed in suscipit lorem. Ut felis velit tristique posuere tellus sed. Arcu convallis nam massa leo viverra volutpat facilisis. Nulla sagittis nam pellentesque sagittis in turpis nulla et. Varius felis pellentesque molestie justo semper id. Donec tortor dui et etiam.</p>
                            <p className="mb-24">Vitae fermentum nibh nam ac aliquet fringilla ante integer. Scelerisque adipiscing eget nisl ut molestie. Lorem ipsum dolor sit amet consectetur. Aliquam in neque eleifend placerat scelerisque tincidunt erat porttitor. Sed sed in suscipit lorem. Ut felis velit tristique posuere tellus sed.</p>
                            <h4 className="mb-16">Tips for a Perfect Picnic</h4>
                            <ul className="mb-24">
                                <li>Choose the right location</li>
                                <li>Pack weather-appropriate gear</li>
                                <li>Prepare easy-to-eat foods</li>
                                <li>Bring entertainment</li>
                                <li>Leave no trace behind</li>
                            </ul>
                            <p className="mb-24">Arcu convallis nam massa leo viverra volutpat facilisis. Nulla sagittis nam pellentesque sagittis in turpis nulla et. Varius felis pellentesque molestie justo semper id.</p>
                        </div>
                        <div className="col-lg-4">
                            <div className="sidebar">
                                <div className="sidebar-widget mb-32">
                                    <div className="widget-title-row"><h6>RECENT POSTS</h6><i className="fa-light fa-horizontal-rule"></i></div>
                                    <div className="widget-content-block">
                                        <ul className="unstyled item-list">
                                            <li><Link to="/blog-detail">Perfect Outdoor Picnic Ideas</Link></li>
                                            <li><Link to="/blog-detail">Ultimate Guide to Picnicking</Link></li>
                                            <li><Link to="/blog-detail">Best Picnic Spots Worldwide</Link></li>
                                            <li><Link to="/blog-detail">Delicious Picnic Food Ideas</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="sidebar-widget mb-32">
                                    <div className="widget-title-row"><h6>CATEGORIES</h6><i className="fa-light fa-horizontal-rule"></i></div>
                                    <div className="widget-content-block">
                                        <ul className="unstyled item-list">
                                            <li><a href="#">Travel Tips</a></li>
                                            <li><a href="#">Destinations</a></li>
                                            <li><a href="#">Food & Drink</a></li>
                                            <li><a href="#">Adventure</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </PageLayout>
    )
}
