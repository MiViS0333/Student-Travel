'use client';

import { useState } from 'react';
import PageHeader from '@/components/shared/PageHeader';

export default function TourBookingPage() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        destination: '',
        persons: '1',
        date: '',
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle booking submission
    };

    return (
        <>
            <PageHeader title="TOUR BOOKING" />

            <section className="py-64">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-8 col-lg-10 mx-auto">
                            <div className="box-blur-bg">
                                <div className="booking-form b-radius-20 bg-white p-48">
                                    <h3 className="mb-32">BOOK YOUR TOUR</h3>
                                    <form onSubmit={handleSubmit}>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group mb-24">
                                                    <label className="mb-8 h6">First Name</label>
                                                    <input type="text" name="firstName" className="cus-form-control" value={formData.firstName}
                                                        onChange={handleChange} required placeholder="First Name" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group mb-24">
                                                    <label className="mb-8 h6">Last Name</label>
                                                    <input type="text" name="lastName" className="cus-form-control" value={formData.lastName}
                                                        onChange={handleChange} required placeholder="Last Name" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group mb-24">
                                                    <label className="mb-8 h6">Email</label>
                                                    <input type="email" name="email" className="cus-form-control" value={formData.email}
                                                        onChange={handleChange} required placeholder="Email Address" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group mb-24">
                                                    <label className="mb-8 h6">Phone</label>
                                                    <input type="tel" name="phone" className="cus-form-control" value={formData.phone}
                                                        onChange={handleChange} required placeholder="Phone Number" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group mb-24">
                                                    <label className="mb-8 h6">Destination</label>
                                                    <select name="destination" className="cus-form-control" value={formData.destination}
                                                        onChange={handleChange} required>
                                                        <option value="" disabled>Select Destination</option>
                                                        <option value="kyoto">Kyoto, Japan</option>
                                                        <option value="bali">Bali, Indonesia</option>
                                                        <option value="paris">Paris, France</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group mb-24">
                                                    <label className="mb-8 h6">Travel Date</label>
                                                    <input type="date" name="date" className="cus-form-control" value={formData.date}
                                                        onChange={handleChange} required />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group mb-24">
                                                    <label className="mb-8 h6">Persons</label>
                                                    <select name="persons" className="cus-form-control" value={formData.persons}
                                                        onChange={handleChange}>
                                                        <option value="1">1 Person</option>
                                                        <option value="2">2 Persons</option>
                                                        <option value="3">3 Persons</option>
                                                        <option value="4">4 Persons</option>
                                                        <option value="5">5+ Persons</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-group mb-32">
                                                    <label className="mb-8 h6">Additional Message</label>
                                                    <textarea name="message" className="cus-form-control textarea" value={formData.message}
                                                        onChange={handleChange} rows={5} placeholder="Your message..."></textarea>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="ui-btn ui-btn-primary">
                                                    <button type="submit" data-hover="BOOK NOW">BOOK NOW</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
