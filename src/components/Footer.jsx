import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className="pt-64 pb-40">
            <div className="container-fluid">
                <div className="box-blur-bg">
                    <div className="footer-content bg-white b-radius-20">
                        <div className="features-row row">
                            <div className="col-lg-3 col-6 feature-block">
                                <img src="/assets/media/icons/australia.png" alt="" />
                                <h6>SPECIAL ACTIVITES</h6>
                            </div>
                            <div className="col-lg-3 col-6 feature-block">
                                <img src="/assets/media/icons/tour-guide.png" alt="" />
                                <h6>BEST GUIDES</h6>
                            </div>
                            <div className="col-lg-3 col-6 feature-block">
                                <img src="/assets/media/icons/bus.png" alt="" />
                                <h6>TRANSPORT SERVICES</h6>
                            </div>
                            <div className="col-lg-3 col-6 feature-block">
                                <img src="/assets/media/icons/online-chat.png" alt="" />
                                <h6>UNRIVALED SUPPORT</h6>
                            </div>
                        </div>
                        <div className="footer-main py-64">
                            <div className="row">
                                <div className="col-xl-5 col-md-8">
                                    <Link to="/" className="footer-logo mb-40">
                                        <img src="/assets/media/footer-logo.png" alt="" />
                                    </Link>
                                    <p className="mb-40 mb-xl-0">Ideal Office Furniture have been working in the
                                        commercial furniture market place for many years already and come with
                                        over 20 years of sales and design experience, so you will be in very
                                        good hands when doing business with us.</p>
                                </div>
                                <div className="col-xl-6 offset-xl-1">
                                    <div className="footer-right-content">
                                        <div className="footer-widgets mb-40 mb-xl-0">
                                            <div className="row">
                                                <div className="col-sm-4 col-6">
                                                    <div className="widget mb-24">
                                                        <h6 className="mb-12">SITE MAP</h6>
                                                        <ul className="unstyled item-list">
                                                            <li><Link to="/about">About Us</Link></li>
                                                            <li><Link to="/contact">Contact Us</Link></li>
                                                            <li><Link to="/booking">Booking Page</Link></li>
                                                            <li><Link to="/blog">Blogs</Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="col-sm-4 col-6">
                                                    <div className="widget mb-24">
                                                        <h6 className="mb-12">CATEGORIES</h6>
                                                        <ul className="unstyled item-list">
                                                            <li><Link to="/tours">Package</Link></li>
                                                            <li><Link to="/tours">Tours</Link></li>
                                                            <li><Link to="/tours">Honeymoon Plans</Link></li>
                                                            <li><Link to="/tours">Couple Trip</Link></li>
                                                            <li><Link to="/tours">Family Trips</Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="col-sm-4">
                                                    <div className="widget mb-24">
                                                        <h6 className="mb-12">CONTACT INFO</h6>
                                                        <ul className="unstyled item-list">
                                                            <li><a href="tel:123456789">1300 337 446</a></li>
                                                            <li><a href="mailto:info@example.com">sales@iof.com.au</a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="widget mb-24">
                                                        <h6 className="mb-12">OPENING HOUR</h6>
                                                        <ul className="unstyled item-list">
                                                            <li className="d-flex align-items-center justify-content-between">
                                                                <p>MON-FRI</p>
                                                                <p>09am-5pm</p>
                                                            </li>
                                                            <li className="d-flex align-items-center justify-content-between">
                                                                <p>SAT-SUN</p>
                                                                <p>09am-5pm</p>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="newsletter">
                                            <h5 className="mb-12">WANT TO HEAR FROM US?</h5>
                                            <p className="mb-32">Get regular updates on furniture products, offers
                                                and solution. Staying in touch is the best way to get the best
                                                deals. This site is protected by reCAPTCHA and the
                                                Google Privacy Policy.</p>
                                            <form action="/">
                                                <div className="newsletter-field">
                                                    <div className="form-group">
                                                        <input type="email" required placeholder="email@emaple.com" />
                                                    </div>
                                                    <div className="ui-btn ui-btn-primary">
                                                        <button type="submit" data-hover="SUBSCRIBE">SUBSCRIBE</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="footer-bottom-row">
                            <p>©2025 All Rights Reserved</p>
                            <ul className="unstyled payment-methods">
                                <li><img src="/assets/media/icons/payment-1.png" alt="" /></li>
                                <li><img src="/assets/media/icons/payment-2.png" alt="" /></li>
                                <li><img src="/assets/media/icons/payment-3.png" alt="" /></li>
                                <li><img src="/assets/media/icons/payment-4.png" alt="" /></li>
                                <li><img src="/assets/media/icons/payment-5.png" alt="" /></li>
                            </ul>
                            <ul className="unstyled social-links">
                                <li><a href=""><img src="/assets/media/icons/Instagram.png" alt="" /></a></li>
                                <li><a href=""><img src="/assets/media/icons/Twitter.png" alt="" /></a></li>
                                <li><a href=""><img src="/assets/media/icons/Facebook.png" alt="" /></a></li>
                                <li><a href=""><img src="/assets/media/icons/Linkedin.png" alt="" /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
