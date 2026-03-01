import React, { useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'
import Preloader from './Preloader'
import SearchPopup from './SearchPopup'

export default function PageLayout({ children, bottomBar, initGsap = true }) {
    useEffect(() => {
        if (!initGsap) return
        const gsap = window.gsap
        const ScrollTrigger = window.ScrollTrigger
        const ScrollSmoother = window.ScrollSmoother
        if (!gsap || !ScrollTrigger || !ScrollSmoother) return

        gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

        let smoother
        if (window.innerWidth > 124) {
            smoother = ScrollSmoother.create({
                wrapper: '#scroll-wrapper',
                content: '#smooth-content',
                smooth: 2,
                effects: true,
                smoothTouch: 1,
            })
            smoother.scrollTo(0)
        }

        return () => {
            ScrollTrigger.getAll().forEach(t => t.kill())
            if (smoother) smoother.kill()
        }
    }, [initGsap])

    return (
        <>
            <Preloader />
            <Header />
            <div id="scroll-wrapper">
                <div id="smooth-content">
                    <main>
                        {children}
                        <Footer />
                    </main>
                </div>
            </div>
            <SearchPopup />
            {bottomBar}
        </>
    )
}
