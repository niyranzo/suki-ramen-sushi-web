import React from 'react';
import { Camera, Phone, MapPin, Clock, UtensilsCrossed } from 'lucide-react';
import { RESTAURANT_INFO } from '../lib/restaurantData';

export const Footer: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#0A0A0A] text-neutral-400 py-16 border-t border-neutral-800 relative overflow-hidden">
      {/* Subtle Japanese Watermark */}
      <div className="absolute right-0 bottom-0 pointer-events-none select-none font-black text-white/[0.02] text-8xl sm:text-9xl font-mono leading-none translate-x-12 translate-y-6">
        スキ
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-neutral-900">
          
          {/* Col 1: Brand & Instagram */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-sm bg-[#D32F2F] flex items-center justify-center text-white font-black text-sm">
                <UtensilsCrossed className="w-4 h-4" />
              </div>
              <span className="font-extrabold text-lg tracking-tight text-[#F5F5F5]">
                SUKI <span className="text-[#D32F2F]">RAMEN·SUSHI</span>
              </span>
            </div>

            <p className="text-sm text-neutral-400 max-w-sm mb-6 leading-relaxed">
              Cocina japonesa contemporánea, ramen artesanal y sushi fresco en Granada. Espíritu urbano y actitud pop japonesa.
            </p>

            {/* Instagram link */}
            <a
              id="footer-instagram-link"
              href={RESTAURANT_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-3.5 py-2 bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 rounded-sm text-xs font-mono text-neutral-200 transition-colors"
            >
              <Camera className="w-4 h-4 text-[#FF2E93]" />
              <span>{RESTAURANT_INFO.instagram}</span>
            </a>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-mono font-bold tracking-widest text-neutral-300 uppercase mb-4">
              ENLACES
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="#inicio"
                  onClick={(e) => scrollToSection(e, 'inicio')}
                  className="hover:text-white transition-colors"
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="#menu"
                  onClick={(e) => scrollToSection(e, 'menu')}
                  className="hover:text-white transition-colors"
                >
                  Menú
                </a>
              </li>
              <li>
                <a
                  href="#reservas"
                  onClick={(e) => scrollToSection(e, 'reservas')}
                  className="hover:text-white transition-colors"
                >
                  Reservas
                </a>
              </li>
              <li>
                <a
                  href="#donde-estamos"
                  onClick={(e) => scrollToSection(e, 'donde-estamos')}
                  className="hover:text-white transition-colors"
                >
                  Dónde estamos
                </a>
              </li>
              <li>
                <a
                  href={RESTAURANT_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FF2E93] transition-colors"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact & Hours */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-mono font-bold tracking-widest text-neutral-300 uppercase mb-4">
              CONTACTO & HORARIO
            </h4>
            <div className="space-y-3 text-xs sm:text-sm font-mono text-neutral-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D32F2F] shrink-0 mt-0.5" />
                <span>{RESTAURANT_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D32F2F] shrink-0" />
                <a
                  href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                  className="hover:text-white transition-colors"
                >
                  {RESTAURANT_INFO.phone}
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#D32F2F] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-white">Lunes a domingo</span>
                  <span>12:30–16:30 y 20:00–23:30</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar with Manga Detail */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-500">
          <div className="flex items-center gap-3">
            <span>© {new Date().getFullYear()} SUKI RAMEN·SUSHI</span>
            <span>•</span>
            <span>Granada, España</span>
          </div>

          {/* Subtle manga micro stamp */}
          <div className="flex items-center gap-2 text-[11px] text-neutral-500 font-mono">
            <span className="text-[#D32F2F]">美味</span>
            <span>AUTÉNTICA ACTITUD JAPONESA</span>
            <span className="text-[#FF2E93]">ラーメン</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
