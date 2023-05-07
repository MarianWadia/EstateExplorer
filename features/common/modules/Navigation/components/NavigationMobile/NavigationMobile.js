import { Box, Button, Flex, IconButton, Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import {HiHomeModern} from "react-icons/hi2"
import { navigationLinks } from "../../navigationConsts"
import { HamburgerIcon } from '@chakra-ui/icons'

const NavigationMobile = () => {
  return (
    // * the box from chakra is as div and for the display attribute where base means for the mobile screeens and md means for medium screens
    <>
    {/* The box for whole Nav Component */}
      <Box color="blue.500" backgroundColor="white" padding="2rem" display={{base: "block", md: "none"}}>
        {/* Another box for nav inside the parent*/}
            <Flex justifyContent="space-between" alignItems="center">
              {/* The box for left side of the flex contaienr */}
              <Link href="/">
                <Box display="flex" gap="2" alignItems="center">
                  <HiHomeModern size={30}/>
                  <Text fontSize="2xl" fontWeight="black">EstateExplorer</Text>
                </Box>
              </Link>
                <Menu>
                  <MenuButton 
                    as={IconButton}
                    aria-label='Options'
                    icon={<HamburgerIcon/>}
                    variant="solid"
                  />
                  <MenuList>
                  {navigationLinks.map((link, index)=>{
                    return(
                      <Link href={link.link} key={index}>
                        <MenuItem alignItems="center" gap="0.5rem">
                          <Text fontSize="large" fontWeight="medium" display="flex" justifyContent="center" alignItems="center">
                            {link.icon}
                            {link.title}
                          </Text>
                        </MenuItem>
                      </Link>
                    )
                  })}
                  </MenuList>
              </Menu>
            </Flex>
      </Box>
    </>
  )
}

export default NavigationMobile