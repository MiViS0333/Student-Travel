'use client';

import { useState } from 'react';
import Link from 'next/link';

interface TourCardProps {
    image: string;
    title: string;
    location: string;
    days: number;
    persons: number;
    price: string;
    href: string;
    className?: string;
}

export default function TourCard({ image, title, location, days, persons, price, href, className = '' }: TourCardProps) {
    const [wishlisted, setWishlisted] = useState(false);

    return (
        <div className={`tour-card mb-32 ${className}`}>
            <Link href={href} className="image-box">
                <img src={image} alt={title} className="tour-img" />
                <div className="wishlist-icon" onClick={(e) => { e.preventDefault(); setWishlisted(!wishlisted); }}>
                    <i className={`fa-${wishlisted ? 'solid' : 'light'} fa-heart`}></i>
                </div>
            </Link>
            <div className="card-info">
                <Link href={href} className="h5">{title}</Link>
                <div className="location">
                    <i className="fa-light fa-location-crosshairs"></i>
                    <h6>{location}</h6>
                </div>
                <div className="info-detail">
                    <ul className="unstyled">
                        <li><i className="fa-light fa-calendar"></i><p>{days} Days</p></li>
                        <li><i className="fa-solid fa-period dot"></i></li>
                        <li><i className="fa-light fa-user"></i><p>{persons} Person</p></li>
                    </ul>
                    <div className="right-block">
                        <h6>{price}</h6>
                        <Link href={href} className="ui-link-arrow">
                            <i className="fa-light fa-arrow-right arrow"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
