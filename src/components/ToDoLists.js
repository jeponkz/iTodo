import React, { useContext, useEffect } from 'react'
import ToDoItem from './ToDoItem'
import StateContext from '../store/StateContext'
import { Alert, Icon } from '@chakra-ui/react'
import { FaSadTear } from 'react-icons/fa'

const ToDoLists = props => {
  const appState = useContext(StateContext)
  const toDoLists = appState.todo.filter(todo => !todo.isDone)
  
  return (
    <>
      {toDoLists.length ? (
        toDoLists.map((todo, index) => {
          // return only todos that are not done yet
          return <ToDoItem key={index} title={todo.title} date={todo.date} id={todo.id} description={todo.description} isDone={todo.isDone} />
        })
      ) : (
        <Alert status="warning">
          <Icon as={FaSadTear} w={8} h={8} color="orange" marginRight="5px" />
          You have no To do list. Please add new.
        </Alert>
      )}
    </>
  )
}

export default ToDoLists
