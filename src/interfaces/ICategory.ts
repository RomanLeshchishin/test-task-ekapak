import type { ISmallProduct } from './ISmProduct';

export interface ICategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  imageUrl: string;
  minPrice: string;
  products: ISmallProduct[];
  children: ICategory[];
}

export interface ICategoryItem {
  id: string;
  name: string;
}
