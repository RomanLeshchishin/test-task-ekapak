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

  return (
    <div className='absolute inset-0 top-42 left-285 z-10 flex items-center'>
      <div className='relative w-96 rounded-xl border border-gray-200 bg-white p-5 shadow-lg'>
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
          </div>
        )}
      </div>
    </div>
  );
};

export default CartModal;
