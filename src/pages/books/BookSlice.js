import { createSlice } from "@reduxjs/toolkit"


const initialState = {
   book: [],
   burrowHistory: [],
   reviews: [],
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

          setReviews: (state, { payload }) => {
            if (!state.Reviews.length && !payload.length) return;
      
            state.reviews = payload;
          },
    }
})

export const {setBook, setBurrowHistory, setReviews} = bookSlice.actions

export default bookSlice.reducer
