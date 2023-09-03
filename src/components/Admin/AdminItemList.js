import AdminItem from './AdminItem'
import DeleteItem from './DeleteItem'
import UpdateItem from './UpdateItem'
import AdminItemTable from './AdminItemTable'

import { useSelector } from 'react-redux'
import { Box, Flex, Heading, VStack, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

function AdminItemList() {
  const { items } = useSelector(state => state.admin)
  
  return (
    <VStack w="100%">

      { items ?
        <VStack 
        w="100%"
        gap={10}
        >

          <Flex>
            <Heading>There are
              <span style={{color: '#00ADB5'}}> {items.length} </span> 
            Items</Heading>
          </Flex>

          <Tabs isFitted variant='enclosed' w="100%" colorScheme="teal">
            <TabList mb="2em">
              <Tab>Table</Tab>
              <Tab>List</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <AdminItemTable items={items}/>
              </TabPanel>

              <TabPanel>
              {items.map(item => (
                
                <Box key={item._id}
                  w="100%"
                  border="2px solid"
                  borderColor="blue.100"
                  borderRadius="2xl"
                  p="2em"
                >
                  <Flex 
                  w="100%"
                  justify="space-between"
                  >
                    <UpdateItem item={item} />
                    <DeleteItem itemId={item._id} />
                  </Flex>
                  <AdminItem item={item}/>

                </Box>
                ))}

              </TabPanel>
            </TabPanels>
          </Tabs>

          

        </VStack>

      : ( <Heading align="center" color="red">There are no items</Heading> )

    }
    </VStack>
  )
}

export default AdminItemList