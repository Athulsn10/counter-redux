import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";

export const store = configureStore({
    reducer:{
        // key value pairs
        counter:counterSlice
    }
})