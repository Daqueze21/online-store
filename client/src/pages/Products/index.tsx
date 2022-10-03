import React from 'react';

import {Button, Divider, Image} from 'antd';
import {AppText} from 'components';
import {useAppSelector} from 'hooks/redux';
import {RootState} from 'store/store';

import styles from './style.module.scss';

const Products = () => {
	const product = {
		id: 1,
		name: 'Городской рюкзак SWISSGEAR SA6677202408',
		price: '100',
		img: 'https://www.swissgear.ru/upload/imgPodarki/SA6677202408/SA6677202408.jpg',
	};

	const description = [
		{
			id: 1,
			title: 'Описание',
			description: `Рюкзак с отделением для ноутбука 15" SWISSGEAR SA6677202408 – отличный помощник делового человека. Этот рюкзак изготовлен из прочной и надежной синтетической ткани - полиэстера 900D/М2 и искусственной кожи, которые уберегут ваши вещи от влаги.`,
		},
		{
			id: 2,
			title: 'Цвет',
			description: `Черный`,
		},
		{
			id: 3,
			title: 'Материал',
			description: `Полиэстер`,
		},
		{
			id: 4,
			title: 'Размеры изделия',
			description: `34 x 23 x 48 см`,
		},
	];

	return (
		<div className={styles.productsPage}>
			<div className="container">
				<div className={styles.blockWrap}>
					<AppText className={styles.mobileTitle}>{product.name}</AppText>
					<Image preview={false} className={styles.image} width={300} src={product.img} />
					<div className={styles.descriptionWrapper}>
						<AppText className={styles.desktopTitle}>{product.name}</AppText>
						<Divider className={styles.devider} />
						<div className={styles.priceBlock}>
							<AppText className={styles.price}>{product.price} BYN</AppText>
							<Button className={styles.button} type="primary">
								Добавить в корзину
							</Button>
						</div>

						<Divider />
						<div className={styles.descriptionBlock}>
							<AppText className={styles.blockTitle}>ХАРАКТЕРИСТИКИ</AppText>
							<AppText className={styles.blockText}>
								{description[0].description}
							</AppText>
							<div className={styles.parametersList}>
								{description.slice(1).map(item => (
									<div className={styles.parameterItem}>
										<AppText className={styles.parameterTitle}>
											{item.title}:
										</AppText>
										<AppText className={styles.parameterText}>
											{item.description}
										</AppText>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Products;
