import { useState, useRef, useEffect } from 'react';
import { Search, ShoppingCart, User, Menu, X, Heart, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  const navItems = [
    { 
      jp: '商品を探す', 
      href: '#',
      sub: [
        { title: 'シリーズから探す', items: ['脇肉キャッチャー', '夜寄るブラ', 'ビスチェリーナ', 'ハリジェンヌ', '自胸で谷間メイク'] },
        { title: 'お悩みから探す', items: ['脇肉をスッキリ', '谷間をつくりたい', '背中を綺麗に', '胸が苦しくない', '産後のバストケア'] },
        { title: '特集', items: ['2026年新作', 'ベストセラー', '限定カラー', '大きいサイズ専門'] }
      ],
      img: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=400&auto=format&fit=crop'
    },
    { 
      jp: 'バストシェイプ診断', 
      href: '#',
      sub: [
        { title: 'セルフ診断', items: ['30秒オンライン診断', 'わたしのサイズって？', '正しい測り方'] },
        { title: 'コンテンツ', items: ['サイズ交換0円', 'フィッティングのコツ'] }
      ]
    },
    { 
      jp: 'サイズガイド', 
      href: '#',
      sub: [
        { title: 'ガイド', items: ['正しい測り方', 'サイズ表', 'サイズ交換について'] }
      ]
    },
    { jp: 'レビュー・お客様の声', href: '#' },
    { jp: 'ブランドストーリー', href: '#' },
    { jp: 'お問い合わせ', href: '#' },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleDropdown = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  return (
    <header ref={headerRef} className="sticky top-0 z-50 w-full bg-white border-b border-gray-100">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-3 md:py-5 border-b border-gray-50">
          {/* Logo Area */}
          <div className="flex-shrink-0 flex items-center lg:w-[280px]">
            <a href="/" className="group">
              <img 
                src="https://github.com/liu378592655-rgb/NTP/releases/download/V1/NTP.logo.png" 
                alt="奶糖派 Japan" 
                className="h-[20px] md:h-[24px] w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </a>
          </div>

          {/* Search Field (Desktop) */}
          <div className="hidden lg:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <input 
                type="text" 
                placeholder="キーワードから探す"
                className="w-full bg-[#f8f8f8] border-none rounded-sm py-2.5 pl-4 pr-10 text-[13px] focus:ring-1 focus:ring-brand-olive/30 outline-none"
              />
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
            </div>
          </div>

          {/* Icons Area */}
          <div className="flex items-center space-x-5 md:space-x-8">
            <div className="hidden sm:flex flex-col items-center cursor-pointer group">
              <User size={20} className="text-gray-600 group-hover:text-brand-olive transition-colors" />
              <span className="text-[9px] font-bold mt-1 text-gray-400 group-hover:text-brand-olive lowercase">login</span>
            </div>
            <div className="hidden sm:flex flex-col items-center cursor-pointer group">
              <Heart size={20} className="text-gray-600 group-hover:text-brand-olive transition-colors" />
              <span className="text-[9px] font-bold mt-1 text-gray-400 group-hover:text-brand-olive lowercase">fav</span>
            </div>
            <div className="flex flex-col items-center cursor-pointer group relative">
              <ShoppingCart size={20} className="text-gray-600 group-hover:text-brand-olive transition-colors" />
              <span className="absolute -top-1 -right-2 bg-brand-olive text-white text-[8px] font-bold rounded-full w-3.5 h-3.5 flex items-center justify-center">0</span>
              <span className="text-[9px] font-bold mt-1 text-gray-400 group-hover:text-brand-olive lowercase">cart</span>
            </div>
            
            {/* Mobile Menu Icon */}
            <button
               onClick={() => setIsMenuOpen(!isMenuOpen)}
               className="lg:hidden p-2 text-gray-600"
            >
               {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Global Nav (Desktop) */}
        <nav className="hidden lg:flex justify-center py-3.5 relative">
          <ul className="flex space-x-12">
            {navItems.map((item) => (
              <li key={item.jp} className="relative">
                <button 
                  onClick={() => item.sub ? toggleDropdown(item.jp) : null}
                  className={`flex items-center gap-1.5 text-[13px] font-bold transition-colors ${activeDropdown === item.jp ? 'text-brand-olive' : 'text-gray-800 hover:text-brand-olive'}`}
                >
                  {item.jp}
                  {item.sub && <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === item.jp ? 'rotate-180' : ''}`} />}
                </button>

                {/* Dropdown Indicator Line */}
                <motion.div 
                  initial={false}
                  animate={{ scaleX: activeDropdown === item.jp ? 1 : 0 }}
                  className="absolute -bottom-[3.5px] left-0 w-full h-[2px] bg-brand-olive origin-left"
                />

                {/* Localized Dropdown Menu */}
                <AnimatePresence>
                  {activeDropdown === item.jp && item.sub && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-[calc(100%+14px)] left-1/2 -translate-x-1/2 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-50 z-50 rounded-sm overflow-hidden"
                    >
                      <div className={`p-8 ${item.jp === '商品を探す' ? 'w-[750px]' : 'w-max min-w-[240px]'}`}>
                        <div className={`grid gap-10 ${item.jp === '商品を探す' ? 'grid-cols-4' : 'grid-cols-1'}`}>
                          <div className={`${item.jp === '商品を探す' ? 'col-span-3 grid grid-cols-3 gap-8' : 'space-y-8'}`}>
                            {item.sub.map((group, i) => (
                              <div key={i} className="min-w-[160px]">
                                <h4 className="text-[10px] font-bold text-gray-400 tracking-[0.2em] uppercase mb-4 pb-2 border-b border-gray-50">
                                  {group.title}
                                </h4>
                                <ul className="space-y-2.5">
                                  {group.items.map((subItem, j) => (
                                    <li key={j}>
                                      <a href="#" className="text-[12px] text-gray-600 hover:text-brand-olive transition-colors block whitespace-nowrap">
                                        {subItem}
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>

                          {/* Optional Featured Image */}
                          {item.img && (
                            <div className={`${item.jp === 'ブラジャー' ? 'col-span-1' : 'hidden'}`}>
                              <div className="relative group/img cursor-pointer overflow-hidden rounded-sm">
                                <img 
                                  src={item.img} 
                                  alt="Category Featured" 
                                  className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover/img:scale-105"
                                  referrerPolicy="no-referrer"
                                />
                                <div className="absolute inset-0 bg-black/10 transition-colors group-hover/img:bg-black/20" />
                                <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
                                   <span className="text-[8px] font-bold tracking-widest mb-1 opacity-80 uppercase leading-none">Featured</span>
                                   <span className="text-[10px] font-bold tracking-widest leading-tight">全アイテムを見る</span>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl py-6 px-4 z-50 border-t border-gray-100"
          >
            <div className="space-y-4 max-h-[80vh] overflow-y-auto pr-2">
               {navItems.map((item) => (
                 <div key={item.jp} className="border-b border-gray-50">
                   <button 
                    onClick={() => item.sub ? toggleDropdown(item.jp === activeDropdown ? '' : item.jp) : null}
                    className="flex items-center justify-between w-full py-4 text-sm font-bold text-gray-900"
                   >
                     {item.jp}
                     {item.sub && <ChevronDown size={14} className={activeDropdown === item.jp ? 'rotate-180' : ''} />}
                   </button>
                   
                   {/* Mobile Submenu */}
                   <AnimatePresence>
                     {item.sub && activeDropdown === item.jp && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden bg-gray-50/50 rounded-sm mb-4 px-4"
                        >
                          {item.sub.map((group, i) => (
                            <div key={i} className="py-4">
                              <h5 className="text-[10px] font-bold text-brand-olive tracking-widest mb-3 uppercase">{group.title}</h5>
                              <ul className="space-y-3">
                                {group.items.map((subItem, j) => (
                                  <li key={j}>
                                    <a href="#" className="text-xs text-gray-600 block">{subItem}</a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </motion.div>
                     )}
                   </AnimatePresence>
                 </div>
               ))}
               <div className="relative pt-6">
                  <input type="text" placeholder="キーワードから探す" className="w-full bg-gray-50 rounded-sm py-3 px-4 text-xs outline-none focus:ring-1 focus:ring-brand-olive/20" />
                  <Search className="absolute right-3 bottom-3 text-gray-400" size={16} />
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
