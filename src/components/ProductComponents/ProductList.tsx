import React from 'react';
import { ProductCard } from './ProductCard';
import type { IProduct } from '@/interfaces/IProduct';

interface ProductListProps {
  data: IProduct[];
}

export const ProductList: React.FC<ProductListProps> = ({ data }: ProductListProps) => {
  return (
    <div className='grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4'>
      {data.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
