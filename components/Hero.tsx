import React from 'react';

import { ArrowDown, Phone } from 'lucide-react';

import { RESTAURANT_INFO } from '../lib/restaurantData';

import suki_ramen_hero from '../assets/images/suki_ramen_hero.png';

export const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);

    if (el) {
      el.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="inicio"
      className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#0D0D0D]"
    >
      {/* Background Photography */}
      <div className="absolute inset-0 z-0">
        <img
          src={suki_ramen_hero.src}
          alt="Steaming artisan ramen at Suki Ramen Granada"
          className="w-full h-full object-cover object-center opacity-40 scale-105 transition-transform duration-1000 ease-out"
          referrerPolicy="no-referrer"
        />

        {/* Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/80 to-[#111111]/60" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#111111]/80 via-[#111111]/50 to-[#111111]/30" />

        {/* Manga dots */}
        <div className="absolute inset-0 manga-dots opacity-20 pointer-events-none" />
      </div>

      {/* Decorative text - derecha */}
      <div className="absolute top-28 right-6 sm:right-12 hidden lg:flex flex-col items-end gap-1 pointer-events-none opacity-40 font-mono text-xs text-neutral-400">
        <span className="text-[#D32F2F] font-bold text-sm tracking-widest">
          ラーメン · スキ
        </span>

        <span>GRANADA · PEDRO ANTONIO 15</span>

        <div className="w-16 h-[1px] bg-[#D32F2F] mt-1" />
      </div>

      {/* Decorative manga text */}
      <div className="absolute bottom-28 left-6 sm:left-12 hidden md:block pointer-events-none select-none opacity-25">
        <span className="font-black text-4xl sm:text-5xl text-neutral-400 tracking-widest font-mono">
          ズズズッ
        </span>

        <span className="block text-[10px] text-[#FF2E93] tracking-wider font-mono">
          [SLURP SOUND · ZUZUZU]
        </span>
      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
        <div className="max-w-3xl w-full text-center flex flex-col items-center">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-900/90 border border-neutral-700/80 rounded-full text-xs font-semibold tracking-wider text-neutral-200 mb-6 shadow-md backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-[#D32F2F] animate-ping" />

            <span className="text-white font-mono uppercase">
              Granada Centro
            </span>

            <span className="text-neutral-500">|</span>

            <span className="text-[#FF2E93] font-medium">
              Cocina Japonesa Urbana
            </span>
          </div>

          {/* Main title */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-[#F5F5F5] leading-[1.08] mb-6">
            RAMEN. SUSHI.

            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#F5F5F5] via-[#D32F2F] to-[#FF2E93]">
              Y UN POCO DE LOCURA.
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-2xl font-medium text-neutral-200 leading-relaxed max-w-2xl mb-4">
            <strong className="text-white font-bold">
              SUKI RAMEN·SUSHI
            </strong>{' '}
            — cocina japonesa con actitud en el centro de Granada.
          </p>

          {/* Food categories */}
          <p className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-neutral-400 font-mono mb-8 sm:mb-10 flex items-center justify-center gap-2 flex-wrap">
            <span className="text-neutral-200">Ramen</span>

            <span className="text-[#D32F2F]">•</span>

            <span className="text-neutral-200">Sushi</span>

            <span className="text-[#D32F2F]">•</span>

            <span className="text-neutral-200">Gyozas</span>

            <span className="text-[#D32F2F]">•</span>

            <span className="text-neutral-200">Baos</span>

            <span className="text-[#D32F2F]">•</span>

            <span className="text-neutral-200">Poké</span>
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 w-full max-w-md">
            <button
              id="hero-ver-menu-btn"
              type="button"
              onClick={() => scrollToSection('menu')}
              className="px-6 py-4 bg-[#D32F2F] hover:bg-[#B71C1C] text-white text-sm sm:text-base font-extrabold tracking-wider rounded-sm shadow-xl shadow-red-950/40 active:scale-[0.98] transition-all flex items-center justify-center gap-2.5 cursor-pointer"
            >
              <span>VER MENÚ</span>

              <ArrowDown className="w-4 h-4" />
            </button>

            <a
              id="hero-reservar-mesa-btn"
              href={`tel:${RESTAURANT_INFO.phoneRaw}`}
              className="px-6 py-4 bg-neutral-900/90 hover:bg-neutral-800 border border-neutral-700 text-white text-sm sm:text-base font-extrabold tracking-wider rounded-sm shadow-lg active:scale-[0.98] transition-all flex items-center justify-center gap-2.5"
            >
              <Phone className="w-4 h-4 text-[#D32F2F]" />

              <span>RESERVAR MESA</span>
            </a>
          </div>

          {/* Hours and location */}
          <div className="mt-8 pt-6 border-t border-neutral-800/80 w-full flex flex-wrap justify-center items-center gap-y-2 gap-x-6 text-xs text-neutral-400 font-mono">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />

              <span>Hoy: 12:30–16:30 · 20:00–23:30</span>
            </div>

            <div className="hidden sm:block text-neutral-500">|</div>

            <div className="text-neutral-300">
              C. Pedro Antonio de Alarcón, 15
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};