import React from 'react';
import {NavLink, useNavigate} from 'react-router-dom';
import {ReactSVG} from 'react-svg';

import {InstagramOutlined, UserOutlined} from '@ant-design/icons';
import {Button, Layout} from 'antd';
import Avatar from 'antd/lib/avatar/avatar';
// import {instagramIcon} from 'assets';
import {ROUTES} from 'const';
import {useAppDispatch, useAppSelector} from 'hooks/redux';
import {userSlice} from 'store/reducers/UserSlice';
import {RootState} from 'store/store';

import 'antd/dist/antd.min.css';
import styles from './style.module.scss';

const {Header} = Layout;

const HeaderMenu = () => {
	const user = useAppSelector((state: RootState) => state.userReducer);
	const navigate = useNavigate();
	const {authUser} = userSlice.actions;
	const dispatch = useAppDispatch();

	const login = () => {
		dispatch(authUser(true));
		navigate(ROUTES.PUBLIC.LOGIN_ROUTE);
	};

	return (
		<Header className={styles.header}>
			<div className={styles.wrapper}>
				<NavLink
					className={styles.storeName}
					to="https://www.instagram.com/sakvoyazh_na_komarovke/">
					Sakvoyage
				</NavLink>
				<div className={styles.addressBlock}>
					<div className={styles.address}>
						г. Минск, ТЦ Атлантик, ул. Кульман, 5б, пав. 134
					</div>
					{/* <div className={styles.links}>
						<NavLink
							className={styles.link}
							to="https://www.instagram.com/sakvoyazh_na_komarovke/">
							<ReactSVG wrapper="span" src={instagramIcon} className={styles.icon} />
							<InstagramOutlined />
						</NavLink>
					</div> */}
				</div>
				{user.isAuth ? (
					<div className={styles.buttonsBlock}>
						<div className={styles.authUser}>
							<UserOutlined /> {user.user.name}
						</div>
						<Button
							className={styles.logoutBtn}
							type="text"
							onClick={() => navigate(ROUTES.PRIVATE.ADMIN_ROUTE)}>
							Logout
						</Button>
						{/* <Button
							className={styles.logoutBtn}
							type="text"
							onClick={() => console.log('logout')}>
							Выйти
						</Button> */}
					</div>
				) : (
					<div className={styles.buttonsBlock}>
						<Button type="text" ghost className={styles.loginBtn} onClick={login}>
							Войти
						</Button>
					</div>
				)}
			</div>
		</Header>
	);
};

export default HeaderMenu;
