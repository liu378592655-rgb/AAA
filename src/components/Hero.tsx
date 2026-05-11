import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      {/* Target Banner Image - Highlighting the "Weight" and "Support" theme */}
      <div className="w-full aspect-[2000/1000] max-h-[90vh] overflow-hidden relative">
        <motion.img
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          src="https://github.com/liu378592655-rgb/AAA/releases/download/AAA/banner-blue1920.jpg?v=2"
          alt="NaiTangPai Japan グラマーサイズ"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        
        {/* Pain Point Content Overlay */}
        <div className="absolute inset-0 bg-black/10 z-10 flex flex-col items-center justify-center px-4">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-center"
          >
            <span className="text-white text-[10px] md:text-sm font-bold tracking-[0.5em] mb-6 block drop-shadow-lg uppercase">
              Naitangpai Japan Presents
            </span>
            <h1 className="text-4xl md:text-7xl font-serif text-white leading-tight mb-8 drop-shadow-2xl">
               その悩み、<br className="md:hidden" />
               <span className="italic">ブラ</span>のせいかも。
            </h1>
            <p className="text-white/90 text-sm md:text-lg font-light tracking-[0.2em] mb-48 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
              「大きいから太って見える」「肩が凝る」「形が崩れてきた」<br />
              グラマーサイズ特有の悩み、私たちが解決します。
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-12 py-5 bg-white overflow-hidden shadow-2xl"
              >
                <span className="relative z-10 text-[11px] font-bold tracking-[0.3em] text-gray-900 group-hover:text-brand-olive transition-colors">
                  悩みを解決する一枚を探す
                </span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-12 py-5 bg-white/20 backdrop-blur-md border border-white/30 overflow-hidden shadow-2xl"
              >
                <span className="relative z-10 text-[11px] font-bold tracking-[0.3em] text-white group-hover:text-brand-olive transition-colors">
                  新作を見る
                </span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
