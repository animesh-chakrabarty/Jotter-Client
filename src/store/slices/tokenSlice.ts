import { createSlice } from "@reduxjs/toolkit";

interface initialStateInterface {
  jwt: string;
}

const initialState: initialStateInterface = {
  jwt: "",
};

const tokenSlice = createSlice({
  name: "token",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.jwt = action.payload;
    },
  },
});

export default tokenSlice.reducer;
export const { setToken } = tokenSlice.actions;
