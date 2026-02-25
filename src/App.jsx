import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import TourGridPage from './pages/TourGridPage'
import TourGridLeftSidebar from './pages/TourGridLeftSidebar'
import TourGridRightSidebar from './pages/TourGridRightSidebar'
import TourDetailPage from './pages/TourDetailPage'
import TourDetailSidebarPage from './pages/TourDetailSidebarPage'
import TourBookingPage from './pages/TourBookingPage'
import BlogGridPage from './pages/BlogGridPage'
import BlogGridLeftSidebar from './pages/BlogGridLeftSidebar'
import BlogGridRightSidebar from './pages/BlogGridRightSidebar'
import BlogDetailPage from './pages/BlogDetailPage'
import AccountPage from './pages/AccountPage'
import ContactPage from './pages/ContactPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/tours" element={<TourGridPage />} />
      <Route path="/tours/left-sidebar" element={<TourGridLeftSidebar />} />
      <Route path="/tours/right-sidebar" element={<TourGridRightSidebar />} />
      <Route path="/tour-detail" element={<TourDetailPage />} />
      <Route path="/tour-detail-sidebar" element={<TourDetailSidebarPage />} />
      <Route path="/booking" element={<TourBookingPage />} />
      <Route path="/blog" element={<BlogGridPage />} />
      <Route path="/blog/left-sidebar" element={<BlogGridLeftSidebar />} />
      <Route path="/blog/right-sidebar" element={<BlogGridRightSidebar />} />
      <Route path="/blog-detail" element={<BlogDetailPage />} />
      <Route path="/account" element={<AccountPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  )
}

export default App
