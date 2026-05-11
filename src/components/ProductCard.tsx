import { Heart, ShoppingBag } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group relative flex flex-col items-start">
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-gray-50 mb-4 transition-all duration-500 group-hover:shadow-2xl">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col space-y-2">
          {product.isNew && (
            <span className="bg-brand-olive text-white text-[9px] font-bold px-3 py-1 tracking-widest leading-none">
              新着
            </span>
          )}
          {product.isSale && (
            <span className="bg-red-500 text-white text-[9px] font-bold px-3 py-1 tracking-widest leading-none">
              セール
            </span>
          )}
        </div>

        {/* Quick Actions */}
        <div className="absolute bottom-4 left-0 right-0 px-4 flex justify-center opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
          <button className="flex-1 bg-white text-gray-900 text-[10px] font-bold py-3 px-4 shadow-lg hover:bg-gray-900 hover:text-white transition-colors tracking-widest flex items-center justify-center space-x-2">
            <ShoppingBag size={14} />
            <span>カートに入れる</span>
          </button>
        </div>

        {/* Favorite Button */}
        <button className="absolute top-3 right-3 p-2 bg-white/80 rounded-full text-gray-400 hover:text-red-400 transition-colors">
          <Heart size={16} />
        </button>
      </div>

      <div className="px-1 flex flex-col w-full">
        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em] mb-1">
          {product.category}
        </p>
        <h3 className="text-sm font-medium text-gray-900 mb-2 truncate group-hover:text-brand-olive transition-colors">
          {product.name}
        </h3>
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold text-gray-900">
            ¥{product.price.toLocaleString()}
          </span>
          <div className="flex space-x-1">
            <div className="w-2.5 h-2.5 rounded-full bg-black border border-gray-200" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#E5D3C1] border border-gray-200" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#DFC1C1] border border-gray-200" />
          </div>
        </div>
      </div>
    </div>
  );
}
