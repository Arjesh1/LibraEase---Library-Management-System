import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./pages/signup-signin/userSlice";
import bookReducer from "./pages/books/BookSlice";
import systemReducer from "./system/systemSlice";

export default configureStore ({
    reducer: {
        user: userReducer,
        books: bookReducer,
        system: systemReducer,
    },
})