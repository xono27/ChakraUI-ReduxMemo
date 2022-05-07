import React from "react";
import {Box} from "@chakra-ui/react";
import {TaskStatus} from "./redux/todoSlice";


interface Props {
    status:TaskStatus;
}

const TodoStatus:React.FC<Props> = ({status}) => {
    const bgStyle = status==="done" ? "green.400" : "gray.300";
    const text = status==="done" ? "完了" : "未完";
    return (
       <Box bg={bgStyle} opacity="80%" fontSize="3xl" display="inline-block" px="2rem" rounded="2rem" py="0.5rem">
           {text}
       </Box>
    )
}

export default TodoStatus;