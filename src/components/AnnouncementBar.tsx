import React from 'react';
import { motion } from 'motion/react';

export default function AnnouncementBar() {
  const announcements = [
    "【新登場】スポーツブラ「アゲちゃって委員会」コラボアイテム発売中！",
    "【送料無料】5,500円（税込）以上お買い上げで全国送料無料",
    "【返品交換0円】サイズが合わなくても安心！初回交換は送料無料",
  ];

  return (
    <div className="bg-brand-pink py-2 overflow-hidden border-b border-brand-pink/20">
      <div className="flex whitespace-nowrap">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex space-x-12 px-4"
        >
          {[...announcements, ...announcements].map((text, i) => (
            <span key={i} className="text-[10px] font-bold text-brand-olive tracking-widest flex items-center">
              <span className="w-1.5 h-1.5 bg-brand-olive rounded-full mr-3" />
              {text}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
