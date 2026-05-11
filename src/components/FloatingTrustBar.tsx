import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { RefreshCw, Truck, ShieldCheck, X } from 'lucide-react';

export default function FloatingTrustBar() {
  const [isVisible, setIsVisible] = React.useState(true);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40 w-[90%] max-w-2xl"
        >
          <div className="bg-gray-900/90 backdrop-blur-md text-white px-6 py-4 rounded-full shadow-2xl flex items-center justify-between border border-white/10">
            <div className="flex items-center space-x-6 md:space-x-10 overflow-x-auto no-scrollbar">
              <div className="flex items-center space-x-3 whitespace-nowrap">
                <div className="w-8 h-8 rounded-full bg-brand-olive/20 flex items-center justify-center">
                  <Truck size={16} className="text-brand-olive" />
                </div>
                <span className="text-[11px] font-bold tracking-widest">5,500円以上送料無料</span>
              </div>
              <div className="flex items-center space-x-3 whitespace-nowrap">
                <div className="w-8 h-8 rounded-full bg-brand-olive/20 flex items-center justify-center">
                  <RefreshCw size={16} className="text-brand-olive" />
                </div>
                <span className="text-[11px] font-bold tracking-widest">返品・交換0円 (初回)</span>
              </div>
              <div className="flex items-center space-x-3 whitespace-nowrap">
                <div className="w-8 h-8 rounded-full bg-brand-olive/20 flex items-center justify-center">
                  <ShieldCheck size={16} className="text-brand-olive" />
                </div>
                <span className="text-[11px] font-bold tracking-widest">フィッティング相談可</span>
              </div>
            </div>
            
            <button 
              onClick={() => setIsVisible(false)}
              className="ml-4 p-1 hover:bg-white/10 rounded-full transition-colors"
            >
              <X size={14} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
