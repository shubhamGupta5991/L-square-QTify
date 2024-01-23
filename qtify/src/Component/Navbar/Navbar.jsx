import React from 'react'
import Brand from '../Brand_icon/Brand';
import Search from '../Search_bar/Search';
import Button from '../Button/Button';
import './Navbar.css'
import { Link } from 'react-router-dom';
function Navbar() {

  return (
    <nav className='navbar'>
      <Link to="/">
      <Brand/>
      </Link>
      
      <Search placeholder='Search an album of your choice'/>
      <Button>Give Feedback</Button>
    </nav>
  )
}

export default Navbar