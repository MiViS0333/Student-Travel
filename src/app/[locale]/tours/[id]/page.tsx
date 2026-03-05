import PageHeader from '@/components/shared/PageHeader';

export default function TourDetailPage() {
    return (
        <>
            <PageHeader title="TOUR DETAIL" />

            <section className="py-64">
                <div className="container-fluid">
                    <div className="tour-detail">
                        <div className="row">
                            <div className="col-lg-6">
                                <h2 className="mb-16">FRESH WATER LAKE</h2>
                                <div className="price-rating mb-24">
                                    <h5 className="color-primary">$300/person</h5>
                                </div>
                                <p className="mb-32">
                                    Lorem ipsum dolor sit amet consectetur. Aliquam in neque eleifend placerat scelerisque tincidunt
                                    erat porttitor. Sed sed in suscipit lorem. Ut felis velit tristique posuere tellus sed. Arcu
                                    convallis nam massa leo viverra volutpat facilisis. Nulla sagittis nam pellentesque sagittis in
                                    turpis nulla et. Lorem ipsum dolor sit amet consectetur. Aliquam in neque eleifend placerat
                                    scelerisque tincidunt erat porttitor.
                                </p>
                                <div className="box-blur-bg mb-64">
                                    <div className="b-radius-20 tour-detail-features">
                                        <div className="row justify-content-between">
                                            <div className="col-xl-6 col-lg-7 col-sm-7 mb-24 mb-sm-0">
                                                <h5 className="mb-16">TRIP DETAIL</h5>
                                                <ul className="unstyled">
                                                    <li className="mb-16"><p>Destination: Banff National Park, Canada</p></li>
                                                    <li className="mb-16"><p>Departure: Banff National Park, Canada</p></li>
                                                    <li className="mb-16"><p>Departure Time: 9:00 AM Tuesdays 09 2024</p></li>
                                                    <li className="mb-16"><p>Age Restriction: 13+</p></li>
                                                    <li><p>Return Time: 10:00 PM Tuesdays 09 2024</p></li>
                                                </ul>
                                            </div>
                                            <div className="col-xl-6 col-lg-5 col-sm-5">
                                                <h5 className="mb-16">SERVICES PROVIDED</h5>
                                                <ul className="unstyled">
                                                    <li className="d-flex align-items-center mb-16">
                                                        <i className="color-primary me-2 fa-light fa-location-crosshairs"></i><p>Departure</p>
                                                    </li>
                                                    <li className="d-flex align-items-center mb-16">
                                                        <i className="color-primary me-2 fa-light fa-calendar"></i><p>6 Days</p>
                                                    </li>
                                                    <li className="d-flex align-items-center mb-16">
                                                        <i className="color-primary me-2 fa-light fa-user"></i><p>6 Person</p>
                                                    </li>
                                                    <li className="d-flex align-items-center mb-16">
                                                        <i className="color-primary me-2 fa-light fa-map-location-dot"></i><p>Guides</p>
                                                    </li>
                                                    <li className="d-flex align-items-center">
                                                        <i className="color-primary me-2 fa-light fa-kit-medical"></i><p>First Aid</p>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="box-blur-bg mb-48">
                                    <img src="/media/tour/tour-detail-2.png" alt="" className="b-radius-20" />
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-xxl-9 col-xl-10 col-md-11">
                                <h2 className="mb-24">ADDITIONAL INFO</h2>
                                <p className="mb-24">
                                    Lorem ipsum dolor sit amet consectetur. Ultrices pretium malesuada nisi arcu egestas at ac
                                    consectetur enim. Sollicitudin ultrices morbi adipiscing scelerisque accumsan erat quam pharetra
                                    quisque. In sem gravida in magna. Diam sodales sodales malesuada senectus enim nullam.
                                </p>
                                <p className="mb-64">
                                    Convallis vitae commodo quis a integer. Lectus facilisis non vel vel sit. Turpis enim feugiat
                                    tincidunt neque cursus proin amet eleifend sagittis. Magna eget facilisi posuere dignissim neque.
                                </p>
                            </div>
                        </div>

                        <h2 className="mb-48">GALLERY</h2>
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
        </>
    );
}
