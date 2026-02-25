import React from 'react'
import PageLayout from '../components/PageLayout'
import { Link } from 'react-router-dom'

export default function TourDetailPage() {
    return (
        <PageLayout>
            <section className="page-header">
                <h1 className="color-white">TOUR DETAIL</h1>
            </section>
            <section className="position-relative z-2 py-64">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="box-blur-bg mb-32">
                                <img src="/assets/media/tour/tour_destination_1.png" alt="" className="b-radius-20 w-100" />
                            </div>
                            <h2 className="mb-16">Serene Lakeside Escapes</h2>
                            <div className="info-detail mb-24">
                                <ul className="unstyled">
                                    <li><i className="fa-light fa-location-crosshairs"></i><p>Banf National Park, Canada</p></li>
                                    <li><i className="fa-solid fa-period dot"></i></li>
                                    <li><i className="fa-light fa-calendar"></i><p>6 Days</p></li>
                                    <li><i className="fa-solid fa-period dot"></i></li>
                                    <li><i className="fa-light fa-user"></i><p>6 Person</p></li>
                                </ul>
                            </div>
                            <p className="mb-24">Lorem ipsum dolor sit amet consectetur. Aliquam in neque eleifend placerat scelerisque tincidunt erat porttitor. Sed sed in suscipit lorem. Ut felis velit tristique posuere tellus sed. Arcu convallis nam massa leo viverra volutpat facilisis. Nulla sagittis nam pellentesque sagittis in turpis nulla et. Varius felis pellentesque molestie justo semper id.</p>
                            <p className="mb-24">Donec tortor dui et etiam. Vitae fermentum nibh nam ac aliquet fringilla ante integer. Scelerisque adipiscing eget nisl ut molestie. Lorem ipsum dolor sit amet consectetur. Aliquam in neque eleifend placerat scelerisque tincidunt erat porttitor.</p>
                            <h4 className="mb-16">Highlights</h4>
                            <ul className="mb-24">
                                <li>Breathtaking mountain scenery</li>
                                <li>Crystal clear lake waters</li>
                                <li>Professional tour guides</li>
                                <li>Comfortable accommodation</li>
                                <li>Local cuisine experiences</li>
                            </ul>
                        </div>
                        <div className="col-lg-4">
                            <div className="box-blur-bg mb-32">
                                <div className="b-radius-20 bg-white p-4">
                                    <h4 className="mb-16">Book This Tour</h4>
                                    <h2 className="color-primary mb-24">$5000</h2>
                                    <div className="ui-btn ui-btn-primary w-100 text-center">
                                        <Link to="/booking" data-hover="BOOK NOW">BOOK NOW</Link>
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
