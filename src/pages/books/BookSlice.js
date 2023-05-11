import { createSlice } from "@reduxjs/toolkit"


const initialState = {
   book: [],
}

const bookSlice = createSlice({
    name: "book",
    initialState,
    reducers: {
        setBook: (state, { payload }) => {
            if (!state.book.length && !payload.length) return;
      
            state.book = payload;
          },
    }
})

export const {setBook} = bookSlice.actions

export default bookSlice.reducer
