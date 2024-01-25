import React, { useEffect, useState } from 'react'
import {useSwiper} from 'swiper/react'
import {ReactComponent as LeftArrow} from '../../../../Assets/leftArrow.svg'
import './LeftCarousel.css'

const LeftCarousel = () => {
    const swiper = useSwiper()
    const [isStart,setIsStart] = useState(swiper.isStart)
    useEffect(()=>{
        swiper.on('slideChange', ()=>{
            setIsStart(swiper.isStart)
        })
    },[])
  return (
    <div className='navigate_left'>
        {!isStart && <LeftArrow onClick={()=> swiper.slidePrev()}/>}
        
    </div>
  )
}

export default LeftCarousel