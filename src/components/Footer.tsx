import { Instagram, Twitter, Youtube, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  const links = {
    "ショッピング": ["ブラジャー一覧", "ショーツ・ガードル", "セットアイテム", "新着情報", "セール"],
    "ガイド & サポート": ["フィッティング相談", "サイズ相談・診断", "返品・交換について", "送料・お届け", "お支払い方法"],
    "特別なサービス": ["アゲちゃって委員会", "試着サービス", "会員限定特典", "SNSコミュニティ"],
    "企業情報": ["NaiTangPaiについて", "実店舗のご案内", "プライバシーポリシー", "利用規約", "特定商取引法表記"]
  };

  return (
    <footer className="bg-white border-t border-gray-100 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Social Media Link Aggregation Area */}
        <div className="flex flex-col items-center mb-20 text-center">
           <span className="text-brand-olive font-bold tracking-[0.3em] text-[10px] mb-10 block uppercase">Social Community</span>
           <div className="flex space-x-10 md:space-x-16 mb-12">
              {[
                { icon: <Instagram size={24} />, name: 'INSTAGRAM', color: 'hover:text-pink-500' },
                { icon: <Twitter size={24} />, name: 'TWITTER / X', color: 'hover:text-black' },
                { icon: <Youtube size={24} />, name: 'YOUTUBE', color: 'hover:text-red-600' }
              ].map((social) => (
                <a key={social.name} href="#" className={`flex flex-col items-center group transition-all`}>
                   <div className={`w-16 h-16 rounded-full border border-gray-100 flex items-center justify-center text-gray-400 group-hover:border-brand-olive group-hover:text-brand-olive transition-all duration-300`}>
                      {social.icon}
                   </div>
                   <span className="text-[9px] mt-4 font-bold text-gray-400 tracking-widest group-hover:text-gray-900">{social.name}</span>
                </a>
              ))}
           </div>
           <p className="text-xs text-gray-400 max-w-sm leading-relaxed font-light">
             最新のキャンペーン情報や、大胸さんのための美胸コラムを配信中。<br />
             あなたの「美しさ」を支えるヒントを見つけてください。
           </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 mb-20">
          {/* Brand Info */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <div className="mb-6">
              <img src="https://github.com/liu378592655-rgb/AAA/releases/download/AAA/NTP.logo.png" alt="NaiTangPai" className="h-7 object-contain object-left mb-2" />
            </div>
            <p className="text-[11px] text-gray-400 mb-8 leading-relaxed font-light">
              大阪府河内長野市から世界へ。<br />
              すべての女性の「理想」と「悩み」に寄り添う、補整下着のパイオニア。
            </p>
          </div>

          {/* Links */}
          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <h3 className="text-[11px] font-bold tracking-widest text-gray-900 mb-8 uppercase border-l-2 border-brand-olive pl-3">{title}</h3>
              <ul className="space-y-4">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-xs text-gray-500 hover:text-brand-olive transition-colors font-medium">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Strip */}
        <div className="border-y border-gray-50 py-10 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 text-gray-400">
          <div className="flex items-center space-x-3">
            <Phone size={14} className="text-brand-olive" />
            <span className="text-[10px] font-bold tracking-widest uppercase">0120-123-456 (9:00 - 18:00)</span>
          </div>
          <div className="flex items-center space-x-3">
            <Mail size={14} className="text-brand-olive" />
            <span className="text-[10px] font-bold tracking-widest uppercase">support@naitangpai-jp.com</span>
          </div>
          <div className="flex items-center space-x-3">
            <MapPin size={14} className="text-brand-olive" />
            <span className="text-[10px] font-bold tracking-widest uppercase">大阪府河内長野市</span>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-[9px] font-bold tracking-widest text-gray-400 uppercase">
            &copy; {new Date().getFullYear()} NAITANGPAI Japan CO., LTD. ALL RIGHTS RESERVED.
          </p>
          <div className="flex space-x-6">
             <div className="w-8 h-5 bg-gray-50 rounded-sm" />
             <div className="w-8 h-5 bg-gray-50 rounded-sm" />
             <div className="w-8 h-5 bg-gray-50 rounded-sm" />
          </div>
        </div>
      </div>
    </footer>
  );
}
