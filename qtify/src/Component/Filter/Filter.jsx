// import React, { useState } from 'react'
import styles from './Filter.module.css';
import { Box, CircularProgress } from '@mui/material';
import Cards from "../Card/Cards";
// import CustomTabPanel from '../BasicTabs/BasicTabs'
import Carousel from "../Carousel/Carousel";
import FilterData from '../Tabs/Tabs';



const FilterSection = ({ 
  title, 
  data, 
  type, 
  filteredData,
  filteredDataValues,
  value, 
  handleChange, 
}) => {

  return (
    <div>
      <div className={styles.header}>
        <h3>{title}</h3>
      </div>
      <FilterData value={value} handleChange={handleChange} filteredData={filteredData}/>
      {data.length === 0 ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <CircularProgress />
        </Box>
      ) :
        ( 
          <div className={styles.cardsWrapper}>
            <Carousel data={filteredDataValues} renderComponent={(data) => <Cards data={data} type={type} />} />
          </div>
        )}
    </div>
  )
}

export default FilterSection;