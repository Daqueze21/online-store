import React, {useState} from 'react';

// import { Admin, Shop } from "pages";
// import { Route, Routes } from "react-router-dom";
import {Layout} from 'antd';
import AppRouter from 'AppRouter';
import {HeaderMenu, Sidebar} from 'components';

import './styles/main.scss';
import styles from './app.module.scss';

const {Footer, Sider, Content} = Layout;

const AppWrapper: React.FC = () => {
	return (
		<Layout>
			<Sidebar />
			<Layout className={styles.pageContent}>
				<HeaderMenu />

				<AppRouter />

				<Footer>Footerghghgcgcb</Footer>
			</Layout>
		</Layout>
	);
};

export default AppWrapper;
