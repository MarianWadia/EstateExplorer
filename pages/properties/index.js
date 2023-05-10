import PropertyCard from '@/features/common/modules/PropertyCard/PropertyCardy';
import DefaultLayout from '@/features/layouts/defaultLayout/DefaultLayouty';
import { Box, SimpleGrid, Text } from '@chakra-ui/react';
import React from 'react'

const Properties = ({properties}) => {
  return (
    <DefaultLayout>
        <Box backgroundColor="#F0F0F0" padding="3rem">
            <Box maxWidth="1028px" margin="0 auto">
                <SimpleGrid columns={{base: "1", sm: "3"}} gap={{base: "0rem", sm:"2.5rem"}}>
                    {properties.map((property)=>(
                        <PropertyCard key={property.id} {...property}/>
                    ))}
                </SimpleGrid>
            </Box>
        </Box>
    </DefaultLayout>
  )
}

export default Properties

export async function getStaticProps(){
    const {hits} = require('../../features/data/properties.json');
    return {
      props: {properties: hits}
    }
} 