import { Box, Text} from '@chakra-ui/react'
import React from 'react'
import PropertySlider from './components/PropertySlider/PropertySlider'

const FeaturedProperties = ({featuredProperties}) => {
  return (
    <>
        <Box backgroundColor="blue.50">
            <Box maxWidth="1280px" paddingY={{base: "3rem", sm: "6rem"}} color="gray.600" margin="0 auto" >
                <Text fontSize={{base: "4xl", sm:"5xl"}} lineHeight="shorter" fontWeight="light" textAlign="center">
                    Discover Our Featured Properties
                </Text>
                <Text fontSize="2xl" fontWeight="light" textAlign="center" marginTop="1.5rem" marginBottom="1rem">A selection of our best properties</Text>
                <PropertySlider featuredProperties={featuredProperties}/>
            </Box>
        </Box>
    </>
  )
}

export default FeaturedProperties