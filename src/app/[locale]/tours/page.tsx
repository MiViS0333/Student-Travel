'use client';

import { useState } from 'react';
import PageHeader from '@/components/shared/PageHeader';
import TourCard from '@/components/ui/TourCard';

const allTours = [
    { image: '/media/tour/tour_1.png', title: 'Serene Lakeside Escapes', location: 'Banf National Park, Canada', days: 6, persons: 6, price: '$5000' },
    { image: '/media/tour/tour_2.png', title: 'Hidden Lake Gems', location: 'Banf National Park, Canada', days: 6, persons: 6, price: '$5000' },
    { image: '/media/tour/tour_3.png', title: 'Pristine Natural Waters', location: 'Banf National Park, Canada', days: 6, persons: 6, price: '$5000' },
    { image: '/media/tour/tour_4.png', title: 'Mystical Blue Horizons', location: 'Banf National Park, Canada', days: 6, persons: 6, price: '$5000' },
    { image: '/media/tour/tour_1.png', title: 'Serene Lakeside Escapes', location: 'Banf National Park, Canada', days: 6, persons: 6, price: '$5000' },
    { image: '/media/tour/tour_2.png', title: 'Hidden Lake Gems', location: 'Banf National Park, Canada', days: 6, persons: 6, price: '$5000' },
    { image: '/media/tour/tour_3.png', title: 'Pristine Natural Waters', location: 'Banf National Park, Canada', days: 6, persons: 6, price: '$5000' },
    { image: '/media/tour/tour_4.png', title: 'Mystical Blue Horizons', location: 'Banf National Park, Canada', days: 6, persons: 6, price: '$5000' },
];

export default function ToursPage() {
    const [currentPage, setCurrentPage] = useState(1);

    return (
        <>
            <PageHeader title="TOURS LIST" />

            <section className="py-64">
                <div className="container-fluid">
                    {/* Filter Row */}
                    <div className="filter-row mb-48">
                        <form className="search-filters" onSubmit={(e) => e.preventDefault()}>
                            <div className="form-group">
                                <select name="destination" className="cus-form-control" defaultValue="">
                                    <option value="" disabled>Where to?</option>
                                    <option value="kyoto">Kyoto, Japan</option>
                                    <option value="bali">Bali, Indonesia</option>
                                    <option value="paris">Paris, France</option>
                                    <option value="hawaii">Hawaii, USA</option>
                                    <option value="rome">Rome, Italy</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <select name="departure" className="cus-form-control" defaultValue="">
                                    <option value="" disabled>Select Departure</option>
                                    <option value="mumbai">Mumbai, India</option>
                                    <option value="toronto">Toronto, Canada</option>
                                    <option value="rome">Rome, Italy</option>
                                    <option value="istanbul">Istanbul, Turkey</option>
                                    <option value="cairo">Cairo, Egypt</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <select name="type" className="cus-form-control" defaultValue="">
                                    <option value="" disabled>Select Type</option>
                                    <option value="adventure">Adventure</option>
                                    <option value="historical">Historical/Cultural</option>
                                    <option value="beach">Beach</option>
                                    <option value="relaxation">Relaxation</option>
                                    <option value="romantic">Romantic</option>
                                </select>
                            </div>
                            <div className="ui-btn ui-btn-primary">
                                <button type="submit" data-hover="FIND NOW">FIND NOW</button>
                            </div>
                        </form>
                        <div className="price-filter">
                            <input
                                type="range"
                                min="200"
                                max="3000"
                                defaultValue="700"
                                className="range-slider"
                            />
                        </div>
                    </div>

                    {/* Tour Grid */}
                    <div className="row">
                        {allTours.map((tour, i) => (
                            <div key={i} className={`col-xxl-3 col-lg-4 col-sm-6${i % 4 === 3 ? ' d-xxl-block d-lg-none' : ''}`}>
                                <TourCard {...tour} href={`/tours/${i + 1}`} />
                            </div>
                        ))}
                    </div>

                    {/* Pagination */}
                    <ul className="pagination text-center">
                        <li className="prev">
                            <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage(Math.max(1, currentPage - 1)); }}>
                                <i className="fa-light fa-arrow-left"></i>
                            </a>
                        </li>
                        {[1, 2, 3, 4].map((page) => (
                            <li key={page} className={currentPage === page ? 'active' : ''}>
                                <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage(page); }}>{page}</a>
                            </li>
                        ))}
                        <li className="next">
                            <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage(Math.min(4, currentPage + 1)); }}>
                                <i className="fa-light fa-arrow-right"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    );
}
