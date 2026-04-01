import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "../themes/themeSlicer"
import apiSlice from "./apiReduce";

const store=configureStore({
    reducer:{
        theme:themeSlice,
        api:apiSlice,
        
    },
})
export default store;