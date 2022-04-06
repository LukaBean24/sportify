import React from 'react'
import { useSelector } from 'react-redux'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

const Home = () => {
  const isOpen = useSelector((state) => state.ui.menuIsOpen)
  return (
    <>
      <Navbar />
      <Sidebar />
    </>
  )
}

export default Home
