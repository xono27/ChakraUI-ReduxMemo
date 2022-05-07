import React from "react";
import {FormLabel , Input} from "@chakra-ui/react"

interface Props {
    changeHandler:(v:string) => void;
    value:string;
    inputId:string;
    labelName:string
}

const InputWithLabel:React.FC<Props> = ({changeHandler,value , inputId , labelName}) => {
    return (
        <>
        <FormLabel opacity="70%" fontSize="4xl" htmlFor={inputId}>{labelName}</FormLabel>
        <Input value={value} onChange={(e) => changeHandler(e.target.value)} id={inputId} type="text"  py="2rem" fontSize="4xl"  w="full" />
        </>
    )
}

export default InputWithLabel;
// h="auto" py="0.5rem"