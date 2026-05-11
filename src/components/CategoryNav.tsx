import { motion } from 'motion/react';

export default function CategoryNav() {
  const categories = [
    { name: "脇肉キャッチャー", sub: "脇高ブラ", icon: "Bra1" },
    { name: "贅肉キャッチャー", sub: "背中スッキリ", icon: "Bra2" },
    { name: "夜寄るブラ", sub: "夜用ケア", icon: "Bra3" },
    { name: "ビスチェリーナ", sub: "ウエストケア", icon: "Bra4" },
    { name: "ハリジェンヌ", sub: "リフトアップ", icon: "Bra5" },
    { name: "ブラジャー", sub: "定番アイテム", icon: "Bra6" }
  ];

  return (
    <section className="py-16 border-b border-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-3 md:grid-cols-6 gap-8">
          {categories.map((cat, idx) => (
            <motion.a
              key={idx}
              href="#"
              whileHover={{ y: -5 }}
              className="flex flex-col items-center group text-center"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-brand-pink flex items-center justify-center mb-4 transition-all group-hover:bg-brand-gold group-hover:shadow-lg">
                <div className="w-10 h-10 border-2 border-white rounded-full opacity-40" />
              </div>
              <h3 className="text-[10px] md:text-[11px] font-bold text-gray-900 tracking-wider mb-1 line-clamp-1 uppercase">
                {cat.name}
              </h3>
              <p className="text-[9px] text-gray-400 font-medium tracking-widest uppercase">
                {cat.sub}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
