import React, { useEffect } from 'react'

import Coursel from './Coursel'
import ItemCards from './ItemCards'
import Testimonial from './Testimonial'

import { useDispatch } from 'react-redux'
import { getAdminItems } from '../store/actions/adminActions'
import Stats from './Stats'
import { Divider, useColorModeValue } from '@chakra-ui/react'

function Home() {
  const dispatch = useDispatch()

  useEffect(() => {
    getAdminItems(dispatch)
    document.title = "Home | JackBlack Clothing"
  }, [dispatch])

  return (
    <div>
        <Coursel />
        <ItemCards />
        {/* <Divider borderColor="pink.100"/> */}
        <Stats />
        <Divider borderColor={useColorModeValue("pink.100", "gray.200")}/>

        <Testimonial />
    </div>
  )
}

export default Home