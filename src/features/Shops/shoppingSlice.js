import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    products: []
}

const ShoppingSlice = createSlice({
    name:"product",
    initialState,
    reducers: {
        movie:(state, action) => {
            state.products = action.payload;
        }
    }
})

export const { movie } = ShoppingSlice.actions

export const getAllProduct = state => state.product.products;

export default ShoppingSlice.reducer;