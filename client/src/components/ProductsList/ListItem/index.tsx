import React, {FC, useState} from 'react';
import {useNavigate} from 'react-router-dom';

import {Card} from 'antd';
import {ROUTES} from 'const';

import AppText from '../../appText';

import styles from './style.module.scss';

type PropsType = {
	title: string;
	price: number;
	id: number;
};

const Sidebar: FC<PropsType> = ({id, title, price}) => {
	const navigate = useNavigate();
	return (
		<Card
			onClick={() => navigate(`${ROUTES.PUBLIC.PRODUCTS_ROUTE}/${id}`)}
			className={styles.card}
			hoverable
			bordered
			cover={
				<img
					alt="example"
					src="https://www.swissgear.ru/upload/resize_cache/imgPodarki/SA6677202408/460x460/SA6677202408.jpg"
				/>
			}>
			<div className={styles.cardDescription}>
				<AppText className={styles.title}>{title}</AppText>
				<AppText className={styles.price}>{price} Br</AppText>
			</div>
		</Card>
	);
};

export default Sidebar;
