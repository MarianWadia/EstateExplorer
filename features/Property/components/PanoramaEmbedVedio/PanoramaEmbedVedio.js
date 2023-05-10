import { Box } from '@chakra-ui/react';
import React from 'react'

const PanoramaEmbedVedio = ({panorama}) => {
    const ratio = (315/560)*100;
  return (
    <Box paddingTop={`${ratio}%`} frameBorder="0" position="relative" overflow="hidden" height="0">
        <iframe
            style={{position: "absolute", top:"0", bottom:0 }} 
            height="100%"
            width="100%"
            src={panorama}
        />
    </Box>
  )
}

export default PanoramaEmbedVedio