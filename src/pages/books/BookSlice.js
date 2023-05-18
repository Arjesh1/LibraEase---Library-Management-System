import { createSlice } from "@reduxjs/toolkit"


const initialState = {
   book: [],
   burrowHistory: [],
}

const bookSlice = createSlice({
    name: "book",
    initialState,
    reducers: {
        setBook: (state, { payload }) => {
            if (!state.book.length && !payload.length) return;
      
            state.book = payload;
          },

          setBurrowHistory: (state, { payload }) => {
            if (!state.burrowHistory.length && !payload.length) return;
      
            state.burrowHistory = payload;
          },
    }
})

export const {setBook, setBurrowHistory} = bookSlice.actions

export default bookSlice.reducer
