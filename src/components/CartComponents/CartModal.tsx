import React from 'react';
import { CartItem } from './CartItem';
import type { ICartItem } from '@/interfaces/ICart';

interface CartModalProps {
  isOpen: boolean;
  items: ICartItem[];
  onClose: () => void;
  onIncrease: (id: string) => void;
  onDecrease: (id: string) => void;
  onRemove: (id: string) => void;
}

const CartModal: React.FC<CartModalProps> = ({ isOpen, items, onClose, onIncrease, onDecrease, onRemove }) => {
  if (!isOpen) return null;
  const totalAmount = items.reduce((total, item) => {
    return (total += item.minPrice * item.quantity);
  }, 0);
  return (
    <div className='absolute inset-0 top-16 z-10 flex items-start sm:left-50 md:left-100 lg:left-160 xl:left-220 2xl:left-250'>
      <div className='relative rounded-xl border border-gray-200 bg-white p-5 shadow-lg lg:w-120 xl:w-130 2xl:w-140'>
        <button className='absolute top-2 right-3 cursor-pointer text-gray-500 hover:text-black' onClick={onClose}>
          ✕
        </button>
        <h2 className='mb-4 text-xl font-bold'>Корзина</h2>
        {items.length === 0 ? (
          <p className='text-gray-500'>Корзина пуста</p>
        ) : (
          <div className='flex flex-col gap-3'>
            {items.map(item => (
              <CartItem
                key={item.id}
                cartItem={item}
                onIncrease={onIncrease}
                onDecrease={onDecrease}
                onRemove={onRemove}
              />
            ))}
            <div className='text-right text-base font-bold'>Итог: {totalAmount} ₽</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartModal;
