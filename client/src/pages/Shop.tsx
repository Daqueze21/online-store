import React from "react";
import { useAppSelector } from "../hooks/redux";
import { RootState } from "../store/store";
import { Layout } from "antd";

const { Content } = Layout;

const Shop = () => {
  const user = useAppSelector((state: RootState) => state.userReducer);
  if (user) {
    console.log(user);
  }

  return <Content style={{ margin: "24px 16px 0" }}>Shop</Content>;
};

export default Shop;
