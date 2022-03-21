import {
  ADMIN_ROUTE,
  BASKET_ROUTE,
  PRODUCTS_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  SHOP_ROUTE,
} from "./utils/const";
import { Admin, Auth, Basket, ProductsPage, Shop } from "./pages";

export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    Component: Admin,
  },
  {
    path: BASKET_ROUTE,
    Component: Basket,
  },
];

export const publicRoutes = [
  {
    path: SHOP_ROUTE,
    Component: Shop,
  },
  {
    path: LOGIN_ROUTE,
    Component: Auth,
  },
  {
    path: REGISTRATION_ROUTE,
    Component: Auth,
  },
  {
    path: PRODUCTS_ROUTE + "/:id",
    Component: ProductsPage,
  },
];
