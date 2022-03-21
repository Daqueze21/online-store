import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { authRoutes, publicRoutes } from "../routes";
import {
  ADMIN_ROUTE,
  BASKET_ROUTE,
  PRODUCTS_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  SHOP_ROUTE,
} from "../utils/const";
import { Admin, Auth, Basket, ProductsPage, Shop } from "../pages";

const AppRouter = () => {
  const isAuth = false;
  console.log(SHOP_ROUTE, PRODUCTS_ROUTE);

  return (
    <Routes>
      {isAuth && (
        <>
          <Route path={ADMIN_ROUTE} element={<Admin />} />
          <Route path={BASKET_ROUTE} element={<Basket />} />
        </>
      )}
      {
        <>
          <Route path={SHOP_ROUTE} element={<Shop />} />
          <Route path={LOGIN_ROUTE} element={<Auth />} />
          <Route path={REGISTRATION_ROUTE} element={<Auth />} />
          <Route path={PRODUCTS_ROUTE} element={<ProductsPage />} />
        </>
      }
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRouter;
