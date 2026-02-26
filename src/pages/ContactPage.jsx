import React from 'react'
import PageLayout from '../components/PageLayout'

export default function ContactPage() {
    return (
        <PageLayout>
            <section className="page-header">
                <h1 className="color-white">КОНТАКТЫ</h1>
            </section>
            <section className="py-64">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6 mb-32">
                            <div className="box-blur-bg">
                                <div className="b-radius-20 bg-white p-4 p-md-5">
                                    <h2 className="mb-32">Свяжитесь с нами</h2>
                                    <form className="contact-form">
                                        <div className="row">
                                            <div className="col-md-6 mb-24">
                                                <div className="form-group">
                                                    <input type="text" className="cus-form-control" placeholder="Полное имя" required />
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-24">
                                                <div className="form-group">
                                                    <input type="email" className="cus-form-control" placeholder="Электронная почта" required />
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-24">
                                                <div className="form-group">
                                                    <input type="tel" className="cus-form-control" placeholder="Номер телефона" />
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-24">
                                                <div className="form-group">
                                                    <input type="text" className="cus-form-control" placeholder="Тема" required />
                                                </div>
                                            </div>
                                            <div className="col-12 mb-24">
                                                <div className="form-group">
                                                    <textarea className="cus-form-control" rows="5" placeholder="Ваше сообщение" required></textarea>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="ui-btn ui-btn-primary">
                                                    <button type="submit" data-hover="ОТПРАВИТЬ">ОТПРАВИТЬ</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="message"></div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mb-32">
                            <div className="box-blur-bg">
                                <div className="b-radius-20 bg-white p-4 p-md-5">
                                    <h2 className="mb-32">Контактная информация</h2>
                                    <div className="mb-24">
                                        <h6 className="mb-8">АДРЕС</h6>
                                        <p>ул. Путешествий 123, офис 456, Ташкент, Узбекистан</p>
                                    </div>
                                    <div className="mb-24">
                                        <h6 className="mb-8">ТЕЛЕФОН</h6>
                                        <p><a href="tel:123456789">1300 337 446</a></p>
                                    </div>
                                    <div className="mb-24">
                                        <h6 className="mb-8">EMAIL</h6>
                                        <p><a href="mailto:sales@iof.com.au">sales@iof.com.au</a></p>
                                    </div>
                                    <div className="mb-24">
                                        <h6 className="mb-8">ЧАСЫ РАБОТЫ</h6>
                                        <p>ПН-ПТ: 09:00 - 17:00</p>
                                        <p>СБ-ВС: 09:00 - 17:00</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </PageLayout>
    )
}
