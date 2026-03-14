'use client';

import { useState, useEffect } from 'react';
import { IMaskInput } from 'react-imask';
import { useTranslation } from 'react-i18next';
import toast from 'react-hot-toast';
import NiceSelect from '@/components/ui/NiceSelect';
import { Tour, bookingsService, getImageUrl } from '@/lib/api';
import { formatPrice } from '@/lib/utils/format';


interface TourDetailClientProps {
    tour: Tour;
    locale: string;
}

export default function TourDetailClient({ tour, locale }: TourDetailClientProps) {
    const { t } = useTranslation(['tours', 'booking', 'common']);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const [galleries, setGalleries] = useState<string[]>([]);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const [bookingData, setBookingData] = useState({
        departure_date: '',
        name: '',
        lastName: '',
        phone: '',
        email: '',
        number_of_people: 1,
        comments: '',
    });

    const handleBookingSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!bookingData.departure_date || !bookingData.name || !bookingData.number_of_people) {
            toast.error(t('fill_required_fields', { ns: 'common', defaultValue: 'Please fill all required fields' }));
            return;
        }

        setIsSubmitting(true);
        const toastId = toast.loading(t('submitting', { ns: 'common', defaultValue: 'Submitting your request...' }));

        try {
            const formattedDate = new Date(bookingData.departure_date).toISOString();

            await bookingsService.createBooking({
                tourId: tour.id,
                name: bookingData.name,
                lastName: bookingData.lastName || undefined,
                email: bookingData.email || undefined,
                phone: bookingData.phone || undefined,
                number_of_people: bookingData.number_of_people,
                departure_date: formattedDate,
                comments: bookingData.comments || undefined,
                destination: tour.languages?.[0]?.destination || undefined
            });

            toast.success(t('booking_success', { ns: 'booking', defaultValue: 'Booking successful!' }), { id: toastId });
            setIsPopupOpen(false);
            setBookingData({
                departure_date: '', name: '', lastName: '', phone: '', email: '', number_of_people: 1, comments: ''
            });
        } catch (error: any) {
            console.error("Booking error details:", error);
            toast.error(error.message || t('form_error', { ns: 'common', defaultValue: 'An error occurred while submitting.' }), { id: toastId });
        } finally {
            setIsSubmitting(false);
        }
    };

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
        setGalleries(tour.galleries?.map(g => getImageUrl(g?.image || g?.url || g, 'gallery')) || []);
    }, [tour.galleries]);

    const langData = tour.languages?.find(l => l.languageCode === locale) || tour.languages?.[0];
    const title = langData?.title || 'Unknown Tour';
    const description = langData?.description || '';
    const short_description = langData?.short_description || '';
    const departure = langData?.departure || '';
    const destination = langData?.destination || '';



    const mainImage = getImageUrl(tour.image, 'tour');

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
                                    <h3 className="color-primary mb-0" suppressHydrationWarning>{formatPrice(tour.price)}</h3>

                                </div>

                                <div className="d-flex justify-content-between align-items-center mb-24 pt-16">
                                    <h5 className="mb-0">{t('price')}</h5>
                                    <h3 className="color-primary mb-0" suppressHydrationWarning>{formatPrice(tour.price)}</h3>

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
                    <h4 className="color-primary mb-0" suppressHydrationWarning>{formatPrice(tour.price)}</h4>

                </div>
                <div className="ui-btn ui-btn-primary" onClick={() => setIsPopupOpen(true)}>
                    <button type="button" data-hover={t('book')}>{t('book')}</button>
                </div>
            </div>
            <div className={`booking-popup-overlay ${isPopupOpen ? 'active' : ''}`} onClick={() => setIsPopupOpen(false)}>
                <div className={`booking-form-box ${isPopupOpen ? 'active' : ''}`} onClick={(e) => e.stopPropagation()} style={{ maxWidth: '700px', width: '95%' }}>
                    <div className="d-flex justify-content-between align-items-center mb-32">
                        <h4 className="mb-0">{t('book_tour_title')}</h4>
                        <button type="button" onClick={() => setIsPopupOpen(false)} style={{ background: 'transparent', border: 'none', fontSize: '24px', cursor: 'pointer', color: '#333' }}>
                            <i className="fa-light fa-xmark"></i>
                        </button>
                    </div>
                    <form onSubmit={handleBookingSubmit}>
                        <div className="row g-4">
                            <div className="col-sm-6">
                                <div className="form-group mb-0">
                                    <label className="mb-8 fw-semibold">{t('first_name')}</label>
                                    <input
                                        type="text"
                                        className="cus-form-control"
                                        required
                                        placeholder={t('first_name')}
                                        pattern="^[a-zA-Zа-яА-ЯёЁ\s\-]+$"
                                        title={t('only_letters')}
                                        value={bookingData.name}
                                        onChange={(e) => setBookingData(prev => ({ ...prev, name: e.target.value }))}
                                    />
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group mb-0">
                                    <label className="mb-8 fw-semibold">{t('last_name')}</label>
                                    <input
                                        type="text"
                                        className="cus-form-control"
                                        required
                                        placeholder={t('last_name')}
                                        pattern="^[a-zA-Zа-яА-ЯёЁ\s\-]+$"
                                        title={t('only_letters')}
                                        value={bookingData.lastName}
                                        onChange={(e) => setBookingData(prev => ({ ...prev, lastName: e.target.value }))}
                                    />
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group mb-0">
                                    <label className="mb-8 fw-semibold">{t('phone')}</label>
                                    <IMaskInput
                                        mask="+{998} (00) 000-00-00"
                                        className="cus-form-control"
                                        required
                                        placeholder="+998 (__) ___-__-__"
                                        value={bookingData.phone}
                                        onAccept={(value: string) => setBookingData(prev => ({ ...prev, phone: value }))}
                                    />
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group mb-0">
                                    <label className="mb-8 fw-semibold">{t('email')}</label>
                                    <input
                                        type="email"
                                        className="cus-form-control"
                                        required
                                        placeholder={t('email_placeholder')}
                                        value={bookingData.email}
                                        onChange={(e) => setBookingData(prev => ({ ...prev, email: e.target.value }))}
                                    />
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group mb-0">
                                    <label className="mb-8 fw-semibold">{t('departure_date', { ns: 'booking', defaultValue: 'Departure Date' })}</label>
                                    <input
                                        type="date"
                                        className="cus-form-control"
                                        required
                                        value={bookingData.departure_date}
                                        onChange={(e) => setBookingData(prev => ({ ...prev, departure_date: e.target.value }))}
                                    />
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group mb-0">
                                    <label className="mb-8 fw-semibold">{t('persons', { ns: 'booking', defaultValue: 'Persons' })}</label>
                                    <input
                                        type="number"
                                        className="cus-form-control"
                                        required
                                        min="1"
                                        placeholder="1"
                                        value={bookingData.number_of_people}
                                        onChange={(e) => setBookingData(prev => ({ ...prev, number_of_people: parseInt(e.target.value) || 1 }))}
                                    />
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-group mb-0">
                                    <label className="mb-8 fw-semibold">{t('comments_optional', { ns: 'booking', defaultValue: 'Comments (Optional)' })}</label>
                                    <textarea
                                        className="cus-form-control"
                                        rows={3}
                                        placeholder={t('write_comments', { ns: 'booking', defaultValue: 'Any special requests?' })}
                                        value={bookingData.comments}
                                        onChange={(e) => setBookingData(prev => ({ ...prev, comments: e.target.value }))}
                                    ></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="ui-btn ui-btn-primary w-100 mt-24">
                            <button type="submit" disabled={isSubmitting}>
                                {isSubmitting ? (
                                    <>
                                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                        {t('submitting', { ns: 'common', defaultValue: 'Submitting...' })}
                                    </>
                                ) : (
                                    t('confirm_booking')
                                )}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
