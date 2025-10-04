import type { IImage, IOffer, IProduct } from '@/interfaces/IProduct';
import type { ImageServer, OfferServer, ProductServer, ApiProductsResponse, MetaServer } from './types/ProductServer';

export type ProductData = { data: IProduct[]; meta: MetaServer };

export const adaptImage = (images: ImageServer[]): IImage[] => {
  return images.map(
    image =>
      ({
        originalUrl: image.original_url,
        cardUrl: image.card_url,
      }) as IImage,
  );
};

export const adaptOffer = (offers: OfferServer[]): IOffer[] => {
  return offers.map(
    offer =>
      ({
        id: offer.uuid,
        price: parseFloat(offer.price) || 0,
        currency: offer.currency,
        unit: offer.unit,
        quantity: offer.quantity,
      }) as IOffer,
  );
};

export const adaptProduct = (products: ProductServer[]): IProduct[] => {
  return products.map(
    product =>
      ({
        id: product.uuid,
        name: product.name,
        description: product.description.trim(),
        slug: product.slug,
        categoryId: product.category_uuid,
        minPrice: parseFloat(product.offers_min_price) || 0,
        offers: product.offers ? adaptOffer(product.offers) : ([] as IOffer[]),
        minPurchase: parseInt(product['Мин. покупка, шт.'], 10) || 1,
        isExist: product['Наличие'] ? product['Наличие'] === 'Да в наличии' : false,
        article: product.article,
        inCart: product.in_cart,
        images: product.images.length > 0 ? adaptImage(product.images) : ([] as IImage[]),
        properties: { ...product.properties },
      }) as IProduct,
  );
};

export const adaptProductsData = (productData: ApiProductsResponse): ProductData => {
  return {
    data: adaptProduct(productData.data),
    meta: productData.meta,
  };
};
