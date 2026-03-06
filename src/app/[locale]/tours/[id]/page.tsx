'use client';

import { useState, useEffect } from 'react';
import PageHeader from '@/components/shared/PageHeader';
import { IMaskInput } from 'react-imask';
import { useTranslation } from 'react-i18next';
import toast from 'react-hot-toast';
import NiceSelect from '@/components/ui/NiceSelect';

export default function TourDetailPage() {
    const { t } = useTranslation();
    const [isPopupOpen, setIsPopupOpen] = useState(false);

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

    return (
        <>
            <PageHeader title="ДЕТАЛИ ТУРА" />

            <section className="py-64">
                <div className="container-fluid">
                    <div className="tour-detail">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="mb-48">
                                    <img src="/media/tour/tour-detail-2.png" alt="" className="br-36 w-100" />
                                </div>
                                <h2 className="mb-16">ОЗЕРО С ПРЕСНОЙ ВОДОЙ</h2>
                                <p className="mb-32">
                                    Studentravel предлагает лучшие туры для студентов по всему миру. Мы заботимся о вашем отдыхе, предоставляя незабываемые впечатления и отличный сервис. Присоединяйтесь к нам и откройте для себя новые горизонты.
                                </p>
                                <div className="box-blur-bg mb-64">
                                    <div className="b-radius-20 tour-detail-features">
                                        <div className="row justify-content-between">
                                            <div className="col-xl-6 col-lg-7 col-sm-7 mb-24 mb-sm-0">
                                                <h5 className="mb-16">ИНФОРМАЦИЯ О ПОЕЗДКЕ</h5>
                                                <ul className="unstyled">
                                                    <li className="mb-16"><p>Пункт назначения: Banff National Park, Canada</p></li>
                                                    <li className="mb-16"><p>Место отправления: Banff National Park, Canada</p></li>
                                                    <li className="mb-16"><p>Время отправления: 9:00 Вт, 09 сент. 2024</p></li>
                                                    <li className="mb-16"><p>Возрастные ограничения: 13+</p></li>
                                                    <li><p>Время возвращения: 22:00 Вт, 09 сент. 2024</p></li>
                                                </ul>
                                            </div>
                                            <div className="col-xl-6 col-lg-5 col-sm-5">
                                                <h5 className="mb-16">ПРЕДОСТАВЛЯЕМЫЕ УСЛУГИ</h5>
                                                <ul className="unstyled">
                                                    <li className="d-flex align-items-center mb-16">
                                                        <i className="color-primary me-2 fa-light fa-location-crosshairs"></i><p>Отправление</p>
                                                    </li>
                                                    <li className="d-flex align-items-center mb-16">
                                                        <i className="color-primary me-2 fa-light fa-calendar"></i><p>6 Дней</p>
                                                    </li>
                                                    <li className="d-flex align-items-center mb-16">
                                                        <i className="color-primary me-2 fa-light fa-user"></i><p>6 Человек</p>
                                                    </li>
                                                    <li className="d-flex align-items-center mb-16">
                                                        <i className="color-primary me-2 fa-light fa-map-location-dot"></i><p>Гиды</p>
                                                    </li>
                                                    <li className="d-flex align-items-center">
                                                        <i className="color-primary me-2 fa-light fa-kit-medical"></i><p>Первая помощь</p>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="box-blur-bg b-radius-20 sticky-top" style={{ padding: '24px', top: '100px', zIndex: 10 }}>
                                    <h4 className="mb-16">Забронируйте этот тур</h4>
                                    <div className="price-rating mb-24">
                                        <h3 className="color-primary mb-0">$300</h3>
                                    </div>

                                    <div className="d-flex justify-content-between align-items-center mb-24 pt-16">
                                        <h5 className="mb-0">Цена</h5>
                                        <h3 className="color-primary mb-0">$300</h3>
                                    </div>
                                    <div className="ui-btn ui-btn-primary w-100" onClick={() => setIsPopupOpen(true)}>
                                        <button type="button" data-hover="ЗАБРОНИРОВАТЬ">ЗАБРОНИРОВАТЬ</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-xxl-9 col-xl-10 col-md-11">
                                <h2 className="mb-24">ДОПОЛНИТЕЛЬНАЯ ИНФОРМАЦИЯ</h2>
                                <p className="mb-24">
                                    Наши туры обеспечат вам комфорт и безопасность на протяжении всего путешествия. Мы сотрудничаем с лучшими партнерами для предоставления первоклассных услуг.
                                </p>
                                <p className="mb-64">
                                    Забронируйте тур прямо сейчас и получите незабываемые впечатления! Наша команда профессионалов всегда готова помочь вам.
                                </p>
                            </div>
                        </div>

                        <h2 className="mb-48">ГАЛЕРЕЯ</h2>
                        <div className="row row-gap-4">
                            {[1, 2, 3, 4, 5, 6, 1, 2].map((n, i) => (
                                <div key={i} className="col-lg-3 col-sm-4 col-6">
                                    <img src={`/media/gallery/gallery_${n}.png`} className="br-30" alt="" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <div className="d-flex d-lg-none align-items-center justify-content-between bg-white w-100 position-fixed bottom-0 start-0" style={{ padding: '16px', paddingBottom: '32px', boxShadow: '0 -4px 10px rgba(0,0,0,0.1)', zIndex: 1050 }}>
                <div>
                    <p className="mb-0 text-muted" style={{ fontSize: '12px' }}>Цена</p>
                    <h4 className="color-primary mb-0">$300</h4>
                </div>
                <div className="ui-btn ui-btn-primary" onClick={() => setIsPopupOpen(true)}>
                    <button type="button" data-hover="ЗАБРОНИРОВАТЬ">ЗАБРОНИРОВАТЬ</button>
                </div>
            </div>
            <div className={`booking-popup-overlay ${isPopupOpen ? 'active' : ''}`} onClick={() => setIsPopupOpen(false)}>
                <div className={`booking-form-box ${isPopupOpen ? 'active' : ''}`} onClick={(e) => e.stopPropagation()}>
                    <div className="d-flex justify-content-between align-items-center mb-32">
                        <h4 className="mb-0">ЗАБРОНИРУЙТЕ ТУР</h4>
                        <button type="button" onClick={() => setIsPopupOpen(false)} style={{ background: 'transparent', border: 'none', fontSize: '24px', cursor: 'pointer', color: '#333' }}>
                            <i className="fa-light fa-xmark"></i>
                        </button>
                    </div>
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        toast.success(t('booking_success'));
                        setIsPopupOpen(false);
                    }}>
                        <div className="form-group mb-24">
                            <div className="row g-3">
                                <div className="col-6">
                                    <label className="mb-8 fw-semibold">День</label>
                                    <NiceSelect
                                        name="day"
                                        placeholder="ДД"
                                        options={Array.from({ length: 31 }, (_, i) => ({
                                            value: String(i + 1).padStart(2, '0'),
                                            label: String(i + 1).padStart(2, '0')
                                        }))}
                                    />
                                </div>
                                <div className="col-6">
                                    <label className="mb-8 fw-semibold">Месяц</label>
                                    <NiceSelect
                                        name="month"
                                        placeholder="ММ"
                                        options={Object.entries(t('months', { returnObjects: true }) as Record<string, string>).map(([key, value]) => ({
                                            value: key,
                                            label: value
                                        }))}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="form-group mb-24">
                            <label className="mb-8 fw-semibold">Имя</label>
                            <input type="text" className="cus-form-control" required placeholder="Имя" pattern="^[a-zA-Zа-яА-ЯёЁ\s\-]+$" title="Допускаются только буквы" />
                        </div>
                        <div className="form-group mb-24">
                            <label className="mb-8 fw-semibold">Фамилия</label>
                            <input type="text" className="cus-form-control" required placeholder="Фамилия" pattern="^[a-zA-Zа-яА-ЯёЁ\s\-]+$" title="Допускаются только буквы" />
                        </div>
                        <div className="form-group mb-24">
                            <label className="mb-8 fw-semibold">Телефон</label>
                            <IMaskInput
                                mask="+{998} (00) 000-00-00"
                                className="cus-form-control"
                                required
                                placeholder="+998 (__) ___-__-__"
                            />
                        </div>
                        <div className="form-group mb-24">
                            <label className="mb-8 fw-semibold">Email</label>
                            <input type="email" className="cus-form-control" required placeholder="Email адрес" />
                        </div>
                        <div className="ui-btn ui-btn-primary w-100">
                            <button type="submit" data-hover="ПОДТВЕРДИТЬ БРОНИРОВАНИЕ">ПОДТВЕРДИТЬ БРОНИРОВАНИЕ</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
