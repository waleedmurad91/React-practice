import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: false
}

export const animationSlice = createSlice({
    name:'animation',
    initialState,
    reducers: {
        animate : (state)=>{ state.value = true },
        reset : (state)=>{ state.value = false }
    }
})

export const {animate,reset} = animationSlice.actions

export default animationSlice.reducer