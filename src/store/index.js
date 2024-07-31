import { configureStore } from "@reduxjs/toolkit";
import recipeReducer from "../slice/receipe";

export const store = configureStore({
    reducer: {
        'receipe': recipeReducer
    }
})