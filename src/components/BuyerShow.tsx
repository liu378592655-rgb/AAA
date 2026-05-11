import { motion } from 'motion/react';
import { Star, Instagram } from 'lucide-react';

const reviews = [
  {
    id: 1,
    user: "Sさん (30代)",
    size: "G75",
    type: "脇肉キャッチャー",
    comment: "大きい胸だと太って見えがちですが、これに変えてから着痩せして見えると言われます！サイドがスッキリするのが嬉しい。",
    img: "https://github.com/liu378592655-rgb/AAA/releases/download/AAA/20.jpg",
    verified: true
  },
  {
    id: 2,
    user: "Kさん (20代)",
    size: "I80",
    type: "ハリジェンヌ",
    comment: "カップの形がしっかりしていて、重い胸もしっかり支えてくれます。修整感が全然なくて、ナチュラルに綺麗に見えます。",
    img: "https://github.com/liu378592655-rgb/AAA/releases/download/AAA/09.png",
    verified: true
  },
  {
    id: 3,
    user: "Mさん (40代)",
    size: "F70",
    type: "夜寄るブラ",
    comment: "産後のバスト崩れが悩みでしたが、苦しくないのに朝まで形をキープしてくれます。毎晩欠かせません。",
    img: "https://github.com/liu378592655-rgb/AAA/releases/download/AAA/10.jpg",
    verified: true
  }
];

export default function BuyerShow() {
  return (
    <section className="py-24 bg-white border-t border-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center mb-16 text-center">
          <span className="text-brand-olive font-bold tracking-[0.4em] text-[10px] block mb-2 uppercase">Real Reviews</span>
          <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4">
            信頼と声：日本人モデルのリアルな着用レビュー
          </h2>
          <p className="text-gray-400 text-xs tracking-widest font-light italic">
            「本音」で選ぶ、あなたのための美胸ガイド。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {reviews.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ y: -5 }}
              className="bg-[#fafafa] rounded-sm overflow-hidden border border-gray-100 flex flex-col h-full"
            >
              <div className="relative aspect-[4/5] overflow-hidden grayscale-[10%] hover:grayscale-0 transition-all duration-700">
                <img 
                  src={item.img} 
                  alt={item.user} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 flex flex-col shadow-sm">
                  <span className="text-[9px] font-bold text-gray-400 tracking-widest uppercase">Cup Size</span>
                  <span className="text-sm font-bold text-brand-olive">{item.size}</span>
                </div>
              </div>
              
              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-gray-900">{item.user}</span>
                  <span className="text-[10px] font-bold py-0.5 px-2 bg-brand-olive/10 text-brand-olive rounded-full italic">
                    {item.type}
                  </span>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed font-light italic flex-1">
                  「{item.comment}」
                </p>
                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-[9px] font-bold text-gray-300 tracking-[0.2em] uppercase italic">Ordinary Model Test</span>
                  <div className="flex text-brand-olive">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={10} fill="currentColor" className="text-brand-olive" />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
