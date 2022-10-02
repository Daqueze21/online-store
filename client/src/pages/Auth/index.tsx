import React, {useState} from 'react';
import {NavLink, useLocation, useNavigate} from 'react-router-dom';

import {Button, Checkbox, Form, Input} from 'antd';
import {AppText} from 'components';
import {ROUTES} from 'const';
import {useAppSelector} from 'hooks/redux';
import {RootState} from 'store/store';

import styles from './style.module.scss';

const Auth = () => {
	const user = useAppSelector((state: RootState) => state.userReducer);
	const location = useLocation();
	const isLogin = location.pathname === ROUTES.PUBLIC.LOGIN_ROUTE;
	const navigate = useNavigate();
	console.log(user, location);

	const onFinish = (values: any) => {
		// try {
		// 	let data;
		// 	if (isLogin) {
		// 		data = await login(email, password);
		// 	} else {
		// 		data = await registration(email, password);
		// 	}
		// 	user.setUser(user);
		// 	user.setIsAuth(true);
		// 	history.push(SHOP_ROUTE);
		// } catch (e) {
		// 	alert(e.response.data.message);
		// }
		console.log('Success:', values);
	};

	const onFinishFailed = (errorInfo: any) => {
		console.log('Failed:', errorInfo);
	};

	return (
		<div className={styles.authWrapper}>
			<AppText className={styles.title}>{isLogin ? 'Авторизация' : 'Регистрация'}</AppText>
			<Form
				labelCol={{span: 8}}
				wrapperCol={{span: 16}}
				className={styles.form}
				name="basic"
				initialValues={{remember: true}}
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}
				autoComplete="off">
				<Form.Item
					className={styles.formRow}
					label="Username"
					name="username"
					rules={[{required: true, message: 'Please input your username!'}]}>
					<Input className={styles.input} />
				</Form.Item>

				<Form.Item
					className={styles.formRow}
					label="Password"
					name="password"
					rules={[{required: true, message: 'Please input your password!'}]}>
					<Input.Password className={styles.input} />
				</Form.Item>

				{isLogin ? (
					<div className={styles.accountLink}>
						Нет аккаунта?{' '}
						<NavLink to={ROUTES.PUBLIC.REGISTRATION_ROUTE}>Зарегистрируйся!</NavLink>
					</div>
				) : (
					<div className={styles.accountLink}>
						Есть аккаунт?{' '}
						<NavLink to={ROUTES.PUBLIC.LOGIN_ROUTE}>Авторезируйся!</NavLink>
					</div>
				)}

				<Form.Item>
					<Button className={styles.formBtn} type="primary" htmlType="submit">
						Отправить
					</Button>
				</Form.Item>
			</Form>
		</div>
	);
};

export default Auth;
