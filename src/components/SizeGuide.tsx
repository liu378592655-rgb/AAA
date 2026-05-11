import React from 'react';

const braSizes = ['B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M'];
const underSizes = ['65', '70', '75', '80', '85', '90', '95', '100'];
const shortsSizes = ['M', 'L', 'LL', '3L', '4L', '5L'];

const cupTypes = [
  '3/4カップ・寄せ上げ',
  '3/4カップ・谷間',
  '3/4カップ・丸胸',
  '4/5カップ・丸胸',
  'フルカップ'
];

const colorCategories = [
  {
    name: '白・ベージュ・クリーム・黄色系',
    colors: ['bg-amber-50', 'bg-amber-100', 'bg-yellow-50', 'bg-yellow-100']
  },
  {
    name: 'ピンク・パープル系',
    colors: ['bg-pink-100', 'bg-pink-300', 'bg-purple-200', 'bg-purple-600']
  },
  {
    name: 'ブルー・グリーン系',
    colors: ['bg-cyan-100', 'bg-sky-300', 'bg-emerald-300', 'bg-green-600']
  },
  {
    name: 'オレンジ・赤系',
    colors: ['bg-orange-200', 'bg-orange-400', 'bg-orange-500', 'bg-red-600']
  },
  {
    name: 'グレー・黒・ブラウン系',
    colors: ['bg-slate-300', 'bg-slate-600', 'bg-slate-900', 'bg-stone-700']
  }
];

const features = [
  'レース', 'プリント', '刺繍', 'フロントホック',
  '脇高・バックU', 'バッククロス', 'ストラップ付け替え対応'
];

export default function SizeGuide() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* 左側：サイズ別検索 */}
          <div className="lg:col-span-7">
            <h3 className="text-xl font-bold text-slate-800 mb-6">ブラをサイズ別で探す</h3>
            <div className="overflow-x-auto pb-4">
              <div className="grid grid-cols-8 gap-0 border-l border-t border-slate-200 min-w-[600px]">
                {braSizes.map(cup => 
                  underSizes.map(under => (
                    <a 
                      href="#" 
                      key={`${cup}${under}`} 
                      className="border-r border-b border-slate-200 bg-white py-3 text-center text-sm text-slate-600 hover:bg-slate-100 hover:text-slate-900 hover:border-slate-300 transition-all focus:outline-none focus:ring-1 focus:ring-slate-400 focus:z-10"
                    >
                      {cup}{under}
                    </a>
                  ))
                )}
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-xl font-bold text-slate-800 mb-6">ショーツをサイズ別で探す</h3>
              <div className="flex border-l border-t border-slate-200 w-fit">
                {shortsSizes.map((s, idx) => (
                  <a 
                    href="#" 
                    key={s} 
                    className={`w-[80px] border-r border-b border-slate-200 bg-white py-3 text-center text-sm text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors`}
                  >
                    {s}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* 右側：カテゴリ別検索 */}
          <div className="lg:col-span-5 space-y-12 lg:pl-8">
            {/* カップタイプ */}
            <div>
              <h3 className="text-lg font-bold text-slate-800 mb-4 border-b border-slate-200 pb-2">カップタイプ</h3>
              <div className="flex flex-wrap gap-2">
                {cupTypes.map(type => (
                  <a 
                    href="#" 
                    key={type} 
                    className="inline-block bg-white border border-slate-200 text-slate-600 text-sm px-4 py-2.5 hover:border-slate-400 hover:bg-slate-50 hover:text-slate-900 transition-colors shadow-sm"
                  >
                    {type}
                  </a>
                ))}
              </div>
            </div>

            {/* カラー */}
            <div>
              <h3 className="text-lg font-bold text-slate-800 mb-4 border-b border-slate-200 pb-2">カラー</h3>
              <div className="flex flex-wrap gap-3">
                {colorCategories.map(cat => (
                  <a 
                    href="#" 
                    key={cat.name} 
                    className="flex flex-row items-center bg-white border border-slate-200 hover:border-slate-400 hover:bg-slate-50 hover:shadow-sm transition-all pr-4 h-11 w-max overflow-hidden shadow-sm"
                  >
                    <div className="flex h-full w-12 shrink-0">
                      {cat.colors.map((c, i) => (
                        <div key={i} className={`flex-1 ${c}`} />
                      ))}
                    </div>
                    <span className="ml-3 text-sm text-slate-600 whitespace-nowrap">{cat.name}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* デザイン・機能 */}
            <div>
              <h3 className="text-lg font-bold text-slate-800 mb-4 border-b border-slate-200 pb-2">デザイン・機能</h3>
              <div className="flex flex-wrap gap-2">
                {features.map(f => (
                  <a 
                    href="#" 
                    key={f} 
                    className="inline-block bg-white border border-slate-200 text-slate-600 text-sm px-4 py-2.5 hover:border-slate-400 hover:bg-slate-50 hover:text-slate-900 transition-colors shadow-sm"
                  >
                    {f}
                  </a>
                ))}
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
