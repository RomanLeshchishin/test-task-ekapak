import { api } from '@/axios';
import { adaptProductsData, type ProductData } from '@/adapters/product-to-client';
import { mockProducts } from '@/const';
import type { ApiProductsResponse } from '@adapters/types/ProductServer';

export const getProductsByPage = async (page: number): Promise<ProductData> => {
  const { data } = await api.get<ApiProductsResponse>(`/products?page=${page}`);
  console.log(adaptProductsData(data));
  return adaptProductsData(data);
};
