import { motion } from 'motion/react';

const scenes = [
  {
    title: "Daily & Work",
    jp: "仕事・日常の負担を軽く",
    img: "https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=600&auto=format&fit=crop",
    desc: "長時間のデスクワークや外出も、軽い着け心地で一日中快適に。"
  },
  {
    title: "Special Occasion",
    jp: "ドレスや特別な装いを美しく",
    img: "https://images.unsplash.com/photo-1574180563870-9669ca901944?q=80&w=600&auto=format&fit=crop",
    desc: "胸の厚みを抑えて、シルエットをスッキリ。お気に入りの服がもっと似合う身体へ。"
  },
  {
    title: "Night Routine",
    jp: "眠っている間のバストケア",
    img: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=600&auto=format&fit=crop",
    desc: "寝返りによるバストの崩れを防ぎ、重力からバストを守り抜く。"
  }
];

export default function ScenarioSection() {
  return (
    <section className="py-24 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-brand-gold font-bold tracking-[0.4em] text-[10px] block mb-2">SCENES</span>
          <h2 className="text-3xl md:text-4xl font-serif text-gray-900">シーン・目的から選ぶ</h2>
          <p className="text-gray-400 text-xs mt-4">どんな場面でも、あなたは美しく、心地よくいられる。</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {scenes.map((scene, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.02 }}
              className="relative aspect-[4/5] overflow-hidden group cursor-pointer rounded-sm"
            >
              <img
                src={scene.img}
                alt={scene.jp}
                className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-linear-to-t from-gray-900 via-transparent to-transparent flex flex-col justify-end p-8 text-white">
                <span className="text-[10px] font-bold tracking-widest text-brand-gold mb-2 block">{scene.title}</span>
                <h3 className="text-xl font-bold mb-3">{scene.jp}</h3>
                <p className="text-xs font-light leading-relaxed opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  {scene.desc}
                </p>
                <div className="mt-6 w-8 h-[1px] bg-white group-hover:w-16 transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
