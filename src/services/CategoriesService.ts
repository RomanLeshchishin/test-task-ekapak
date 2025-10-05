import { adaptCategory } from '@/adapters/category-to-client';
import type { CategoryServer } from '@/adapters/types/CategoryServer';
import { api } from '@/axios';
import { mockCategories } from '@/const';
import type { ICategory } from '@/interfaces/ICategory';

// export const getAllCategories = async (): Promise<ICategory[]> => {
//   const { data } = await mockCategories;
//   console.log(adaptCategory(data));
//   return adaptCategory(data);
// };

export const getAllCategories = async (): Promise<ICategory[]> => {
  const { data } = await api.get<{ data: CategoryServer[] }>('/categories');
  console.log(adaptCategory(data.data));
  return adaptCategory(data.data);
};
