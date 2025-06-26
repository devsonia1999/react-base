import React from 'react'
import Header from '@/layout/Header'
import Footer from '@/layout/Footer'
import MenuBar from '@/layout/menuBar'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
      <MenuBar/>
    </>
  )
}

export default MainLayout