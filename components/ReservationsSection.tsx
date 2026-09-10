import React from 'react';
import { Phone, MapPin, Clock, Utensils } from 'lucide-react';
import { RESTAURANT_INFO } from '../lib/restaurantData';

export const ReservationsSection: React.FC = () => {
  const scrollToLocation = () => {
    const el = document.getElementById('donde-estamos');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="reservas" className="py-20 sm:py-24 bg-[#111111] relative border-b border-neutral-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Subtle Japanese Stamp */}
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#D32F2F]/15 border border-[#D32F2F]/30 rounded-full text-xs font-mono text-[#D32F2F] mb-6">
          <Utensils className="w-3.5 h-3.5" />
          <span>RESERVA DIRECTA · ご予約</span>
        </div>

        {/* Big Title */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#F5F5F5] mb-6">
          ¿NOS VEMOS HOY?
        </h2>

        {/* Text */}
        <p className="text-lg sm:text-2xl text-neutral-300 font-medium mb-10 max-w-xl mx-auto leading-relaxed">
          Reserva tu mesa llamando al{' '}
          <a
            href={`tel:${RESTAURANT_INFO.phoneRaw}`}
            className="text-white font-extrabold hover:text-[#D32F2F] transition-colors underline decoration-[#D32F2F] decoration-2 underline-offset-4"
          >
            {RESTAURANT_INFO.phone}
          </a>
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto mb-10">
          <a
            id="reservas-call-btn"
            href={`tel:${RESTAURANT_INFO.phoneRaw}`}
            className="w-full sm:w-auto px-8 py-4 bg-[#D32F2F] hover:bg-[#B71C1C] text-white font-black text-sm sm:text-base tracking-widest uppercase rounded-sm shadow-xl shadow-red-950/40 active:scale-95 transition-all flex items-center justify-center gap-3"
          >
            <Phone className="w-5 h-5 fill-current" />
            <span>LLAMAR PARA RESERVAR</span>
          </a>

          <button
            id="reservas-location-btn"
            type="button"
            onClick={scrollToLocation}
            className="w-full sm:w-auto px-8 py-4 bg-[#1A1A1A] hover:bg-neutral-800 border border-neutral-700 text-[#F5F5F5] font-bold text-sm sm:text-base tracking-widest uppercase rounded-sm transition-all flex items-center justify-center gap-3 cursor-pointer"
          >
            <MapPin className="w-5 h-5 text-neutral-400" />
            <span>CÓMO LLEGAR</span>
          </button>
        </div>

        {/* Informative details banner */}
        <div className="inline-flex flex-wrap items-center justify-center gap-6 p-4 bg-[#161616] border border-neutral-800 rounded-sm text-xs font-mono text-neutral-400">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-[#D32F2F]" />
            <span>Almuerzo: 12:30 – 16:30</span>
          </div>
          <span className="hidden sm:inline text-neutral-600">•</span>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-[#D32F2F]" />
            <span>Cena: 20:00 – 23:30</span>
          </div>
          <span className="hidden sm:inline text-neutral-600">•</span>
          <span className="text-neutral-300">Lunes a domingo</span>
        </div>

      </div>
    </section>
  );
};
