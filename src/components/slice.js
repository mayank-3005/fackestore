import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState:{
        items:[]
    },
    reducers:{
        addToCart:(state , action)=>{
            state.items.push(action.payload)
        },
        removeToCart:(state , action)=>{
            state.items.pop(action.payload)
        },
        clearToCart:(state)=>{
            state.items =[]
        }
    },
});

export const  {addToCart ,removeToCart , clearToCart} = cartSlice.actions;
export default cartSlice.reducer;