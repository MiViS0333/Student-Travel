import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import PageLayout from '../components/PageLayout'

const tours = [
    { img: 'tour_1.png', title: 'Serene Lakeside Escapes', location: 'Banf National Park, Canada', days: '6 Days', persons: '6 Person', price: '$5000' },
    { img: 'tour_2.png', title: 'Hidden Lake Gems', location: 'Banf National Park, Canada', days: '6 Days', persons: '6 Person', price: '$5000' },
    { img: 'tour_3.png', title: 'Pristine Natural Waters', location: 'Banf National Park, Canada', days: '6 Days', persons: '6 Person', price: '$5000' },
    { img: 'tour_4.png', title: 'Mystical Blue Horizons', location: 'Banf National Park, Canada', days: '6 Days', persons: '6 Person', price: '$5000' },
    { img: 'tour_1.png', title: 'Serene Lakeside Escapes', location: 'Banf National Park, Canada', days: '6 Days', persons: '6 Person', price: '$5000' },
    { img: 'tour_2.png', title: 'Hidden Lake Gems', location: 'Banf National Park, Canada', days: '6 Days', persons: '6 Person', price: '$5000' },
    { img: 'tour_3.png', title: 'Pristine Natural Waters', location: 'Banf National Park, Canada', days: '6 Days', persons: '6 Person', price: '$5000' },
    { img: 'tour_4.png', title: 'Mystical Blue Horizons', location: 'Banf National Park, Canada', days: '6 Days', persons: '6 Person', price: '$5000' },
]

function TourCard({ tour, idx, wishlist, toggleWishlist }) {
    return (
        <div className="tour-card mb-32">
            <Link to="/tour-detail" className="image-box">
                <img src={`/assets/media/tour/${tour.img}`} alt="" className="tour-img" />
                <div className="wishlist-icon" onClick={(e) => { e.preventDefault(); toggleWishlist(idx) }}>
                    <i className={`fa-light fa-heart${wishlist[idx] ? ' fa-solid' : ''}`}></i>
                </div>
            </Link>
            <div className="card-info">
                <Link to="/tour-detail" className="h5">{tour.title}</Link>
                <div className="location"><i className="fa-light fa-location-crosshairs"></i><h6>{tour.location}</h6></div>
                <div className="info-detail">
                    <ul className="unstyled">
                        <li><i className="fa-light fa-calendar"></i><p>{tour.days}</p></li>
                        <li><i className="fa-solid fa-period dot"></i></li>
                        <li><i className="fa-light fa-user"></i><p>{tour.persons}</p></li>
                    </ul>
                    <div className="right-block">
                        <h6>{tour.price}</h6>
                        <Link to="/tour-detail" className="ui-link-arrow"><i className="fa-light fa-arrow-right arrow"></i></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function TourGridPage() {
    const [wishlist, setWishlist] = useState({})
    const toggleWishlist = (idx) => setWishlist(prev => ({ ...prev, [idx]: !prev[idx] }))

    return (
        <PageLayout>
            <section className="page-header">
                <h1 className="color-white">TOUR GRID</h1>
            </section>
            <section className="position-relative z-2 py-64">
                <div className="container-fluid">
                    <div className="heading mb-48">
                        <h3 className="font-sec color-primary">tour list :</h3>
                        <h2>AWESOME TOURS FOR YOU</h2>
                    </div>
                    <div className="row mb-16">
                        {tours.map((tour, idx) => (
                            <div key={idx} className="col-xxl-3 col-lg-4 col-sm-6">
                                <TourCard tour={tour} idx={idx} wishlist={wishlist} toggleWishlist={toggleWishlist} />
                            </div>
                        ))}
                    </div>
                    <div className="text-center">
                        <nav aria-label="Page navigation">
                            <ul className="pagination justify-content-center">
                                <li className="page-item active"><a className="page-link" href="#">1</a></li>
                                <li className="page-item"><a className="page-link" href="#">2</a></li>
                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                <li className="page-item"><a className="page-link" href="#"><i className="fa-light fa-arrow-right"></i></a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </section>
        </PageLayout>
    )
}
