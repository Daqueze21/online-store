import React, {useEffect, useState} from 'react';

import {Layout} from 'antd';
import {useAppSelector} from 'hooks/redux';
import {RootState} from 'store/store';

import styles from './style.module.scss';

const Products = () => {
	const products = useAppSelector((state: RootState) => state.productsReducer);

	console.log('products:', products);
	return <div className={styles.productsWrapper} />;
};

export default Products;
