import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/comen/Header";
import Footer from "./components/comen/Footer";
import SmoothScroll from "./components/comen/SmoothScroll";
import ScrollToTop from "./components/comen/ScrollToTop";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicePage from "./pages/ServicePage";
import { ContactPage } from "./pages/ContactPage";
import MenuPage from "./pages/MenuPage";
import GalleryPage from "./pages/GalleryPage";
import BookPage from "./pages/BookPage";
import FaqPage from "./pages/FaqPage";
import BlogPage from "./pages/BlogPage";
import SinglePostPage from "./pages/SinglePostPage";
import NotFoundPage from "./pages/NotFoundPage";
import PrivateDiningPage from "./pages/PrivateDiningPage";
import SpecialEventsPage from "./pages/SpecialEventsPage";
import WeeklyMealPrepPage from "./pages/WeeklyMealPrepPage";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <SmoothScroll>
        <Header />
        <Routes>
          {/* Main Pages */}
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/about-us" element={<AboutPage />} />
          <Route path="/services" element={<ServicePage />} />
          <Route path="/contact" element={<ContactPage />} />

          {/* Dedicated Service Detail Pages */}
          <Route path="/services/private-dining" element={<PrivateDiningPage />} />
          <Route path="/services/special-events" element={<SpecialEventsPage />} />
          <Route path="/services/weekly-meal-prep" element={<WeeklyMealPrepPage />} />

          {/* Dropdown Pages List */}
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/menu-experience" element={<MenuPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/book" element={<BookPage />} />
          <Route path="/book-a-chef" element={<BookPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<SinglePostPage />} />
          <Route path="/blog/single-post" element={<SinglePostPage />} />

          {/* 404 Pages */}
          <Route path="/404" element={<NotFoundPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </SmoothScroll>
    </BrowserRouter>
  );
};

export default App;
