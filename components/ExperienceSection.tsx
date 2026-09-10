import React from 'react';
import ambienceImage from "../assets/images/suki_restaurant_ambience.png";

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experiencia" className="py-20 sm:py-24 bg-[#111111] relative border-b border-neutral-800/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Editorial Text */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-900 border border-neutral-800 rounded-full text-xs font-mono text-neutral-400 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF2E93]" />
              <span>EXPERIENCIA · 東京ストリート</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#F5F5F5] leading-tight mb-6">
              NO SOLO VENIMOS A DARTE DE COMER.
            </h2>

            <p className="text-base sm:text-lg text-neutral-300 font-medium leading-relaxed mb-8">
              Un rincón de Japón en Granada, con ramen, sushi, ambiente anime y un robot que forma parte de la experiencia.
            </p>

            {/* Feature tags */}
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-neutral-800">
              <div className="p-3.5 bg-neutral-900/80 border border-neutral-800 rounded-sm">
                <span className="text-[#D32F2F] text-xs font-mono font-bold block mb-1">01 / CULTURA POP</span>
                <span className="text-sm font-bold text-white block">Ambiente Anime & Street</span>
                <span className="text-xs text-neutral-400">Detalles manga y buena música</span>
              </div>
              <div className="p-3.5 bg-neutral-900/80 border border-neutral-800 rounded-sm">
                <span className="text-[#FF2E93] text-xs font-mono font-bold block mb-1">02 / TECH JAPONESA</span>
                <span className="text-sm font-bold text-white block">Servicio con Robot</span>
                <span className="text-xs text-neutral-400">Divertido y sorprendente</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Photo & Manga Elements */}
          <div className="lg:col-span-7 relative">
            {/* Main Ambience Photo Container */}
            <div className="relative rounded-sm overflow-hidden border border-neutral-800 shadow-2xl bg-[#171717] group">
              <img
                 src={ambienceImage.src}
                alt="Ambiente del restaurante Suki Ramen Granada"
                className="w-full h-[360px] sm:h-[440px] object-cover object-center group-hover:scale-102 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/80 via-transparent to-black/20" />

              {/* Japanese Location Stamp */}
              <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-xs border border-neutral-700 text-xs font-mono text-neutral-300 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#D32F2F]"></span>
                <span>GRANADA · PEDRO ANTONIO</span>
              </div>

              {/* Katakana Overlay Accent in corner */}
              <div className="absolute bottom-4 right-4 text-right pointer-events-none select-none">
                <span className="text-3xl font-black text-white/30 font-mono tracking-widest block">
                  スキ・グラナダ
                </span>
                <span className="text-[10px] text-[#FF2E93] font-mono tracking-wider">
                  SUKI VIBE
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
