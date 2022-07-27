import React, { Fragment } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Box, Grid, GridItem, Text, Button, Icon, Tooltip } from '@chakra-ui/react'
import { BsArchive, BsArrowLeftSquare } from 'react-icons/bs'

const Header = props => {
  const { pathname } = useLocation()
  return (
    <Fragment>
      <Box borderRadius="md" p="5" marginTop={10} border="1px" bg="gray.800" marginBottom={30}>
        <Grid gap={2} templateColumns="repeat(2, 1fr)">
          <GridItem w="100%">
            <Text fontSize="24" color={'white'} fontWeight={800}>
              <Link to="/">iTodo</Link>
            </Text>
          </GridItem>
          <GridItem w="100%" colEnd={6}>
            <Button colorScheme={'cyan'} onClick={props.onOpen}>
              Add To Do{' '}
            </Button>
          </GridItem>
        </Grid>
      </Box>
      <Box marginBottom="20px">
        {pathname === '/archive' ? (
          <Text fontSize="24" verticalAlign="middle" textTransform={'uppercase'} fontWeight="black" color="gray.800" display="inline-block">
            ToDo List Archives
          </Text>
        ) : (
          <Text fontSize="24" verticalAlign="middle" textTransform={'uppercase'} fontWeight="black" color="gray.800" display="inline-block">
            To Do List
          </Text>
        )}

        {pathname === '/archive' ? (
          <Tooltip label="Go Back">
            <Box display="inline-block">
              <Link to="/">
                <Icon as={BsArrowLeftSquare} marginRight="15px" boxSize={'20px'} display="inline-block" ml="5" verticalAlign="middle" cursor="pointer" />
              </Link>
            </Box>
          </Tooltip>
        ) : (
          <Tooltip label="View Archives">
            <Box display="inline-block">
              <Link to="/archive">
                <Icon as={BsArchive} marginRight="15px" boxSize={'20px'} display="inline-block" ml="5" verticalAlign="middle" cursor="pointer" />
              </Link>
            </Box>
          </Tooltip>
        )}
      </Box>
    </Fragment>
  )
}

export default Header
