'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import PageHeader from '@/components/shared/PageHeader';
import { IMaskInput } from 'react-imask';
import { useTranslation } from 'react-i18next';
import toast from 'react-hot-toast';
import NiceSelect from '@/components/ui/NiceSelect';
import gsap from 'gsap';
import { bookingsService } from '@/lib/api';

interface BookingFormMainProps {
    destinations: { value: string; label: string }[];
}

function BookingFormMain({ destinations }: BookingFormMainProps) {
    const { t } = useTranslation(['booking', 'common']);
    const searchParams = useSearchParams();
    const [formData, setFormData] = useState({
        tourId: searchParams.get('tourId') || '',
        name: '',
        lastName: '',
        email: '',
        phone: '',
        destination: '',
        departure_date: '',
        number_of_people: 1,
        comments: '',
    });

    useEffect(() => {
        const tl = gsap.timeline();
        tl.fromTo('.promo-column', { x: -50, opacity: 0 }, { x: 0, opacity: 1, duration: 0.8, ease: 'power3.out' })
            .fromTo('.booking-form-wrapper', { x: 50, opacity: 0 }, { x: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }, '-=0.6');
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ 
            ...prev, 
            [name]: name === 'number_of_people' ? parseInt(value) || 1 : value 
        }));
    };

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        // Basic validation
        if (!formData.name || !formData.departure_date || !formData.number_of_people) {
            toast.error(t('fill_required_fields', { ns: 'common', defaultValue: 'Please fill all required fields' }));
            return;
        }

        setIsSubmitting(true);
        const toastId = toast.loading(t('submitting', { ns: 'common', defaultValue: 'Submitting your request...' }));

        try {
            // Format departure_date to ISO 8601 string as required by the backend
            let formattedDate = formData.departure_date;
            if (formattedDate) {
                formattedDate = new Date(formattedDate).toISOString();
            }

            const payload: any = {
                name: formData.name,
                lastName: formData.lastName || undefined,
                email: formData.email || undefined,
                phone: formData.phone || undefined,
                destination: formData.destination || undefined,
                departure_date: formattedDate,
                number_of_people: formData.number_of_people,
                comments: formData.comments || undefined,
            };

            if (formData.tourId) {
                payload.tourId = formData.tourId;
            }

            await bookingsService.createBooking(payload);

            // Success
            toast.success(t('booking_success', { ns: 'booking', defaultValue: 'Booking successful!' }), { id: toastId });
            setFormData({
                tourId: searchParams.get('tourId') || '',
                name: '',
                lastName: '',
                email: '',
                phone: '',
                destination: '',
                departure_date: '',
                number_of_people: 1,
                comments: '',
            });
        } catch (error: any) {
            console.error("Booking error details:", error);
            toast.error(error.message || t('form_error', { ns: 'common', defaultValue: 'An error occurred while submitting.' }), { id: toastId });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="booking-section overflow-hidden position-relative">
            {/* Ultra-Modern Mesh Background */}
            <div className="mesh-bg">
                <div className="blob one"></div>
                <div className="blob two"></div>
            </div>

            <div className="container position-relative z-index-1">
                <div className="row g-5 align-items-stretch">
                    {/* Left Column: Bento Grid Features */}
                    <div className="col-lg-5 promo-column">
                        <div className="bento-grid h-100">
                            <div className="bento-item big">
                                <div>
                                    <span className="badge bg-white-soft color-white mb-16 br-30 text-uppercase fw-bold ls-1 px-16 py-8">
                                        {'Student Travel'}
                                    </span>
                                    <h2 className="display-4 fw-900 mb-20 text-white">{t('promo_title', { ns: 'booking' })}</h2>
                                    <p className="lead color-white opacity-75">{t('promo_text', { ns: 'booking' })}</p>
                                </div>
                            </div>

                            <div className="bento-item">
                                <div className="icon-box bg-primary-soft color-primary d-flex align-items-center justify-content-center br-15 mb-20" style={{ width: '48px', height: '48px' }}>
                                    <i className="fa-light fa-map-location-dot fa-lg"></i>
                                </div>
                                <div>
                                    <h5 className="fw-800 mb-8">{t('feature_1_title', { ns: 'booking' })}</h5>
                                    <p className="small color-dark-gray mb-0">{t('feature_1_text', { ns: 'booking' })}</p>
                                </div>
                            </div>

                            <div className="bento-item">
                                <div className="icon-box bg-primary-soft color-primary d-flex align-items-center justify-content-center br-15 mb-20" style={{ width: '48px', height: '48px' }}>
                                    <i className="fa-light fa-user-tie fa-lg"></i>
                                </div>
                                <div>
                                    <h5 className="fw-800 mb-8">{t('feature_2_title', { ns: 'booking' })}</h5>
                                    <p className="small color-dark-gray mb-0">{t('feature_2_text', { ns: 'booking' })}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Neo-Glass Form */}
                    <div className="col-lg-7 booking-form-wrapper">
                        <div className="neo-glass p-40 p-lg-80 h-100">
                            <div className="mb-48">
                                <h3 className="fw-900 fs-2 mb-12">{t('form_title', { ns: 'booking' })}</h3>
                                <p className="color-dark-gray">{'Enter your details to secure your spot'}</p>
                            </div>

                            <form onSubmit={handleSubmit} className="row g-4">
                                <div className="col-md-6">
                                    <div className="modern-field">
                                        <label>{t('first_name', { ns: 'booking' })}</label>
                                        <input type="text" name="name" className="form-control" 
                                            value={formData.name} onChange={handleChange} required placeholder="John" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="modern-field">
                                        <label>{t('last_name', { ns: 'booking' })}</label>
                                        <input type="text" name="lastName" className="form-control" 
                                            value={formData.lastName} onChange={handleChange} required placeholder="Doe" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="modern-field">
                                        <label>{t('email', { ns: 'booking' })}</label>
                                        <input type="email" name="email" className="form-control" 
                                            value={formData.email} onChange={handleChange} required placeholder="john@example.com" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="modern-field">
                                        <label>{t('phone', { ns: 'booking' })}</label>
                                        <IMaskInput
                                            mask="+{998} (00) 000-00-00"
                                            name="phone"
                                            className="form-control"
                                            value={formData.phone}
                                            onAccept={(value: string) => setFormData(prev => ({ ...prev, phone: value }))}
                                            required
                                            placeholder="+998 (__)"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="modern-field">
                                        <label>{t('destination', { ns: 'booking' })}</label>
                                        <NiceSelect
                                            name="destination"
                                            placeholder={t('select_destination', { ns: 'booking' })}
                                            options={destinations}
                                            onChange={(val) => setFormData(prev => ({ ...prev, destination: val }))}
                                            defaultValue={formData.destination}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="modern-field">
                                        <label>{t('travel_date', { ns: 'booking' })}</label>
                                        <input 
                                            type="date" 
                                            name="departure_date" 
                                            className="form-control"
                                            value={formData.departure_date}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="modern-field">
                                        <label>{t('persons', { ns: 'booking' })}</label>
                                        <NiceSelect
                                            name="number_of_people"
                                            placeholder={t('persons', { ns: 'booking' })}
                                            options={[
                                                { value: '1', label: '1 Guest' },
                                                { value: '2', label: '2 Guests' },
                                                { value: '3', label: '3 Guests' },
                                                { value: '4', label: '4 Guests' },
                                                { value: '5', label: '5+ Guests' },
                                            ]}
                                            onChange={(val) => setFormData(prev => ({ ...prev, number_of_people: parseInt(val) }))}
                                            defaultValue={String(formData.number_of_people)}
                                        />
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="modern-field">
                                        <label>{t('message', { ns: 'booking' })}</label>
                                        <textarea name="comments" className="form-control" 
                                            value={formData.comments} onChange={handleChange} rows={3} 
                                            placeholder={t('message_placeholder', { ns: 'booking' })} style={{ height: 'auto' }}></textarea>
                                    </div>
                                </div>
                                <div className="col-12 mt-32">
                                    <button type="submit" className="btn-premium" disabled={isSubmitting}>
                                        {isSubmitting ? (
                                            <>
                                                <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                                {t('submitting', { ns: 'common', defaultValue: 'Submitting...' })}
                                            </>
                                        ) : (
                                            <>
                                                {t('submit', { ns: 'booking' })}
                                                <i className="fa-light fa-arrow-right-long ms-12"></i>
                                            </>
                                        )}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

interface PageProps {
    params: Promise<{ locale: string }>;
}

export default function TourBookingPageWrapper({ params }: PageProps) {
    const [destinations, setDestinations] = useState<{ value: string; label: string }[]>([]);

    useEffect(() => {
        let isMounted = true;
        
        async function fetchDestinations() {
            try {
                // Determine locale asynchronously 
                const resolvedParams = await params;
                const locale = (resolvedParams.locale || 'ru').toUpperCase();
                
                // Directly fetch from API inside client component
                const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
                const res = await fetch(`${apiUrl}/tours/locations?lang=${locale}`);
                
                if (res.ok && isMounted) {
                    const data = await res.json();
                    if (data && data.destinations) {
                        const formatted = data.destinations.map((d: string) => ({ value: d, label: d }));
                        setDestinations(formatted);
                    }
                }
            } catch (error) {
                console.error("Failed to fetch locations:", error);
            }
        }
        
        fetchDestinations();
        
        return () => {
            isMounted = false;
        };
    }, [params]);

    const { t } = useTranslation('booking');
    return (
        <main className="bg-white">
            <PageHeader title={t('page_title')} />
            <Suspense fallback={<div className="py-80 text-center"><div className="spinner-border text-primary" role="status"></div></div>}>
                <BookingFormMain destinations={destinations} />
            </Suspense>
        </main>
    );
}

