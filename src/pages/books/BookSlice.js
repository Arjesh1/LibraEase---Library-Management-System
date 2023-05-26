import { createSlice } from "@reduxjs/toolkit"


const initialState = {
   book: [],
   burrowHistory: [],
   allBurrowRecord: [],
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
            if (!state.reviews.length && !payload.length) return;
      
            state.reviews = payload;
          },

          setAllBurrowRecord: (state, { payload }) => {
            if (!state.allBurrowRecord.length && !payload.length) return;
      
            state.allBurrowRecord = payload;
          },
    }
})

export const {setBook, setBurrowHistory, setReviews, setAllBurrowRecord} = bookSlice.actions

export default bookSlice.reducer
