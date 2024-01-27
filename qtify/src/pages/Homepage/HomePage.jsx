import React from 'react'
import Hero from '../../Component/hero_section/Hero'
import Section from '../../Component/Section/Section'
import {  useOutletContext } from 'react-router-dom'
import FilterSection from '../../Component/Filter/Filter'
 
const HomePage = () => {
    const {data} = useOutletContext();
    const {topAlbum,newAlbum,song,filteredDataValues,handleChanges,filteredData,value,handleToggle} = data;
  
  
  return (
    <div>
        <Hero/>
        <Section title='Top Albums' data={topAlbum} type='album'/>
        <Section title='New Albums' data={newAlbum} type='album'/>
        
        <FilterSection data={song} type='songFilter' title='Songs' filteredData={filteredData} filteredDataValues={filteredDataValues} value={value} handleChange={handleChanges} handleToggle={handleToggle}/>
    </div>
  )
}

export default HomePage;