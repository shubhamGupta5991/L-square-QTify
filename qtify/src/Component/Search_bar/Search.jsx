import React from 'react'
import {ReactComponent as SearchIcon} from '../../Assets/icon.svg'
import  './Search_Bar.css'


function Search({placeholder}) {
  function submit(e){
    e.preventDefault()
  }
  return (
    <div>
      <form className='parent' onSubmit={submit}>
        <input required  placeholder={placeholder}/>
        <button type="submit"><SearchIcon/></button>
      </form>
        
    </div>
  )
}

export default Search;