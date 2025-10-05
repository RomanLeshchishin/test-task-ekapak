import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { getProductsByCategory } from '../services/ProductsService';

export const useProductsByCategory = (categoryId: string, page: number) => {
  return useQuery({
    queryKey: ['products-category', categoryId, page],
    queryFn: () => getProductsByCategory(categoryId, page),
    placeholderData: keepPreviousData,
    staleTime: 1000 * 60 * 5,
  });
};
