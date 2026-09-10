import React from 'react';
import { Star, MessageSquare } from 'lucide-react';
import { REVIEWS_DATA, RESTAURANT_INFO } from '../lib/restaurantData';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reseñas" className="py-20 bg-[#0D0D0D] relative border-b border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header & Google Badge */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#D32F2F] tracking-widest uppercase mb-2">
              <MessageSquare className="w-3.5 h-3.5" />
              <span>OPINIONES REALES · 口コミ</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#F5F5F5]">
              ¿QUÉ DICE LA GENTE?
            </h2>
          </div>

          {/* Prominent Google Metrics Badge */}
          <div className="inline-flex items-center gap-4 p-4 bg-neutral-900 border border-neutral-800 rounded-sm shadow-lg">
            <div className="flex items-center gap-1.5 text-amber-400">
              <span className="text-2xl font-black font-mono text-white">4,5</span>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
            </div>
            <div className="w-[1px] h-8 bg-neutral-800" />
            <div>
              <span className="text-xs font-bold text-neutral-200 block uppercase tracking-wider">
                en Google
              </span>
              <span className="text-xs font-mono text-neutral-400">
                +700 reseñas
              </span>
            </div>
          </div>
        </div>

        {/* 3 Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS_DATA.map((review) => (
            <div
              key={review.id}
              className="bg-[#171717] border border-neutral-800 p-6 rounded-sm flex flex-col justify-between hover:border-neutral-700 transition-colors"
            >
              <div>
                {/* Rating stars & Date */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  {/* <span className="text-[11px] font-mono text-neutral-500">
                    {review.date}
                  </span> */}
                </div>

                {/* Review Text */}
                <p className="text-sm text-neutral-300 leading-relaxed mb-4 italic">
                  "{review.comment}"
                </p>
              </div>

              {/* Author & Dish Tag */}
              <div className="pt-4 border-t border-neutral-800/80 flex items-center justify-between text-xs">
                <span className="font-bold text-white tracking-wide">
                  {review.author}
                </span>
                {review.highlightDish && (
                  <span className="text-[10px] text-[#D32F2F] font-mono font-medium">
                    {review.highlightDish}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Small Notice / Editable note */}
        <div className="mt-8 text-center text-xs text-neutral-500 font-mono">
          Basado en valoraciones públicas en Google de clientes en nuestro restaurante de Granada.
        </div>
      </div>
    </section>
  );
};
