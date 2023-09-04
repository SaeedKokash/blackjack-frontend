import React, { useEffect } from 'react'

import Coursel from './Coursel'
import ItemCards from './ItemCards'
import Testimonial from './Testimonial'

import Stats from './Stats'
import { Divider, useColorModeValue } from '@chakra-ui/react'

function Home() {

  useEffect(() => {
    document.title = "Home | JackBlack Clothing"
  }, [])

  return (
    <div>
        <Coursel />
        <ItemCards />
        <Stats />
        <Divider borderColor={useColorModeValue("pink.100", "gray.200")}/>

        <Testimonial />
    </div>
  )
}

export default Home