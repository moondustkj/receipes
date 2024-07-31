import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    receipesList: []
};

export const receipeSlice = createSlice({
    name: 'receipe',
    initialState,
    reducers: {
        show: (state) =>  {
            console.log('**********');
            state.receipesList = []
        }
    }
});

export const { show } = receipeSlice.actions;

export default receipeSlice.reducer;