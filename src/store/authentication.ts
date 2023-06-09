import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface AuthenticationState {
  isFakeData: boolean;
}
const initialState: AuthenticationState = {
  isFakeData: true,
};
export const authenticationSlice = createSlice({
  name: "isFakeData",
  initialState,
  reducers: {
    setIsFakeData: (state, action: PayloadAction<boolean>) => {
      state.isFakeData = action.payload;
    },
  },
});
export const { setIsFakeData } = authenticationSlice.actions;
export default authenticationSlice.reducer;
