'use client';

import { useState } from 'react';
import Preloader from '@/components/shared/Preloader';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import SearchPopup from '@/components/shared/SearchPopup';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
    const [searchOpen, setSearchOpen] = useState(false);

    return (
        <>
            <Preloader />
            <div id="scroll-wrapper">
                <div id="smooth-content">
                    <main>
                        <Header onSearchToggle={() => setSearchOpen(!searchOpen)} />
                        {children}
                        <Footer />
                    </main>
                </div>
            </div>
            <SearchPopup isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
        </>
    );
}
