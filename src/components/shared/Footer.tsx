import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import toast from 'react-hot-toast';

export default function Footer() {
    const { t } = useTranslation();
    return (
        <footer className="pt-64 pb-40">
            <div className="container-fluid">
                <div className="box-blur-bg">
                    <div className="footer-content bg-white b-radius-20">
                        {/* Features Row */}
                        <div className="features-row row">
                            <div className="col-lg-3 col-6 feature-block">
                                <img src="/media/icons/australia.png" alt="Особые мероприятия" />
                                <h6>ОСОБЫЕ МЕРОПРИЯТИЯ</h6>
                            </div>
                            <div className="col-lg-3 col-6 feature-block">
                                <img src="/media/icons/tour-guide.png" alt="Лучшие гиды" />
                                <h6>ЛУЧШИЕ ГИДЫ</h6>
                            </div>
                            <div className="col-lg-3 col-6 feature-block">
                                <img src="/media/icons/bus.png" alt="Транспорт" />
                                <h6>ТРАНСПОРТНЫЕ УСЛУГИ</h6>
                            </div>
                            <div className="col-lg-3 col-6 feature-block">
                                <img src="/media/icons/online-chat.png" alt="Поддержка" />
                                <h6>НЕПРЕВЗОЙДЕННАЯ ПОДДЕРЖКА</h6>
                            </div>
                        </div>

                        {/* Footer Main */}
                        <div className="footer-main py-64">
                            <div className="row">
                                <div className="col-xl-5 col-md-8">
                                    <Link href="/" className="footer-logo mb-40">
                                        <img src="/media/logoStudent (1).png" alt="Logo" />
                                    </Link>
                                    <p className="mb-40 mb-xl-0">
                                        Мы в Studentravel стремимся предоставить вам лучшие условия для отдыха и учебы. Наша команда организует увлекательные поездки, чтобы каждый студент мог получить незабываемые эмоции и впечатления от путешествий.
                                    </p>
                                </div>
                                <div className="col-xl-6 offset-xl-1">
                                    <div className="footer-right-content">
                                        <div className="footer-widgets mb-40 mb-xl-0">
                                            <div className="row">
                                                <div className="col-sm-4 col-6">
                                                    <div className="widget mb-24">
                                                        <h6 className="mb-12">КАРТА САЙТА</h6>
                                                        <ul className="unstyled item-list">
                                                            <li><Link href="/about">О нас</Link></li>
                                                            <li><Link href="/contact">Контакты</Link></li>
                                                            <li><Link href="/tours/booking">Страница бронирования</Link></li>
                                                            <li><Link href="/blog">Блог</Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="col-sm-4 col-6">
                                                    <div className="widget mb-24">
                                                        <h6 className="mb-12">КАТЕГОРИИ</h6>
                                                        <ul className="unstyled item-list">
                                                            <li><Link href="/tours">Пакетные туры</Link></li>
                                                            <li><Link href="/tours">Туры</Link></li>
                                                            <li><Link href="/tours">Для молодоженов</Link></li>
                                                            <li><Link href="/tours">Парные поездки</Link></li>
                                                            <li><Link href="/tours">Семейные поездки</Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="col-sm-4">
                                                    <div className="widget mb-24">
                                                        <h6 className="mb-12">КОНТАКТНАЯ ИНФОРМАЦИЯ</h6>
                                                        <ul className="unstyled item-list">
                                                            <li><a href="tel:+998900007961">+998 90 000 79 61</a></li>
                                                            <li><a href="https://yandex.uz/maps/-/CPuif4yL" target="_blank" rel="noopener noreferrer">Ташкентский институт менеджмента и экономики</a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="widget mb-24">
                                                        <h6 className="mb-12">ЧАСЫ РАБОТЫ</h6>
                                                        <ul className="unstyled item-list">
                                                            <li className="d-flex align-items-center justify-content-between">
                                                                <p>ПН-ПТ</p><p>09:00 - 17:00</p>
                                                            </li>
                                                            <li className="d-flex align-items-center justify-content-between">
                                                                <p>СБ-ВС</p><p>09:00 - 17:00</p>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Newsletter */}
                                        <div className="newsletter">
                                            <h5 className="mb-12">ХОТИТЕ ПОЛУЧАТЬ НОВОСТИ?</h5>
                                            <p className="mb-32">
                                                Получайте регулярные новости о наших турах и специальных предложениях. Это лучший способ быть в курсе самых выгодных цен. Этот сайт защищен reCAPTCHA и Политикой конфиденциальности Google.
                                            </p>
                                            <form onSubmit={(e) => {
                                                e.preventDefault();
                                                toast.success(t('form_success'));
                                                (e.target as HTMLFormElement).reset();
                                            }}>
                                                <div className="newsletter-field">
                                                    <div className="form-group">
                                                        <input type="email" required placeholder="email@example.com" />
                                                    </div>
                                                    <div className="ui-btn ui-btn-primary">
                                                        <button type="submit" data-hover="ПОДПИСАТЬСЯ">ПОДПИСАТЬСЯ</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Footer Bottom */}
                        <div className="footer-bottom-row">
                            <p>©2025 Все права защищены</p>
                            <ul className="unstyled payment-methods align-items-center">
                                <li><img src="/media/icons/payment-2.png" alt="Visa" style={{ height: '28px', width: 'auto' }} /></li>
                                <li><img src="/media/icons/payment-4.png" alt="Mastercard" style={{ height: '28px', width: 'auto' }} /></li>
                                <li>
                                    <div style={{ backgroundColor: '#FF8C00', color: '#fff', borderRadius: '4px', padding: '0 8px', fontWeight: '900', fontSize: '12px', display: 'flex', alignItems: 'center', height: '28px', letterSpacing: '1px' }}>
                                        HUMO
                                    </div>
                                </li>
                                <li>
                                    <div style={{ backgroundColor: '#0056b3', color: '#fff', borderRadius: '4px', padding: '0 8px', fontWeight: '900', fontSize: '12px', display: 'flex', alignItems: 'center', height: '28px', letterSpacing: '0.5px' }}>
                                        UZCARD
                                    </div>
                                </li>
                            </ul>
                            <ul className="unstyled social-links">
                                <li><a href="#"><img src="/media/icons/Instagram.png" alt="Instagram" /></a></li>
                                <li><a href="#"><img src="/media/icons/Twitter.png" alt="Twitter" /></a></li>
                                <li><a href="#"><img src="/media/icons/Facebook.png" alt="Facebook" /></a></li>
                                <li><a href="#"><img src="/media/icons/Linkedin.png" alt="Linkedin" /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
