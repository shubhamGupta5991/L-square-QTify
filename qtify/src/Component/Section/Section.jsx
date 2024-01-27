import React, { useEffect, useState } from 'react'
import './Section.css'
import { CircularProgress } from '@mui/material'
import Carousel from '../Carousel/Carousel';
import Card from '../Card/Cards';
import Filter from '../Filter/Filter';


const Section = ({data,title,type,filterSource}) => {
    console.log(data,title,type,filterSource);
    const [toggle,setToggle] = useState(true)
    const [filter, setFilter] = useState([{key:'all', label: 'All'}]);
    const [selectedFilter, setSelectedFilter] = useState(0);
    const toggleButton=()=>{
        setToggle(!toggle)
    }
    // console.log(data,'data');
    async function generateFilters(){
        if(filterSource){
            const response = await filterSource();
            setFilter([...filter,...response.data])
        }
    }
    // console.log(generateFilters());

    useEffect(()=>{
       generateFilters()
        },[])
    const showFilters = filter.length>1;
    const cardRender = data.filter((card)=>
        showFilters && selectedFilter !==0 ? card.genre.key === filter[selectedFilter].key:card
    )
    
  return (
    <div>
    <div className='head'>
        <h3>{title}</h3>
        <h4 onClick={toggleButton} className='toggle'>{!toggle?'Collapse': 'Show All'}</h4>
    </div>
    {
        showFilters && (
            <div className='filterWrapper'>
                 <Filter
            filter={filter}
            selectedFilter={selectedFilter}
            setSelectedFilter={setSelectedFilter}
            />

            </div>
           
        )
    }
    {(data.length === 0) ? (<CircularProgress/>) : (
        <div className='cardWrap'>
            {!toggle?
                (<div className='wrapper'>
                    {cardRender.map((e)=>(
                        <Card data={e} type={type} key={e.id}/>
                    ))}
                </div>)
            :(<Carousel data= {cardRender} renderComponent={(data)=> <Card data={data} type={type}/>}/>)}
        </div>
    ) }
    </div>
  )
}

export default Section;