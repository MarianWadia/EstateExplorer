import { Box, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import { testimonials } from './testimonialsConsts'
import TestimonialCard from './components/TestimonialCard/TestimonialCard'

const Testimonials = () => {
  return (
    <Box  backgroundColor="blue.50" marginTop="4rem">
        <Box maxWidth="1280px" margin="0 auto" padding={{base: "3rem", sm: "6rem"}}>
            <Text fontSize={{base: "4xl", sm: "5xl"}} textAlign="center" fontWeight="light" lineHeight="shorter" paddingX="2rem">
                Testimonials
            </Text>
            <Text textAlign="center" marginTop="1rem" fontSize="2xl" fontWeight="light" paddingX="2rem" marginBottom="3rem">
                Here is what our valued clients have to say
            </Text>
            <SimpleGrid columns="3" gap="1.5rem" minChildWidth="250px" alignItems="center" justifyContent="center">
                {testimonials.map((testimonial)=>(
                    <TestimonialCard key={testimonial.name} {...testimonial}/>
                ))}
            </SimpleGrid>
        </Box>
    </Box>
  )
}

export default Testimonials