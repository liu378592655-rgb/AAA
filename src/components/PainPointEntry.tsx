import { motion } from 'motion/react';
import { ShieldAlert, Weight, TrendingUp, Sparkles } from 'lucide-react';

const painPoints = [
  {
    title: "重みで肩がこる",
    en: "Shoulder Strain",
    desc: "バストの重さを分散し、肩への負担を最小限に。",
    icon: <Weight className="w-8 h-8 text-brand-gold" />
  },
  {
    title: "バストが垂れる",
    en: "Sagging Concerns",
    desc: "土台からしっかり持ち上げ、高い位置でキープ。",
    icon: <ShieldAlert className="w-8 h-8 text-brand-gold" />
  },
  {
    title: "太って見える",
    en: "Appearing Larger",
    desc: "サイドをスッキリ抑えて、シルエットを華奢に。",
    icon: <TrendingUp className="w-8 h-8 text-brand-gold" />
  },
  {
    title: "揺れが気になる",
    en: "Bounce Control",
    desc: "独自のホールド構造で、気になる揺れを軽減。",
    icon: <Sparkles className="w-8 h-8 text-brand-gold" />
  }
];

export default function PainPointEntry() {
  return (
    <section className="py-20 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-brand-gold font-bold tracking-[0.4em] text-[10px] block mb-2">CONCERNS</span>
          <h2 className="text-3xl md:text-4xl font-serif text-gray-900">大胸特有の「悩み」から選ぶ</h2>
          <p className="text-gray-400 text-xs mt-4">痛みや違和感を、美しさの土台へ変えていく。</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {painPoints.map((point, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-sm shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer border-b-2 border-transparent hover:border-brand-gold group"
            >
              <div className="mb-6">{point.icon}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{point.title}</h3>
              <p className="text-xs text-gray-400 font-medium mb-4 uppercase tracking-widest">{point.en}</p>
              <p className="text-sm text-gray-600 leading-relaxed font-light">{point.desc}</p>
              
              <div className="mt-6 flex items-center text-[10px] font-bold text-brand-gold opacity-0 group-hover:opacity-100 transition-opacity">
                解決策を見る →
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
