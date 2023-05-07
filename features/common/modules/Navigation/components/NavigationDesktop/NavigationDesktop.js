import { Box, Button, Flex, Text } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import {HiHomeModern} from "react-icons/hi2"
import { navigationLinks } from '../../navigationConsts'

const NavigationDesktop = () => {
  return (
    // * the box from chakra is as div and for the display attribute where base means for the mobile screeens and md means for medium screens
    <>
    {/* The box for whole Nav Component */}
      <Box color="blue.500" backgroundColor="white" padding="2rem" display={{base: "none", md: "block"}}>
        {/* Another box for nav inside the parent*/}
        <Box margin="0 auto" maxWidth="1280px" >
            <Flex justifyContent="space-between" alignItems="center">
              {/* The box for left side of the flex contaienr */}
              <Link href="/">
                <Box display="flex" gap="2" alignItems="center">
                  <HiHomeModern size={30}/>
                  <Text fontSize="2xl" fontWeight="black">EstateExplorer</Text>
                </Box>
              </Link>
                <Box display="flex" direction="row" gap={{md: "8", lg: "12"}} alignItems="center">
                  {navigationLinks.map((link, index)=>{
                    return(
                      <Link href={link.link} key={index}>
                        <Flex alignItems="center" gap="0.5rem">
                          <Text fontSize="large" fontWeight="medium" display="flex" justifyContent="center" alignItems="center">
                            {link.icon}
                            {link.title}
                          </Text>
                        </Flex>
                      </Link>
                    )
                  })}
                  <Button padding="1.5rem" colorScheme='twitter' fontSize="0.8rem" fontWeight="medium">CREATE LISTING</Button>
              </Box>
            </Flex>
        </Box>
      </Box>
    </>
  )
}

export default NavigationDesktop