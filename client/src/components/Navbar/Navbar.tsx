import React from 'react';

import Icon from '@ant-design/icons';
import {Button, Layout, Menu} from 'antd';
import Avatar from 'antd/lib/avatar/avatar';

import styles from './style.module.scss';

const {Header} = Layout;

const Navbar = () => {
	return (
		<Header
			// style={{
			//   background: "#555",
			//   textAlign: "center",
			//   padding: 0,
			//   alignItems: "center",
			// }}
			className={styles.header}>
			{/* <Menu theme="dark" mode="inline">
        <Menu.Item
          style={{
            float: "right",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            width: "180px",
          }}
        > */}

			{/* { this.props.sessionStore.isMobileMenu ? */}
			{/* <Button onClick={() => console.log("button")} icon="bars" ghost /> : */}
			<Avatar src="https://html5css.ru/howto/img_avatar.png" />
			{/* </Menu.Item>
      </Menu> */}
		</Header>
	);
};

export default Navbar;
