import React from 'react';
import { Bike, ExternalLink } from 'lucide-react';
import { RESTAURANT_INFO } from '../lib/restaurantData';

export const DeliverySection: React.FC = () => {
  const deliveryPlatforms = [
    {
      name: 'UBER EATS',
      url: RESTAURANT_INFO.deliveryLinks.uberEats,
      accent: 'hover:border-emerald-500 hover:text-emerald-400',
      badge: 'Entrega rápida',
    },
    {
      name: 'GLOVO',
      url: RESTAURANT_INFO.deliveryLinks.glovo,
      accent: 'hover:border-amber-400 hover:text-amber-300',
      badge: 'En tu puerta',
    }
  ];

  return (
    <section id="delivery" className="py-16 bg-[#121212] relative border-b border-neutral-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Header */}
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-900 border border-neutral-800 rounded-full text-xs font-mono text-neutral-400 mb-4">
          <Bike className="w-3.5 h-3.5 text-[#D32F2F]" />
          <span>DELIVERY EN GRANADA · 配達</span>
        </div>

        <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-[#F5F5F5] mb-3">
          ¿TE APETECE SUKI EN CASA?
        </h2>

        <p className="text-sm text-neutral-400 max-w-md mx-auto mb-8">
          Disfruta de nuestro ramen caliente, sushi y baos favoritos sin moverte del sofá a través de tu app favorita.
        </p>

        {/* Buttons Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2  gap-4 max-w-2xl mx-auto">
          {deliveryPlatforms.map((platform) => (
            <a
              key={platform.name}
              id={`delivery-btn-${platform.name.toLowerCase().replace(' ', '-')}`}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-4 bg-[#181818] border border-neutral-800 rounded-sm font-extrabold text-sm sm:text-base tracking-wider text-white transition-all shadow-md hover:-translate-y-1 flex items-center justify-between group cursor-pointer ${platform.accent}`}
            >
              <div className="text-left">
                <span className="block">{platform.name}</span>
                <span className="text-[10px] font-mono text-neutral-500 font-normal block">
                  {platform.badge}
                </span>
              </div>
              <ExternalLink className="w-4 h-4 text-neutral-500 group-hover:text-white transition-colors" />
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};
