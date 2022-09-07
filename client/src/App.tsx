import React, { useState } from "react";

// import { Admin, Shop } from "pages";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
// import { Route, Routes } from "react-router-dom";
import { Layout } from "antd";
import AppRouter from "components/AppRouter";

import Navbar from "./components/Navbar/Navbar";

import "./app.scss";

const { Header, Footer, Sider, Content } = Layout;

const AppWrapper: React.FC = () => {
  const [showSider, setShowSider] = useState<boolean>(false);
  const toggleMenu = () => {
    setShowSider(!showSider);
  };

  return (
    <Layout>
      <Sider
        width={256}
        style={{ background: "#356877", minHeight: "100vh", color: "blue" }}
        trigger={null}
        collapsible
        collapsed={showSider}
      >
        Sider
      </Sider>
      <Layout>
        <Header style={{ background: "#555", textAlign: "center", padding: 0 }}>
          {showSider ? (
            <MenuUnfoldOutlined onClick={toggleMenu} />
          ) : (
            <MenuFoldOutlined onClick={toggleMenu} />
          )}
        </Header>
        <AppRouter />
        {/* <Content>Content</Content> */}
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
  );
};

export default AppWrapper;
