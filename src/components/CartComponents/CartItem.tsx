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
    <div className='flex items-center justify-between py-3'>
      <div className='flex items-center gap-3'>
        <img
          src={cartItem.image !== '' ? cartItem.image : baseImageProduct}
          alt={cartItem.name}
          className='h-16 w-16 rounded-lg object-cover'
        />
        <div>
          <h4 className='font-semibold'>
            {cartItem.name.length > 55 ? cartItem.name.slice(0, 55) + '...' : cartItem.name}
          </h4>
          <div className='mt-2 flex items-center gap-2'>
            <button className='cursor-pointer rounded bg-gray-200 px-2 py-1' onClick={() => onDecrease(cartItem.id)}>
              -
            </button>
            <span>{cartItem.quantity}</span>
            <button className='cursor-pointer rounded bg-gray-200 px-2 py-1' onClick={() => onIncrease(cartItem.id)}>
              +
            </button>
          </div>
        </div>
      </div>
      <button className='cursor-pointer text-red-500 hover:text-red-700' onClick={() => onRemove(cartItem.id)}>
        ✕
      </button>
    </div>
  );
};
