import React, {useEffect, useState} from 'react';

import {BrandBar, ProductList, TypeBar} from 'components';
import {useAppSelector} from 'hooks/redux';
import {RootState} from 'store/store';

import styles from './style.module.scss';

const Products = () => {
	const products = useAppSelector((state: RootState) => state.productsReducer);

	console.log('products:', products);
	return (
		<div className={styles.productsPage}>
			<div className="container">
				<div className={styles.blockWrap}>
					<TypeBar className={styles.typeBar} />
					<div className={styles.productsWrapper}>
						<BrandBar />
						<ProductList />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Products;
