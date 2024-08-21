import { createSlice } from "@reduxjs/toolkit";
import { recipesList as list } from "../helper/data";

const initialState = {
    recipesList: list
};

export const receipeSlice = createSlice({
    name: 'recipe',
    initialState,
    reducers: {
        updateList: (state, action) =>  {
            state.recipesList = action.payload;
        }
    }
});

export const { updateList } = receipeSlice.actions;

export default receipeSlice.reducer;