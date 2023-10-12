import React from 'react'
import Nav from "../components/Nav/Nav"
import Header from "../components/Header/Header"
import About from "../components/About/About"
import Menus from '../components/Menus/Menus'

const HomePage = () => {
  return (
    <>
    <Nav />
    <Header />
    <About />
    <Menus/>
    </>
  )
}

export default HomePage