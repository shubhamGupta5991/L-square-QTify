import React, { useState } from 'react'
import './Section.css'
import { CircularProgress } from '@mui/material'
import Carousel from '../Carousel/Carousel';
import Card from '../Card/Cards';


const Section = ({data,title,type}) => {
    const [toggle,setToggle] = useState(true)

    const toggleButton=()=>{
        setToggle(prev=>!prev)
    }
    
  return (
    <div>
    <div className='head'>
        <h3>{title}</h3>
        <h4 onClick={toggleButton} className='toggle'>{!toggle?'Collapse': 'Show All'}</h4>
    </div>
    {data.length === 0 ? (<CircularProgress/>) : (
        <div className='cardWrap'>
            {!toggle?
                <div className='wrapper'>
                    {data.map((e)=>(
                        <Card data={e} type={type}/>
                    ))}
                </div>
            :(<Carousel data= {data} renderComponent={(data)=> <Card data={data} type={type}/>}/>)}
        </div>
    ) }
    </div>
  )
}

export default Section;