import { ProductListWrapper } from '@components/ProductComponents/ProductListWrapper';
import { CategoryTree } from '@components/CategoryComponents/CategoryTree';
import { Cart } from '@components/CartComponents/Cart';
import { useAllProducts } from './hooks/useAllProducts';
import { useAppSelector } from './store/hooks';

function App() {
  const { category } = useAppSelector(state => state.categoryReducer);
  const { page } = useAppSelector(state => state.paginationReducer);
  const { data, isLoading, isError } = useAllProducts(page);

  if (isLoading) return <p className='mt-4 text-center'>Загрузка...</p>;
  if (isError) return <p className='mt-4 text-center text-red-500'>Ошибка!</p>;
  if (!data) return null;

  return (
    <>
      <div className='flex w-full justify-center bg-gray-50 py-5'>
        <div className='flex flex-col gap-4'>
          <div className='relative flex h-20 w-full justify-between rounded-2xl bg-white px-5'>
            <div className='my-auto flex text-lg'>{category.id !== '' ? category.name : 'Все товары'}</div>
            <Cart />
          </div>
          <div className='flex flex-row gap-4'>
            <div className='hidden xl:flex xl:w-60 2xl:w-90'>
              <CategoryTree />
            </div>
            <ProductListWrapper categoryId={category.id} page={page} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
