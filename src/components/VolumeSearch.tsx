import React from 'react';
import { motion } from 'motion/react';

const volumes = [
  { label: '小胸さん', sub: 'A-B Cup', desc: 'バストにボリュームを。' },
  { label: '普通胸さん', sub: 'C-D Cup', desc: '自然な形、綺麗に。' },
  { label: 'グラマーさん', sub: 'E-K Cup', desc: 'スッキリ、しっかり支える。' },
];

export default function VolumeSearch() {
  return (
    <section className="py-24 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-brand-gold font-bold tracking-[0.4em] text-[10px] block mb-2 uppercase">Volume Search</span>
          <h2 className="text-3xl md:text-4xl font-serif text-gray-900 leading-tight">
            バストのボリュームで探す
          </h2>
          <p className="mt-4 text-gray-400 text-xs tracking-widest font-light italic">
            Find the perfect fit for your silhouette.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {volumes.map((vol, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -8 }}
              className="bg-white p-12 rounded-sm shadow-sm border border-gray-50 flex flex-col items-center text-center cursor-pointer hover:shadow-xl transition-all duration-500"
            >
              <div className="w-20 h-20 rounded-full bg-brand-pink flex items-center justify-center mb-8 border border-brand-gold/10">
                <span className="text-brand-gold font-serif text-xl italic">{vol.sub.split('-')[0]}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{vol.label}</h3>
              <p className="text-[10px] font-bold text-brand-gold tracking-[0.2em] mb-4 uppercase">{vol.sub}</p>
              <p className="text-sm text-gray-400 font-light leading-relaxed">{vol.desc}</p>
              <div className="mt-8 text-[10px] font-bold tracking-widest border-b border-gray-900 pb-1 group hover:text-brand-gold hover:border-brand-gold transition-all">
                アイテムを見る
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
