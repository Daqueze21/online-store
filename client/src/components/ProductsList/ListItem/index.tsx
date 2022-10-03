import React, {FC, useState} from 'react';

import {Card} from 'antd';

import AppText from '../../appText';

import styles from './style.module.scss';

type PropsType = {
	title: string;
	price: number;
};

const Sidebar: FC<PropsType> = ({title, price}) => {
	return (
		<Card
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
