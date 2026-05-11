import { CheckCircle2, MessageCircle, Ruler } from 'lucide-react';

export default function FittingService() {
  const steps = [
    {
      icon: <MessageCircle size={32} className="text-brand-gold mb-4" />,
      title: "チャットで相談",
      desc: "プロのフィッティングアドバイザーが、あなたにぴったりのサイズをご提案します。"
    },
    {
      icon: <Ruler size={32} className="text-brand-gold mb-4" />,
      title: "サイズ選び",
      desc: "初めての方でも安心。充実したガイドとツールで正しいサイズが見つかります。"
    },
    {
      icon: <CheckCircle2 size={32} className="text-brand-gold mb-4" />,
      title: "返品・交換保証",
      desc: "サイズが合わなくても安心。返送料・手数料無料で交換、返品を承ります。"
    }
  ];

  return (
    <section className="py-24 bg-brand-pink overflow-hidden relative">
      {/* Decorative text background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15rem] font-serif font-black text-white/40 select-none pointer-events-none whitespace-nowrap hidden lg:block">
        FITTING
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[10px] font-bold tracking-[0.3em] text-brand-gold uppercase block mb-4">
              オンライン・フィッティング・サービス
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-gray-900 leading-tight mb-8">
              理想の体型は、 <br />
              <span className="italic">正しいフィット感</span>から。
            </h2>
            <p className="text-gray-600 mb-10 leading-relaxed max-w-lg">
              NaiTangPai Japanでは、補整下着の真の力は、正しいサイズ選びによって初めて発揮されると考えています。
              経験豊富なコンサルタントによる無料のフィッティングサービスで、理想のシルエットを叶えましょう。
            </p>
            
            <div className="grid sm:grid-cols-2 gap-8 mb-12">
              {steps.map((step, idx) => (
                <div key={idx} className="bg-white/50 backdrop-blur-sm p-6 border border-white/80 transition-transform hover:-translate-y-1">
                  {step.icon}
                  <h3 className="text-sm font-bold tracking-widest text-gray-900 mb-2 uppercase">{step.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>

            <a
              href="#"
              className="inline-flex items-center px-8 py-4 bg-gray-900 text-white text-xs font-bold tracking-widest hover:bg-brand-gold transition-all"
            >
              無料フィッティング相談を始める
            </a>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-sm shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=1200&auto=format&fit=crop"
                alt="フィッティングサービスのデモンストレーション"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Small floating card */}
            <div className="absolute -bottom-10 -right-10 bg-white p-8 shadow-xl max-w-[240px] hidden md:block">
              <p className="font-serif italic text-2xl text-brand-gold mb-4">"着心地に、妥協しない。"</p>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-[1px] bg-gray-900" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-900">専門チーム</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
