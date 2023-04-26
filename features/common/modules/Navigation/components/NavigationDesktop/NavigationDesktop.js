import { Box } from '@chakra-ui/react'
import React from 'react'

const NavigationDesktop = () => {
  return (
    // * the box from chakra is as div and for the display attribute where base means for the mobile screeens and md means for medium screens
    <>
      <Box color="blue.400" backgroundColor="pink.300" paddingY="2rem" display={{base: "none", md: "block"}}>
        <Box margin="0 auto" maxWidth="1280px">
            Test 🍔 
        </Box>
        
      </Box>
    </>
  )
}

export default NavigationDesktop