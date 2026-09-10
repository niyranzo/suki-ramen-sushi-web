import React from 'react';
import { Phone, BookOpen } from 'lucide-react';
import { RESTAURANT_INFO } from '../lib/restaurantData';

export const MobileQuickBar: React.FC = () => {
  const scrollToMenu = () => {
    const el = document.getElementById('menu');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <aside
      aria-label="Acceso rápido móvil"
      className="md:hidden fixed bottom-3 left-3 right-3 z-40 bg-[#171717]/95 backdrop-blur-md border border-neutral-700/80 p-2 rounded-md shadow-2xl shadow-black flex items-center gap-2"
    >
      <button
        type="button"
        onClick={scrollToMenu}
        className="flex-1 py-2.5 px-3 bg-neutral-850 hover:bg-neutral-800 text-white rounded text-xs font-bold tracking-wider flex items-center justify-center gap-2 border border-neutral-700 active:scale-98 transition-all"
      >
        <BookOpen className="w-3.5 h-3.5 text-neutral-300" />
        <span>CARTA</span>
      </button>

      <a
        href={`tel:${RESTAURANT_INFO.phoneRaw}`}
        className="flex-1 py-2.5 px-3 bg-[#D32F2F] hover:bg-[#B71C1C] text-white rounded text-xs font-black tracking-wider flex items-center justify-center gap-2 shadow-md active:scale-98 transition-all"
      >
        <Phone className="w-3.5 h-3.5 fill-current" />
        <span>RESERVAR</span>
      </a>
    </aside>
  );
};
