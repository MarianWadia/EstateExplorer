import { Box, Flex, Image, Text, calc } from '@chakra-ui/react'
import React from 'react'
import {agents} from "./agentsConsts"

const MeetTheTeam = () => {
  return (
    <Box maxWidth="1280px" backgroundColor="white" margin="0 auto" padding={{base: "3rem", sm: "6rem"}}>
      <Text fontSize={{base: "4xl", sm: "5xl"}} textAlign="center" fontWeight="light" lineHeight="shorter" paddingX="2rem">
        Meet Our Team
      </Text>
      <Text textAlign="center" marginTop="1rem" fontSize="2xl" fontWeight="light" paddingX="2rem" marginBottom="3rem">
        The best in the industry at your service 24/4
      </Text>
      <Flex flexDirection={{base: "column", sm: "row"}} justifyContent="space-between" alignItems="center" gap="1.5rem">
        {agents.map((agent)=>(
          <Box key={agent.name} display="flex" flexDir="column" 
            backgroundColor="blackAlpha.100" 
            padding="1rem" marginBottom={{base: "1rem", sm: "0"}}
            alignItems="center" justifyContent="center" height="100%"
          >
            <Image src={agent.image} borderRadius="md" width="10rem" height="10rem" objectFit="cover" marginBottom="2rem" shadow="md" />
            <Text fontSize="xl" fontWeight="bold" textAlign="center" color="blue.400"noOfLines="1">{agent.name}</Text>
            <Text fontSize="lg" fontWeight="md" textAlign="center" color="blue.600" noOfLines="1">{agent.title}</Text>
            <Text fontSize="medium" fontWeight="light" noOfLines="4" marginTop="1rem" color="gray.600" textAlign="center">{agent.description}</Text>
          </Box>
        ))}
      </Flex>
    </Box>
  )
}

export default MeetTheTeam