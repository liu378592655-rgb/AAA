import { motion } from 'motion/react';
import { ShoppingBag } from 'lucide-react';

const products = [
  {
    id: 'g1',
    name: '特上脇肉キャッチャー (B-Kカップ)',
    price: '¥ 6,820',
    tag: '大胸専用設計',
    image: 'https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=600&auto=format&fit=crop',
    focus: '脇高サイドボーンで横広がりを防止'
  },
  {
    id: 'g2',
    name: 'ハリジェンヌ (B-Kカップ)',
    price: '¥ 6,820',
    tag: '高さ出し',
    image: 'https://images.unsplash.com/photo-1582533031175-684a0d91d607?q=80&w=600&auto=format&fit=crop',
    focus: 'デコルテにふっくらとした肉感を実現'
  },
  {
    id: 'g3',
    name: 'ビスチェリーナ (B-Kカップ)',
    price: '¥ 13,200',
    tag: '全身補正',
    image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=600&auto=format&fit=crop',
    focus: 'アンダーからウエストまでトータルサポート'
  }
];

export default function GlamourZone() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-brand-gold font-bold tracking-[0.4em] text-[10px] block mb-2">GLAMOUR SIZE</span>
            <h2 className="text-4xl font-serif text-gray-900 leading-tight">
              グラマーサイズ専売区 <br />
              <span className="italic italic-gold italic-title text-brand-gold">H, I, J, K Cup</span>
            </h2>
            <p className="mt-6 text-gray-600 font-light leading-relaxed">
              「可愛いデザインがない」「サイズが合わない」という悩み、NaiTangPai Japanが解決します。<br />
              Kカップまで対応する独自設計で、大きなバストを美しく、快適に。
            </p>
          </div>
          <button className="text-xs font-bold tracking-[0.2em] border-b-2 border-gray-900 pb-1 hover:text-brand-gold hover:border-brand-gold transition-all">
            専売アイテムをすべて見る
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {products.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-gray-50 mb-6 rounded-sm">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-gray-900 text-white text-[9px] font-bold px-3 py-1 tracking-widest leading-none">
                    {product.tag}
                  </span>
                </div>
                
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                   <button className="bg-white text-gray-900 px-6 py-3 text-[10px] font-bold tracking-widest hover:bg-brand-gold hover:text-white transition-all flex items-center space-x-2">
                     <ShoppingBag size={14} />
                     <span>詳細を見る</span>
                   </button>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-start">
                  <h3 className="text-sm font-bold text-gray-900 pr-4">{product.name}</h3>
                  <p className="text-sm font-bold text-brand-gold italic whitespace-nowrap">{product.price}</p>
                </div>
                <p className="text-[11px] text-gray-400 font-medium leading-relaxed border-l-2 border-brand-gold/30 pl-3">
                  {product.focus}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
