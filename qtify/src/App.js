import Navbar from "./Component/Navbar/Navbar";
import "./App.css";

import { topAlbums, newAlbums, songs } from "./APItesting/apiTesting";

import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { StyledEngineProvider } from "@mui/material";

function App() {
  const [topAlbum, settopAlbum] = useState([]);
  const [newAlbum, setNewAlbum] = useState([]);
  const [song, setSong] = useState([]);
  const [filteredDataValues, setFilteredDataValues] = useState([""]);
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

  const handleChanges = ( newValue) => {
    setValue(newValue)
    generateSongsData(newValue)
  }
  const handleToggle = () => {
    setToggle(!toggle)
  }

  const filteredData = (val) => {
    generateSongsData(val)
    // console.log(val + ' filteredData is called from app.js')
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
    setFilteredDataValues(song);
  }, [song,value]);

  useEffect(() => {
    generatetopAlbum();
    generateNewAlbum();
    generateSongs();
   
  }, []);

  return (
    <>
      <StyledEngineProvider>
        <Navbar />
        <Outlet
          context={{
            data: {
              topAlbum,
              newAlbum,
              song,
              filteredDataValues,
              handleChanges,
              filteredData,
              value,
              handleToggle,
            },
          }}
        />
      </StyledEngineProvider>
    </>
  );
}

export default App;
