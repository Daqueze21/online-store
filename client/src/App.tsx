import React from "react";
import { Routes, Route } from 'react-router-dom';
import { Layout, Menu } from "antd";
// import {
//   MenuUnfoldOutlined,
//   MenuFoldOutlined,
//   UserOutlined,
//   VideoCameraOutlined,
//   UploadOutlined,
// } from "@ant-design/icons";
// import Navbar from "./components/Navbar/Navbar";
import "./app.scss";
import { Admin, Shop } from "pages";

const { Header, Footer, Sider, Content } = Layout;


const AppWrapper: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Admin />} />
        <Route path='/shop' element={<Shop />} />
      </Routes>
    </>
  );
};

export default AppWrapper;
