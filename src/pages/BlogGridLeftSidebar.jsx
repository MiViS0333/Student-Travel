import React from 'react'
import PageLayout from '../components/PageLayout'
import { Link } from 'react-router-dom'

export default function BlogGridLeftSidebar() {
    return (
        <PageLayout>
            <section className="page-header">
                <h1 className="color-white">BLOG GRID (SIDEBAR LEFT)</h1>
            </section>
            <section className="py-64">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="sidebar">
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
                                <div className="sidebar-widget mb-32">
                                    <div className="widget-title-row"><h6>RECENT POSTS</h6><i className="fa-light fa-horizontal-rule"></i></div>
                                    <div className="widget-content-block">
                                        <ul className="unstyled item-list">
                                            <li><Link to="/blog-detail">Perfect Outdoor Picnic Ideas</Link></li>
                                            <li><Link to="/blog-detail">Ultimate Guide to Picnicking</Link></li>
                                            <li><Link to="/blog-detail">Best Picnic Spots Worldwide</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <div className="row">
                                {[1, 2, 3, 4].map((n, idx) => (
                                    <div key={idx} className="col-lg-4 col-sm-6">
                                        <div className="blog-card mb-32 box-blur-bg">
                                            <div className="content b-radius-20">
                                                <span className="date">12-Oct-2024</span>
                                                <Link to="/blog-detail" className="image-block">
                                                    <img src={`/assets/media/blogs/blog_${n}.png`} alt="" className="blog-img" />
                                                </Link>
                                                <div className="text-block">
                                                    <Link to="/blog-detail" className="mb-16 h6">Blog Post {idx + 1}</Link>
                                                    <p className="mb-40">Lorem ipsum dolor sit amet consectetur...</p>
                                                    <div className="bottom-row">
                                                        <div className="author">
                                                            <img src="/assets/media/users/author.png" alt="" className="author-img" />
                                                            <p>Julia Fernandez</p>
                                                        </div>
                                                        <Link to="/blog-detail" className="ui-link-arrow"><i className="fa-light fa-arrow-right arrow"></i></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </PageLayout>
    )
}
