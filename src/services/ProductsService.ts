//import type { CategoryFromServer } from '@/adapters/types/CategoryFromServer';
//import { api } from '@/axios';
import { adaptProduct } from '@/adapters/product-to-client';
import { mockProducts } from '@/const';
import type { IProduct } from '@/interfaces/IProduct';

/*export const getAllCategories = async (): Promise<ICategory[]> => {
  const { data } = await api.get<{ data: CategoryFromServer[] }>('/categories');
  return adaptCategory(data.data);
};*/

export const getAllProducts = async (): Promise<IProduct[]> => {
  const { data } = await mockProducts;
  console.log(adaptProduct(data));
  return adaptProduct(data);
};
