import { Heading, Stack, StackDivider, Text, Alert, AlertIcon, AlertTitle, AlertDescription, Box, } from '@chakra-ui/react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAdminItems } from '../../store/actions/adminActions'
import AddItem from './AddItem'
import AdminItemList from './AdminItemList'
import ExportOrder from './ExportOrder'


function Admin() {
  const dispatch = useDispatch()
  const { loading, error } = useSelector(state => state.admin)

  useEffect(() => {
    getAdminItems(dispatch)
    document.title = 'Admin | Divine Therapy'
  }, [dispatch])

  return (
      <Stack spacing="5" p={{base: "1em", md: "3em"}} justify="center" align="center" w="100"
      divider={<StackDivider borderColor='blue.100' />}
      >

        <Stack spacing="3" align="center">
          <Heading>Admin Page</Heading>
          <Text>Manage your items here</Text>
        </Stack>

        {/* <Flex w="100%" align="center" direction={{base: "column", md: "row"}} > */}
          <AddItem />
          <ExportOrder />
        {/* </Flex> */}

        {loading && <Text>Loading...</Text>}

        {error && 
        <Box textAlign="center">
          <Alert status='error' >
            <AlertIcon />
            <AlertTitle>{error}</AlertTitle>
            <AlertDescription>Please check again later or contact your developer.</AlertDescription>
          </Alert>
        </Box>
        }


        <AdminItemList />

      </Stack>

  )
}

export default Admin