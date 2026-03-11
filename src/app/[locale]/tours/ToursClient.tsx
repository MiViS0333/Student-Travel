'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import TourCard from '@/components/ui/TourCard';
import NiceSelect from '@/components/ui/NiceSelect';
import { useTranslation } from 'react-i18next';
import { Tour, ToursResponse, TourLocationsResponse, TourType } from '@/lib/api/tours/tours.types';

interface ToursClientProps {
    initialTours: ToursResponse;
    locations: TourLocationsResponse;
    tourTypes: TourType[];
    locale: string;
}

export default function ToursClient({ initialTours, locations, tourTypes, locale }: ToursClientProps) {
    const { t } = useTranslation('tours');
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const sortOptions = [
        { value: 'default', label: t('sort_default') },
        { value: 'price-low', label: t('sort_price_low') },
        { value: 'price-high', label: t('sort_price_high') },
        { value: 'name-az', label: t('sort_name_az') },
        { value: 'name-za', label: t('sort_name_za') },
    ];

    const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

    // Initial filter states from URL search params
    const [destination, setDestination] = useState(searchParams.get('destination') || '');
    const [departure, setDeparture] = useState(searchParams.get('departure') || '');
    const [type, setType] = useState(searchParams.get('type') || '');
    const [maxPrice, setMaxPrice] = useState(Number(searchParams.get('maxPrice')) || 10000);
    const [sortBy, setSortBy] = useState(searchParams.get('sort') || 'default');

    // We also track if it's the first render to prevent pushing query params on mount
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const handleFilterChange = (name: string, value: string | number) => {
        if (name === 'destination') setDestination(String(value));
        if (name === 'departure') setDeparture(String(value));
        if (name === 'type') setType(String(value));
        if (name === 'maxPrice') setMaxPrice(Number(value));
        if (name === 'sort') setSortBy(String(value));
    };

    // Update the URL when any filter changes, which pushes to SSR
    useEffect(() => {
        if (!isMounted) return;

        const currentParams = new URLSearchParams(Array.from(searchParams.entries()));

        const updateParam = (key: string, val: string | number) => {
            if (val) {
                currentParams.set(key, String(val));
            } else {
                currentParams.delete(key);
            }
        };

        updateParam('destination', destination);
        updateParam('departure', departure);
        updateParam('type', type);
        updateParam('maxPrice', maxPrice !== 10000 ? maxPrice : '');
        updateParam('sort', sortBy !== 'default' ? sortBy : '');

        // Reset page to 1 on any filter change (other than pagination itself which is handled in handlePageChange)
        currentParams.delete('page');

        const newUrl = `${pathname}?${currentParams.toString()}`;
        if (`${pathname}?${searchParams.toString()}` !== newUrl && newUrl !== pathname + '?') {
            router.push(newUrl, { scroll: false });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [destination, departure, type, maxPrice, sortBy]);

    const handlePageChange = (page: number) => {
        const currentParams = new URLSearchParams(Array.from(searchParams.entries()));
        currentParams.set('page', String(page));
        router.push(`${pathname}?${currentParams.toString()}`, { scroll: true });
    };

    const destinationOptions = locations.destinations.map(d => ({ value: d, label: d }));
    const departureOptions = locations.departures.map(d => ({ value: d, label: d }));
    const typeOptions = tourTypes.map(t => {
        const langData = t.languages.find(l => l.languageCode === locale.toUpperCase());
        return { value: t.id, label: langData?.name || 'Unknown Type' };
    });

    const getTourTitle = (tour: Tour) => {
        const langData = tour.languages?.find(l => l.languageCode === locale.toUpperCase());
        return langData?.title || 'Unknown Tour';
    };

    const getTourLocation = (tour: Tour) => {
        const langData = tour.languages?.find(l => l.languageCode === locale.toUpperCase());
        return `${langData?.departure || ''} - ${langData?.destination || ''}`;
    };

    // Client-side sorting for the current page.
    let displayTours = [...initialTours.data];
    if (sortBy === 'price-low') displayTours.sort((a, b) => a.price - b.price);
    else if (sortBy === 'price-high') displayTours.sort((a, b) => b.price - a.price);
    else if (sortBy === 'name-az') displayTours.sort((a, b) => getTourTitle(a).localeCompare(getTourTitle(b)));
    else if (sortBy === 'name-za') displayTours.sort((a, b) => getTourTitle(b).localeCompare(getTourTitle(a)));

    const currentPage = initialTours.meta.page;
    const totalPages = initialTours.meta.totalPages;

    return (
        <section className="py-64">
            <div className="container-fluid">
                {/* Mobile Filter Button */}
                <div className="d-xl-none mb-32 d-flex justify-content-center">
                    <button className="filter-toggle-btn" onClick={() => setIsMobileFilterOpen(true)}>
                        <i className="fa-light fa-sliders-up"></i> {t('filters')}
                    </button>
                </div>

                {/* Filter Row */}
                <div className={`filter-popup-overlay ${isMobileFilterOpen ? 'active' : ''}`} onClick={() => setIsMobileFilterOpen(false)}></div>
                <div className={`filter-popup ${isMobileFilterOpen ? 'active' : ''}`}>
                    <div className="filter-popup-header d-xl-none">
                        <h5>{t('filters')}</h5>
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
                                                options={[{ value: '', label: t('destination') }, ...destinationOptions]}
                                                placeholder={t('destination')}
                                                defaultValue={destination}
                                                onChange={(val) => handleFilterChange('destination', val)}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-sm-6">
                                        <div className="form-group">
                                            <NiceSelect
                                                name="departure"
                                                options={[{ value: '', label: t('departure') }, ...departureOptions]}
                                                placeholder={t('departure')}
                                                defaultValue={departure}
                                                onChange={(val) => handleFilterChange('departure', val)}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-sm-6">
                                        <div className="form-group">
                                            <NiceSelect
                                                name="type"
                                                options={[{ value: '', label: t('tour_type') }, ...typeOptions]}
                                                placeholder={t('tour_type')}
                                                defaultValue={type}
                                                onChange={(val) => handleFilterChange('type', val)}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-sm-6">
                                        <div className="form-group">
                                            <NiceSelect
                                                name="sort"
                                                options={sortOptions}
                                                placeholder={t('sorting')}
                                                defaultValue={sortBy}
                                                onChange={(val) => handleFilterChange('sort', val)}
                                            />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-xl-3">
                            <div className="price-filter">
                                <div className="filter-title">
                                    <h6>{t('max_price')}</h6>
                                    <span className="price-amount">${maxPrice}</span>
                                </div>
                                <input
                                    type="range"
                                    min="500"
                                    max="10000"
                                    step="100"
                                    value={maxPrice}
                                    onChange={(e) => handleFilterChange('maxPrice', parseInt(e.target.value))}
                                    className="range-slider"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="filter-popup-footer d-xl-none mt-24">
                        <button className="show-tours-btn" onClick={() => setIsMobileFilterOpen(false)}>{t('show_tours')}</button>
                    </div>
                </div>

                {/* Tour Grid */}
                <div className="row">
                    {displayTours.length > 0 ? (
                        displayTours.map((tour) => (
                            <div key={tour.id} className="col-xxl-3 col-lg-4 col-sm-6">
                                <TourCard
                                    image={tour.card_image || tour.image || ''}
                                    title={getTourTitle(tour)}
                                    location={getTourLocation(tour)}
                                    days={tour.max_person || 6}
                                    persons={tour.max_person || 1}
                                    price={tour.price}
                                    href={`/${locale}/tours/${tour.id}`}
                                />
                            </div>
                        ))
                    ) : (
                        <div className="col-12 text-center py-64">
                            <h3 className="color-primary">{t('not_found')}</h3>
                        </div>
                    )}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                    <ul className="pagination text-center mt-32">
                        <li className={`prev ${currentPage <= 1 ? 'disabled' : ''}`}>
                            <a href="#" onClick={(e) => { e.preventDefault(); if (currentPage > 1) handlePageChange(currentPage - 1); }}>
                                <i className="fa-light fa-arrow-left"></i>
                            </a>
                        </li>
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                            <li key={page} className={currentPage === page ? 'active' : ''}>
                                <a href="#" onClick={(e) => { e.preventDefault(); handlePageChange(page); }}>{page}</a>
                            </li>
                        ))}
                        <li className={`next ${currentPage >= totalPages ? 'disabled' : ''}`}>
                            <a href="#" onClick={(e) => { e.preventDefault(); if (currentPage < totalPages) handlePageChange(currentPage + 1); }}>
                                <i className="fa-light fa-arrow-right"></i>
                            </a>
                        </li>
                    </ul>
                )}
            </div>
        </section>
    );
}
