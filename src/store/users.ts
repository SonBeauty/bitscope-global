import { UserProps } from "@/interface/page/auth";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  user: UserProps | null;
}

const initialState: UserState = {
  user: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserProps>) => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
