import React, { useState } from 'react'
import {Swiper, SwiperSlide} from "swiper/react"
import {FreeMode, Navigation, Thumbs} from "swiper"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/free-mode"
import "swiper/css/thumbs"
import { Divider, Image } from '@chakra-ui/react'

const PropertyThumbnailsSlider = ({photos}) => {
  const [thumbsSwiper, setThumbSwiper] = useState(null)
  return (
    <>
      <Swiper 
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",          
        }}
        loop= {true}
        navigation={true}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null
        }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {photos.map((photo, index)=>(
          <SwiperSlide key={index}>
            <Image src={photo}/>
          </SwiperSlide>
        ))}
      </Swiper>
      <Divider />
      <Swiper 
        watchSlidesProgress={true}
        spaceBetween={10}
        slidesPerView={5}
        freeMode={true}
        onSwiper={setThumbSwiper}
        loop= {true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {photos.map((photo, index)=>(
          <SwiperSlide key={index}>
            <Image key={index} src={photo}/>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

export default PropertyThumbnailsSlider