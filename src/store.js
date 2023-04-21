import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./pages/signup-signin/userSlice";

export default configureStore ({
    reducer: {
        user: userReducer,
    },
})