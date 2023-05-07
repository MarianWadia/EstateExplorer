import { Box,Fade,Text } from '@chakra-ui/react'
import React from 'react'
import HeroForm from '../HeroForm/HeroForm'

const HeroBanner = () => {
  return (
    <>
      <Fade in>
        <Box 
          position="relative"
          minHeight={{base: '110vh', sm: "60vh"}} 
          backgroundImage={`url('./hero/heroBg3.jpeg')`}
          backgroundPosition="center"
          backgroundSize="cover"
          backgroundAttachment="fixed"
          backgroundRepeat="no-repeat"
          >
          <Box position="absolute" width="100%" height="100%" opacity="0.85" backgroundColor="blue.800"/>
          <Box display="flex" flexDirection={{base: 'column', sm: "row"}}
            alignItems="center" justifyContent={{base: "flex-start", sm: "space-between"}}
            maxWidth="1280px"
            position="absolute"
            color="white"
            fontWeight="light"
            margin="0 auto"
            padding="2rem"
            bottom="0"
            top="0"
            right="0"
            left="0"
          >
          <Box width={{base: "100%", sm: "50%"}}>
            <Text fontSize={{base: "3xl", lg: "5xl"}} lineHeight="shorter" marginBottom="1.5rem">
              Download Our new <strong>Property Buyig Guide</strong> Today...
            </Text>
            <Text fontSize={{base:"md", md:"2xl"}} color="gray.400" fontWeight="light" marginBottom={{base: "1rem", lg:"0"}}>
              A Free PDF with our best secrets for evaluating a property purchase, calculating profit and so much more.
            </Text>
          </Box>
          <Box width={{base: "100%", sm:"auto"}} marginRight={{base: "0", md:"-5"}}><HeroForm /></Box>
          </Box>
        </Box>
      </Fade>
    </>
  )
}

export default HeroBanner