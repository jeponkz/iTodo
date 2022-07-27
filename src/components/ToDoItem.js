import React, { useState, useContext, useEffect } from 'react'
import { Flex, Box, Text, Icon, Spacer, Tooltip } from '@chakra-ui/react'
import { BsFillCircleFill, BsFillCheckCircleFill, BsTrash } from 'react-icons/bs'
import DispatchContext from '../store/DispatchContext'

const ToDoItem = props => {
  const appDispatch = useContext(DispatchContext)
  const [isDone, setIsDone] = useState(false)
  const [onHoverDelete, setOnHoverDelete] = useState(false)
  const isDoneHandler = todoId => {
    if (!props.isDone) {
      setIsDone(false)
      appDispatch({ type: 'done', value: todoId })
      //setTimeout(()=>setIsDone(false), 1000)
    }
  }

  return (
    <Box className="todo_item" p={3} borderRadius="md" border="1px" borderColor="transparent" shadow="xs" _hover={{ shadow: 'lg', borderColor: 'cyan.500' }} marginBottom={'15px'}>
      <Flex flexWrap={'nowrap'} alignContent="stretch" justifyContent={'flex-start'} flexDirection="row" alignItems={'start'}>
        <Box onClick={() => isDoneHandler(props.id)} onMouseOver={()=> setIsDone(true)} onMouseLeave={()=> setIsDone(false)}>
          <Icon as={isDone ? BsFillCheckCircleFill : BsFillCircleFill} color={isDone ? 'green.400' : 'gray.300'} boxSize={'20px'} className="check-icon" cursor={'pointer'} />
        </Box>
        {/* <Icon as={BsFillCheckCircleFill} color="green.500" /> */}
        <Box marginLeft='15px'>
          <Text className="todo_title" fontWeight={'bold'} lineHeight="1" marginBottom={'5px'} fontSize="20px">
            {props.title}
          </Text>
          <Text className="todo_date" fontWeight={'normal'} fontSize={'13px'} color="gray.400">
            {props.date}
          </Text>
          <Text fontSize={'16px'}>{props.description}</Text>
        </Box>
        <Spacer/>
        <Tooltip label="Delete ToDo" position="top">
          <Box onClick={()=>appDispatch({type: 'delete', value: props.id})}>
            <Icon as={BsTrash} onMouseOver={()=> setOnHoverDelete(true)} onMouseLeave={()=>setOnHoverDelete(false)} color={onHoverDelete ? 'red.500' : 'gray.500'} boxSize='20px' cursor={'pointer'}/>
          </Box>
        </Tooltip>
      </Flex>
    </Box>
  )
}

export default ToDoItem