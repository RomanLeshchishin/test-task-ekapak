import React, { useState } from 'react';
import CartModal from './CartModal';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { decreaseQuantity, increaseQuantity, removeItem } from '@/store/cartSlice';
import bag from '@/assets/bag.svg';

export const Cart: React.FC = () => {
  const dispatch = useAppDispatch();
  const { cartItems } = useAppSelector(state => state.cartReducer);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleIncrease = (id: string) => {
    dispatch(increaseQuantity(id));
  };

  const handleDecrease = (id: string) => {
    dispatch(decreaseQuantity(id));
  };

  const handleRemove = (id: string) => {
    dispatch(removeItem(id));
  };

  return (
    <div className='flex align-middle'>
      <button className='cursor-pointer rounded-lg py-2' onClick={() => setIsCartOpen(true)}>
        <img src={bag} alt='bag'></img>
      </button>

      <CartModal
        isOpen={isCartOpen}
        items={cartItems}
        onClose={() => setIsCartOpen(false)}
        onIncrease={handleIncrease}
        onDecrease={handleDecrease}
        onRemove={handleRemove}
      />
    </div>
  );
};
