import React from 'react';
import { motion } from 'motion/react';

export default function AnnouncementBar() {
  const announcements = [
    "【新登場】スポーツブラ「アゲちゃって委員会」コラボアイテム発売中！",
    "【送料無料】5,500円（税込）以上お買い上げで全国送料無料",
    "【返品交換0円】サイズが合わなくても安心！初回交換は送料無料",
  ];

  return (
    <div className="bg-brand-olive py-2 overflow-hidden">
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
            <span key={i} className="text-[10px] font-medium text-white/90 tracking-widest flex items-center">
              {text}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
