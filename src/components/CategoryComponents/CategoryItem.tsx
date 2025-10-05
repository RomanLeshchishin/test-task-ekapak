import type { ICategory } from '@/interfaces/ICategory';
import blackArrow from '../../assets/black-arrow.svg';
import blueArrow from '../../assets/blue-arrow.svg';
import { useAppDispatch } from '@/store/hooks';
import { removePage } from '@/store/paginationSlice';
import { removeCategory } from '@/store/categorySlice';

interface CategoryPanelProps {
  level: number;
  items: ICategory[];
  onHover: (category: ICategory, level: number) => void;
  onClick: (category: ICategory) => void;
  activePath: ICategory[];
}

export const CategoryItem: React.FC<CategoryPanelProps> = ({
  level,
  items,
  onHover,
  onClick,
  activePath,
}: CategoryPanelProps) => {
  const dispatch = useAppDispatch();
  const isRoot = level === 0;

  const handleClickProducts = () => {
    dispatch(removeCategory());
    dispatch(removePage());
  };

  return (
    <div
      className='absolute top-0 z-10 w-90 rounded-lg border border-gray-100 bg-white px-5 py-6 shadow-lg'
      style={{ left: `${level * 22.5}rem` }}
    >
      {isRoot && (
        <h2 className='mb-3 cursor-pointer text-2xl font-semibold text-gray-800' onClick={handleClickProducts}>
          Каталог товаров
        </h2>
      )}

      <ul className='space-y-1'>
        {items.map(item => {
          const isActive = activePath[level]?.id === item.id;

          return (
            <li
              key={item.id}
              onMouseEnter={() => onHover(item, level)}
              onClick={() => onClick(item)}
              className={`flex cursor-pointer items-center justify-between rounded-md py-2 text-base transition-colors ${isActive ? 'font-medium text-sky-400' : 'text-gray-700'} `}
            >
              <span>{item.name}</span>
              {item.children?.length > 0 && (
                <span className='text-gray-400'>
                  <img src={isActive ? blueArrow : blackArrow} alt={'arrow'}></img>
                </span>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
