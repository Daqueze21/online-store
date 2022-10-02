import {createSlice} from '@reduxjs/toolkit';

import {IProducts, IProductsBrands, IProductsTypes} from '../../models/IProducts';

export type ProductsStateType = {
	types: IProductsTypes[];
	brand: IProductsBrands[];
	products: IProducts[];
	isLoading: boolean;
	error: string;
};

const initialState: ProductsStateType = {
	types: [
		{
			id: 1,
			name: 'Портфели',
		},
		{
			id: 2,
			name: 'Чемоданы',
		},
		{
			id: 3,
			name: 'Сумки',
		},
	],
	brand: [
		{
			id: 1,
			name: 'Swissgear',
		},
		{
			id: 2,
			name: 'Airtex',
		},
		{
			id: 3,
			name: 'Mironpan',
		},
	],
	products: [
		{
			id: 1,
			name: 'Городской рюкзак SWISSGEAR SA6677202408',
			price: '100',
			img: 'https://www.swissgear.ru/upload/imgPodarki/SA6677202408/SA6677202408.jpg',
		},
		{
			id: 2,
			name: 'Городской рюкзак SWISSGEAR SA6677202408',
			price: '100',
			img: 'https://www.swissgear.ru/upload/imgPodarki/SA6677202408/SA6677202408.jpg',
		},
		{
			id: 3,
			name: 'Городской рюкзак SWISSGEAR SA6677202408',
			price: '100',
			img: 'https://www.swissgear.ru/upload/imgPodarki/SA6677202408/SA6677202408.jpg',
		},
		{
			id: 4,
			name: 'Городской рюкзак SWISSGEAR SA6677202408',
			price: '100',
			img: 'https://www.swissgear.ru/upload/imgPodarki/SA6677202408/SA6677202408.jpg',
		},
	],
	isLoading: false,
	error: 'no error',
};

// reducer
const productsSlice = createSlice({
	name: 'Products',
	initialState,
	reducers: {},
});

export default productsSlice.reducer;
