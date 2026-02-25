import React from 'react'
import PageLayout from '../components/PageLayout'
import { Link } from 'react-router-dom'

const blogs = [
    { img: 'blog_1.png', title: 'Perfect Outdoor Picnic Ideas', author: 'Julia Fernandez', authorImg: 'author.png' },
    { img: 'blog_2.png', title: 'Ultimate Guide to Picnicking', author: 'Carlos Taylor', authorImg: 'author-2.png' },
    { img: 'blog_3.png', title: 'Best Picnic Spots Worldwide', author: 'Julia Fernandez', authorImg: 'author.png' },
    { img: 'blog_4.png', title: 'Delicious Picnic Food Ideas', author: 'Julia Fernandez', authorImg: 'author.png' },
    { img: 'blog_1.png', title: 'Perfect Outdoor Picnic Ideas', author: 'Julia Fernandez', authorImg: 'author.png' },
    { img: 'blog_2.png', title: 'Ultimate Guide to Picnicking', author: 'Carlos Taylor', authorImg: 'author-2.png' },
]

export default function BlogGridPage() {
    return (
        <PageLayout>
            <section className="page-header">
                <h1 className="color-white">BLOG GRID</h1>
            </section>
            <section className="py-64">
                <div className="container-fluid">
                    <div className="heading mb-48">
                        <h3 className="font-sec color-primary">blogs :</h3>
                        <h2>READ EXCITING STORIES</h2>
                    </div>
                    <div className="row">
                        {blogs.map((blog, idx) => (
                            <div key={idx} className="col-xxl-3 col-lg-4 col-sm-6">
                                <div className="blog-card mb-32 box-blur-bg">
                                    <div className="content b-radius-20">
                                        <span className="date">12-Oct-2024</span>
                                        <Link to="/blog-detail" className="image-block">
                                            <img src={`/assets/media/blogs/${blog.img}`} alt="" className="blog-img" />
                                        </Link>
                                        <div className="text-block">
                                            <Link to="/blog-detail" className="mb-16 h6">{blog.title}</Link>
                                            <p className="mb-40">Lorem ipsum dolor sit amet consectetur. Aliquam in neque eleifend placera...</p>
                                            <div className="bottom-row">
                                                <div className="author">
                                                    <img src={`/assets/media/users/${blog.authorImg}`} alt="" className="author-img" />
                                                    <p>{blog.author}</p>
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
            </section>
        </PageLayout>
    )
}
