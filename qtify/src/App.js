import Navbar from "./Component/Navbar/Navbar";
import './App.css'
// import Hero from "./Component/hero_section/Hero";
import { topAlbums,newAlbums,songs,filters } from "./APItesting/apiTesting";
// import Cards from "./Component/Card/Cards";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { StyledEngineProvider } from "@mui/material";

function App() {
  const [data,setData] = useState({})
  const generateData = (key,source)=>{
    source().then((data)=>{
      setData(prev=>{
        return {...prev,[key]:data}
      })
    })
  }
  useEffect(()=>{
    generateData('topAlbums',topAlbums)
    generateData('newAlbums',newAlbums)
    generateData('songs',songs)
    generateData('filters',filters)
  },[])

  const {topAlbums =[],newAlbums=[]} = data;
  return (
    <>
     <StyledEngineProvider>
       <Navbar/>
     <Outlet context={{data:{topAlbums,newAlbums}}}/>
    </StyledEngineProvider>
    </>
   
     

      
      
    
  );
}

export default App;
