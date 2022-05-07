import React from "react";
import { chakra } from "@chakra-ui/react";
import Header from "./Header";
import EditModal from "./EditModal";
import { useSelector } from "react-redux";
import { getModalContent } from "./redux/modalContentSlice";
import { Todo } from "./redux/todoSlice";

const Layout:React.FC = ({children}) => {
    const modalContent = useSelector(getModalContent);

    return(
        <>
        <Header/>
        <chakra.main w="screen" pt="10rem">
        {children}
        </chakra.main>
         {(Object.keys(modalContent).length > 0) && <EditModal todo={modalContent as Todo}/>}
        </>
    )
}

export default Layout;