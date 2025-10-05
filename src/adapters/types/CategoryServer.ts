import type { SmallProductServer } from './SmProductServer';

export type CategoryServer = {
  uuid: string;
  name: string;
  slug: string;
  description?: string | string[] | null;
  image_url?: string | null;
  min_price?: string | null;
  products?: SmallProductServer[] | null;
  children?: CategoryServer[] | null;
};
