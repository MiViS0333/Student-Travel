import React from 'react'
import PageLayout from '../components/PageLayout'

export default function AccountPage() {
    return (
        <PageLayout>
            <section className="page-header">
                <h1 className="color-white">АККАУНТ</h1>
            </section>
            <section className="py-64">
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="box-blur-bg">
                                <div className="b-radius-20 bg-white p-4 p-md-5">
                                    <h2 className="mb-32 text-center">Вход</h2>
                                    <form>
                                        <div className="form-group mb-24">
                                            <label className="mb-8"><h6>Email</h6></label>
                                            <input type="email" className="cus-form-control" placeholder="Электронная почта" required />
                                        </div>
                                        <div className="form-group mb-24">
                                            <label className="mb-8"><h6>Пароль</h6></label>
                                            <input type="password" className="cus-form-control" placeholder="Пароль" required />
                                        </div>
                                        <div className="ui-btn ui-btn-primary w-100 text-center mb-24">
                                            <button type="submit" data-hover="ВОЙТИ">ВОЙТИ</button>
                                        </div>
                                    </form>
                                    <hr className="my-4" />
                                    <h2 className="mb-32 text-center">Регистрация</h2>
                                    <form>
                                        <div className="form-group mb-24">
                                            <label className="mb-8"><h6>Полное имя</h6></label>
                                            <input type="text" className="cus-form-control" placeholder="Полное имя" required />
                                        </div>
                                        <div className="form-group mb-24">
                                            <label className="mb-8"><h6>Email</h6></label>
                                            <input type="email" className="cus-form-control" placeholder="Электронная почта" required />
                                        </div>
                                        <div className="form-group mb-24">
                                            <label className="mb-8"><h6>Пароль</h6></label>
                                            <input type="password" className="cus-form-control" placeholder="Пароль" required />
                                        </div>
                                        <div className="form-group mb-24">
                                            <label className="mb-8"><h6>Подтвердите пароль</h6></label>
                                            <input type="password" className="cus-form-control" placeholder="Подтвердите пароль" required />
                                        </div>
                                        <div className="ui-btn ui-btn-primary w-100 text-center">
                                            <button type="submit" data-hover="ЗАРЕГИСТРИРОВАТЬСЯ">ЗАРЕГИСТРИРОВАТЬСЯ</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </PageLayout>
    )
}
