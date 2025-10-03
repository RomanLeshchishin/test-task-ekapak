import type { ICategory } from '@/interfaces/ICategory';
import { CategoryItem } from './CategoryItem';

interface CategoryTreeProps {
  categories: ICategory[];
}

export const CategoryTree: React.FC<CategoryTreeProps> = ({ categories }: CategoryTreeProps) => {
  return (
    <div className='w-64 rounded-lg bg-white p-3'>
      <h2 className='mb-3 text-lg font-semibold'>Каталог товаров</h2>
      <div>
        {categories.map(category => (
          <CategoryItem key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};
