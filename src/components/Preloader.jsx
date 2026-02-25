import React, { useState, useEffect } from 'react'

export default function Preloader() {
    const [visible, setVisible] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false)
        }, 2500)
        return () => clearTimeout(timer)
    }, [])

    if (!visible) return null

    return (
        <div id="preloader">
            <div className="loader">
                <div className="plane">
                    <img src="/assets/media/icons/loader-plane.png" className="plane-img" alt="" />
                </div>
                <div className="earth-wrapper">
                    <div className="earth"></div>
                </div>
            </div>
        </div>
    )
}
