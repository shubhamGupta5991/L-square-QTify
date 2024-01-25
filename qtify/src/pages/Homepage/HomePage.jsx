import React from 'react'
import Hero from '../../Component/hero_section/Hero'
import Section from '../../Component/Section/Section'
import {  useOutletContext } from 'react-router-dom'
 
const HomePage = () => {
    const {data} = useOutletContext();
    const {topAlbum,newAlbum} = data;
    // console.log(topAlbums(),'topAlbums');
    // console.log(data);
    // console.log(newAlbum);
  return (
    <div>
        <Hero/>
        <Section title='Top Albums' data={topAlbum} type='album'/>
        <Section title='New Albums' data={newAlbum} type='album'/>
    </div>
  )
}

export default HomePage;