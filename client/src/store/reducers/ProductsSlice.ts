import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {IProducts, IProductsBrand, IProductsType} from '../../models/IProducts';

export type ProductsStateType = {
	types: IProductsType[];
	brand: IProductsBrand[];
	products: IProducts[];
	selectedType: IProductsType | null;
	selectedBrand: IProductsBrand | null;
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
		{
			id: 4,
			name: 'Mironpan2',
		},
		{
			id: 5,
			name: 'Mironpan3',
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
	selectedType: null,
	selectedBrand: null,
	isLoading: false,
	error: 'no error',
};

// reducer
export const productsSlice = createSlice({
	name: 'Products',
	initialState,
	reducers: {
		setSelectedType(state, action: PayloadAction<IProductsType>) {
			state.selectedType = action.payload;
		},
		setSelectedBrand(state, action: PayloadAction<IProductsBrand>) {
			state.selectedBrand = action.payload;
		},
	},
});

export default productsSlice.reducer;
