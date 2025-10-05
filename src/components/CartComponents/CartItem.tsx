import type { ICartItem } from '@/interfaces/ICart';
import baseImageProduct from '@/assets/base-product-image.svg';

interface CartItemProps {
  cartItem: ICartItem;
  onIncrease: (id: string) => void;
  onDecrease: (id: string) => void;
  onRemove: (id: string) => void;
}

export const CartItem: React.FC<CartItemProps> = ({ cartItem, onIncrease, onDecrease, onRemove }: CartItemProps) => {
  return (
    <div className='flex items-center justify-between gap-2 py-3'>
      <div className='flex items-center gap-3'>
        <img
          src={cartItem.image !== '' ? cartItem.image : baseImageProduct}
          alt={cartItem.name}
          className='h-16 w-16 rounded-lg object-cover'
        />
        <div>
          <div className='flex flex-row gap-1'>
            <div className='line-clamp-2 text-base leading-tight font-medium'>
              {cartItem.name.length > 32 ? cartItem.name.slice(0, 32) + '...' : cartItem.name}
            </div>
          </div>
          <div className='mt-2 flex items-center justify-between gap-2'>
            <div className='flex flex-row'>
              <button className='cursor-pointer rounded bg-gray-200 px-2 py-1' onClick={() => onDecrease(cartItem.id)}>
                -
              </button>
              <div className='m-auto w-15 text-center'>{cartItem.quantity}</div>
              <button className='cursor-pointer rounded bg-gray-200 px-2 py-1' onClick={() => onIncrease(cartItem.id)}>
                +
              </button>
            </div>
            <div className='text-base leading-tight font-medium'>
              {Math.floor(cartItem.minPrice * cartItem.quantity * 100) / 100} ₽
            </div>
          </div>
        </div>
      </div>
      <button className='cursor-pointer text-red-500 hover:text-red-700' onClick={() => onRemove(cartItem.id)}>
        ✕
      </button>
    </div>
  );
};
