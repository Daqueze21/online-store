import React, {useEffect} from 'react';

import {Card, Menu} from 'antd';
import {useAppDispatch, useAppSelector} from 'hooks/redux';
import {productsSlice} from 'store/reducers/ProductsSlice';
import {RootState} from 'store/store';

import 'antd/dist/antd.min.css';
import styles from './style.module.scss';

const BrandBar = () => {
	const products = useAppSelector((state: RootState) => state.productsReducer);
	const dispatch = useAppDispatch();
	const {setSelectedBrand} = productsSlice.actions;

	useEffect(() => {
		if (!products.selectedBrand) {
			dispatch(setSelectedBrand(products.brand[0]));
		}
	}, []);

	return (
		<div className={styles.brandBar}>
			{products.brand.map(brand => (
				<Card
					hoverable
					className={`${styles.brandBarCard} ${
						products.selectedBrand?.id === brand.id && styles.active
					}`}
					key={brand.id}
					onClick={() => dispatch(setSelectedBrand(brand))}>
					{brand.name}
				</Card>
			))}
		</div>
		// <Menu
		// 	className={styles.brandBar}
		// 	defaultOpenKeys={['1']}
		// 	defaultSelectedKeys={['1']}
		// 	style={{height: 50}}
		// 	mode="horizontal">
		// 	{products.brand.map(brand => (
		// 		<Menu.Item key={brand.id} onClick={() => dispatch(setSelectedBrand(brand))}>
		// 			{brand.name}
		// 		</Menu.Item>
		// 	))}
		// </Menu>
	);
};

export default BrandBar;
