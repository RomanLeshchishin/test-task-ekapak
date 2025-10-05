import { ProductList } from '@components/ProductComponents/ProductList';
import { useAllProducts } from '../../hooks/useAllProducts';
import { useProductsByCategory } from '../../hooks/useProductsByCategory';
import { Pagination } from '../PaginationComponent/Pagination';

export function ProductListWrapper({ categoryId, page }: { categoryId: string; page: number }) {
  if (categoryId) {
    return <CategoryProducts categoryId={categoryId} page={page} />;
  }
  return <AllProducts page={page} />;
}

function AllProducts({ page }: { page: number }) {
  const { data, isLoading, isError } = useAllProducts(page);

  if (isLoading) return <p className='mt-4 text-center'>Загрузка...</p>;
  if (isError) return <p className='mt-4 text-center text-red-500'>Ошибка загрузки!</p>;
  if (!data) return null;

  return (
    <div className='flex flex-col gap-4'>
      <ProductList {...data} />
      <Pagination meta={data.meta} currentPage={page} />
    </div>
  );
}

function CategoryProducts({ categoryId, page }: { categoryId: string; page: number }) {
  const { data, isLoading, isError } = useProductsByCategory(categoryId, page);

  if (isLoading) return <p className='mt-4 text-center'>Загрузка...</p>;
  if (isError) return <p className='mt-4 text-center text-red-500'>Ошибка загрузки!</p>;
  if (!data) return null;

  return (
    <div className='flex flex-col gap-4'>
      <ProductList {...data} />
      <Pagination meta={data.meta} currentPage={page} />
    </div>
  );
}
