import { Box, Divider, Text } from '@chakra-ui/react'
import React from 'react'

export const TextContetBox = ({title, children}) => {
  return (
    <Box backgroundColor="white" padding="1.5rem" margin="1rem">
        <Text fontWeight="light" fontSize="1.5rem" color="gray.600" marginLeft="0.3rem">{title}</Text>
        <Divider orientation="horizontal" marginY="0.7rem" marginLeft="0.3rem"/>
        {children}
    </Box>
    )
}
