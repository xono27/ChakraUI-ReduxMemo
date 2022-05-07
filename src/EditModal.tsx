import { Modal , ModalHeader , ModalCloseButton ,Box, Input ,ModalFooter, ModalBody ,Text, Button, ModalOverlay, ModalContent, FormControl, VStack, Switch, FormLabel } from "@chakra-ui/react";
import React , {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import useInput from "./customHook/useInput";
import useTaskStatusSwitch from "./customHook/useTaskStatusSwitch";
import InputWithLabel from "./InputWithLabel";
import modalContentSlice, { closeModal, getModalContent } from "./redux/modalContentSlice";
import { editTodo, TaskStatus, Todo } from "./redux/todoSlice";

interface Props {
    todo:Todo
}

const EditModal:React.FC<Props> = ({todo}) => {
    //Input Value-----------------------------------
    const taskName = useInput(todo.taskName);
    const detail = useInput(todo.detail);
    const {taskStatus,toggleStatus} = useTaskStatusSwitch(todo.taskStatus);
    //----------------------------------------------

    const canSave = [taskName.value,detail.value].every(Boolean);
    const dispatch = useDispatch();

    const editHandler = () => {
        dispatch(editTodo({taskName:taskName.value,detail:detail.value,taskStatus,id:todo.id}));
        dispatch(closeModal());
    };

    //borderの色がバグる borderBottomColor="purple.300" borderBottom="2px"

    return (
        <Modal size="6xl"  motionPreset='slideInBottom' isOpen={true} onClose={() => dispatch(closeModal())}>
            <ModalOverlay/>
            <ModalContent py="3rem" px="5rem">
            <ModalHeader ><Text fontSize="5xl" >Todoを編集</Text></ModalHeader>
            <ModalCloseButton/>
            <ModalBody>
                <FormControl>
                    <VStack spacing="2rem">
                        <Box  w="full">
                            <InputWithLabel value={taskName.value} labelName="タスク名" inputId="taskName" changeHandler={taskName.changeHandler}/>
                        </Box>
                        <Box w="full">
                            <InputWithLabel value={detail.value} labelName="詳細" inputId="detail" changeHandler={detail.changeHandler}/>
                        </Box>
                        <FormControl  display="flex" justifyContent={"space-around"} alignItems="center">
                            <FormLabel fontSize="4xl" htmlFor="done" >
                                タスク完了
                            </FormLabel>
                            <Switch id="done" defaultChecked={todo.taskStatus === "done"} onChange={()=>toggleStatus()}  size="lg" colorScheme={"purple"}/>
                        </FormControl>
                    </VStack>
                </FormControl>
            </ModalBody>
            <ModalFooter>
                <Button fontSize="4xl"  px="2rem" color="white" py="2.5rem" disabled={!canSave} bg="purple.300" mr={3} onClick={() => editHandler()}>完了</Button>
            </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

export default EditModal;