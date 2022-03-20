import { createSlice } from "@reduxjs/toolkit";

// export type SearchStateType = {
//   status: string;
// };

export type UserStateType = {
  status: string;
  isLoading: boolean;
  error: string;
};

const initialState: UserStateType = {
  status: "Pending",
  isLoading: false,
  error: "no error",
};

// reducer
const searchSlice = createSlice({
  name: "Search",
  initialState,
  reducers: {},
});

export default searchSlice.reducer;
