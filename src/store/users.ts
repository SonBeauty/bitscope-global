import { UserProps } from "@/interface/page/auth";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface UserState {
  user: UserProps | null;
  isLogin: boolean | null;
}
const initialState: UserState = {
  user: null,
  isLogin: false,
};
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserProps>) => {
      state.user = action.payload;
      state.isLogin = true;
    },
    logout: (state) => {
      state.user = null;
      state.isLogin = false;
    },
  },
});
export const { setUser, logout } = userSlice.actions;
export default userSlice.reducer;
