import type { ProductFromServer } from './ProductFromServer';

export type BaseCategory = {
  uuid: string;
  name: string;
  slug: string;
  description?: [] | null;
  image_url?: string | null;
  min_price?: string | null;
};

export type SubCategoryFromServer = BaseCategory & {
  children?: SubCategoryFromServer[] | null;
  products?: ProductFromServer[] | null;
};

export type CategoryFromServer = BaseCategory & {
  children?: SubCategoryFromServer[] | null;
};
