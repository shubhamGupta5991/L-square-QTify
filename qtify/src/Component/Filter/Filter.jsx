import React,{useState} from 'react'
import styles from './Filter.module.css'
    import PropTypes from 'prop-types';
    import Tabs from '@mui/material/Tabs';
    import Tab from '@mui/material/Tab';
    import Typography from '@mui/material/Typography';
    import Box from '@mui/material/Box';


  
    
    
    function TabPanel(props) {
      const { children, value, index, ...other } = props;
    
      return (
        <div
          role="tabpanel"
          hidden={value !== index}
          id={`simple-tabpanel-${index}`}
          aria-labelledby={`simple-tab-${index}`}
          {...other}
        >
          {value === index && (
            <Box sx={{ p: 3 }}>
              <Typography>{children}</Typography>
            </Box>
          )}
        </div>
      );
    }
    
    TabPanel.propTypes = {
      children: PropTypes.node,
      index: PropTypes.number.isRequired,
      value: PropTypes.number.isRequired,
    };
    
  
    
    export default function Filter({filter,selectedFilter,setSelectedFilter}) {
    //   const [value, setValue] = useState(0);
    
      const handleChange = (event, newValue) => {
        setSelectedFilter(newValue);
      };
      function a11yProps(index) {
        return {
          id: `simple-tab-${index}`,
          'aria-controls': `simple-tabpanel-${index}`,
        };
      }
    
      return (
        <div>
            <Tabs value={selectedFilter} onChange={handleChange} aria-label="basic tabs example" TabIndicatorProps={{
                style:{
                        backgroundColor:'#34b94c',
                },
                
            }}>
                {filter.map((e,ind)=>(
                    <Tab className={styles.tab} label={e.label} {...a11yProps(0)} />

                ))}
              
            </Tabs>
            {filter.map((e,ind)=>(
                     <TabPanel value={e.label} index={ind}/>
                    
                   

                ))}
          
         
         
        </div>
      );
    }
    
  


// export default Filter