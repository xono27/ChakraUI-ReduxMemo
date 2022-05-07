import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  // theme,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { Logo } from "./Logo"
import {chakra} from "@chakra-ui/react"
import { extendTheme } from '@chakra-ui/react'
import Layout from "./Layout";
import { theme } from "./Theme"
import AddTodoForm from "./AddTodoForm";
import {Provider} from "react-redux";
import {store} from "./redux/store";
import TodoListDisplay from "./TodoListDisplay";

const sectionStyle = {
  maxW:"800px",
  mb:"12rem",
  w:"95%",
  mx:"auto"
}


export const App = () => (
  <ChakraProvider theme={theme}>
    <Provider store={store}>
    <Layout>
      <chakra.section {...sectionStyle}>
       <AddTodoForm />
      </chakra.section>
       <chakra.section {...sectionStyle}>
         <TodoListDisplay/>
      </chakra.section>
    </Layout>
    </Provider>
  </ChakraProvider>
)


// maxW={"800px"} mb="10rem" w="95%" mx="auto"