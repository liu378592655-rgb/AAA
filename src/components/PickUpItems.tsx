import { motion } from 'motion/react';
import { ShoppingBag } from 'lucide-react';

const products = [
  {
    id: 'p1',
    name: '特上脇肉キャッチャー (B-Kカップ)',
    price: '¥ 6,820',
    tag: '人気No.1',
    image: 'https://github.com/liu378592655-rgb/NTP/releases/download/V1/01.jpg',
  },
  {
    id: 'p2',
    name: 'ハリジェンヌ (B-Kカップ)',
    price: '¥ 6,820',
    tag: 'エレガント',
    image: 'https://github.com/liu378592655-rgb/NTP/releases/download/V1/02.jpg',
  },
  {
    id: 'p3',
    name: 'シン・胸不二子ブラ (C-Mカップ)',
    price: '¥ 6,820',
    tag: '新色入荷',
    image: 'https://github.com/liu378592655-rgb/NTP/releases/download/V1/03.jpg',
  },
  {
    id: 'p4',
    name: 'SELFIT BRA セルフィットブラ',
    price: '¥ 4,950',
    tag: '快適な着け心地',
    image: 'https://github.com/liu378592655-rgb/NTP/releases/download/V1/04.jpg',
  }
];

export default function PickUpItems() {
  return (
    <section className="py-24 bg-white border-b border-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center mb-16 text-center">
          <span className="text-brand-olive font-bold tracking-[0.5em] text-[10px] mb-4 uppercase">New Arrivals</span>
          <h2 className="text-3xl md:text-5xl font-serif text-gray-900 tracking-tight">
             P I C K U P <span className="italic">アイテム</span>
          </h2>
          <div className="w-12 h-1 bg-brand-olive mt-8 rounded-full" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-12">
          {products.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-[#fafafa] mb-5 rounded-sm">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                {product.tag && (
                  <div className="absolute top-0 left-0 bg-gray-900 text-white text-[9px] font-bold px-4 py-2 tracking-[0.2em] uppercase">
                    {product.tag}
                  </div>
                )}

                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-all duration-500" />
                
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                   <div className="bg-white/90 backdrop-blur-sm text-gray-900 px-6 py-3 text-[10px] font-bold tracking-[0.2em] border border-gray-100 flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 shadow-xl">
                     <ShoppingBag size={14} />
                     VIEW DETAIL
                   </div>
                </div>
              </div>

              <div className="text-left space-y-1.5">
                <p className="text-[10px] font-bold text-gray-400 tracking-widest uppercase">Lingerie Series</p>
                <h3 className="text-sm font-bold text-gray-800 leading-snug group-hover:text-brand-olive transition-colors">{product.name}</h3>
                <p className="text-gray-900 font-bold text-base tracking-tight">{product.price}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
            <button className="group relative px-16 py-5 bg-transparent overflow-hidden">
               <span className="relative z-10 text-[11px] font-bold tracking-[0.4em] text-gray-900 group-hover:text-white transition-colors duration-300">EXPLORE MORE</span>
               <div className="absolute inset-0 w-full h-full border border-gray-900 group-hover:bg-gray-900 transition-all duration-300 translate-x-1 translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0" />
               <div className="absolute inset-0 w-full h-full border border-gray-900" />
            </button>
        </div>
      </div>
    </section>
  );
}
