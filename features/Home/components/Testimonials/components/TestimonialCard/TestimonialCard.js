import { Box, Image, Text} from '@chakra-ui/react'
import React from 'react'
import { TbQuote } from 'react-icons/tb'

const TestimonialCard = ({name, image, company, testimonial}) => {
  return (
    <Box backgroundColor="#fff" display="flex" flexDirection="column" padding={{base: "1rem", sm:"3rem"}}>
        <TbQuote size={30} color="#4299e1"/>
        <Text marginTop="1.5rem" fontSize="md" fontWeight="light" color="gray.600">{testimonial}</Text>
        <Box display="flex" flexDirection="row" alignItems="center" gap="0.5rem">
            <Image src={image} borderRadius="full" height="6rem" width="6rem" marginTop="1.5rem" objectFit="cover"/>
            <Box>
                <Text as="span" noOfLines="1" >{name}</Text>
                <Text fontSize="sm" fontStyle="italic" fontWeight="medium">compnay - {company}</Text>
            </Box>
        </Box>
    </Box>
  )
}

export default TestimonialCard