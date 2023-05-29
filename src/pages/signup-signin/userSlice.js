import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  client: [],
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },

    setClient: (state, action) => {
      state.client = action.payload;
    },
  },
});

export const { setUser, setClient } = userSlice.actions;

export default userSlice.reducer;