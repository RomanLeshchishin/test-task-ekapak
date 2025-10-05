import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { getAllProducts } from '../services/ProductsService';

export const useAllProducts = (page: number) => {
  return useQuery({
    queryKey: ['products', page],
    queryFn: () => getAllProducts(page),
    placeholderData: keepPreviousData,
    staleTime: 1000 * 60 * 5,
  });
};
