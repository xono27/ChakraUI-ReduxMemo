import {createSlice , PayloadAction , nanoid} from "@reduxjs/toolkit";
import {RootState} from "./store";

export interface Todo {
    id:string
    taskName:string;
    detail:string;
    taskStatus:TaskStatus
}

export type TaskStatus = "done" | "yet";

const initialState:Todo[] = [
    {id:"oaidfjo",taskName:"掃除",detail:"部屋の掃除を午前中にする。",taskStatus:"yet"},
    {id:"aodfmo",taskName:"服を買いに行く",detail:"夏が来る前にかっこいい夏服を買う。",taskStatus:"yet"}

]

export const todosSlice = createSlice({
    name:"todos",
    initialState,
    reducers:{
        addNewTodo(state,action){
            const newTodo = {
                id:nanoid(),
                ...action.payload,
                // publishData:new Date()
            }
            state.unshift(newTodo);
        },
        editTodo(state,action:PayloadAction<Todo>){
            const {id , detail , taskStatus , taskName} = action.payload;
            const todo = state.find((todo) => todo.id === id);
            if(todo){
                todo.detail = detail;
                todo.taskName = taskName;
                todo.taskStatus = taskStatus;
            }
        }

    }
})

export const {addNewTodo , editTodo} = todosSlice.actions;

export const getAllTodos = (state:RootState) => state.todos;

export default todosSlice.reducer;