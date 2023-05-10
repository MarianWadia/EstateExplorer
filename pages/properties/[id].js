import PanoramaEmbedVedio from '@/features/Property/components/PanoramaEmbedVedio/PanoramaEmbedVedioy'
import PropertyStats from '@/features/Property/components/PropertyStats/PropertyStatsy'
import PropertyThumbnailsSlider from '@/features/Property/components/PropertyThumbnailsSlider/PropertyThumbnailsSlidery'
import PropertyYoutybeEmbed from '@/features/Property/components/PropertyYoutybeEmbed/PropertyYoutybeEmbedy'
import { usePropertyFormat } from '@/features/common/Hooks/usePropertyFormaty'
import { TextContetBox } from '@/features/common/modules/TextContetBox/TextContetBoxy'
import DefaultLayout from '@/features/layouts/defaultLayout/DefaultLayouty'
import { Badge, Box, Flex, Grid, GridItem, SimpleGrid, Text} from '@chakra-ui/react'
import React from 'react'
import { TbMapPin } from 'react-icons/tb'

const PropertySingle = ({property}) => {
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
    externalID,
    photos, 
    description,
    coverVideo,
    panorama,
    amenities,  
    furshied
  } = usePropertyFormat(property)
  return (
    <DefaultLayout>
      <Box backgroundColor="#f7f8f9" paddingY="3rem">
        <Grid templateColumns="repeat(6, 1fr)" gap="5" maxWidth="1280px" margin="0 auto">
          <GridItem colSpan="6">
            <Text fontSize="3xl" fontWeight="medium" color="blue.800" textAlign={{base: "center", sm:"left"}}>
              {propertyType} {title}
            </Text>
            <Flex alignItems="center" textAlign="center" gap="0.1rem" color="blue.600" 
              flexDirection={{base: "column", sm: "row"}} marginY={{base: "1rem", sm:"0"}}
            >
              <TbMapPin size={20}/>
              <Text fontSize="xl" fontWeight="light" textAlign={{base: "center", sm:"left"}}>
                {address} ID: {externalID}
              </Text>
              <Badge colorScheme="green">{purpose}</Badge>
            </Flex>
          </GridItem>
          <GridItem colSpan={{base: "6", sm:"3"}}>
            <PropertyThumbnailsSlider photos={photos}/>
          </GridItem>
          <GridItem colSpan={{base: "6", sm:"3"}}>
            <PropertyStats rooms={rooms} baths={baths} sqSize={sqSize} price={price}/>
            <TextContetBox title="Description">
              <Text fontSize="1rem" noOfLines="4" fontWeight="light" color="gray.600">
                {description}
              </Text>
            </TextContetBox>
            <TextContetBox title="Amenities">
              <SimpleGrid columns={{base: "1", sm: "2"}} fontSize="1rem" fontWeight="light" color="gray.600">
                {amenities.length? 
                    amenities.map((item)=>(
                      <Text key={item}>{item}</Text>
                      ))
                      : "Please Contact Us for more information"
                }
              </SimpleGrid>
            </TextContetBox>
          </GridItem>
          <GridItem colSpan={{base: "6", sm:"3"}}>
            <TextContetBox title="Video Walkthrough">
              <PropertyYoutybeEmbed coverVideo={coverVideo}/>
            </TextContetBox> 
          </GridItem>
          <GridItem colSpan={{base: "6", sm:"3"}}>
            <TextContetBox title="3D Virtual Walkthrough">
                <PanoramaEmbedVedio panorama={panorama}/>
            </TextContetBox>            
          </GridItem>
        </Grid>
      </Box>
    </DefaultLayout>
  )
}

export default PropertySingle

export async function getServerSideProps(){
  const property = require('../../features/data/property.json');
  return {
    props: {property}
  }
}