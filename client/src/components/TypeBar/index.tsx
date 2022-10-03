import React, {FC, useEffect} from 'react';

import {Menu} from 'antd';
import {useAppDispatch, useAppSelector} from 'hooks/redux';
import {productsSlice} from 'store/reducers/ProductsSlice';
import {RootState} from 'store/store';

import 'antd/dist/antd.min.css';
import styles from './style.module.scss';

type PropsType = {
	className?: string;
};

const TypeBar: FC<PropsType> = ({className}) => {
	const products = useAppSelector((state: RootState) => state.productsReducer);
	const dispatch = useAppDispatch();
	const {setSelectedType} = productsSlice.actions;

	useEffect(() => {
		if (!products.selectedType) dispatch(setSelectedType(products.types[0]));
	}, []);

	console.log('products:', products);

	return (
		<Menu
			className={className}
			defaultOpenKeys={['1']}
			defaultSelectedKeys={['1']}
			style={{width: 250}}
			mode="inline">
			{products.types.map(type => (
				<Menu.Item key={type.id} onClick={() => dispatch(setSelectedType(type))}>
					{type.name}
				</Menu.Item>
			))}
			{/* <Menu.Item key="2">Option 2</Menu.Item>
			<Menu.Item key="3">Option 1</Menu.Item>
			<Menu.Item key="4">Option 2</Menu.Item> */}
		</Menu>
	);
};

export default TypeBar;
