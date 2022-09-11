import React from "react";
import { useAppSelector } from "hooks/redux";

import { Navigate, Route, Routes } from "react-router-dom";
import { RootState } from "store/store";

import { Admin, Auth, Basket, ProductsPage, Shop } from "pages";

import {
  ADMIN_ROUTE,
  BASKET_ROUTE,
  LOGIN_ROUTE,
  PRODUCTS_ROUTE,
  REGISTRATION_ROUTE,
  SHOP_ROUTE,
} from "../utils/const";

const AppRouter = () => {
  // const isAuth = false;
  const user = useAppSelector((state: RootState) => state.userReducer);

  return (
    <Routes>
      {user && (
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
