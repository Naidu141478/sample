import { createSlice } from "@reduxjs/toolkit";


// initial global state of the app
const initialState = {
    text: ""
}

// create a slice object
const textSlice = createSlice({
    name: "text",
    initialState,

    // creating reducers to manipulate state
    reducers: {
        setText: (state, action) => {
            state.text = action.payload;
        },
        clearText: (state, action) => {
            state.text = "";
        }
    },
});


// exporting actions and reducers
export const { setText, clearText } = textSlice.actions;
export default textSlice.reducer;