import React from "react";
import { chakra } from "@chakra-ui/react";


const Header:React.FC = () => {
    return(
        <chakra.header py="2rem" bg="purple.300" w="full">
            <chakra.h1 fontSize={"6xl"} textAlign="center" textColor="white">Chakra UI × Redux Todo</chakra.h1>
        </chakra.header>
    )
}

export default Header;