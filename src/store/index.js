import { configureStore } from "@reduxjs/toolkit";
import recipeReducer from "../slice/recipe";

export const store = configureStore({
    reducer: {
        'recipe': recipeReducer
    }
})