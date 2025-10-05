import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getAllCategories } from '@/services/CategoriesService';
import type { ICategory } from '@/interfaces/ICategory';
import { createCategoryLevels } from '@/utils/categoryLevels';
import { CategoryItem } from './CategoryItem';
import { useAppDispatch } from '@/store/hooks';
import { addCategory } from '@/store/slices/categorySlice';
import { removePage } from '@/store/slices/paginationSlice';

export const CategoryTree: React.FC = () => {
  const dispatch = useAppDispatch();
  const {
    data: categories = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['categories'],
    queryFn: getAllCategories,
    staleTime: Infinity,
  });

  const [activePath, setActivePath] = useState<ICategory[]>([]);

  const handleHover = (category: ICategory, level: number) => {
    const newPath = activePath.slice(0, level);
    setActivePath([...newPath, category]);
  };

  const handleLeave = () => {
    setActivePath([]);
  };

  const handleClick = (category: ICategory) => {
    if (category.products.length > 0) {
      dispatch(addCategory({ id: category.id, name: category.name }));
      dispatch(removePage());
    }
  };

  if (isLoading) {
    return <div className='flex items-center justify-center p-4 text-gray-500'>Загрузка категорий...</div>;
  }

  if (isError) {
    return <div className='flex items-center justify-center p-4 text-red-500'>Ошибка при загрузке данных</div>;
  }

  const levels = createCategoryLevels(categories, activePath);

  return (
    <div className='relative flex' onMouseLeave={handleLeave}>
      {levels.map(({ level, items }) => (
        <CategoryItem
          key={level}
          level={level}
          items={items}
          onHover={handleHover}
          onClick={handleClick}
          activePath={activePath}
        />
      ))}
    </div>
  );
};
