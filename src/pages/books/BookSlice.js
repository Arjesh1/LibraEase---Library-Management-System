import { createSlice } from "@reduxjs/toolkit"


const initialState = {
   book: [],
}

const bookSlice = createSlice({
    name: "book",
    initialState,
    reducers: {
        setBook:(state, action)=>{
            state.book = action.payload
        }
    }
})

export const {setbook} = bookSlice.actions

export default bookSlice.reducer
