import React, { useEffect } from 'react'
import './Carousel.css'
import Swiper, { Navigation } from 'swiper'
import {useSwiper, SwiperSlide} from 'swiper/react'
import LeftCarousel from './CarouselNavigation/LeftCarousel/LeftCarousel'
import RightCarousel from './CarouselNavigation/RightCarousel/RightCarousel'
import 'swiper/css'
const Control = ({data})=>{
  const swiper = useSwiper()
  useEffect(()=>{
      swiper.slideTo(0,1)
  },[data])
  return <></>
}

const Carousel = ({data,renderComponent}) => {
  return (
    <div className='wrapper'>
      <Swiper
      style={{padding:'0 20px'}}
      initialSlide={0}
      modules={[Navigation]}
      slidesPerView={'auto'}
      spaceBetween = {40}
      allowTouchMove
      >
          <Control data={data}/>
        <LeftCarousel/>
        <RightCarousel/>
        {data.map((e)=>(
          <SwiperSlide>{renderComponent(e)}</SwiperSlide>
        ))}
      </Swiper>

    </div>
  )
}

export default Carousel