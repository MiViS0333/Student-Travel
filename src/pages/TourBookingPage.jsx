import React from 'react'
import PageLayout from '../components/PageLayout'

export default function TourBookingPage() {
    return (
        <PageLayout>
            <section className="page-header">
                <h1 className="color-white">TOUR BOOKING</h1>
            </section>
            <section className="position-relative z-2 py-64">
                <div className="container-fluid">
                    <div className="box-blur-bg">
                        <div className="b-radius-20 bg-white p-4 p-md-5">
                            <h2 className="mb-32">Book Your Tour</h2>
                            <form className="booking-form">
                                <div className="row">
                                    <div className="col-md-6 mb-24">
                                        <div className="form-group">
                                            <label className="mb-8"><h6>First Name</h6></label>
                                            <input type="text" className="cus-form-control" placeholder="First Name" required />
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-24">
                                        <div className="form-group">
                                            <label className="mb-8"><h6>Last Name</h6></label>
                                            <input type="text" className="cus-form-control" placeholder="Last Name" required />
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-24">
                                        <div className="form-group">
                                            <label className="mb-8"><h6>Email</h6></label>
                                            <input type="email" className="cus-form-control" placeholder="Email Address" required />
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-24">
                                        <div className="form-group">
                                            <label className="mb-8"><h6>Phone Number</h6></label>
                                            <input type="tel" className="cus-form-control" placeholder="Phone Number" required />
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-24">
                                        <div className="form-group">
                                            <label className="mb-8"><h6>Select Tour</h6></label>
                                            <select className="cus-form-control">
                                                <option>Serene Lakeside Escapes</option>
                                                <option>Hidden Lake Gems</option>
                                                <option>Pristine Natural Waters</option>
                                                <option>Mystical Blue Horizons</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-24">
                                        <div className="form-group">
                                            <label className="mb-8"><h6>Number of Persons</h6></label>
                                            <input type="number" className="cus-form-control" placeholder="Number of Persons" min="1" />
                                        </div>
                                    </div>
                                    <div className="col-12 mb-24">
                                        <div className="form-group">
                                            <label className="mb-8"><h6>Special Requests</h6></label>
                                            <textarea className="cus-form-control" rows="5" placeholder="Any special requests..."></textarea>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="ui-btn ui-btn-primary">
                                            <button type="submit" data-hover="SUBMIT">SUBMIT</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </PageLayout>
    )
}
