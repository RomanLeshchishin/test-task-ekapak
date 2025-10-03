import type { ISmallProduct } from './ISmProduct';

export interface IBaseCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  imageUrl: string;
  minPrice: string;
}

export interface ISubCategory extends IBaseCategory {
  children: ISubCategory[];
  products: ISmallProduct[];
}

export interface ICategory extends IBaseCategory {
  children: ISubCategory[];
}
