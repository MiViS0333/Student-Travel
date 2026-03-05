import Link from 'next/link';

export default function DiscountBanner() {
    return (
        <section className="position-relative z-2 py-64">
            <div className="container-fluid">
                <div className="box-blur-bg">
                    <div className="discount-banner b-radius-20">
                        <div className="row">
                            <div className="col-lg-6 order-lg-1 order-2">
                                <div className="img-block text-center">
                                    <img src="/media/banner/dicount-banner/main-object.png" alt="Discount" />
                                </div>
                            </div>
                            <div className="col-lg-6 order-lg-2 order-1">
                                <div className="content">
                                    <div className="text-block">
                                        <div className="title-block">
                                            <div className="discount-tag">
                                                <h2 className="color-white">30%</h2>
                                                <h4 className="color-white">OFF</h4>
                                            </div>
                                            <h1 className="mb-16 color-white position-relative z-3">INTERESTED?</h1>
                                        </div>
                                        <h5 className="mb-16 color-primary">DISCOUNT IF YOU BOOK NOW</h5>
                                        <p className="mb-48 color-white">
                                            Lorem ipsum dolor sit amet consectetur. Aliquam in neque eleifend <br />
                                            placerat scelerisque tincidunt erat porttitor. Sed sed in suscipit <br />
                                            lorem. Ut felis velit tristique posuere tellus sed.
                                        </p>
                                        <div className="ui-btn ui-btn-primary">
                                            <Link href="/tours/booking" data-hover="GET IN TOUCH">GET IN TOUCH</Link>
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
