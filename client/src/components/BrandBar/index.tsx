import React, {useEffect} from 'react';

import {Menu} from 'antd';
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
		if (products.selectedBrand) dispatch(setSelectedBrand(products.brand[0]));
	}, []);

	console.log('products:', products);

	return (
		<Menu
			className={styles.brandBar}
			defaultOpenKeys={['1']}
			defaultSelectedKeys={['1']}
			style={{height: 50}}
			mode="horizontal">
			{products.brand.map(brand => (
				<Menu.Item key={brand.id} onClick={() => dispatch(setSelectedBrand(brand))}>
					{brand.name}
				</Menu.Item>
			))}
			{/* <Menu.Item key="2">Option 2</Menu.Item>
			<Menu.Item key="3">Option 1</Menu.Item>
			<Menu.Item key="4">Option 2</Menu.Item> */}
		</Menu>
	);
};

export default BrandBar;
