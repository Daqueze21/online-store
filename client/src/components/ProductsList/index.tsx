import React, {useState} from 'react';

import {List} from 'antd';
import {useAppSelector} from 'hooks/redux';
import {RootState} from 'store/store';

import ListItem from './ListItem';

import styles from './style.module.scss';

const data = [
	{
		name: 'Title 1',
		price: 199.99,
	},
	{
		name: 'Title 2',
		price: 199.99,
	},
	{
		name: 'Title 3',
		price: 199.99,
	},
	{
		name: 'Title 4',
		price: 199.99,
	},
	{
		name: 'Title 5',
		price: 199.99,
	},
	{
		name: 'Title 6',
		price: 199.99,
	},
];

const ProductsList = () => {
	const products = useAppSelector((state: RootState) => state.productsReducer);

	return (
		<List
			className={styles.productsList}
			grid={{
				gutter: 16,
				xs: 1,
				sm: 2,
				md: 2,
				lg: 3,
				xl: 3,
				xxl: 3,
			}}
			dataSource={products.products}
			renderItem={item => (
				<ListItem id={item.id} title={item.name} price={Number(item.price)} />
			)}
		/>
	);
};

export default ProductsList;
