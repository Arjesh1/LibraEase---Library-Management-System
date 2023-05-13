import { createSlice } from "@reduxjs/toolkit"


const initialState = {
   modalShow: false,
}

const systemSlice = createSlice({
    name: "system",
    initialState,
    reducers: {
        setModalShow: (state, { payload }) => {
            state.modalShow = payload;
          },
    }
})

export const {setModalShow} = systemSlice.actions

export default systemSlice.reducer
