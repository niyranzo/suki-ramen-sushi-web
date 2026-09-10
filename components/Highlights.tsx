import React from 'react';
import { ArrowRight, Flame } from 'lucide-react';
import { HIGHLIGHTS_DATA } from '../lib/restaurantData';

interface HighlightsProps {
  onSelectCategory: (categoryId: string) => void;
}

export const Highlights: React.FC<HighlightsProps> = ({ onSelectCategory }) => {
  const handleCardClick = (categoryId: string) => {
    onSelectCategory(categoryId);
    const menuEl = document.getElementById('menu');
    if (menuEl) {
      menuEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="destacados" className="py-20 bg-[#111111] relative border-b border-neutral-800/80">
      {/* Background accents */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#D32F2F] tracking-widest uppercase mb-2">
              <Flame className="w-3.5 h-3.5 fill-current" />
              <span>LO MÁS PEDIDO · おすすめ</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#F5F5F5]">
              ¿QUÉ TE APETECE HOY?
            </h2>
          </div>
          <p className="text-sm text-neutral-400 max-w-sm">
            Ingredientes frescos, recetas japonesas contemporáneas y elaboración diaria en nuestro local de Granada.
          </p>
        </div>

        {/* 4 Large Visual Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {HIGHLIGHTS_DATA.map((item) => (
            <div
              key={item.id}
              id={`highlight-${item.id}`}
              onClick={() => handleCardClick(item.categoryId)}
              className="group relative h-[380px] sm:h-[420px] rounded-sm overflow-hidden border border-neutral-800 hover:border-[#D32F2F]/60 bg-[#171717] cursor-pointer transition-all duration-300 hover:-translate-y-1.5 shadow-xl hover:shadow-2xl hover:shadow-red-950/20 flex flex-col justify-end p-6"
            >
              {/* Background Image with zoom on hover */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/70 to-transparent" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
              </div>

              {/* Japanese Kanji Background Accent */}
              <div className="absolute top-4 right-4 z-10 font-bold text-3xl font-mono text-white/20 select-none pointer-events-none group-hover:text-[#D32F2F]/40 transition-colors">
                {item.japaneseTitle}
              </div>

              {/* Tag / Badge */}
              <div className="relative z-10 mb-2">
                <span className="inline-block px-2.5 py-0.5 bg-[#D32F2F] text-white text-[11px] font-bold tracking-wider uppercase rounded-xs">
                  {item.tag}
                </span>
              </div>

              {/* Title & Description */}
              <div className="relative z-10">
                <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-2 group-hover:text-[#F5F5F5] flex items-center justify-between">
                  <span>{item.title}</span>
                  <ArrowRight className="w-5 h-5 text-neutral-400 group-hover:text-[#D32F2F] group-hover:translate-x-1 transition-all" />
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 leading-snug line-clamp-2">
                  {item.description}
                </p>
              </div>

              {/* Bottom bar indicator */}
              <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-neutral-800 group-hover:bg-[#D32F2F] transition-colors duration-300" />
            </div>
          ))}
        </div>

        {/* Bottom CTA button */}
        <div className="mt-12 text-center">
          <button
            id="ver-toda-la-carta-btn"
            type="button"
            onClick={() => {
              const el = document.getElementById('menu');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-transparent hover:bg-neutral-800/80 border-2 border-neutral-700 hover:border-neutral-500 text-[#F5F5F5] text-sm sm:text-base font-bold tracking-widest uppercase rounded-sm transition-all cursor-pointer group shadow-md"
          >
            <span>VER TODA LA CARTA</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform text-[#D32F2F]" />
          </button>
        </div>
      </div>
    </section>
  );
};
