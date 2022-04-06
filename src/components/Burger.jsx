import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import classes from '../styles/Burger.module.scss'
import { useDispatch } from 'react-redux'
import { uiActions } from '../store/ui-slice'
const Burger = () => {
  const dispatch = useDispatch()
  const menuIsOpen = useSelector((state) => state.ui.menuIsOpen)
  const clickHanlder = () => {
    dispatch(uiActions.toggleMenu())
  }
  return (
    <div
      className={`${menuIsOpen ? classes['burger_active'] : classes.burger}`}
      onClick={clickHanlder}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
}

export default Burger
