import React from 'react'
import classes from '../styles/Sidebar.module.scss'
import { useSelector } from 'react-redux'

const Sidebar = () => {
  const isOpen = useSelector((state) => state.ui.menuIsOpen)
  return (
    <div className={`${isOpen ? classes.sidebar : classes.closed}`}>
      <span>Football</span>
      <span>Football</span>
      <span>Football</span>
    </div>
  )
}

export default Sidebar
