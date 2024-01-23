import React from 'react'
import Hero from '../../Component/hero_section/Hero'
import Section from '../../Component/Section/Section'
import { useOutlet, useOutletContext } from 'react-router-dom'
 
const HomePage = () => {
    const {data} = useOutletContext();
    const {topAlbums,newAlbums} = data;
  return (
    <div>
        <Hero/>
        <Section title='Top Albums' data={topAlbums} type='album'/>
        <Section title='New Albums' data={newAlbums} type='album'/>
    </div>
  )
}

export default HomePage