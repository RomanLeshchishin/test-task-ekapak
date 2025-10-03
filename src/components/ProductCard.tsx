import React from 'react';
import { Heart } from 'lucide-react';
import type { IProduct } from '@/interfaces/IProduct';
import baseImageProduct from '@/assets/base-product-image.svg';

interface ProductCardProps {
  product: IProduct;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }: ProductCardProps) => {
  const minPrice = product.offers.length > 0 ? product.offers[0].price : 0;

  return (
    <div className='flex w-64 flex-col rounded-2xl bg-white p-3 shadow'>
      <div className='relative'>
        <img
          src={product.images.length > 0 ? product.images[0].cardUrl : baseImageProduct}
          alt={product.name}
          className='w-full rounded-xl object-cover'
        />
        <button className='absolute top-2 right-2 rounded-full bg-white p-1 shadow'>
          <Heart className='h-5 w-5 text-gray-500' />
        </button>
      </div>

      <div className='mt-3 flex flex-1 flex-col'>
        <span className='text-xs text-gray-400'>Арт. {product.article}</span>
        <h3 className='mt-1 line-clamp-2 text-sm leading-tight font-medium'>{product.name}</h3>
        <div className='mt-2 flex items-center gap-2'>
          <span className='text-lg font-semibold'>{minPrice} ₽</span>
          <span className='ml-auto cursor-pointer text-xs text-sky-500'>
            {product.isExist ? 'В наличии' : 'Под заказ'}
          </span>
        </div>

        <div className='mt-3 flex items-center justify-center'>
          <div className='flex h-20 w-48 justify-center rounded-xl border-1 border-gray-300'>
            <button className='px-3 py-1 text-lg'>-</button>
            <div className='flex flex-col justify-center gap-1'>
              <span className='px-3 text-sm'>{product.minPurchase} шт</span>
              <span className='px-3 text-xs text-gray-400'>на {minPrice * product.minPurchase} ₽</span>
            </div>
            <button className='px-3 py-1 text-lg'>+</button>
          </div>
        </div>

        <button className='mt-3 rounded-xl bg-sky-500 py-2 text-sm font-medium text-white hover:bg-sky-600'>
          Добавить в корзину
        </button>
      </div>
    </div>
  );
};
