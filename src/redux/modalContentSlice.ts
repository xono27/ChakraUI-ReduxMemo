import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { Todo } from "./todoSlice";

export type ModalContent = Todo | Object;

let initialState:ModalContent = {}

export const modalContentSlice = createSlice({
    name:"modalContent",
    initialState,
    reducers:{
       setModalTodo(state,action:PayloadAction<Todo>){
           console.log(action.payload);
           state = action.payload;
           return state;
       },
       closeModal(state){
           return {};
       }
    }
})

export const {setModalTodo , closeModal} = modalContentSlice.actions;

export const getModalContent = (state:RootState) => state.modalContent

export default modalContentSlice.reducer;