# 🛍️ Тестовое задание на позицию Frontend-разработчика в компанию ЕКАПАК

## 🚀 Как запустить проект

### 1. Клонирование репозитория

```bash
git clone https://github.com/<your-username>/<your-repo-name>.git
```
### 2. Установка зависимостей

```bash
npm install
```

### 3. Запуск проекта

```bash
npm run dev
```
## 🧩 Описание решения

### 1. Страница каталога товаров

Реализована **страница каталога** - в меню можно выбрать категорию и подкатегорию, если в ней есть товары, то они подгрузятся на страницу. В верхнем блоке отображается выбранная категория или все товары.

  - сетка **категорий и подкатегорий**
  ><img width="742" height="673" alt="image" src="https://github.com/user-attachments/assets/4097bd83-d676-4693-bccc-e91d9ef60050" />

  - сетка **карточек товаров**
  ><img width="729" height="665" alt="image" src="https://github.com/user-attachments/assets/fab23afe-e059-4336-816b-344e362b0233" />

Подгрузка данных происходит с помощью хука useQuery и кастомных хуков useAllProducts и useProductsByCategory. Также реализована пагинация для всех товаров и по категориям.
#### `useAllProducts.ts`
```ts
export const useAllProducts = (page: number) => {
  return useQuery({
    queryKey: ['products', page],
    queryFn: () => getAllProducts(page),
    placeholderData: keepPreviousData,
    staleTime: 1000 * 60 * 5,
  });
};
```
#### `useProductsByCategory`
```ts
export const useProductsByCategory = (categoryId: string, page: number) => {
  return useQuery({
    queryKey: ['products-category', categoryId, page],
    queryFn: () => getProductsByCategory(categoryId, page),
    placeholderData: keepPreviousData,
    staleTime: 1000 * 60 * 5,
  });
};
```
📸 **Скриншот страницы каталога:**

> <img width="1185" height="874" alt="image" src="https://github.com/user-attachments/assets/a98618b2-c06a-422b-b1ae-64bf6996a05e" />


---

### 2. Мини-корзина

* Каждая карточка товара содержит кнопку, по которой происходит добавление и удаление товаров.
* Управление состоянием корзины происходит через Redux Toolkit, есть экшены для добавления, удаления и изменения количества товаров. Также корзина сохраняется в localStorage, чтобы при перезагрузке страницы её состояние сохранялось.
* Мини-корзина открывается из шапки каталога товаров.
* Состояние корзины типизировано интерфейсом `CartItem` и управляется через `cartSlice.ts`.

📸 **Скриншот мини-корзины:**

> <img width="559" height="586" alt="image" src="https://github.com/user-attachments/assets/92beab1e-8d89-47b3-bd0c-60974e10b62a" />


---

### 3. Типизация
Данные подгружаемые с сервера типизированы с помощью типов CategoryServer, ProductServer и SmProductServer. Далее через функции-адаптеры они преобразуются в интерфейсы IProduct, ISmProduct, ICategory.
Основные интерфейсы расположены в `/src/interfaces/`:
#### `IProduct.ts`

```ts
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
```

#### `ISmProduct.ts`

```ts
export interface ISmallProduct {
  id: string;
  name: string;
  description: string;
  slug: string;
  article: string;
  categoryId: string;
}
```

#### `ICategory.ts`

```ts
export interface ICategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  imageUrl: string;
  minPrice: string;
  products: ISmallProduct[];
  children: ICategory[];
}
```


---

### 4. TailwindCSS и адаптивность

Вся верстка компонентов реализована через классы tailwind. Через `/public/fonts/` импортированы шрифты и применены в глобальном файле `index.css`. Также реализована минимальная адаптивность для списка товаров и корзины.

📸 **Скриншоты адаптивных версий:**

> <img width="1371" height="680" alt="image" src="https://github.com/user-attachments/assets/7dafd04f-c47c-4454-8455-2ce6d0a14410" />



> <img width="1151" height="607" alt="image" src="https://github.com/user-attachments/assets/e13fd9bc-b316-4ac3-9df1-87a7de212330" />



><img width="798" height="736" alt="image" src="https://github.com/user-attachments/assets/c00388b1-366a-4276-8459-7f33ecd77795" />

---
## Ссылка на сайт - https://test-task-ekapak.vercel.app


