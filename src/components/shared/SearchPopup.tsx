'use client';

import { useCallback } from 'react';

interface SearchPopupProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function SearchPopup({ isOpen, onClose }: SearchPopupProps) {
    const handleSubmit = useCallback((e: React.FormEvent) => {
        e.preventDefault();
        // Handle search logic
    }, []);

    return (
        <div className={`search-popup${isOpen ? ' active' : ''}`}>
            <div className="search-popup__overlay search-toggler" onClick={onClose}></div>
            <div className="search-popup__content text-center">
                <form role="search" method="get" className="search-popup__form" onSubmit={handleSubmit}>
                    <div className="blur-layer">
                        <input type="text" id="search" autoComplete="off" placeholder="Search Here..." />
                    </div>
                    <button type="submit"><i className="fal fa-search"></i></button>
                </form>
            </div>
        </div>
    );
}
