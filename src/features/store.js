import { configureStore } from "@reduxjs/toolkit";
import shoppingReducer from "./Shops/shoppingSlice";

export const store = configureStore({
    reducer:  {
        product: shoppingReducer
    } 
})