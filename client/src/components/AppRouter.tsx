import React from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';

import {useAppSelector} from 'hooks/redux';
import {Admin, Auth, Basket, ProductsPage, Shop} from 'pages';
import {RootState} from 'store/store';

import {ROUTES} from '../const';

const AppRouter = () => {
	// const isAuth = false;
	const user = useAppSelector((state: RootState) => state.userReducer);

	return (
		<Routes>
			{user && (
				<>
					<Route path={ROUTES.PRIVATE.ADMIN_ROUTE} element={<Admin />} />
					<Route path={ROUTES.PRIVATE.BASKET_ROUTE} element={<Basket />} />
				</>
			)}
			<>
				<Route path={ROUTES.PUBLIC.SHOP_ROUTE} element={<Shop />} />
				<Route path={ROUTES.PUBLIC.LOGIN_ROUTE} element={<Auth />} />
				<Route path={ROUTES.PUBLIC.REGISTRATION_ROUTE} element={<Auth />} />
				<Route path={ROUTES.PUBLIC.PRODUCTS_ROUTE} element={<ProductsPage />} />
			</>
			<Route path="*" element={<Navigate to="/" />} />
		</Routes>
	);
};

export default AppRouter;
