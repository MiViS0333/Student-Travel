import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className="pt-64 pb-40">
            <div className="container-fluid">
                <div className="box-blur-bg">
                    <div className="footer-content bg-white b-radius-20">
                        <div className="features-row row">
                            <div className="col-lg-3 col-6 feature-block">
                                <img src="/assets/media/icons/australia.png" alt="" />
                                <h6>ОСОБЫЕ МЕРОПРИЯТИЯ</h6>
                            </div>
                            <div className="col-lg-3 col-6 feature-block">
                                <img src="/assets/media/icons/tour-guide.png" alt="" />
                                <h6>ЛУЧШИЕ ГИДЫ</h6>
                            </div>
                            <div className="col-lg-3 col-6 feature-block">
                                <img src="/assets/media/icons/bus.png" alt="" />
                                <h6>ТРАНСПОРТНЫЕ УСЛУГИ</h6>
                            </div>
                            <div className="col-lg-3 col-6 feature-block">
                                <img src="/assets/media/icons/online-chat.png" alt="" />
                                <h6>НЕПРЕВЗОЙДЕННАЯ ПОДДЕРЖКА</h6>
                            </div>
                        </div>
                        <div className="footer-main py-64">
                            <div className="row">
                                <div className="col-xl-5 col-md-8">
                                    <Link to="/" className="footer-logo mb-40">
                                        <img src="/assets/media/footer-logo.png" alt="" />
                                    </Link>
                                    <p className="mb-40 mb-xl-0">Studentravel — ваш надежный партнер в мире студенческих путешествий. Мы создаем уникальные туры, которые объединяют обучение, отдых и новые знакомства, помогая студентам открывать мир и находить вдохновение для будущего.</p>
                                </div>
                                <div className="col-xl-6 offset-xl-1">
                                    <div className="footer-right-content">
                                        <div className="footer-widgets mb-40 mb-xl-0">
                                            <div className="row">
                                                <div className="col-sm-4 col-6">
                                                    <div className="widget mb-24">
                                                        <h6 className="mb-12">КАРТА САЙТА</h6>
                                                        <ul className="unstyled item-list">
                                                            <li><Link to="/about">О нас</Link></li>
                                                            <li><Link to="/contact">Контакты</Link></li>
                                                            <li><Link to="/booking">Бронирование</Link></li>
                                                            <li><Link to="/blog">Блоги</Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="col-sm-4 col-6">
                                                    <div className="widget mb-24">
                                                        <h6 className="mb-12">КАТЕГОРИИ</h6>
                                                        <ul className="unstyled item-list">
                                                            <li><Link to="/tours">Пакеты</Link></li>
                                                            <li><Link to="/tours">Туры</Link></li>
                                                            <li><Link to="/tours">Медовый месяц</Link></li>
                                                            <li><Link to="/tours">Поездка для пар</Link></li>
                                                            <li><Link to="/tours">Семейные поездки</Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="col-sm-4">
                                                    <div className="widget mb-24">
                                                        <h6 className="mb-12">КОНТАКТЫ</h6>
                                                        <ul className="unstyled item-list">
                                                            <li><a href="tel:+79991234567">+7 (999) 123-45-67</a></li>
                                                            <li><a href="mailto:info@studentravel.com">info@studentravel.com</a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="widget mb-24">
                                                        <h6 className="mb-12">ЧАСЫ РАБОТЫ</h6>
                                                        <ul className="unstyled item-list">
                                                            <li className="d-flex align-items-center justify-content-between">
                                                                <p>ПН-ПТ</p>
                                                                <p>09:00-17:00</p>
                                                            </li>
                                                            <li className="d-flex align-items-center justify-content-between">
                                                                <p>СБ-ВС</p>
                                                                <p>09:00-17:00</p>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="newsletter">
                                            <h5 className="mb-12">ХОТИТЕ ПОЛУЧАТЬ НОВОСТИ?</h5>
                                            <p className="mb-32">Подпишитесь на нашу рассылку, чтобы первыми узнавать о самых выгодных студенческих турах, эксклюзивных предложениях и вдохновляющих историях путешествий. Мы защищаем ваши данные и отправляем только самое интересное.</p>
                                            <form action="/">
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
                        <div className="footer-bottom-row">
                            <p>© 2025 Все права защищены</p>
                            <ul className="unstyled payment-methods">
                                <li><img src="/assets/media/icons/payment-2.png" alt="" /></li>
                                <li><img src="/assets/media/icons/payment-4.png" alt="" /></li>
                            </ul>
                            <ul className="unstyled social-links">
                                <li><a href=""><img src="/assets/media/icons/Instagram.png" alt="" /></a></li>
                                <li><a href=""><img src="/assets/media/icons/Twitter.png" alt="" /></a></li>
                                <li><a href=""><img src="/assets/media/icons/Facebook.png" alt="" /></a></li>
                                <li><a href=""><img src="/assets/media/icons/Linkedin.png" alt="" /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
