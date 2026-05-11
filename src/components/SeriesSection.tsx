import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const series = [
  {
    title: 'WAKINIKU CATCHER',
    jp: '脇肉キャッチャー',
    tagline: '背中・脇、はみ肉スッキリ。',
    img: 'https://github.com/liu378592655-rgb/NTP/releases/download/V1/05.jpg',
    color: '#e6d5c3'
  },
  {
    title: 'YORU YORU BRA',
    jp: '夜寄るブラ',
    tagline: '寝ている間も、理想の形を。',
    img: 'https://github.com/liu378592655-rgb/NTP/releases/download/V1/banner-1920.jpg',
    color: '#fdf0f0'
  }
];

export default function SeriesSection() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {series.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.01 }}
              className="relative group cursor-pointer overflow-hidden rounded-sm aspect-[16/9]"
            >
              <img 
                src={item.img} 
                alt={item.jp} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
              <div className="absolute inset-x-8 bottom-8 text-white">
                <span className="text-[10px] font-bold tracking-[0.3em] mb-2 block">{item.title}</span>
                <h3 className="text-3xl font-serif font-bold mb-2">{item.jp}</h3>
                <p className="text-xs font-light tracking-widest opacity-90 mb-6">{item.tagline}</p>
                <div className="flex items-center space-x-3 text-[11px] font-bold tracking-widest">
                  <span>詳しく見る</span>
                  <div className="w-8 h-[1px] bg-white group-hover:w-16 transition-all duration-300" />
                  <ArrowRight size={14} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
