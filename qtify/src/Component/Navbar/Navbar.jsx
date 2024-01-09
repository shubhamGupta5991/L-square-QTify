import React from 'react'
import Brand from '../Brand_icon/Brand';
import Search from '../Search_bar/Search';
import Button from '../Button/Button';
import styles from '../Navbar.css'
function Navbar() {

  return (
    <nav className={styles.navbar}>
      <a href="/">
      <Brand/>
      </a>
      
      <Search placeholder='Search an album of your choice'/>
      <Button>Give Feedback</Button>
    </nav>
  )
}

export default Navbar