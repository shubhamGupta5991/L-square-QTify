import Navbar from "./Component/Navbar/Navbar";
import "./App.css";
// import Hero from "./Component/hero_section/Hero";
import { topAlbums, newAlbums, songs } from "./APItesting/apiTesting";
// import Cards from "./Component/Card/Cards";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { StyledEngineProvider } from "@mui/material";

// console.log(topAlbums());

function App() {
  const [topAlbum, settopAlbum] = useState([]);
  const [newAlbum, setNewAlbum] = useState([]);
  const [song, setSong] = useState([]);
  const [filteredDataValues, setFilteredDataValues] = useState(['']);
  const [value, setValue] = useState(0);
  const [toggle, setToggle] = useState(false);
  
  const generateSongsData = (value) => {
    let songData = newAlbum[0].songs;
    let key;
    if (value === 0) {
      setFilteredDataValues(songData)
      return;
    }
    else if (value === 1) {
      key = 'rock'
    }
    else if (value === 2) {
      key = 'pop'
    }
    else if (value === 3) {
      key = 'jazz'
    }
    else if (value === 4) {
      key = 'blues'
    }
    const data = songData.filter((item) => {
      return item.genre.key === key
    })
    setFilteredDataValues(data)
  }
  const handleToggle = () => {
    setToggle(!toggle)
  }
  const filteredData = (val) => {
    generateSongsData(val)
    
  }

  const handleChange = (event, newValue) => {
    setValue(newValue)
    generateSongsData(newValue)
  }
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
    
      setNewAlbum(res);
    } catch (error) {
      console.log(error);
    }
  };

  const generateSongs = async () => {
    try {
      const res = await songs();

      setSong(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
  
  }, [value])

  useEffect(() => {
    generatetopAlbum();
    generateNewAlbum();
    generateSongs();
    setFilteredDataValues(newAlbum);
  }, []);

  return (
    <>
      <StyledEngineProvider>
        <Navbar />
        <Outlet context={{ data: { topAlbum, newAlbum, song,filteredDataValues,handleChange,filteredData,value,handleToggle } }} />
      </StyledEngineProvider>
    </>
  );
}

export default App;
