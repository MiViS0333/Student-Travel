'use client';

import { useState, useEffect } from 'react';
import { IMaskInput } from 'react-imask';
import { useTranslation } from 'react-i18next';
import toast from 'react-hot-toast';
import NiceSelect from '@/components/ui/NiceSelect';
import { Tour } from '@/lib/api';
import { API_BASE_URL } from '@/lib/api/config';

interface TourDetailClientProps {
    tour: Tour;
    locale: string;
}

export default function TourDetailClient({ tour, locale }: TourDetailClientProps) {
    const { t } = useTranslation('tours');
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const [galleries, setGalleries] = useState<string[]>([]);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        if (isPopupOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isPopupOpen]);

    useEffect(() => {
        setGalleries(tour.galleries?.map(g => getImageUrl(g?.image || g?.url || g)) || []);
    }, [tour.galleries]);

    const langData = tour.languages?.find(l => l.languageCode === locale) || tour.languages?.[0];
    const title = langData?.title || 'Unknown Tour';
    const description = langData?.description || '';
    const short_description = langData?.short_description || '';
    const departure = langData?.departure || '';
    const destination = langData?.destination || '';

    const formatPrice = (p: number) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            maximumFractionDigits: 0,
        }).format(p);
    };

    const getImageUrl = (path: string | null | undefined) => {
        if (!path) return '/media/tour/tour-detail-2.png';
        if (path.startsWith('http')) return path;
        return `${API_BASE_URL}/storage/${path}`;
    };

    const mainImage = getImageUrl(tour.image);

    return (
        <section className="py-64">
            <div className="container-fluid">
                <div className="tour-detail">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="mb-48">
                                <img src={mainImage} alt={title} className="br-36 w-100" />
                            </div>
                            <h2 className="mb-16">{title}</h2>
                            <p className="mb-32">
                                {short_description || t('no_description')}
                            </p>
                            <div className="box-blur-bg mb-64">
                                <div className="b-radius-20 tour-detail-features">
                                    <div className="row justify-content-between">
                                        <div className="col-xl-6 col-lg-7 col-sm-7 mb-24 mb-sm-0">
                                            <h5 className="mb-16">{t('trip_info')}</h5>
                                            <ul className="unstyled">
                                                <li className="mb-16"><p>{t('destination_label')} {destination}</p></li>
                                                <li className="mb-16"><p>{t('departure_label')} {departure}</p></li>
                                                {tour.departure_time && (
                                                    <li className="mb-16"><p>{t('departure_time')} {isMounted ? new Date(tour.departure_time).toLocaleString(locale) : ''}</p></li>
                                                )}
                                                <li className="mb-16"><p>{t('age_restriction')} {tour.age_restriction}+</p></li>
                                                {tour.return_time && (
                                                    <li><p>{t('return_time')} {isMounted ? new Date(tour.return_time).toLocaleString(locale) : ''}</p></li>
                                                )}
                                            </ul>
                                        </div>
                                        <div className="col-xl-6 col-lg-5 col-sm-5">
                                            <h5 className="mb-16">{t('services_provided')}</h5>
                                            <ul className="unstyled">
                                                <li className="d-flex align-items-center mb-16">
                                                    <i className="color-primary me-2 fa-light fa-location-crosshairs"></i><p>{t('departure_srv')}</p>
                                                </li>
                                                {tour.max_person && (
                                                    <li className="d-flex align-items-center mb-16">
                                                        <i className="color-primary me-2 fa-light fa-user"></i><p>{tour.max_person} {t('person')}</p>
                                                    </li>
                                                )}
                                                {tour.is_guides && (
                                                    <li className="d-flex align-items-center mb-16">
                                                        <i className="color-primary me-2 fa-light fa-map-location-dot"></i><p>{t('guides')}</p>
                                                    </li>
                                                )}
                                                {tour.is_first_aid && (
                                                    <li className="d-flex align-items-center">
                                                        <i className="color-primary me-2 fa-light fa-kit-medical"></i><p>{t('first_aid')}</p>
                                                    </li>
                                                )}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="box-blur-bg b-radius-20 sticky-top" style={{ padding: '24px', top: '100px', zIndex: 10 }}>
                                <h4 className="mb-16">{t('book_this_tour')}</h4>
                                <div className="price-rating mb-24">
                                    <h3 className="color-primary mb-0">{formatPrice(tour.price)}</h3>
                                </div>

                                <div className="d-flex justify-content-between align-items-center mb-24 pt-16">
                                    <h5 className="mb-0">{t('price')}</h5>
                                    <h3 className="color-primary mb-0">{formatPrice(tour.price)}</h3>
                                </div>
                                <div className="ui-btn ui-btn-primary w-100" onClick={() => setIsPopupOpen(true)}>
                                    <button type="button" data-hover={t('book')}>{t('book')}</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xxl-9 col-xl-10 col-md-11">
                            {description && (
                                <>
                                    <h2 className="mb-24">{t('additional_info')}</h2>
                                    <div dangerouslySetInnerHTML={{ __html: description }} className="mb-24 wysiwyg"></div>
                                </>
                            )}
                            <p className="mb-64">
                                {t('booking_cta')}
                            </p>
                        </div>
                    </div>

                    <h2 className="mb-48">{t('gallery')}</h2>
                    <div className="row row-gap-4">
                        {galleries.map((src, i) => (
                            <div key={i} className="col-lg-3 col-sm-4 col-6">
                                <img src={src} className="br-30 w-100" style={{ aspectRatio: '1 / 1', objectFit: 'cover' }} alt="" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="d-flex d-lg-none align-items-center justify-content-between bg-white w-100 position-fixed bottom-0 start-0" style={{ padding: '16px', paddingBottom: '32px', boxShadow: '0 -4px 10px rgba(0,0,0,0.1)', zIndex: 1050 }}>
                <div>
                    <p className="mb-0 text-muted" style={{ fontSize: '12px' }}>{t('price')}</p>
                    <h4 className="color-primary mb-0">{formatPrice(tour.price)}</h4>
                </div>
                <div className="ui-btn ui-btn-primary" onClick={() => setIsPopupOpen(true)}>
                    <button type="button" data-hover={t('book')}>{t('book')}</button>
                </div>
            </div>
            <div className={`booking-popup-overlay ${isPopupOpen ? 'active' : ''}`} onClick={() => setIsPopupOpen(false)}>
                <div className={`booking-form-box ${isPopupOpen ? 'active' : ''}`} onClick={(e) => e.stopPropagation()}>
                    <div className="d-flex justify-content-between align-items-center mb-32">
                        <h4 className="mb-0">{t('book_tour_title')}</h4>
                        <button type="button" onClick={() => setIsPopupOpen(false)} style={{ background: 'transparent', border: 'none', fontSize: '24px', cursor: 'pointer', color: '#333' }}>
                            <i className="fa-light fa-xmark"></i>
                        </button>
                    </div>
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        toast.success(t('booking_success', { ns: 'common' }));
                        setIsPopupOpen(false);
                    }}>
                        <div className="form-group mb-24">
                            <div className="row g-3">
                                <div className="col-6">
                                    <label className="mb-8 fw-semibold">{t('day')}</label>
                                    <NiceSelect
                                        name="day"
                                        placeholder="DD"
                                        options={Array.from({ length: 31 }, (_, i) => ({
                                            value: String(i + 1).padStart(2, '0'),
                                            label: String(i + 1).padStart(2, '0')
                                        }))}
                                    />
                                </div>
                                <div className="col-6">
                                    <label className="mb-8 fw-semibold">{t('month')}</label>
                                    <NiceSelect
                                        name="month"
                                        placeholder="MM"
                                        options={Object.entries(t('months', { ns: 'common', returnObjects: true }) as Record<string, string>).map(([key, value]) => ({
                                            value: key,
                                            label: value
                                        }))}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="form-group mb-24">
                            <label className="mb-8 fw-semibold">{t('first_name')}</label>
                            <input type="text" className="cus-form-control" required placeholder={t('first_name')} pattern="^[a-zA-Zа-яА-ЯёЁ\s\-]+$" title={t('only_letters')} />
                        </div>
                        <div className="form-group mb-24">
                            <label className="mb-8 fw-semibold">{t('last_name')}</label>
                            <input type="text" className="cus-form-control" required placeholder={t('last_name')} pattern="^[a-zA-Zа-яА-ЯёЁ\s\-]+$" title={t('only_letters')} />
                        </div>
                        <div className="form-group mb-24">
                            <label className="mb-8 fw-semibold">{t('phone')}</label>
                            <IMaskInput
                                mask="+{998} (00) 000-00-00"
                                className="cus-form-control"
                                required
                                placeholder="+998 (__) ___-__-__"
                            />
                        </div>
                        <div className="form-group mb-24">
                            <label className="mb-8 fw-semibold">{t('email')}</label>
                            <input type="email" className="cus-form-control" required placeholder={t('email_placeholder')} />
                        </div>
                        <div className="ui-btn ui-btn-primary w-100">
                            <button type="submit" data-hover={t('confirm_booking')}>{t('confirm_booking')}</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
