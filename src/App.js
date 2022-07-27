import './App.css'
import React from 'react'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import { ChakraProvider, Container, useDisclosure } from '@chakra-ui/react'
import ToDoLists from './components/ToDoLists'
import AddNewToDo from './components/AddNewToDo'
import DispatchContext from './store/DispatchContext'
import StateContext from './store/StateContext'
import { useImmerReducer } from 'use-immer'
import Header from './components/Header'
import ToDoArchives from './components/ToDoArchives'

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)

  const initialState = {
    todo: JSON.parse(localStorage.getItem('todo')) || []
  }

  const ourReducer = (draft, action) => {
    let itemIndex
    switch (action.type) {
      case 'add':
        draft.todo.push(action.value)

        // let todoArray = draft.todo.concat(action.value)
        // console.log(appState)
        // console.log(draft.todo)
        localStorage.setItem('todo', JSON.stringify(draft.todo))
        return
      case 'done':
        // draft.todo = action.value
        // draft.todo
        itemIndex = draft.todo.findIndex(todo => todo.id === action.value)
        draft.todo[itemIndex].isDone = true
        localStorage.setItem('todo', JSON.stringify(draft.todo))
        return
      case 'delete':
        itemIndex = draft.todo.findIndex(todo => todo.id === action.value)
        draft.todo.splice(itemIndex,1)
        // draft.todo[itemIndex].isDone = true
        localStorage.setItem('todo', JSON.stringify(draft.todo))
      default:
        return
    }
  }

  const [state, dispatch] = useImmerReducer(ourReducer, initialState)

  // useEffect(() => {
  //   console.log('wa')
  // }, [state.todo])

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        <ChakraProvider>
          <BrowserRouter>
            <Container maxW="800px">
              <Header onOpen={onOpen} />
              <Routes>
                <Route path="/" element={<ToDoLists />}/>
                <Route path="/archive" element={<ToDoArchives />} />
              </Routes>
              <AddNewToDo initialRef={initialRef} finalRef={finalRef} isOpen={isOpen} onClose={onClose} />
            </Container>
          </BrowserRouter>
        </ChakraProvider>
      </DispatchContext.Provider>
    </StateContext.Provider>
  )
}

export default App
