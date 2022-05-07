import React , { useState } from "react";
import { TaskStatus } from "../redux/todoSlice";

const useTaskStatusSwitch = (defaultStatus:TaskStatus) => {
    const [taskStatus,setTaskStatus] = useState<TaskStatus>(defaultStatus);

    const toggleStatus = () => {
        if(taskStatus === "done"){
            setTaskStatus("yet");
        }else{
            setTaskStatus("done");
        }
    }

    return {
        taskStatus,
        toggleStatus
    }
}

export default useTaskStatusSwitch;