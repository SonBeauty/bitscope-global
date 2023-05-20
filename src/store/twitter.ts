import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface TwitterState {
  twitter: any | null;
}
const initialState: TwitterState = {
  twitter: null,
};
export const twitterSlice = createSlice({
  name: "twitter",
  initialState,
  reducers: {
    setTwitter: (state, action: PayloadAction<TwitterState>) => {
      state.twitter = action.payload;
    },
  },
});
export const { setTwitter } = twitterSlice.actions;
export default twitterSlice.reducer;
