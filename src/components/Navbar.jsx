import React from 'react'
import classes from '../styles/Navbar.module.scss'
import Burger from './Burger'

const Navbar = () => {
  return (
    <>
      <div className={classes['navbar-container']}>
        <div className={classes.burger}>
          <Burger />
        </div>
        <div className={classes.logo}>
          <h1>Sportify</h1>
        </div>
        <div className={classes.navigation}>
          <h4>Favourites</h4>
          <h4>Statistics</h4>
          <h4>Analitics</h4>
          <h4>News</h4>
        </div>
        <div className={classes.search}>
          <input type='text' />
        </div>
      </div>
    </>
  )
}

export default Navbar
