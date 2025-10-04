import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getAllCategories } from '@/services/CategoriesService';
import type { ICategory } from '@/interfaces/ICategory';
import { createCategoryLevels } from '@/utils/categoryLevels';
import { CategoryItem } from './CategoryItem';

export const CategoryTree: React.FC = () => {
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
        <CategoryItem key={level} level={level} items={items} onHover={handleHover} activePath={activePath} />
      ))}
    </div>
  );
};
