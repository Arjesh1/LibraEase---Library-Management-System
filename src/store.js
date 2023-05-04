import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./pages/signup-signin/userSlice";
import bookReducer from "./pages/books/BookSlice";

export default configureStore ({
    reducer: {
        user: userReducer,
        books: bookReducer,
    },
})