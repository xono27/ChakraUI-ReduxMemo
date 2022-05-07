import { Box , Spacer, Text , Button, Flex, ChakraProvider , chakra} from "@chakra-ui/react";
import React from "react";
import { useDispatch } from "react-redux";
import { setModalTodo } from "./redux/modalContentSlice";
import type{Todo as TodoType} from "./redux/todoSlice";
import TodoStatus from "./TodoStatus";

interface Props {
    todo:TodoType
}
const Todo:React.FC<Props> = ({todo}) => {
    const dispatch = useDispatch();

    const clickHandler = () => { 
        dispatch(setModalTodo(todo));
    }
    
    return (
        <Box boxShadow={"md"} position="relative" pt="2rem" px="2rem" borderRadius={"2rem"}  w={{base:"40rem", sm:"60rem"}} h="35rem" bg="gray.100" >
            <TodoStatus status={todo.taskStatus}/>
            <Spacer h="1rem"/>
            <Text fontSize={"5xl"} fontWeight="bold" pl="3rem">{todo.taskName}</Text>
            <Spacer h={{base:"1rem",sm:"3rem"}}/>
            <Text fontSize="4xl" pl="2rem" opacity="80%">{todo.detail}</Text>
            <Flex w="full" position="absolute" left="0" bottom="2" justifyContent={"center"}>
            <Button onClick={() => clickHandler()} bg="gray.500" rounded={"3rem"} _hover={{opacity:"70%"}} textColor="white" fontWeight={"thin"} fontSize="4xl" px="3rem" py="2rem">編集</Button>
            </Flex>
        </Box>
    )
}

export default Todo;

//横のspaceはflexとマージンでやる説