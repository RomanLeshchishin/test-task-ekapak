export interface ICartItem {
  id: string;
  name: string;
  slug: string;
  categoryId: string;
  minPrice: number;
  isExist: boolean;
  minPurchase: number;
  quantity: number;
  article: string;
  inCart: boolean;
  image: string;
}
