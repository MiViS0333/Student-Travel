import React from 'react'
import PageLayout from '../components/PageLayout'

export default function ContactPage() {
    return (
        <PageLayout>
            <section className="page-header">
                <h1 className="color-white">CONTACT US</h1>
            </section>
            <section className="py-64">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6 mb-32">
                            <div className="box-blur-bg">
                                <div className="b-radius-20 bg-white p-4 p-md-5">
                                    <h2 className="mb-32">Get In Touch</h2>
                                    <form className="contact-form">
                                        <div className="row">
                                            <div className="col-md-6 mb-24">
                                                <div className="form-group">
                                                    <input type="text" className="cus-form-control" placeholder="Full Name" required />
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-24">
                                                <div className="form-group">
                                                    <input type="email" className="cus-form-control" placeholder="Email Address" required />
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-24">
                                                <div className="form-group">
                                                    <input type="tel" className="cus-form-control" placeholder="Phone Number" />
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-24">
                                                <div className="form-group">
                                                    <input type="text" className="cus-form-control" placeholder="Subject" required />
                                                </div>
                                            </div>
                                            <div className="col-12 mb-24">
                                                <div className="form-group">
                                                    <textarea className="cus-form-control" rows="5" placeholder="Your Message" required></textarea>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="ui-btn ui-btn-primary">
                                                    <button type="submit" data-hover="SEND MESSAGE">SEND MESSAGE</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="message"></div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mb-32">
                            <div className="box-blur-bg">
                                <div className="b-radius-20 bg-white p-4 p-md-5">
                                    <h2 className="mb-32">Contact Information</h2>
                                    <div className="mb-24">
                                        <h6 className="mb-8">ADDRESS</h6>
                                        <p>123 Travel Street, Suite 456, New York, NY 10001</p>
                                    </div>
                                    <div className="mb-24">
                                        <h6 className="mb-8">PHONE</h6>
                                        <p><a href="tel:123456789">1300 337 446</a></p>
                                    </div>
                                    <div className="mb-24">
                                        <h6 className="mb-8">EMAIL</h6>
                                        <p><a href="mailto:sales@iof.com.au">sales@iof.com.au</a></p>
                                    </div>
                                    <div className="mb-24">
                                        <h6 className="mb-8">WORKING HOURS</h6>
                                        <p>MON-FRI: 09am - 5pm</p>
                                        <p>SAT-SUN: 09am - 5pm</p>
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
