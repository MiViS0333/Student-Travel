import React from 'react'
import PageLayout from '../components/PageLayout'
import { Link } from 'react-router-dom'

export default function TourGridLeftSidebar() {
    return (
        <PageLayout>
            <section className="page-header">
                <h1 className="color-white">TOUR GRID (SIDEBAR LEFT)</h1>
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
                                            <li><a href="#">Romantic</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="sidebar-widget mb-32">
                                    <div className="widget-title-row"><h6>PRICE RANGE</h6><i className="fa-light fa-horizontal-rule"></i></div>
                                    <div className="widget-content-block">
                                        <input type="text" className="range-slider" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <div className="heading mb-48">
                                <h3 className="font-sec color-primary">tour list :</h3>
                                <h2>AWESOME TOURS FOR YOU</h2>
                            </div>
                            <div className="row mb-16">
                                {[1, 2, 3, 4, 1, 2].map((n, idx) => (
                                    <div key={idx} className="col-lg-4 col-sm-6">
                                        <div className="tour-card mb-32">
                                            <Link to="/tour-detail" className="image-box">
                                                <img src={`/assets/media/tour/tour_${n}.png`} alt="" className="tour-img" />
                                                <div className="wishlist-icon"><i className="fa-light fa-heart"></i></div>
                                            </Link>
                                            <div className="card-info">
                                                <Link to="/tour-detail" className="h5">Tour Package {idx + 1}</Link>
                                                <div className="location"><i className="fa-light fa-location-crosshairs"></i><h6>Banf National Park, Canada</h6></div>
                                                <div className="info-detail">
                                                    <ul className="unstyled">
                                                        <li><i className="fa-light fa-calendar"></i><p>6 Days</p></li>
                                                        <li><i className="fa-solid fa-period dot"></i></li>
                                                        <li><i className="fa-light fa-user"></i><p>6 Person</p></li>
                                                    </ul>
                                                    <div className="right-block">
                                                        <h6>$5000</h6>
                                                        <Link to="/tour-detail" className="ui-link-arrow"><i className="fa-light fa-arrow-right arrow"></i></Link>
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
