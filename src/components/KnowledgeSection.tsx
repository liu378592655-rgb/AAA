import { motion } from 'motion/react';
import { BookOpen, HelpCircle, CheckCircle2 } from 'lucide-react';

const articles = [
  {
    title: "大胸さんのための正しいブラの着け方",
    category: "HOW TO WEAR",
    img: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "肩こりとバストの意外な関係とは？",
    category: "SCIENCE",
    img: "https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "太見えを解消するアンダーウェアの選び方",
    category: "STYLING",
    img: "https://images.unsplash.com/photo-1582533031175-684a0d91d607?q=80&w=600&auto=format&fit=crop"
  }
];

export default function KnowledgeSection() {
  const articles = [
    {
      title: "大胸型文胸挑选教科书",
      category: "METHOD",
      desc: "グラマーサイズの方が陥りやすい「間違ったブラ選び」を徹底解説。正しい知識で、あなたの美しさは劇的に変わります。",
      img: "https://github.com/liu378592655-rgb/NTP/releases/download/V1/07.jpg"
    },
    {
      title: "文胸只是媒体：奶糖派の想い",
      category: "PHILOSOPHY",
      desc: "ブラジャーはただの「下着」ではありません。あなたの自信を引き出すための「メディア」だと私たちは考えます。",
      img: "https://github.com/liu378592655-rgb/NTP/releases/download/V1/08.jpg"
    }
  ];

  return (
    <section className="py-24 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="max-w-xl mx-auto mb-16">
          <span className="text-brand-olive font-bold tracking-[0.4em] text-[10px] block mb-2 uppercase">Knowledge & Philosophy</span>
          <h2 className="text-3xl md:text-4xl font-serif text-gray-900">大胸型文胸挑选教科书 / 文胸只是媒体</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
          {articles.map((art, idx) => (
            <motion.div
              key={idx}
              className="group cursor-pointer"
              whileHover={{ y: -5 }}
            >
              <div className="aspect-[16/9] overflow-hidden rounded-sm mb-8 relative shadow-lg">
                <img 
                  src={art.img} 
                  alt={art.title} 
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-6 left-6">
                  <span className="bg-white/90 backdrop-blur-sm text-gray-900 text-[9px] font-bold px-4 py-2 tracking-[0.2em] uppercase">
                    {art.category}
                  </span>
                </div>
              </div>
              <h3 className="text-2xl font-serif text-gray-900 mb-4 group-hover:text-brand-olive transition-colors">{art.title}</h3>
              <p className="text-sm text-gray-400 font-light leading-relaxed mb-6">
                {art.desc}
              </p>
              <div className="flex items-center space-x-3 text-[10px] font-bold tracking-widest text-gray-900 group-hover:text-brand-olive transition-colors">
                <span>READ TEXTBOOK</span>
                <div className="w-8 h-[1px] bg-gray-900 group-hover:bg-brand-olive transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
