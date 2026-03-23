import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "../themes/themeSlicer"

const store=configureStore({
    reducer:{
        theme:themeSlice,
    },
})
export default store;