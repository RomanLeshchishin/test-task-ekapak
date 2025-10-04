import { useState } from 'react';
import { ProductList } from '@components/ProductComponents/ProductList';
import { CategoryTree } from '@components/CategoryComponents/CategoryTree';
import { Cart } from '@components/CartComponents/Cart';
import { Pagination } from '@components/PaginationComponent/Pagination';
import { useProducts } from './hooks/useProducts';

function App() {
  const [page, setPage] = useState(1);
  const { data, isLoading, isError } = useProducts(page);

  if (isLoading) return <p className='mt-4 text-center'>Загрузка...</p>;
  if (isError) return <p className='mt-4 text-center text-red-500'>Ошибка!</p>;
  if (!data) return null;

  return (
    <>
      <div className='w-full bg-gray-50 px-50 py-5'>
        <div className='flex flex-col gap-4'>
          <div className='relative flex h-20 w-full justify-end rounded-2xl bg-white px-5'>
            <Cart />
          </div>
          <div className='flex flex-row gap-4'>
            <div className='w-90 shrink-0'>
              <CategoryTree />
            </div>
            <div className='min-h-screen'>
              <ProductList {...data} />
            </div>
          </div>
          {
            <div className='mt-4'>
              <Pagination meta={data.meta} currentPage={page} onPageChange={setPage} />
            </div>
          }
        </div>
      </div>
    </>
  );
}

export default App;
