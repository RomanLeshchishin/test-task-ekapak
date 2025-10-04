import React from 'react';
import { ProductCard } from './ProductCard';
import type { IProduct } from '@/interfaces/IProduct';
import { useQuery } from '@tanstack/react-query';
import { getAllProducts } from '@/services/ProductsService';

export const ProductList: React.FC = () => {
  const { data, isLoading, error } = useQuery<IProduct[]>({
    queryKey: ['products'],
    queryFn: getAllProducts,
  });
  return (
    <div className='grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
      {data?.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
