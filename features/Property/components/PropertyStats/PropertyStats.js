import { Box, Center, Divider, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { TbBath, TbBed, TbCurrencyDollar, TbRuler } from 'react-icons/tb'

const PropertyStats = ({price, baths, rooms, sqSize}) => {
  return (
    <Box backgroundColor="white" padding="1.5rem" margin="1rem">
        <Flex 
            flexDirection={{base: "column", sm: "row"}}
            justifyContent="center"
            alignItems="center"
            gap="1rem"
            color="gray.500"
            fontWeight="light"
            fontSize="x-large"
        >
            <Flex flexDirection="column" justifyContent="center" alignItems="center">
                <Text>BEDS</Text>
                <Flex alignItems="center" gap="0.3rem">
                    <TbBed size={22}/>
                    <Text>{rooms}</Text>
                </Flex>
            </Flex>
            <Center height="50px">
                <Divider orientation="vertical"/>
            </Center>

            <Flex flexDirection="column" justifyContent="center" alignItems="center">
                <Text>BATHS</Text>
                <Flex alignItems="center" gap="0.3rem">
                    <TbBath size={22}/>
                    <Text>{baths}</Text>
                </Flex>
            </Flex>
            <Center height="50px">
                <Divider orientation="vertical"/>
            </Center>

            <Flex flexDirection="column" justifyContent="center" alignItems="center">
                <Text>AREA</Text>
                <Flex alignItems="center" gap="0.3rem">
                    <TbRuler size={22}/>
                    <Text>{sqSize}</Text>
                    <sup>m2</sup>
                </Flex>
            </Flex>
            <Center height="50px">
                <Divider orientation="vertical"/>
            </Center>

            <Flex flexDirection="column" justifyContent="center" alignItems="center">
                <Text>PRICE</Text>
                <Flex alignItems="center" gap="0.3rem">
                    <Text>{price}</Text>
                </Flex>
            </Flex>
        </Flex>
    </Box>
  )
}

export default PropertyStats