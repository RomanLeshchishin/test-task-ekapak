import type { ICategory } from '@/interfaces/ICategory';

export const createCategoryLevels = (
  categories: ICategory[],
  activePath: ICategory[],
): { level: number; items: ICategory[] }[] => {
  const getChildren = (level: number): ICategory[] => {
    if (level === 0) return categories;
    const parent = activePath[level - 1];
    return parent?.children || [];
  };

  const levels: { level: number; items: ICategory[] }[] = [];

  for (let level = 0; level <= activePath.length; level++) {
    const items = getChildren(level);
    if (items.length > 0) {
      levels.push({ level, items });
    }
  }

  return levels;
};
