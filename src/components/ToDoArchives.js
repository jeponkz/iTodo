import React, { useContext } from 'react'
import ToDoItem from './ToDoItem'
import StateContext from '../store/StateContext'
import { Alert, Icon } from '@chakra-ui/react'
import { FaSadTear } from 'react-icons/fa'

const ToDoLists = props => {
  const appState = useContext(StateContext)
  const toDoLists = appState.todo.filter(todo => todo.isDone)

  return (
    <>
      {toDoLists.length ? (
        toDoLists.map((todo, index) => {
          // return only todos that are not done yet
          return <ToDoItem key={index} title={todo.title} date={todo.date} id={todo.id} description={todo.description} isDone={true} />
        })
      ) : (
        <Alert status="warning">
          <Icon as={FaSadTear} w={8} h={8} color="orange" marginRight="5px" />
          There's no ToDo List archives.
        </Alert>
      )}
    </>
  )
}

export default ToDoLists
