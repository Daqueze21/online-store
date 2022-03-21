import React, { useState } from "react";
import AppRouter from "./components/AppRouter";
import { Layout, Menu } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";

<MenuFoldOutlined />;

const { Header, Footer, Sider, Content } = Layout;

const App = () => {
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
    // <AppRouter />
  );
};

export default App;
