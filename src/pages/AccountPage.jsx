import React from 'react'
import PageLayout from '../components/PageLayout'

export default function AccountPage() {
    return (
        <PageLayout>
            <section className="page-header">
                <h1 className="color-white">ACCOUNT</h1>
            </section>
            <section className="py-64">
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="box-blur-bg">
                                <div className="b-radius-20 bg-white p-4 p-md-5">
                                    <h2 className="mb-32 text-center">Login</h2>
                                    <form>
                                        <div className="form-group mb-24">
                                            <label className="mb-8"><h6>Email</h6></label>
                                            <input type="email" className="cus-form-control" placeholder="Email Address" required />
                                        </div>
                                        <div className="form-group mb-24">
                                            <label className="mb-8"><h6>Password</h6></label>
                                            <input type="password" className="cus-form-control" placeholder="Password" required />
                                        </div>
                                        <div className="ui-btn ui-btn-primary w-100 text-center mb-24">
                                            <button type="submit" data-hover="LOGIN">LOGIN</button>
                                        </div>
                                    </form>
                                    <hr className="my-4" />
                                    <h2 className="mb-32 text-center">Register</h2>
                                    <form>
                                        <div className="form-group mb-24">
                                            <label className="mb-8"><h6>Full Name</h6></label>
                                            <input type="text" className="cus-form-control" placeholder="Full Name" required />
                                        </div>
                                        <div className="form-group mb-24">
                                            <label className="mb-8"><h6>Email</h6></label>
                                            <input type="email" className="cus-form-control" placeholder="Email Address" required />
                                        </div>
                                        <div className="form-group mb-24">
                                            <label className="mb-8"><h6>Password</h6></label>
                                            <input type="password" className="cus-form-control" placeholder="Password" required />
                                        </div>
                                        <div className="form-group mb-24">
                                            <label className="mb-8"><h6>Confirm Password</h6></label>
                                            <input type="password" className="cus-form-control" placeholder="Confirm Password" required />
                                        </div>
                                        <div className="ui-btn ui-btn-primary w-100 text-center">
                                            <button type="submit" data-hover="REGISTER">REGISTER</button>
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
