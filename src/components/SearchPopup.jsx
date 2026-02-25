import React, { useState } from 'react'

export default function SearchPopup() {
    const [active, setActive] = useState(false)

    // Expose toggle function globally so Header can use it
    React.useEffect(() => {
        window.__searchToggle = () => setActive(prev => !prev)
        return () => { delete window.__searchToggle }
    }, [])

    return (
        <div className={`search-popup${active ? ' active' : ''}`}>
            <div className="search-popup__overlay search-toggler" onClick={() => setActive(false)}></div>
            <div className="search-popup__content text-center">
                <form role="search" method="get" className="search-popup__form" action="/tours">
                    <div className="blur-layer">
                        <input type="text" id="search" autoComplete="off" placeholder="Search Here..." />
                    </div>
                    <button type="submit"><i className="fal fa-search"></i></button>
                </form>
            </div>
        </div>
    )
}
