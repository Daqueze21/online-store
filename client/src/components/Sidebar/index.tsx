import React, {useState} from 'react';

import {MenuOutlined} from '@ant-design/icons';
import {Button, Layout, Menu} from 'antd';

import styles from './style.module.scss';

const {Sider} = Layout;

const Sidebar = () => {
	const [showSidebar, setShowSider] = useState<boolean>(true);

	return (
		<Sider
			width={250}
			breakpoint="lg"
			className={styles.sidebar}
			trigger={null}
			collapsible
			collapsed={showSidebar}
			collapsedWidth="0">
			{!showSidebar && (
				<div className={styles.menuContent}>
					<div className={styles.menuItem}>item1</div>
					<div className={styles.menuItem}>item2</div>
				</div>
			)}

			<button
				type="button"
				className={styles.sidebarButton}
				onClick={() => setShowSider(prev => !prev)}>
				<MenuOutlined color="white" />
			</button>
		</Sider>
	);
};

export default Sidebar;
