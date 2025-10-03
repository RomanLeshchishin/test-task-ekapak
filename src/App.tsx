import { CategoryTree } from '@components/CategoryTree';
import { useQuery } from '@tanstack/react-query';
import { getAllCategories } from './services/CategoriesService';
import { ProductList } from '@components/productList';
import type { ICategory } from '@interfaces/ICategory';

function App() {
  const { data, isLoading, error } = useQuery<ICategory[]>({
    queryKey: ['categories'],
    queryFn: getAllCategories,
  });
  return (
    <>
      <div className='w-full bg-gray-50 px-40 py-5'>
        <div className='flex flex-col gap-4'>
          <div className='h-20 w-full rounded-2xl bg-white'></div>
          <div className='flex flex-row gap-4'>
            <div className=''>
              <CategoryTree categories={data ?? []} />
            </div>
            <div className='min-h-screen'>
              <ProductList />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
