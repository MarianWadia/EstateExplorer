import React from 'react'
import { usePropertyFormat } from '../../Hooks/usePropertyFormat'
import { Badge, Box, Flex, HStack, Text } from '@chakra-ui/react'
import { TbBath, TbBed, TbRuler} from "react-icons/tb"
import Link from 'next/link'

const PropertyCard = (property) => {
  const { 
    address,
    coverPhoto,
    propertyType, 
    price,
    title,
    rooms,
    baths,
    purpose,
    sqSize,
    externalID
  } = usePropertyFormat(property)
  return (
    <Box backgroundColor="#fff" marginBottom="4rem">
      <Link href={`/properties/${externalID}`}>
        <Box backgroundImage={`url("${coverPhoto}")`} 
          height="250px" backgroundPosition="center center" 
          backgroundSize="cover" position="relative"
          display="flex" flexDirection="column" justifyContent="space-between"
        >
          <Box margin="1rem">
            <Badge colorScheme='green'>{purpose}</Badge>
          </Box>
          <Box height="50%" bgGradient="linear(to-t, #0a0b1cd9, #ffffff00 100%)" >
            <Text color="white" fontSize={{base: "xl", sm:"3xl"}} textAlign="center" fontWeight="bold" position="absolute" bottom="0" paddingLeft="0.5rem">{price}</Text>
          </Box>
        </Box>
        <Box padding="1rem" textAlign="center">
          <Text fontSize={{base: "sm", sm:"xl"}} fontWeight="medium" color="black" textAlign="center" marginBottom="1rem">{propertyType}</Text>
          <Text fontSize="sm" fontWeight="light" isTruncated>{address}</Text>
          <Text isTruncated fontSize="sm" fontWeight="light">{title}</Text> 
          <HStack marginTop="1rem" spacing={{base: "0.2rem", sm: "1.5rem"}} fontSize="lg" justifyContent="center" alignItems="center">  
            <Flex gap={{base: "0", sm: "0.3rem"}} alignItems="center" justifyContent="center" isTruncated> 
              <TbBed size={23}/>
              {rooms}
            </Flex>
            <Flex gap={{base: "0", sm: "0.3rem"}} alignItems="center" justifyContent="center" isTruncated> 
              <TbBath size={22}/>
              <Text>{baths}</Text>
            </Flex>
            <Flex gap={{base: "0", sm: "0.3rem"}} alignItems="center" justifyContent="center" isTruncated> 
              <TbRuler size={21}/>
              <Text>{sqSize} m<sup>2</sup></Text>
              
            </Flex>
          </HStack>
        </Box>
      </Link>
    </Box>
  )
}

export default PropertyCard