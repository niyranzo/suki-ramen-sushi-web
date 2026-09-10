import React from 'react';
import { Sparkles, Flame, Leaf, Phone } from 'lucide-react';
import { MENU_CATEGORIES, RESTAURANT_INFO } from '../lib/restaurantData';

interface MenuSectionProps {
  activeCategory: string;
  setActiveCategory: (catId: string) => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({
  activeCategory,
  setActiveCategory,
}) => {
  const currentCategory =
    MENU_CATEGORIES.find((cat) => cat.id === activeCategory) || MENU_CATEGORIES[0];

  return (
    <section id="menu" className="py-20 sm:py-24 bg-[#0F0F0F] relative border-b border-neutral-800/80">
      {/* Background Subtle Accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D32F2F]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-900 border border-neutral-800 rounded-full text-xs font-mono text-neutral-400 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D32F2F]"></span>
            <span>CARTA COMPLETA · メニュー</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#F5F5F5] mb-3">
            MENÚ
          </h2>
          <p className="text-base sm:text-lg text-neutral-400 font-medium">
            Tu misión: decidir qué vas a pedir primero.
          </p>
        </div>

        {/* Category Navigation (Horizontal scroll for mobile) */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto no-scrollbar gap-2 pb-4 mb-10 border-b border-neutral-800">
          {MENU_CATEGORIES.map((category) => {
            const isActive = category.id === activeCategory;
            return (
              <button
                key={category.id}
                id={`cat-btn-${category.id}`}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 sm:px-5 py-2.5 rounded-sm text-xs sm:text-sm font-bold tracking-wider whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#D32F2F] text-white shadow-lg shadow-red-950/40 border border-[#D32F2F]'
                    : 'bg-[#181818] text-neutral-400 hover:text-white hover:bg-neutral-800 border border-neutral-800'
                }`}
              >
                {category.name}
              </button>
            );
          })}
        </div>

        {/* Category Description Banner */}
        <div className="mb-8 flex items-center justify-between flex-wrap gap-2 text-xs sm:text-sm text-neutral-400 bg-neutral-900/60 p-3 sm:p-4 rounded-sm border border-neutral-800/80">
          <span className="font-semibold text-neutral-300">
            {currentCategory.description}
          </span>
          <span className="font-mono text-xs text-neutral-500">
            {currentCategory.items.length} platos disponibles
          </span>
        </div>

        {/* Platos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {currentCategory.items.map((dish) => (
            <div
              key={dish.id}
              id={`dish-${dish.id}`}
              className="bg-[#171717] border border-neutral-800 hover:border-neutral-700 rounded-sm p-5 sm:p-6 transition-all hover:bg-[#1a1a1a] flex flex-col justify-between group"
            >
              <div className="flex gap-4 items-start">
                {/* Photo thumbnail ONLY on dishes that have a photo */}
                {dish.image && (
                  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-sm overflow-hidden shrink-0 border border-neutral-800 group-hover:border-[#D32F2F]/40 transition-colors">
                    <img
                      src={dish.image}
                      alt={dish.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                )}

                <div className="flex-1 min-w-0">
                  {/* Badge */}
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    {dish.badge === 'FAVORITO' && (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-[#D32F2F]/20 border border-[#D32F2F]/40 text-[#D32F2F] text-[10px] font-extrabold uppercase rounded-xs tracking-wider">
                        <Sparkles className="w-3 h-3" />
                        FAVORITO
                      </span>
                    )}
                    {dish.badge === 'SPICY' && (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-[#FF2E93]/20 border border-[#FF2E93]/40 text-[#FF2E93] text-[10px] font-extrabold uppercase rounded-xs tracking-wider">
                        <Flame className="w-3 h-3" />
                        SPICY
                      </span>
                    )}
                    {dish.badge === 'VEGAN' && (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-[10px] font-extrabold uppercase rounded-xs tracking-wider">
                        <Leaf className="w-3 h-3" />
                        VEGAN
                      </span>
                    )}
                  </div>

                  {/* Name & Price */}
                  <div className="flex items-baseline justify-between gap-3 mb-2">
                    <h3 className="font-extrabold text-base sm:text-lg text-white tracking-tight leading-snug">
                      {dish.name}
                    </h3>
                    <span className="font-black text-base sm:text-lg text-[#F5F5F5] shrink-0 font-mono">
                      {dish.price}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                    {dish.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Conversion Strip below Menu */}
        <div className="mt-14 p-6 bg-gradient-to-r from-neutral-900 via-[#181818] to-neutral-900 border border-neutral-800 rounded-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h4 className="text-base font-extrabold text-white">
              ¿Listo para probarlo?
            </h4>
            <p className="text-xs text-neutral-400">
              Reserva tu mesa por teléfono y ten tu sitio asegurado.
            </p>
          </div>
          <a
            href={`tel:${RESTAURANT_INFO.phoneRaw}`}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#D32F2F] hover:bg-[#B71C1C] text-white text-xs sm:text-sm font-bold tracking-wider rounded-sm transition-all shadow-md shrink-0"
          >
            <Phone className="w-4 h-4" />
            <span>LLAMAR AHORA ({RESTAURANT_INFO.phone})</span>
          </a>
        </div>
      </div>
    </section>
  );
};
