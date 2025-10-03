export interface IImage {
  originalUrl: string;
  cardUrl: string;
}

export interface IOffer {
  id: string;
  price: number;
  currency: string;
  unit: string;
  quantity: number;
}

export interface IProduct {
  id: string;
  name: string;
  description: string;
  slug: string;
  categoryId: string;
  minPrice: number;
  offers: IOffer[];
  isExist: boolean;
  minPurchase: number;
  article: string;
  inCart: boolean;
  images: IImage[] | [];
  properties: Record<string, string>;
}
