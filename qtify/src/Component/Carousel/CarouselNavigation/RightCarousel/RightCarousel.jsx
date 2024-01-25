import React, { useEffect, useState } from 'react'
import {useSwiper} from 'swiper/react'
import {ReactComponent as RightArrow} from '../../../../Assets/rightArrow.svg'
import './RightCarousel.css'

const RightCarousel = () => {
    const swiper = useSwiper()
    const [isEnd,setIsEnd] = useState(swiper.isEnd)
    useEffect(()=>{
        swiper.on('slideChange', ()=>{
            setIsEnd(swiper.isEnd)
        })
    },[])
  return (
    <div className='navigate_right'>
        {!isEnd && <RightArrow onClick={()=> swiper.slideNext()}/>}
        
    </div>
  )
}

export default RightCarousel
