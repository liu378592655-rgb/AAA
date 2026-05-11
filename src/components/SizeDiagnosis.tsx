import React from 'react';
import { motion } from 'motion/react';
import { ClipboardCheck, Sparkles, ChevronRight } from 'lucide-react';

export default function SizeDiagnosis() {
  return (
    <section className="py-24 bg-brand-cool-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-white rounded-sm p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 border border-gray-100">
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center space-x-2 bg-brand-olive/10 px-4 py-1.5 rounded-full mb-6 text-brand-olive">
              <Sparkles size={14} />
              <span className="text-[10px] font-bold tracking-widest uppercase italic">Self Diagnosis</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-serif text-gray-900 leading-tight mb-6">
              わたしのサイズ、<br />
              本当に合ってる？
            </h2>
            <p className="text-gray-500 text-sm md:text-lg font-light leading-relaxed mb-10 tracking-widest">
              3〜5問の簡単な質問に答えるだけ。<br />
              あなたの胸型を判定し、おすすめのシリーズと<br className="hidden md:block" />
              ぴったりのサイズを秒速で导き出します。
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="bg-gray-900 text-white px-10 py-5 text-[11px] font-bold tracking-[0.3em] flex items-center justify-center gap-3 hover:bg-brand-olive transition-colors shadow-xl">
                <ClipboardCheck size={18} />
                診断を開始する
                <ChevronRight size={16} />
              </button>
              <button className="bg-transparent border border-gray-900 text-gray-900 px-10 py-5 text-[11px] font-bold tracking-[0.3em] hover:bg-gray-900 hover:text-white transition-all">
                正しい測り方を見る
              </button>
            </div>
          </div>
          
          <div className="flex-1 relative">
            <div className="relative z-10 w-full aspect-square md:aspect-[4/3] rounded-sm overflow-hidden shadow-2xl">
               <img 
                src="https://github.com/liu378592655-rgb/NTP/releases/download/V1/BrandBook1.jpg" 
                alt="Diagnosis Concept" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
               />
               <div className="absolute inset-0 bg-gradient-to-tr from-brand-grey/10 to-transparent" />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-brand-grey/10 rounded-full blur-2xl animate-pulse" />
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-brand-grey/5 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
