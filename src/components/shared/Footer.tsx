import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="pt-64 pb-40">
            <div className="container-fluid">
                <div className="box-blur-bg">
                    <div className="footer-content bg-white b-radius-20">
                        {/* Features Row */}
                        <div className="features-row row">
                            <div className="col-lg-3 col-6 feature-block">
                                <img src="/media/icons/australia.png" alt="Special Activities" />
                                <h6>SPECIAL ACTIVITES</h6>
                            </div>
                            <div className="col-lg-3 col-6 feature-block">
                                <img src="/media/icons/tour-guide.png" alt="Best Guides" />
                                <h6>BEST GUIDES</h6>
                            </div>
                            <div className="col-lg-3 col-6 feature-block">
                                <img src="/media/icons/bus.png" alt="Transport" />
                                <h6>TRANSPORT SERVICES</h6>
                            </div>
                            <div className="col-lg-3 col-6 feature-block">
                                <img src="/media/icons/online-chat.png" alt="Support" />
                                <h6>UNRIVALED SUPPORT</h6>
                            </div>
                        </div>

                        {/* Footer Main */}
                        <div className="footer-main py-64">
                            <div className="row">
                                <div className="col-xl-5 col-md-8">
                                    <Link href="/" className="footer-logo mb-40">
                                        <img src="/media/footer-logo.png" alt="Logo" />
                                    </Link>
                                    <p className="mb-40 mb-xl-0">
                                        Ideal Office Furniture have been working in the commercial furniture market place for many years
                                        already and come with over 20 years of sales and design experience, so you will be in very good
                                        hands when doing business with us.
                                    </p>
                                </div>
                                <div className="col-xl-6 offset-xl-1">
                                    <div className="footer-right-content">
                                        <div className="footer-widgets mb-40 mb-xl-0">
                                            <div className="row">
                                                <div className="col-sm-4 col-6">
                                                    <div className="widget mb-24">
                                                        <h6 className="mb-12">SITE MAP</h6>
                                                        <ul className="unstyled item-list">
                                                            <li><Link href="/about">About Us</Link></li>
                                                            <li><Link href="/contact">Contact Us</Link></li>
                                                            <li><Link href="/tours/booking">Booking Page</Link></li>
                                                            <li><Link href="/blog">Blogs</Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="col-sm-4 col-6">
                                                    <div className="widget mb-24">
                                                        <h6 className="mb-12">CATEGORIES</h6>
                                                        <ul className="unstyled item-list">
                                                            <li><Link href="/tours">Package</Link></li>
                                                            <li><Link href="/tours">Tours</Link></li>
                                                            <li><Link href="/tours">Honeymoon Plans</Link></li>
                                                            <li><Link href="/tours">Couple Trip</Link></li>
                                                            <li><Link href="/tours">Family Trips</Link></li>
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
                                                                <p>MON-FRI</p><p>09am-5pm</p>
                                                            </li>
                                                            <li className="d-flex align-items-center justify-content-between">
                                                                <p>SAT-SUN</p><p>09am-5pm</p>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Newsletter */}
                                        <div className="newsletter">
                                            <h5 className="mb-12">WANT TO HEAR FROM US?</h5>
                                            <p className="mb-32">
                                                Get regular updates on furniture products, offers and solution. Staying in touch is the best
                                                way to get the best deals. This site is protected by reCAPTCHA and the Google Privacy Policy.
                                            </p>
                                            <form onSubmit={(e) => e.preventDefault()}>
                                                <div className="newsletter-field">
                                                    <div className="form-group">
                                                        <input type="email" required placeholder="email@example.com" />
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

                        {/* Footer Bottom */}
                        <div className="footer-bottom-row">
                            <p>©2025 All Rights Reserved</p>
                            <ul className="unstyled payment-methods">
                                <li><img src="/media/icons/payment-1.png" alt="Payment" /></li>
                                <li><img src="/media/icons/payment-2.png" alt="Payment" /></li>
                                <li><img src="/media/icons/payment-3.png" alt="Payment" /></li>
                                <li><img src="/media/icons/payment-4.png" alt="Payment" /></li>
                                <li><img src="/media/icons/payment-5.png" alt="Payment" /></li>
                            </ul>
                            <ul className="unstyled social-links">
                                <li><a href="#"><img src="/media/icons/Instagram.png" alt="Instagram" /></a></li>
                                <li><a href="#"><img src="/media/icons/Twitter.png" alt="Twitter" /></a></li>
                                <li><a href="#"><img src="/media/icons/Facebook.png" alt="Facebook" /></a></li>
                                <li><a href="#"><img src="/media/icons/Linkedin.png" alt="Linkedin" /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
