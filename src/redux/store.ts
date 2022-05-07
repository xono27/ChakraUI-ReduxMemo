import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./todoSlice";
import modalContentReducer from "./modalContentSlice";

export const store = configureStore({
    reducer:{
        todos:todosReducer,
        modalContent:modalContentReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;