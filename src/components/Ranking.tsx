import ProductCard from './ProductCard';
import { Product } from '../types';

export default function Ranking() {
  const rankingProducts = [
    {
      id: '1',
      name: 'ビスチェリーナ (B-Kカップ)',
      price: 13200,
      image: 'https://github.com/liu378592655-rgb/AAA/releases/download/AAA/01.jpg',
      category: "ビスチェ風ブラ",
      ranking: 1,
      benefits: ["ウエスト補正", "姿勢サポート"]
    },
    {
      id: '2',
      name: '夜寄るブラ+plus (B-Mカップ)',
      price: 3300,
      image: 'https://github.com/liu378592655-rgb/AAA/releases/download/AAA/02.jpg',
      category: "ナイトブラ",
      ranking: 2,
      benefits: ["重力対策", "型崩れ防止"]
    },
    {
      id: '3',
      name: '特上脇肉キャッチャー (B-Kカップ)',
      price: 6820,
      image: 'https://github.com/liu378592655-rgb/AAA/releases/download/AAA/03.jpg',
      category: "脇高サポートブラ",
      ranking: 3,
      benefits: ["脇肉スッキリ", "肩こり軽減"]
    },
    {
      id: '4',
      name: 'ハリジェンヌ (B-Kカップ)',
      price: 6820,
      image: 'https://github.com/liu378592655-rgb/AAA/releases/download/AAA/04.jpg',
      category: "補整ブラジャー",
      ranking: 4,
      benefits: ["高さ出し", "デコルテケア"]
    },
  ];

  return (
    <section className="py-24 bg-white border-t border-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center mb-16 text-center">
          <span className="text-brand-olive font-bold tracking-[0.4em] text-[10px] mb-2 uppercase">Best Sellers</span>
          <h2 className="text-3xl md:text-4xl font-serif text-gray-900 border-b-2 border-brand-olive pb-4">
            人気爆売れアイテム
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-16">
          {rankingProducts.map((product) => (
            <div key={product.id} className="relative group">
              {/* Ranking Badge */}
              <div className={`absolute -top-4 -left-2 z-10 w-10 h-10 border-2 border-white flex items-center justify-center font-serif text-lg italic shadow-lg
                ${product.ranking === 1 ? 'bg-brand-olive text-white' : 
                  product.ranking === 2 ? 'bg-[#C0C0C0] text-gray-800' :
                  product.ranking === 3 ? 'bg-[#CD7F32] text-white' : 'bg-gray-800 text-white'}`}
              >
                {product.ranking}
              </div>
              <ProductCard product={product} />
              
              {/* Pain point adaptation attributes */}
              <div className="mt-4 flex flex-wrap gap-2">
                {product.benefits.map((benefit) => (
                  <span key={benefit} className="text-[9px] font-bold text-brand-olive border border-brand-olive/30 px-2 py-0.5 rounded-full bg-brand-olive/5">
                    {benefit}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="#"
            className="inline-block border-b border-gray-900 pb-1 text-[11px] font-bold tracking-widest text-gray-900 hover:text-brand-olive hover:border-brand-olive transition-all"
          >
            ランキングをもっと見る
          </a>
        </div>
      </div>
    </section>
  );
}
