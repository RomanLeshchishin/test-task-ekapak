import type { ICategory, ISubCategory } from '@interfaces/ICategory';
import type { IProduct } from '@interfaces/IProduct';
import type { CategoryFromServer, SubCategoryFromServer } from './types/CategoryFromServer';
import type { ProductFromServer } from './types/ProductFromServer';

export const adaptProduct = (products: ProductFromServer[]): IProduct[] => {
  return products.map(
    product =>
      ({
        id: product.uuid,
        name: product.name,
        description: product.description,
        slug: product.slug,
        article: product.article,
        categoryId: product.category_uuid,
      }) as IProduct,
  );
};

export const adaptSubCategory = (subCategories: SubCategoryFromServer[]): ISubCategory[] => {
  return subCategories.map(
    category =>
      ({
        id: category.uuid,
        name: category.name,
        slug: category.slug,
        description: category.description ?? ([] as string[]),
        imageUrl: category.image_url ?? '',
        minPrice: category.min_price ?? '',
        products: category.products ? adaptProduct(category.products) : ([] as IProduct[]),
        children: category.children ? adaptSubCategory(category.children) : ([] as ISubCategory[]),
      }) as ISubCategory,
  );
};

export const adaptCategory = (categories: CategoryFromServer[]): ICategory[] => {
  return categories.map(
    category =>
      ({
        id: category.uuid,
        name: category.name,
        slug: category.slug,
        description: category.description ?? ([] as string[]),
        imageUrl: category.image_url ?? '',
        minPrice: category.min_price ?? '',
        children: category.children ? adaptSubCategory(category.children) : ([] as ISubCategory[]),
      }) as ICategory,
  );
};
