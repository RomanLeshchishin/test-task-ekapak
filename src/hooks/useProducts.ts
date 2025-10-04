import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { getProductsByPage } from '../services/ProductsService';

export const useProducts = (page: number) => {
  return useQuery({
    queryKey: ['items', page],
    queryFn: () => getProductsByPage(page),
    placeholderData: keepPreviousData,
    staleTime: 1000 * 60 * 5,
  });
};
