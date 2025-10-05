import type { ICartItem } from '@/interfaces/ICart';
import type { ICategoryItem } from '@/interfaces/ICategory';

const CART = 'CART';
const CATEGORY = 'CATEGORY';
const PAGE = 'PAGE';

export const getCart = (): ICartItem[] => {
  const cartData = JSON.parse(localStorage.getItem(CART) || '[]') as ICartItem[];
  return cartData;
};

export const saveCart = (products: ICartItem[]) => {
  localStorage.setItem(CART, JSON.stringify(products));
};

export const getCategory = (): ICategoryItem => {
  const categoryId = JSON.parse(localStorage.getItem(CATEGORY) || '{"id":"","name":""}');
  return categoryId;
};

export const saveCategory = (category: ICategoryItem) => {
  localStorage.setItem(CATEGORY, JSON.stringify(category));
};

export const getPage = (): number => {
  const page = Number(localStorage.getItem(PAGE) || 1);
  return page;
};

export const savePage = (page: number) => {
  localStorage.setItem(PAGE, String(page));
};
