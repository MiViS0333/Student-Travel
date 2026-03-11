import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import toast from 'react-hot-toast';

export default function Footer() {
    const { t } = useTranslation('footer');
    return (
        <footer className="pt-64 pb-40">
            <div className="container-fluid">
                <div className="box-blur-bg">
                    <div className="footer-content bg-white b-radius-20">
                        {/* Features Row */}
                        <div className="features-row row">
                            <div className="col-lg-3 col-6 feature-block">
                                <img src="/media/icons/australia.png" alt={t('features_1_title')} />
                                <h6>{t('features_1_title')}</h6>
                            </div>
                            <div className="col-lg-3 col-6 feature-block">
                                <img src="/media/icons/tour-guide.png" alt={t('features_2_title')} />
                                <h6>{t('features_2_title')}</h6>
                            </div>
                            <div className="col-lg-3 col-6 feature-block">
                                <img src="/media/icons/bus.png" alt={t('features_3_title')} />
                                <h6>{t('features_3_title')}</h6>
                            </div>
                            <div className="col-lg-3 col-6 feature-block">
                                <img src="/media/icons/online-chat.png" alt={t('features_4_title')} />
                                <h6>{t('features_4_title')}</h6>
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
                                        {t('description')}
                                    </p>
                                </div>
                                <div className="col-xl-6 offset-xl-1">
                                    <div className="footer-right-content">
                                        <div className="footer-widgets mb-40 mb-xl-0">
                                            <div className="row">
                                                <div className="col-sm-4 col-6">
                                                    <div className="widget mb-24">
                                                        <h6 className="mb-12">{t('sitemap')}</h6>
                                                        <ul className="unstyled item-list">
                                                            <li><Link href="/">{t('menu_home')}</Link></li>
                                                            <li><Link href="/about">{t('menu_about')}</Link></li>
                                                            <li><Link href="/tours">{t('menu_tours')}</Link></li>
                                                            <li><Link href="/blog">{t('menu_blog')}</Link></li>
                                                            <li><Link href="/contact">{t('menu_contact')}</Link></li>
                                                            <li><Link href="/tours/booking">{t('menu_booking')}</Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="col-sm-4 col-6">
                                                    <div className="widget mb-24">
                                                        <h6 className="mb-12">{t('categories')}</h6>
                                                        <ul className="unstyled item-list">
                                                            <li><Link href="/tours">{t('cat_package')}</Link></li>
                                                            <li><Link href="/tours">{t('cat_tours')}</Link></li>
                                                            <li><Link href="/tours">{t('cat_honeymoon')}</Link></li>
                                                            <li><Link href="/tours">{t('cat_couple')}</Link></li>
                                                            <li><Link href="/tours">{t('cat_family')}</Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="col-sm-4">
                                                    <div className="widget mb-24">
                                                        <h6 className="mb-12">{t('contact_info')}</h6>
                                                        <ul className="unstyled item-list">
                                                            <li><a href="tel:+998900007961">+998 90 000 79 61</a></li>
                                                            <li><a href="https://yandex.uz/maps/-/CPuif4yL" target="_blank" rel="noopener noreferrer">{t('institute')}</a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="widget mb-24">
                                                        <h6 className="mb-12">{t('working_hours')}</h6>
                                                        <ul className="unstyled item-list">
                                                            <li className="d-flex align-items-center justify-content-between">
                                                                <p>{t('weekdays')}</p><p>09:00 - 18:00</p>
                                                            </li>
                                                            <li className="d-flex align-items-center justify-content-between">
                                                                <p>{t('weekends')}</p><p>09:00 - 18:00</p>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Newsletter */}
                                        <div className="newsletter">
                                            <h5 className="mb-12">{t('news_title')}</h5>
                                            <p className="mb-32">
                                                {t('news_desc')}
                                            </p>
                                            <form onSubmit={(e) => {
                                                e.preventDefault();
                                                toast.success(t('form_success', { ns: 'common' }));
                                                (e.target as HTMLFormElement).reset();
                                            }}>
                                                <div className="newsletter-field">
                                                    <div className="form-group">
                                                        <input type="email" required placeholder={t('subscribe_placeholder')} />
                                                    </div>
                                                    <div className="ui-btn ui-btn-primary">
                                                        <button type="submit" data-hover={t('subscribe_btn')}>{t('subscribe_btn')}</button>
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
                            <p>{t('copyright')}</p>
                            <ul className="unstyled payment-methods align-items-center">
                                <li><img src="/media/icons/payment-2.png" alt="Visa" style={{ height: '28px', width: 'auto' }} /></li>
                                <li><img src="/media/icons/payment-4.png" alt="Mastercard" style={{ height: '28px', width: 'auto' }} /></li>
                                <li>
                                    <img src="/media/humo.png" alt="HUMO" style={{ height: '28px', width: 'auto', borderRadius: '4px' }} />
                                </li>
                                <li>
                                    <img src="/media/uzcard.png" alt="UZCARD" style={{ height: '28px', width: 'auto', borderRadius: '4px' }} />
                                </li>
                            </ul>
                            <ul className="unstyled social-links">
                                <li>
                                    <a href="https://www.instagram.com/studentravel.uz?igsh=MWVrYnY3ZTA3eWE0aw==" target="_blank" rel="noopener noreferrer">
                                        <img src="/media/icons/Instagram.png" alt="Instagram" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://t.me/studentraveluz" target="_blank" rel="noopener noreferrer">
                                        <img src="/media/icons/Telegram.svg" alt="Telegram" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
