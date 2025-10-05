import { api } from '@/axios';
import { adaptProductsData, type ProductData } from '@/adapters/product-to-client';
import type { ApiProductsResponse } from '@adapters/types/ProductServer';

export const getAllProducts = async (page: number): Promise<ProductData> => {
  const { data } = await api.get<ApiProductsResponse>(`/products?page=${page}`);
  console.log(adaptProductsData(data));
  return adaptProductsData(data);
};

export const getProductsByCategory = async (category: string, page: number): Promise<ProductData> => {
  const { data } = await api.get<ApiProductsResponse>(`/products?category=${category}&page=${page}`);
  console.log(adaptProductsData(data));
  return adaptProductsData(data);
};
