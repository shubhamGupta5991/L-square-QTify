import Navbar from "./Component/Navbar/Navbar";
import "./App.css";
// import Hero from "./Component/hero_section/Hero";
import { topAlbums,newAlbums } from "./APItesting/apiTesting";
// import Cards from "./Component/Card/Cards";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { StyledEngineProvider } from "@mui/material";

// console.log(topAlbums());

function App() {
  const [topAlbum, settopAlbum] = useState([]);
  const [newAlbum, setNewAlbum] = useState([]);

  const generatetopAlbum = async () => {
    try {
      const res = await topAlbums();
      // console.log(res);
      settopAlbum(res);
    } catch (error) {
      console.log(error);
    }
  };
  const generateNewAlbum = async () => {
    try {
      const res = await newAlbums();
      // console.log(res);
      setNewAlbum(res);
    } catch (error) {
      console.log(error);
    }
  };
  // console.log(topAlbums());

  useEffect(() => {
    generatetopAlbum();
    generateNewAlbum()
  }, []);
// console.log(topAlbums(),'topAlbum');
  return (
    <>
      <StyledEngineProvider>
        <Navbar />
        <Outlet context={{ data: { topAlbum ,newAlbum} }} />
      </StyledEngineProvider>
    </>
  );
}

export default App;
