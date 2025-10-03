import type { SmallProductServer } from './SmProductServer';

export type BaseCategoryServer = {
  uuid: string;
  name: string;
  slug: string;
  description?: string | string[] | null;
  image_url?: string | null;
  min_price?: string | null;
};

export type SubCategoryServer = BaseCategoryServer & {
  children?: SubCategoryServer[] | null;
  products?: SmallProductServer[] | null;
};

export type CategoryServer = BaseCategoryServer & {
  children?: SubCategoryServer[] | null;
};
