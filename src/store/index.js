import { configureStore } from "@reduxjs/toolkit";
import textReducer from "../features/textSlice";
import counterReducer from '../features/counter/counterSlice';


// create a store for the redux application
const store = configureStore({
    reducer: {
        text: textReducer,
        counter: counterReducer,
        
    }
});

export default store;