import Link from 'next/link';
import { useTranslation } from 'react-i18next';

export default function DiscountBanner() {
    const { t } = useTranslation('common');
    return (
        <section className="position-relative z-2 py-64">
            <div className="container-fluid">
                <div className="box-blur-bg">
                    <div className="discount-banner b-radius-20">
                        <div className="row">
                            <div className="col-lg-6 order-lg-1 order-2">
                                <div className="img-block text-center">
                                    <img src="/media/sketchPhoto.png" alt="Discount" />
                                </div>
                            </div>
                            <div className="col-lg-6 order-lg-2 order-1">
                                <div className="content">
                                    <div className="text-block">
                                        <div className="title-block">
                                            <div className="discount-tag">
                                                <h2 className="color-white">30%</h2>
                                                <h4 className="color-white">{t('discount_badge')}</h4>
                                            </div>
                                            <h1 className="mb-16 color-white position-relative z-3">{t('discount_title')}</h1>
                                        </div>
                                        <h5 className="mb-16 color-primary">{t('discount_subtitle')}</h5>
                                        <p className="mb-48 color-white" dangerouslySetInnerHTML={{ __html: t('discount_text') }}></p>
                                        <div className="ui-btn ui-btn-primary">
                                            <Link href="/tours/booking" data-hover={t('contact_us')}>{t('contact_us')}</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
