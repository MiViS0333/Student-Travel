import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import './BookingPopup.css';

export default function BookingPopup({ isOpen, onClose }) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
        return () => {
            if (document.body.classList.contains('no-scroll')) {
                document.body.classList.remove('no-scroll');
            }
        };
    }, [isOpen]);

    if (!mounted) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        // Placeholder for booking API integration
        alert('Заявка успешно отправлена!');
        onClose();
    };

    return createPortal(
        <div className={`booking-popup-overlay ${isOpen ? 'open' : ''}`} onClick={onClose}>
            <div className="booking-popup-content" onClick={e => e.stopPropagation()}>
                <button type="button" className="booking-popup-close" onClick={onClose} aria-label="Закрыть">
                    <i className="fa-light fa-xmark"></i>
                </button>

                <h3 className="mb-24 text-center">Бронирование тура</h3>

                <form onSubmit={handleSubmit}>
                    <div className="booking-form-group">
                        <label>Ваше Имя</label>
                        <input type="text" className="booking-form-control" placeholder="Иван Иванов" required />
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <div className="booking-form-group">
                                <label>Телефон</label>
                                <input type="tel" className="booking-form-control" placeholder="+7 (999) 000-00-00" required />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="booking-form-group">
                                <label>Email</label>
                                <input type="email" className="booking-form-control" placeholder="example@mail.com" required />
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <div className="booking-form-group">
                                <label>Желаемая дата</label>
                                <input type="date" className="booking-form-control" required />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="booking-form-group">
                                <label>Количество гостей</label>
                                <input type="number" className="booking-form-control" min="1" max="10" defaultValue="1" required />
                            </div>
                        </div>
                    </div>

                    <div className="booking-form-group">
                        <label>Комментарии</label>
                        <textarea className="booking-form-control" placeholder="Дополнительные пожелания..."></textarea>
                    </div>

                    <div className="mt-32">
                        <button type="submit" className="ui-btn ui-btn-primary w-100" style={{ border: 'none' }}>
                            ОТПРАВИТЬ ЗАЯВКУ
                        </button>
                    </div>
                </form>
            </div>
        </div>,
        document.body
    );
}
