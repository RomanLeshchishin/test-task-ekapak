import React, { useState } from 'react';
import { Heart } from 'lucide-react';
import type { IProduct } from '@/interfaces/IProduct';
import baseImageProduct from '@/assets/base-product-image.svg';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { addItem, removeItem } from '@/store/slices/cartSlice';
import type { ICartItem } from '@/interfaces/ICart';

interface ProductCardProps {
  product: IProduct;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }: ProductCardProps) => {
  const dispatch = useAppDispatch();
  const minPrice = product.offers.length > 0 ? product.offers[0].price : 0;
  const [prQuantity, setPrQuantity] = useState<number>(product.minPurchase);
  const { cartItems } = useAppSelector(state => state.cartReducer);
  const inCart = cartItems.some(item => item.id === product.id);

  const handleClickAdd = (product: IProduct) => {
    dispatch(
      addItem({
        ...product,
        image: product.images.length > 0 ? product.images[0].cardUrl : '',
        quantity: prQuantity,
      } as ICartItem),
    );
  };

  const handleClickRemove = (productId: string) => {
    dispatch(removeItem(productId));
  };

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
        <h3 className='mt-1 line-clamp-2 text-base leading-tight font-medium'>{product.name}</h3>
        <div className='mt-2 flex items-center gap-2'>
          <div className='flex flex-row'>
            <div className='text-base font-semibold'>{minPrice} ₽ / шт.</div>
          </div>
          <span className={`ml-auto cursor-pointer text-base ${product.isExist ? 'text-green-400' : 'text-sky-500'}`}>
            {product.isExist ? <div>В наличии</div> : <div>Под заказ</div>}
          </span>
        </div>

        <div className='my-auto mt-3 flex items-center'>
          <div className='flex h-15 w-full items-center justify-center rounded-xl border-1 border-gray-300'>
            <button
              className='h-8 w-8 cursor-pointer rounded-md bg-gray-100 text-lg hover:bg-gray-200'
              onClick={() => setPrQuantity(prQuantity > product.minPurchase ? prQuantity - 1 : prQuantity)}
            >
              -
            </button>
            <div className='flex flex-col justify-center gap-1'>
              <span className='px-3 text-center text-sm'>{prQuantity} шт</span>
              <span className='px-3 text-xs text-gray-400'>на {Math.floor(minPrice * prQuantity * 100) / 100} ₽</span>
            </div>
            <button
              className='h-8 w-8 cursor-pointer rounded-md bg-gray-100 text-lg hover:bg-gray-200'
              onClick={() => setPrQuantity(prQuantity + 1)}
            >
              +
            </button>
          </div>
        </div>
        {inCart ? (
          <button
            className='mt-3 cursor-pointer rounded-xl bg-sky-500 py-2 text-sm font-medium text-white hover:bg-sky-600'
            onClick={() => handleClickRemove(product.id)}
          >
            Удалить из корзины
          </button>
        ) : (
          <button
            className='mt-3 cursor-pointer rounded-xl bg-sky-500 py-2 text-sm font-medium text-white hover:bg-sky-600'
            onClick={() => handleClickAdd(product)}
          >
            Добавить в корзину
          </button>
        )}
      </div>
    </div>
  );
};
