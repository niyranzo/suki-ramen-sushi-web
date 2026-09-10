import React from 'react';
import { MapPin, Clock, Phone, ExternalLink, Compass } from 'lucide-react';
import { RESTAURANT_INFO } from '../lib/restaurantData';

export const LocationSection: React.FC = () => {
  return (
    <section id="donde-estamos" className="py-20 sm:py-24 bg-[#0D0D0D] relative border-b border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-900 border border-neutral-800 rounded-full text-xs font-mono text-neutral-400 mb-4">
            <Compass className="w-3.5 h-3.5 text-[#D32F2F]" />
            <span>UBICACIÓN · アクセス</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#F5F5F5] mb-3">
            DÓNDE ENCONTRARNOS
          </h2>
          <p className="text-sm sm:text-base text-neutral-400">
            En pleno corazón universitario y gastronómico de Granada.
          </p>
        </div>

        {/* Map & Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Visual Map Container (Elemento Principal) */}
          <div className="lg:col-span-8 rounded-sm overflow-hidden border border-neutral-800 bg-[#171717] min-h-[380px] sm:min-h-[440px] relative shadow-2xl flex flex-col">
            {/* Embedded Google Maps */}
            <iframe
              title="Ubicación SUKI RAMEN SUSHI Granada"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1589.6483276770723!2d-3.6053370070768365!3d37.169420397144464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd71fd8c26fb2715%3A0xc38332eaedf5c36d!2sSUKI%20RAMEN%C2%B7SUSHI!5e0!3m2!1ses!2ses!4v1789067889574!5m2!1ses!2ses"
              className="w-full flex-1 min-h-[340px] border-0 filter contrast-[1.1] grayscale-[0.3]"
              loading="lazy"
              allowFullScreen
            />
            {/* Overlay button bar */}
            <div className="bg-[#141414] p-4 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-xs text-neutral-300 font-mono">
                <MapPin className="w-4 h-4 text-[#D32F2F] shrink-0" />
                <span>{RESTAURANT_INFO.address}</span>
              </div>
              <a
                id="open-google-maps-btn"
                href={RESTAURANT_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2 bg-[#D32F2F] hover:bg-[#B71C1C] text-white text-xs font-bold tracking-wider rounded-sm transition-colors shrink-0"
              >
                <span>ABRIR EN GOOGLE MAPS</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Quick Info Cards Column */}
          <div className="lg:col-span-4 flex flex-col justify-between gap-4">
            {/* Address card */}
            <div className="p-6 bg-[#161616] border border-neutral-800 rounded-sm">
              <div className="flex items-center gap-2.5 text-[#D32F2F] font-mono text-xs font-bold uppercase mb-2">
                <MapPin className="w-4 h-4" />
                <span>DIRECCIÓN</span>
              </div>
              <p className="text-base font-bold text-white mb-1">
                C. Pedro Antonio de Alarcón, 15
              </p>
              <p className="text-sm text-neutral-400 font-mono">
                18005 Granada, España
              </p>
              <div className="mt-4 pt-3 border-t border-neutral-800/80 text-xs text-neutral-400">
                A pocos minutos del centro y zonas de ocio.
              </div>
            </div>

            {/* Hours card */}
            <div className="p-6 bg-[#161616] border border-neutral-800 rounded-sm">
              <div className="flex items-center gap-2.5 text-[#D32F2F] font-mono text-xs font-bold uppercase mb-2">
                <Clock className="w-4 h-4" />
                <span>HORARIO DE COCINA</span>
              </div>
              <p className="text-sm font-bold text-white mb-3">
                Lunes a domingo
              </p>
              <div className="space-y-1.5 text-xs font-mono text-neutral-300">
                <div className="flex justify-between border-b border-neutral-800/60 pb-1">
                  <span className="text-neutral-400">Almuerzos:</span>
                  <span className="font-bold text-white">12:30 – 16:30</span>
                </div>
                <div className="flex justify-between pt-1">
                  <span className="text-neutral-400">Cenas:</span>
                  <span className="font-bold text-white">20:00 – 23:30</span>
                </div>
              </div>
            </div>

            {/* Telephone card */}
            <div className="p-6 bg-[#161616] border border-neutral-800 rounded-sm">
              <div className="flex items-center gap-2.5 text-[#D32F2F] font-mono text-xs font-bold uppercase mb-2">
                <Phone className="w-4 h-4" />
                <span>TELÉFONO</span>
              </div>
              <a
                href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                className="text-lg font-black text-white hover:text-[#D32F2F] transition-colors font-mono block mb-1"
              >
                {RESTAURANT_INFO.phone}
              </a>
              <p className="text-xs text-neutral-400">
                Llámanos para reservar o consultar alérgenos.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
