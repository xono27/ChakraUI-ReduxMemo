import { Box, useControllableState, VStack , Spacer } from "@chakra-ui/react";
import React from "react";
import { FormControl , FormLabel , Input , Button } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { addNewTodo } from "./redux/todoSlice";
import useInput from "./customHook/useInput";
import InputWithLabel from "./InputWithLabel";

const AddTodoForm:React.FC = () => {
    const dispatch = useDispatch();
    const taskName = useInput();
    const detailName = useInput();

    const canSave = [taskName.value,detailName.value].every(Boolean);

    const clickHandler = () => {
        dispatch(addNewTodo({taskName,detail:detailName}));
        taskName.initializer();
        detailName.initializer();
    }

    return (
        <FormControl>
            <VStack spacing={"2rem"}>
            <Box w="full">
              <InputWithLabel value={taskName.value} labelName="タスク名" changeHandler={taskName.changeHandler} inputId={"taskName"}/>
            </Box> 
            <Box w="full">
              <InputWithLabel value={detailName.value} labelName="詳細" changeHandler={detailName.changeHandler} inputId="detail"/>
            </Box> 
            <Button disabled={!canSave} fontSize="4xl" py="2.5rem" px="2rem" bg="purple.300" _hover={{opacity:"70%"}} textColor={"white"} onClick={() => clickHandler()} >追加</Button>
            </VStack>
        </FormControl>
    )
}

export default AddTodoForm;
