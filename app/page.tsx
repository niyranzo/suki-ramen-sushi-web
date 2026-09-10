"use client";

import { useState } from 'react';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { Highlights } from '../components/Highlights';
import { MenuSection } from '../components/MenuSection';
import { ExperienceSection } from '../components/ExperienceSection';
import { ReviewsSection } from '../components/ReviewsSection';
import { ReservationsSection } from '../components/ReservationsSection';
import { LocationSection } from '../components/LocationSection';
import { DeliverySection } from '../components/DeliverySection';
import { Footer } from '../components/Footer';
import { MobileQuickBar } from '../components/MobileQuickBar';

export default function Home() {
  const [activeMenuCategory, setActiveMenuCategory] = useState<string>('ramen');

  const handleSelectCategory = (categoryId: string) => {
    setActiveMenuCategory(categoryId);
  };

  return (
    <div className="min-h-screen bg-[#111111] text-[#F5F5F5] flex flex-col selection:bg-[#D32F2F] selection:text-white pb-14 md:pb-0">
      {/* 1. Header (Sticky) */}
      <Header />

      {/* Main Single Page Content */}
      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. Destacados (4 Tarjetas Grandes) */}
        <Highlights onSelectCategory={handleSelectCategory} />

        {/* 4. Menú Completo con Tabs */}
        <MenuSection
          activeCategory={activeMenuCategory}
          setActiveCategory={setActiveMenuCategory}
        />

        {/* 5. La Experiencia Suki (Ambiente, Robot) */}
        <ExperienceSection />

        {/* 6. Reseñas (Google 4.5★ & +700 opiniones) */}
        <ReviewsSection />

        {/* 7. Reservas Telefónicas */}
        <ReservationsSection />

        {/* 8. Dónde Estamos (Mapa visual Google Maps) */}
        <LocationSection />

        {/* 9. Delivery (Uber Eats, Glovo, Just Eat) */}
        <DeliverySection />
      </main>

      {/* 10. Footer Minimalista */}
      <Footer />

      {/* Mobile Sticky Quick Action Bar */}
      <MobileQuickBar />
    </div>
  );
}
