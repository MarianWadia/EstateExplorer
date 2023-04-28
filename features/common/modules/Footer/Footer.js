import { Box, Flex, SimpleGrid, Text} from '@chakra-ui/react'
import React from 'react'
import {services, about, workWithUs, ourOffices} from "./footerconsts"
import Link from 'next/link'
import { HiHomeModern } from 'react-icons/hi2'

const Footer = () => {
  return (
    <>
        <Box backgroundColor="blue.500">
            <Box 
              marginY="0 auto" 
              maxWidth="1028px" 
              paddingY="3rem" 
              paddingX={{base: "2rem", sm: "0" }}             
            >
              <SimpleGrid columns="4" color="whiteAlpha.700" minChildWidth="150px" gap="1.7rem">
                <Flex direction="column" >
                  <FooterHeader title="Services" />
                  {services.map((service, index)=>{
                    return(
                      <FooterLink link={service.link} name={service.name} key={index}/>
                    )
                  })}
                  </Flex>
                  <Flex direction="column">
                    <FooterHeader title="About" />
                    {about.map((aboutItem, index)=>{
                      return(
                        <FooterLink link={aboutItem.link} name={aboutItem.name} key={index}/>
                      )
                    })}
                </Flex>
                <Flex direction="column">
                    <FooterHeader title="WorkWithUs" />
                    {workWithUs.map((workWithUsItem, index)=>{
                      return(
                        <FooterLink link={workWithUsItem.link} name={workWithUsItem.name} key={index}/>
                      )
                    })}
                </Flex>
                <Flex direction="column">
                    <FooterHeader title="OurOffices" />
                    {ourOffices.map((ourOfficesItem, index)=>{
                      return(
                        <FooterLink link={ourOfficesItem.link} name={ourOfficesItem.name} key={index}/>
                      )
                    })}
                </Flex>
              </SimpleGrid>
            </Box>
            <Box 
              backgroundColor="blue.900" color="white"
              display="flex" flexDirection="column" 
              padding="2rem" justifyContent="center" alignItems="center">
              <Box display="flex" flexDirection="row" alignItems="center" justifyContent="center" gap="1.5">
                <HiHomeModern size={20} />
                <Text fontSize="xl" fontWeight="bold">EstateExplorer</Text>
              </Box>
              <Text fontSize="sm">All rights reserved - © 2023 copyrights EstateExplorer</Text>
            </Box>
        </Box>
    </>
  )
}

export default Footer

const FooterLink = ({link, name})=>{
  return(
    <Link href={link}>
      <Text>{name}</Text>
    </Link>
  )
}

const FooterHeader = ({title}) => {
  return(
    <Text as="h4" fontWeight="light" fontSize="xl" marginBottom="1">
      {title}
    </Text>
  )
}