import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import TourGridLeftSidebar from './pages/TourGridLeftSidebar'
import TourDetailPage from './pages/TourDetailPage'
import TourDetailSidebarPage from './pages/TourDetailSidebarPage'
import TourBookingPage from './pages/TourBookingPage'
import BlogGridLeftSidebar from './pages/BlogGridLeftSidebar'
import BlogDetailPage from './pages/BlogDetailPage'
import AccountPage from './pages/AccountPage'
import ContactPage from './pages/ContactPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/tours" element={<TourGridLeftSidebar />} />
      <Route path="/tour-detail" element={<TourDetailPage />} />
      <Route path="/tour-detail-sidebar" element={<TourDetailSidebarPage />} />
      <Route path="/booking" element={<TourBookingPage />} />
      <Route path="/blog/left-sidebar" element={<BlogGridLeftSidebar />} />
      <Route path="/blog-detail" element={<BlogDetailPage />} />
      <Route path="/account" element={<AccountPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  )
}

export default App
