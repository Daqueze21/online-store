import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {IUser} from '../../models/IUser';

export type UserStateType = {
	user: IUser;
	isAuth: boolean;
	isLoading: boolean;
	error: string;
};

const initialState: UserStateType = {
	user: {
		id: 123,
		email: 'user@gmail.com',
		password: 'userpassword',
		status: 'user',
		name: 'alex',
		address: 'minsk',
	},
	isAuth: false,
	isLoading: false,
	error: 'no error',
};

// reducer
export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		authUser(state, action: PayloadAction<boolean>) {
			state.isAuth = action.payload;
		},
	},
});

export default userSlice.reducer;
