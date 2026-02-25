import React from 'react'
import PageLayout from '../components/PageLayout'
import { Link } from 'react-router-dom'

export default function TourDetailSidebarPage() {
    return (
        <PageLayout>
            <section className="page-header">
                <h1 className="color-white">TOUR DETAIL (SIDEBAR)</h1>
            </section>
            <section className="position-relative z-2 py-64">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="sidebar">
                                <div className="sidebar-widget mb-32">
                                    <div className="widget-title-row"><h6>CATEGORIES</h6><i className="fa-light fa-horizontal-rule"></i></div>
                                    <div className="widget-content-block">
                                        <ul className="unstyled item-list">
                                            <li><a href="#">Adventure</a></li>
                                            <li><a href="#">Historical/Cultural</a></li>
                                            <li><a href="#">Beach</a></li>
                                            <li><a href="#">Relaxation</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <div className="box-blur-bg mb-32">
                                <img src="/assets/media/tour/tour_destination_2.png" alt="" className="b-radius-20 w-100" />
                            </div>
                            <h2 className="mb-16">Serene Lakeside Escapes</h2>
                            <p className="mb-24">Lorem ipsum dolor sit amet consectetur. Aliquam in neque eleifend placerat scelerisque tincidunt erat porttitor. Sed sed in suscipit lorem. Ut felis velit tristique posuere tellus sed.</p>
                            <div className="ui-btn ui-btn-primary">
                                <Link to="/booking" data-hover="BOOK NOW">BOOK NOW</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </PageLayout>
    )
}
