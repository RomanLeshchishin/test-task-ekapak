export type MetaServer = {
  total: number;
  current_page: number;
  last_page: number;
  per_page: number;
  cached_at: string;
};

export type ImageServer = {
  original_url: string;
  card_url: string;
};

export type OfferServer = {
  uuid: string;
  price: string;
  currency: string;
  unit: string;
  quantity: number;
};

export type ProductServer = {
  uuid: string;
  name: string;
  description: string;
  slug: string;
  category_uuid: string;
  offers_min_price: string;
  offers?: OfferServer[] | null;
  ['Мин. покупка, шт.']: string;
  ['Наличие']?: string | null;
  article: string;
  in_cart: boolean;
  images: ImageServer[];
  properties: Record<string, string>;
};

export type ApiProductsResponse = {
  data: ProductServer[];
  meta: MetaServer;
};
