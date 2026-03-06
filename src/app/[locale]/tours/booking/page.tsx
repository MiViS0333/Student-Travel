'use client';

import { useState } from 'react';
import PageHeader from '@/components/shared/PageHeader';
import { IMaskInput } from 'react-imask';
import { useTranslation } from 'react-i18next';
import toast from 'react-hot-toast';
import NiceSelect from '@/components/ui/NiceSelect';

export default function TourBookingPage() {
    const { t } = useTranslation();
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
        toast.success(t('booking_success'));
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            destination: '',
            persons: '1',
            date: '',
            message: '',
        });
    };

    return (
        <>
            <PageHeader title="БРОНИРОВАНИЕ ТУРА" />

            <section className="py-64">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-8 col-lg-10 mx-auto">
                            <div className="box-blur-bg">
                                <div className="booking-form b-radius-20 bg-white p-48">
                                    <h3 className="mb-32">ЗАБРОНИРУЙТЕ ТУР</h3>
                                    <form onSubmit={handleSubmit}>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group mb-24">
                                                    <label className="mb-8 h6">Имя</label>
                                                    <input type="text" name="firstName" className="cus-form-control" value={formData.firstName}
                                                        onChange={handleChange} required placeholder="Имя" pattern="^[a-zA-Zа-яА-ЯёЁ\s\-]+$" title="Допускаются только буквы" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group mb-24">
                                                    <label className="mb-8 h6">Фамилия</label>
                                                    <input type="text" name="lastName" className="cus-form-control" value={formData.lastName}
                                                        onChange={handleChange} required placeholder="Фамилия" pattern="^[a-zA-Zа-яА-ЯёЁ\s\-]+$" title="Допускаются только буквы" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group mb-24">
                                                    <label className="mb-8 h6">Email</label>
                                                    <input type="email" name="email" className="cus-form-control" value={formData.email}
                                                        onChange={handleChange} required placeholder="Email адрес" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group mb-24">
                                                    <label className="mb-8 h6">Телефон</label>
                                                    <IMaskInput
                                                        mask="+{998} (00) 000-00-00"
                                                        name="phone"
                                                        className="cus-form-control"
                                                        value={formData.phone}
                                                        onAccept={(value: string) => setFormData({ ...formData, phone: value })}
                                                        required
                                                        placeholder="+998 (__) ___-__-__"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group mb-24">
                                                    <label className="mb-8 h6">Направление</label>
                                                    <select name="destination" className="cus-form-control" value={formData.destination}
                                                        onChange={handleChange} required>
                                                        <option value="" disabled>Выберите направление</option>
                                                        <option value="kyoto">Киото, Япония</option>
                                                        <option value="bali">Бали, Индонезия</option>
                                                        <option value="paris">Париж, Франция</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group mb-24">
                                                    <label className="mb-8 h6">Дата поездки</label>
                                                    <div className="row g-3">
                                                        <div className="col-6">
                                                            <NiceSelect
                                                                name="day"
                                                                placeholder="ДД"
                                                                options={Array.from({ length: 31 }, (_, i) => ({
                                                                    value: String(i + 1).padStart(2, '0'),
                                                                    label: String(i + 1).padStart(2, '0')
                                                                }))}
                                                                onChange={(val: string) => setFormData(prev => ({ ...prev, date: `${prev.date.split('-')[0] || ''}-${prev.date.split('-')[1] || ''}-${val}` }))}
                                                            />
                                                        </div>
                                                        <div className="col-6">
                                                            <NiceSelect
                                                                name="month"
                                                                placeholder="ММ"
                                                                options={Object.entries(t('months', { returnObjects: true }) as Record<string, string>).map(([key, value]) => ({
                                                                    value: key,
                                                                    label: value
                                                                }))}
                                                                onChange={(val: string) => setFormData(prev => ({ ...prev, date: `${prev.date.split('-')[0] || ''}-${val}-${prev.date.split('-')[2] || ''}` }))}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group mb-24">
                                                    <label className="mb-8 h6">Количество человек</label>
                                                    <select name="persons" className="cus-form-control" value={formData.persons}
                                                        onChange={handleChange}>
                                                        <option value="1">1 Человек</option>
                                                        <option value="2">2 Человека</option>
                                                        <option value="3">3 Человека</option>
                                                        <option value="4">4 Человека</option>
                                                        <option value="5">5+ Человек</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-group mb-32">
                                                    <label className="mb-8 h6">Дополнительное сообщение</label>
                                                    <textarea name="message" className="cus-form-control textarea" value={formData.message}
                                                        onChange={handleChange} rows={5} placeholder="Ваше сообщение..."></textarea>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="ui-btn ui-btn-primary">
                                                    <button type="submit" data-hover="ЗАБРОНИРОВАТЬ">ЗАБРОНИРОВАТЬ</button>
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
