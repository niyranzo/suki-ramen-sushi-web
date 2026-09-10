"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, UtensilsCrossed } from 'lucide-react';
import { RESTAURANT_INFO } from '../lib/restaurantData';
import logoimage  from '../assets/images/logo.png';

interface HeaderProps {
  onNavigate?: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'INICIO', href: '#inicio' },
    { label: 'MENÚ', href: '#menu' },
    { label: 'RESERVAS', href: '#reservas' },
    { label: 'DÓNDE ESTAMOS', href: '#donde-estamos' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#111111]/95 backdrop-blur-md border-b border-neutral-800/90 py-3 shadow-lg shadow-black/40'
          : 'bg-gradient-to-b from-[#111111]/90 via-[#111111]/60 to-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#inicio"
          onClick={(e) => handleNavClick(e, '#inicio')}
          className="group flex items-center gap-2.5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D32F2F]"
        >
          {/* <div className="w-12 h-10 rounded-sm flex items-center justify-center text-white font-black text-sm tracking-tighter shadow-sm "> */}
            <img src={logoimage.src} alt="Suki Ramen Logo" />
          </div>
          <div>
            <span className="font-extrabold text-base sm:text-lg tracking-tight text-[#F5F5F5] group-hover:text-white transition-colors">
              SUKI <span className="text-[#D32F2F] font-black">RAMEN·SUSHI</span>
            </span>
            <span className="hidden sm:block text-[10px] tracking-widest text-neutral-400 font-mono -mt-1">
              GRANADA · ラーメン
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-bold tracking-widest text-neutral-300">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="relative py-1 text-neutral-300 hover:text-white transition-colors hover:after:w-full after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#D32F2F] after:transition-all after:duration-200"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          {/* Prominent CTA */}
          <a
            href={`tel:${RESTAURANT_INFO.phoneRaw}`}
            id="header-reserve-btn"
            className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 bg-[#D32F2F] hover:bg-[#B71C1C] text-white text-xs sm:text-sm font-bold tracking-wide rounded-sm shadow-md shadow-red-900/20 active:scale-95 transition-all"
            title="Llamar para reservar mesa"
          >
            <Phone className="w-3.5 h-3.5 fill-current" />
            <span>RESERVAR</span>
          </a>

          {/* Mobile Hamburger Toggle */}
          <button
            id="mobile-menu-toggle"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-neutral-300 hover:text-white hover:bg-neutral-800 rounded-sm focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#151515] border-b border-neutral-800 px-6 py-5 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-4 text-sm font-bold tracking-wider">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="py-2 text-neutral-300 hover:text-[#D32F2F] border-b border-neutral-850 flex items-center justify-between"
              >
                <span>{item.label}</span>
                <span className="text-[10px] text-neutral-500 font-mono">→</span>
              </a>
            ))}
            <div className="pt-2 flex flex-col gap-2">
              <a
                href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                className="w-full flex items-center justify-center gap-2 py-3 bg-[#D32F2F] text-white rounded-sm font-bold text-sm tracking-wide shadow-md"
              >
                <Phone className="w-4 h-4" />
                <span>LLAMAR PARA RESERVAR ({RESTAURANT_INFO.phone})</span>
              </a>
              <div className="text-center text-[11px] text-neutral-400 font-mono mt-1">
                {RESTAURANT_INFO.address}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
