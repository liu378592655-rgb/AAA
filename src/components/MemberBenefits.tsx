import { motion } from 'motion/react';
import { Gift, CreditCard, Sparkles, MessageSquare } from 'lucide-react';

const benefits = [
  {
    icon: <Gift className="w-6 h-6 text-brand-olive" />,
    title: "初回交換返送料無料",
    desc: "サイズが合わなくても安心。最初の交換は送料・手数料がかかりません。"
  },
  {
    icon: <MessageSquare className="w-6 h-6 text-brand-olive" />,
    title: "プロの無料カウンセリング",
    desc: "LINEやチャットで、専門アドバイザーが24時間以内にあなたの悩みに答えます。"
  },
  {
    icon: <CreditCard className="w-6 h-6 text-brand-olive" />,
    title: "ポイント還元 & 限定セール",
    desc: "会員ランクに応じて最大5%還元。大胸さん向け限定セールの優先案内も。"
  },
  {
    icon: <Sparkles className="w-6 h-6 text-brand-olive" />,
    title: "サイズカルテ機能",
    desc: "過去の購入履歴とサイズ変化を記録。いつでも最適なブラを提案します。"
  }
];

export default function MemberBenefits() {
  return (
    <section className="py-24 bg-brand-cool-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-white p-8 md:p-16 rounded-sm border border-gray-100 italic">
          <div className="text-center mb-16">
            <span className="text-brand-olive font-bold tracking-[0.4em] text-[10px] block mb-2">MEMBERSHIP</span>
            <h2 className="text-3xl font-serif text-gray-900">奶糖派 会員だけの安心特典</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                <div className="mb-6">{benefit.icon}</div>
                <h3 className="text-sm font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed font-light">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
