'use client';

import { useState } from 'react';
import Preloader from '@/components/shared/Preloader';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import { Toaster } from 'react-hot-toast';

export default function ClientLayout({ children }: { children: React.ReactNode }) {


    return (
        <>
            <Preloader />
            <div id="scroll-wrapper">
                <div id="smooth-content">
                    <main>
                        <Header />
                        {children}
                        <Footer />
                    </main>
                </div>
            </div>
            <Toaster
                position="top-center"
                reverseOrder={false}
                toastOptions={{
                    style: {
                        flexDirection: 'column',
                        alignItems: 'center',
                        textAlign: 'center',
                        padding: '16px',
                        borderRadius: '12px',
                        gap: '12px',
                    },
                }}
            />
        </>
    );
}
