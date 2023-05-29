import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  client: [],
  messages: [],
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

    setMessages: (state, action) => {
      state.messages = action.payload;
    },
  },
});

export const { setUser, setClient, setMessages } = userSlice.actions;

export default userSlice.reducer;