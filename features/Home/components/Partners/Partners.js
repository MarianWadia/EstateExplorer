import { SimpleGrid, Image, Box, Text} from '@chakra-ui/react'
import React from 'react'
import {partners} from './partnersConsts'

const Partners = () => {
  return (
    <Box maxWidth="1280px" backgroundColor="white" margin="0 auto" >
        <Text fontSize={{base: "4xl", sm: "5xl"}} textAlign="center" fontWeight="light" lineHeight="shorter" paddingX="2rem">
            Our Partners
        </Text>
        <SimpleGrid columns={partners.length} gap={{base:"0.5rem", md:"2rem"}} 
            justifyContent="center" 
            alignItems="center"
            marginTop={{base:"2rem", md:"3rem"}}
        >
            {partners.map((partner) =>(
                <Image key={partner} src={partner} 
                    width={{base: "3rem", md:"6rem"}} height={{base: "3rem", md:"6rem"}} alignSelf="center"
                    marginX="auto" marginBottom="2rem" marginTop="0"
                    filter="grayscale(1)"
                    opacity="0.8"
                />
            ))}
        </SimpleGrid>
    </Box>
  )
}

export default Partners