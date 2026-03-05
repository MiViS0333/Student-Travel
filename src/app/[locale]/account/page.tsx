'use client';

import { useState } from 'react';
import PageHeader from '@/components/shared/PageHeader';

export default function AccountPage() {
    const [activeTab, setActiveTab] = useState<'login' | 'register'>('login');

    const [loginData, setLoginData] = useState({ email: '', password: '' });
    const [registerData, setRegisterData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const handleLoginSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle login
    };

    const handleRegisterSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle register
    };

    return (
        <>
            <PageHeader title="MY ACCOUNT" />

            <section className="py-64">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-6 col-lg-8 mx-auto">
                            <div className="box-blur-bg">
                                <div className="account-form b-radius-20 bg-white p-48">
                                    <div className="form-tabs mb-32 d-flex gap-3">
                                        <button
                                            className={`tab-btn h5 ${activeTab === 'login' ? 'active' : ''}`}
                                            onClick={() => setActiveTab('login')}
                                        >
                                            LOGIN
                                        </button>
                                        <button
                                            className={`tab-btn h5 ${activeTab === 'register' ? 'active' : ''}`}
                                            onClick={() => setActiveTab('register')}
                                        >
                                            REGISTER
                                        </button>
                                    </div>

                                    {activeTab === 'login' && (
                                        <form onSubmit={handleLoginSubmit}>
                                            <div className="form-group mb-24">
                                                <label className="mb-8 h6">Email</label>
                                                <input type="email" className="cus-form-control" value={loginData.email}
                                                    onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                                                    required placeholder="Email Address" />
                                            </div>
                                            <div className="form-group mb-32">
                                                <label className="mb-8 h6">Password</label>
                                                <input type="password" className="cus-form-control" value={loginData.password}
                                                    onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                                                    required placeholder="Password" />
                                            </div>
                                            <div className="ui-btn ui-btn-primary">
                                                <button type="submit" data-hover="LOGIN">LOGIN</button>
                                            </div>
                                        </form>
                                    )}

                                    {activeTab === 'register' && (
                                        <form onSubmit={handleRegisterSubmit}>
                                            <div className="form-group mb-24">
                                                <label className="mb-8 h6">Full Name</label>
                                                <input type="text" className="cus-form-control" value={registerData.name}
                                                    onChange={(e) => setRegisterData({ ...registerData, name: e.target.value })}
                                                    required placeholder="Full Name" />
                                            </div>
                                            <div className="form-group mb-24">
                                                <label className="mb-8 h6">Email</label>
                                                <input type="email" className="cus-form-control" value={registerData.email}
                                                    onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })}
                                                    required placeholder="Email Address" />
                                            </div>
                                            <div className="form-group mb-24">
                                                <label className="mb-8 h6">Password</label>
                                                <input type="password" className="cus-form-control" value={registerData.password}
                                                    onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })}
                                                    required placeholder="Password" />
                                            </div>
                                            <div className="form-group mb-32">
                                                <label className="mb-8 h6">Confirm Password</label>
                                                <input type="password" className="cus-form-control" value={registerData.confirmPassword}
                                                    onChange={(e) => setRegisterData({ ...registerData, confirmPassword: e.target.value })}
                                                    required placeholder="Confirm Password" />
                                            </div>
                                            <div className="ui-btn ui-btn-primary">
                                                <button type="submit" data-hover="REGISTER">REGISTER</button>
                                            </div>
                                        </form>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
