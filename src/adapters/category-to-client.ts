import type { ICategory } from '@interfaces/ICategory';
import type { ISmallProduct } from '@/interfaces/ISmProduct';
import type { CategoryServer } from './types/CategoryServer';
import type { SmallProductServer } from './types/SmProductServer';

export const adaptSmProduct = (products: SmallProductServer[]): ISmallProduct[] => {
  return products.map(
    product =>
      ({
        id: product.uuid,
        name: product.name,
        description: product.description,
        slug: product.slug,
        article: product.article,
        categoryId: product.category_uuid,
      }) as ISmallProduct,
  );
};

export const adaptCategory = (categories: CategoryServer[]): ICategory[] => {
  return categories.map(
    category =>
      ({
        id: category.uuid,
        name: category.name,
        slug: category.slug,
        description:
          typeof category.description === 'string'
            ? category.description.trim()
            : Array.isArray(category.description)
              ? category.description.join(', ')
              : '',
        imageUrl: category.image_url ?? '',
        minPrice: category.min_price ?? '',
        products: category.products ? adaptSmProduct(category.products) : ([] as ISmallProduct[]),
        children: category.children ? adaptCategory(category.children) : ([] as ICategory[]),
      }) as ICategory,
  );
};
