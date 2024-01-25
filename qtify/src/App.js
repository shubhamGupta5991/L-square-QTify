import Navbar from "./Component/Navbar/Navbar";
import './App.css'
// import Hero from "./Component/hero_section/Hero";
import { topAlbums} from "./APItesting/apiTesting";
// import Cards from "./Component/Card/Cards";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { StyledEngineProvider } from "@mui/material";

// console.log(topAlbums());

function App() {
  const [data,setData] = useState({})
  // console.log(data);
  // const generateData = (key,source)=>{
  //   source().then((data)=>{
  //     setData((prev)=>{
  //       return {...prev,[key]:data}
  //     })
  //   })
  // }

  const generateData = async ()=>{
    try {
      const res = await topAlbums();
      setData(res);
      
    } catch (error) {
      console.log(error);
    }
   
  }
  // console.log(topAlbums());

  useEffect(()=>{
    generateData()
    
    // generateData('newAlbums',newAlbums)
   
    // generateData('newAlbums',newAlbums)
    // generateData('songs',songs)
    // generateData('filters',filters)
  },[])
  // console.log(setData(topAlbums()));

  // const {topAlbums =[]} = data;
  return (
    <>
     <StyledEngineProvider>
       <Navbar/>
     <Outlet context={{data:{data}}}/>
    </StyledEngineProvider>
    </>
   
     

      
      
    
  );
}

export default App;
