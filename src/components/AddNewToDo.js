import React from 'react'
import { Modal, ModalOverlay, ModalHeader, ModalContent, ModalBody, ModalCloseButton, Text } from '@chakra-ui/react'
import AddNewToDoForm from './AddNewToDoForm'

const AddNewToDo = props => {
  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
      <ModalOverlay />

      <ModalContent>
        <ModalHeader>
          <Text fontSize="24px">Add New To Do</Text>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <AddNewToDoForm onClose={props.onClose} />
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default AddNewToDo
