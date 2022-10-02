import {ROUTES} from './const';
import {Admin, Auth, Basket, Products, Shop} from './pages';

export const authRoutes = [
	{
		path: ROUTES.PRIVATE.ADMIN_ROUTE,
		Component: Admin,
	},
	{
		path: ROUTES.PRIVATE.BASKET_ROUTE,
		Component: Basket,
	},
];

export const publicRoutes = [
	{
		path: ROUTES.PUBLIC.SHOP_ROUTE,
		Component: Shop,
	},
	{
		path: ROUTES.PUBLIC.LOGIN_ROUTE,
		Component: Auth,
	},
	{
		path: ROUTES.PUBLIC.REGISTRATION_ROUTE,
		Component: Auth,
	},
	{
		path: `${ROUTES.PUBLIC.PRODUCTS_ROUTE}/:id`,
		Component: Products,
	},
];
