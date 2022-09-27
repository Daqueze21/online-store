import {createSlice} from '@reduxjs/toolkit';

import {IUser} from '../../models/IUser';

// export type SearchStateType = {
//   status: string;
// };

export type UserStateType = {
	user: IUser;
	isLoading: boolean;
	error: string;
};

const initialState: UserStateType = {
	user: {
		id: 123,
		login: 'userlogin',
		password: 'userpassword',
		status: 'user',
		name: 'alex',
		address: 'minsk',
	},
	isLoading: false,
	error: 'no error',
};

// reducer
const userSlice = createSlice({
	name: 'User',
	initialState,
	reducers: {},
});

export default userSlice.reducer;
