import { useState } from 'react';
import { ChevronRight, ChevronDown } from 'lucide-react';
import type { ICategory } from '@/interfaces/ICategory';

interface CategoryItemProps {
  category: ICategory;
}

export const CategoryItem: React.FC<CategoryItemProps> = ({ category }: CategoryItemProps) => {
  const [open, setOpen] = useState(false);

  const hasChildren = category.children.length > 0;

  return (
    <div className='ml-2'>
      <div
        className='flex cursor-pointer items-center justify-between rounded-lg px-3 py-2 hover:bg-gray-100'
        onClick={() => hasChildren && setOpen(!open)}
      >
        <span>{category.name}</span>
        {hasChildren && (
          <span className='text-gray-500'>{open ? <ChevronDown size={16} /> : <ChevronRight size={16} />}</span>
        )}
      </div>

      {hasChildren && open && (
        <div className='ml-4 border-l border-gray-200 pl-2'>
          {category.children.map(child => (
            <CategoryItem key={child.id} category={child} />
          ))}
        </div>
      )}
    </div>
  );
};
