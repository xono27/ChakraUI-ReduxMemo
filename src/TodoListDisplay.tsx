import { VStack } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import {getAllTodos} from "./redux/todoSlice";
import Todo from "./Todo";

//VStackは左右中央揃えもしてくれる
const TodoListDisplay:React.FC = () => {
    const todos = useSelector(getAllTodos);
    return (
        <VStack spacing="3rem">
            {todos.map((todo,index) => {
                return <Todo todo={todo} key={todo.id}/>
            })}
        </VStack>
    )
}

export default TodoListDisplay