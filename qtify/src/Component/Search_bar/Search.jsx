import React from 'react'
import {ReactComponent as SearchIcon} from '../../Assets/icon.svg'
import styles from './Search_Bar.css'


function Search({placeholder}) {
  function submit(e){
    e.preventDefault()
  }
  return (
    <div>
      <form className={styles.parent} onSubmit={submit}>
        <input required  className={styles.search} placeholder={placeholder}/>
        <button type="submit" className={styles.search_button}><SearchIcon/></button>
      </form>
        
    </div>
  )
}

export default Search;