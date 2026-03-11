'use client';

import { useState } from 'react';
import PageHeader from '@/components/shared/PageHeader';
import { useTranslation } from 'react-i18next';
import toast from 'react-hot-toast';

export default function ContactPage() {
    const { t } = useTranslation('contact');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle contact form submission
        toast.success(t('form_success', { ns: 'common' }));
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    return (
        <>
            <PageHeader title={t('page_title')} />

            <section className="py-64">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6 mb-48 mb-lg-0">
                            <div className="box-blur-bg">
                                <div className="contact-form b-radius-20 bg-white p-48">
                                    <h3 className="mb-32">{t('form_title')}</h3>
                                    <form onSubmit={handleSubmit}>
                                        <div className="form-group mb-24">
                                            <input type="text" name="name" className="cus-form-control" value={formData.name}
                                                onChange={handleChange} required placeholder={t('name_placeholder')} />
                                        </div>
                                        <div className="form-group mb-24">
                                            <input type="email" name="email" className="cus-form-control" value={formData.email}
                                                onChange={handleChange} required placeholder={t('email_placeholder')} />
                                        </div>
                                        <div className="form-group mb-24">
                                            <input type="text" name="subject" className="cus-form-control" value={formData.subject}
                                                onChange={handleChange} required placeholder={t('subject_placeholder')} />
                                        </div>
                                        <div className="form-group mb-32">
                                            <textarea name="message" className="cus-form-control textarea" value={formData.message}
                                                onChange={handleChange} rows={5} required placeholder={t('message_placeholder')}></textarea>
                                        </div>
                                        <div className="ui-btn ui-btn-primary">
                                            <button type="submit" data-hover={t('submit_button')}>{t('submit_button')}</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="contact-info mb-32">
                                <div className="box-blur-bg">
                                    <div className="b-radius-20 bg-white p-48">
                                        <h5 className="mb-24">{t('info_title')}</h5>
                                        <div className="row">
                                            <div className="col-sm-6 mb-24">
                                                <h6 className="mb-8">{t('call_us')}</h6>
                                                <a href="tel:+998900007961">+998 90 000 79 61</a>
                                            </div>
                                            <div className="col-sm-6 mb-24">
                                                <h6 className="mb-8">{t('address_title')}</h6>
                                                <a href="https://yandex.uz/maps/-/CPuif4yL" target="_blank" rel="noopener noreferrer">{t('address')}</a>
                                            </div>
                                            <div className="col-sm-6 mb-24">
                                                <h6 className="mb-8">{t('visit_us')}</h6>
                                                <p>{t('location')}</p>
                                            </div>
                                            <div className="col-sm-6 mb-24">
                                                <h6 className="mb-8">{t('working_hours')}</h6>
                                                <p>{t('weekdays')}</p>
                                                <p>{t('weekends')}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="box-blur-bg">
                                <div className="b-radius-20 overflow-hidden" style={{ height: '350px' }}>
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14693.904686953955!2d90.42194729999998!3d23.836788350000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1730807048270!5m2!1sen!2sbd"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="Google Maps"
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
