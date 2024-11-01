import { createSlice } from "@reduxjs/toolkit";

interface initialStateInterface {
  jwt: string | null;
}

const initialState: initialStateInterface = {
  jwt: null,
};

const tokenSlice = createSlice({
  name: "token",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.jwt = action.payload;
    },
    removeToken: (state) => {
      localStorage.removeItem("jotter-token");
      state.jwt = null;
    },
  },
});

export default tokenSlice.reducer;
export const { setToken, removeToken } = tokenSlice.actions;
