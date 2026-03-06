'use client';

import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import PageHeader from '@/components/shared/PageHeader';
import TourCard from '@/components/ui/TourCard';
import NiceSelect from '@/components/ui/NiceSelect';

const allTours = [
    { image: '/media/tour/tour_1.png', title: 'Serene Lakeside Escapes', location: 'Banf National Park, Canada', days: 6, persons: 6, price: 5000, type: 'adventure', destination: 'bali', departure: 'toronto' },
    { image: '/media/tour/tour_2.png', title: 'Hidden Lake Gems', location: 'Banf National Park, Canada', days: 6, persons: 6, price: 4200, type: 'relaxation', destination: 'kyoto', departure: 'mumbai' },
    { image: '/media/tour/tour_3.png', title: 'Pristine Natural Waters', location: 'Banf National Park, Canada', days: 6, persons: 6, price: 3800, type: 'historical', destination: 'paris', departure: 'rome' },
    { image: '/media/tour/tour_4.png', title: 'Mystical Blue Horizons', location: 'Banf National Park, Canada', days: 6, persons: 6, price: 2500, type: 'beach', destination: 'hawaii', departure: 'istanbul' },
    { image: '/media/tour/tour_1.png', title: 'Alpine Adventure', location: 'Swiss Alps', days: 8, persons: 4, price: 6500, type: 'adventure', destination: 'rome', departure: 'cairo' },
    { image: '/media/tour/tour_2.png', title: 'Coastal Retreat', location: 'Amalfi Coast, Italy', days: 5, persons: 2, price: 3200, type: 'romantic', destination: 'rome', departure: 'toronto' },
    { image: '/media/tour/tour_3.png', title: 'Desert Safari', location: 'Sahara, Egypt', days: 4, persons: 10, price: 1500, type: 'adventure', destination: 'paris', departure: 'cairo' },
    { image: '/media/tour/tour_4.png', title: 'Urban Explorer', location: 'Tokyo, Japan', days: 7, persons: 1, price: 2800, type: 'historical', destination: 'kyoto', departure: 'mumbai' },
];

const destinationOptions = [
    { value: 'kyoto', label: 'Киото, Япония' },
    { value: 'bali', label: 'Бали, Индонезия' },
    { value: 'paris', label: 'Париж, Франция' },
    { value: 'hawaii', label: 'Гавайи, США' },
    { value: 'rome', label: 'Рим, Италия' },
];

const departureOptions = [
    { value: 'tashkent', label: 'Ташкент, Узбекистан' },
    { value: 'samarkand', label: 'Самарканд, Узбекистан' },
    { value: 'bukhara', label: 'Бухара, Узбекистан' },
    { value: 'khiva', label: 'Хива, Узбекистан' },
    { value: 'fergana', label: 'Фергана, Узбекистан' },
];

const typeOptions = [
    { value: 'adventure', label: 'Приключения' },
    { value: 'historical', label: 'Исторические/Культурные' },
    { value: 'beach', label: 'Пляжные' },
    { value: 'relaxation', label: 'Отдых' },
    { value: 'romantic', label: 'Романтические' },
];

const sortOptions = [
    { value: 'default', label: 'По умолчанию' },
    { value: 'price-low', label: 'Цена: дешевле' },
    { value: 'price-high', label: 'Цена: дороже' },
    { value: 'name-az', label: 'Название: А-Я' },
    { value: 'name-za', label: 'Название: Я-А' },
];

export default function ToursPage() {
    const searchParams = useSearchParams();
    const [currentPage, setCurrentPage] = useState(1);
    const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

    const [filters, setFilters] = useState({
        destination: searchParams.get('destination') || '',
        departure: searchParams.get('departure') || '',
        type: searchParams.get('type') || '',
        maxPrice: 10000,
    });

    const [sortBy, setSortBy] = useState('default');

    const handleFilterChange = (name: string, value: string | number) => {
        setFilters(prev => ({ ...prev, [name]: value }));
        setCurrentPage(1);
    };

    const filteredTours = useMemo(() => {
        let result = allTours.filter(tour => {
            const matchDestination = !filters.destination || tour.destination === filters.destination;
            const matchDeparture = !filters.departure || tour.departure === filters.departure;
            const matchType = !filters.type || tour.type === filters.type;
            const matchPrice = tour.price <= filters.maxPrice;
            return matchDestination && matchDeparture && matchType && matchPrice;
        });

        if (sortBy === 'price-low') result.sort((a, b) => a.price - b.price);
        else if (sortBy === 'price-high') result.sort((a, b) => b.price - a.price);
        else if (sortBy === 'name-az') result.sort((a, b) => a.title.localeCompare(b.title));
        else if (sortBy === 'name-za') result.sort((a, b) => b.title.localeCompare(a.title));

        return result;
    }, [filters, sortBy]);

    const toursPerPage = 8;
    const paginatedTours = filteredTours.slice((currentPage - 1) * toursPerPage, currentPage * toursPerPage);
    const totalPages = Math.ceil(filteredTours.length / toursPerPage);

    return (
        <>
            <PageHeader title="СПИСОК ТУРОВ" />

            <section className="py-64">
                <div className="container-fluid">
                    {/* Mobile Filter Button */}
                    <div className="d-xl-none mb-32 d-flex justify-content-center">
                        <button className="filter-toggle-btn" onClick={() => setIsMobileFilterOpen(true)}>
                            <i className="fa-light fa-sliders-up"></i> Фильтры
                        </button>
                    </div>

                    {/* Filter Row */}
                    <div className={`filter-popup-overlay ${isMobileFilterOpen ? 'active' : ''}`} onClick={() => setIsMobileFilterOpen(false)}></div>
                    <div className={`filter-popup ${isMobileFilterOpen ? 'active' : ''}`}>
                        <div className="filter-popup-header d-xl-none">
                            <h5>Фильтры</h5>
                            <button className="close-btn" onClick={() => setIsMobileFilterOpen(false)}>
                                <i className="fa-light fa-xmark"></i>
                            </button>
                        </div>

                        <div className="row mb-48 align-items-stretch g-4">
                            <div className="col-xl-9">
                                <div className="filter-card">
                                    <form className="row g-3" onSubmit={(e) => e.preventDefault()}>
                                        <div className="col-lg-3 col-sm-6">
                                            <div className="form-group">
                                                <NiceSelect
                                                    name="destination"
                                                    options={destinationOptions}
                                                    placeholder="Куда?"
                                                    defaultValue={filters.destination}
                                                    onChange={(val) => handleFilterChange('destination', val)}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-sm-6">
                                            <div className="form-group">
                                                <NiceSelect
                                                    name="departure"
                                                    options={departureOptions}
                                                    placeholder="Откуда"
                                                    defaultValue={filters.departure}
                                                    onChange={(val) => handleFilterChange('departure', val)}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-sm-6">
                                            <div className="form-group">
                                                <NiceSelect
                                                    name="type"
                                                    options={typeOptions}
                                                    placeholder="Тип тура"
                                                    defaultValue={filters.type}
                                                    onChange={(val) => handleFilterChange('type', val)}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-sm-6">
                                            <div className="form-group">
                                                <NiceSelect
                                                    name="sort"
                                                    options={sortOptions}
                                                    placeholder="Сортировка"
                                                    defaultValue={sortBy}
                                                    onChange={(val) => setSortBy(val)}
                                                />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-xl-3">
                                <div className="price-filter">
                                    <div className="filter-title">
                                        <h6>Макс. цена:</h6>
                                        <span className="price-amount">${filters.maxPrice}</span>
                                    </div>
                                    <input
                                        type="range"
                                        min="500"
                                        max="10000"
                                        step="100"
                                        value={filters.maxPrice}
                                        onChange={(e) => handleFilterChange('maxPrice', parseInt(e.target.value))}
                                        className="range-slider"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="filter-popup-footer d-xl-none mt-24">
                            <button className="show-tours-btn" onClick={() => setIsMobileFilterOpen(false)}>Показать туры</button>
                        </div>
                    </div>

                    {/* Tour Grid */}
                    <div className="row">
                        {paginatedTours.length > 0 ? (
                            paginatedTours.map((tour, i) => (
                                <div key={i} className="col-xxl-3 col-lg-4 col-sm-6">
                                    <TourCard {...tour} href={`/tours/${i + 1}`} />
                                </div>
                            ))
                        ) : (
                            <div className="col-12 text-center py-64">
                                <h3 className="color-primary">Туры, соответствующие вашим критериям, не найдены.</h3>
                            </div>
                        )}
                    </div>

                    {/* Pagination */}
                    {totalPages > 1 && (
                        <ul className="pagination text-center mt-32">
                            <li className={`prev ${currentPage === 1 ? 'disabled' : ''}`}>
                                <a href="#" onClick={(e) => { e.preventDefault(); if (currentPage > 1) setCurrentPage(currentPage - 1); }}>
                                    <i className="fa-light fa-arrow-left"></i>
                                </a>
                            </li>
                            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                                <li key={page} className={currentPage === page ? 'active' : ''}>
                                    <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage(page); }}>{page}</a>
                                </li>
                            ))}
                            <li className={`next ${currentPage === totalPages ? 'disabled' : ''}`}>
                                <a href="#" onClick={(e) => { e.preventDefault(); if (currentPage < totalPages) setCurrentPage(currentPage + 1); }}>
                                    <i className="fa-light fa-arrow-right"></i>
                                </a>
                            </li>
                        </ul>
                    )}
                </div>
            </section>
        </>
    );
}
