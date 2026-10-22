import React from 'react'
import Header from './components/comen/Header'
import Footer from './components/comen/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage';
import ServicePage from './pages/ServicePage'
import { ContactPage } from './pages/ContactPage'
import SmoothScroll from './components/comen/SmoothScroll'

const App = () => {
  return (
    <BrowserRouter>
      <SmoothScroll>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicePage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </SmoothScroll>
    </BrowserRouter>
  )
}


export default App
