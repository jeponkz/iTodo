import React, { useContext } from 'react'
import { Box, FormControl, FormLabel, Input, Button, FormErrorMessage, useToast } from '@chakra-ui/react'
import DispatchContext from '../store/DispatchContext'
import { useForm } from 'react-hook-form'
import {ErrorMessage} from '@hookform/error-message'
import uuid from 'react-uuid'

const AddNewToDoForm = props => {
  const appDispatch = useContext(DispatchContext)
  const toast = useToast()
  const uniqueId = uuid()
  const id = uniqueId.slice(0, 8)
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid }
  } = useForm()

  const onSubmitHandler = data => {
    const value = {
      id,
      title: data.title,
      description: data.description,
      date: data.date,
      isDone: false
    }

    appDispatch({ type: 'add', value: value })
    // let todoArray = appState.todo.concat(value)
    // // console.log(appState)
    // localStorage.setItem('todo', JSON.stringify(todoArray))
    props.onClose()

    toast({
      title: 'New ToDo created.',
      description: 'You have created a new to do list',
      status: 'success',
      duration: 3000,
      isClosable: true,
      position: 'top'
    })
  }
  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <FormControl isInvalid={errors.title}>
        <FormLabel>Title</FormLabel>
        <Input
          id="title"
          ref={props.initialRef}
          type="text"
          placeholder="eg. buy ingredients"
          {...register('title', {
            required: 'Todo Title is required',
            minLength: {
              value: 4,
              message: 'Minimum character is 4'
            },
            message: 'Min'
          })}
        />
        <FormErrorMessage>{errors.title && errors.title.message}</FormErrorMessage>
      </FormControl>

      <FormControl mt={4} isInvalid={errors.description}>
        <FormLabel>Description</FormLabel>
        <Input
          placeholder="eg. cook for dinner"
          id=""
          {...register('description', {
            required: 'Please enter description',
            minLength: {
              value: 4,
              message: 'Minimum character is 4'
            },
          })}
        />
        <FormErrorMessage>{errors.description && errors.description.message}</FormErrorMessage>
      </FormControl>

      <FormControl mt={4}>
        <FormLabel>Date</FormLabel>
        <Input type={'date'} id="date" {...register('date', { required: false })} />
      </FormControl>
      <Box pt="30px" textAlign={'right'}>
        <Button type="submit"  isLoading={isSubmitting} colorScheme="blue" mr={3}>
          Add ToDo
        </Button>
        <Button onClick={props.onClose}>Cancel</Button>
      </Box>
    </form>
  )
}

export default AddNewToDoForm
