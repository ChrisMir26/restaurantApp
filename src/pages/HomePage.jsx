import React from 'react'
import Nav from "../components/Nav/Nav"
import Header from "../components/Header/Header"
import About from "../components/About/About"
import Menus from '../components/Menus/Menus'
import WhatsOn from '../components/WhatsOn/WhatsOn'

const HomePage = () => {
  return (
    <>
    <Nav />
    <Header />
    <About />
    <Menus/>
    <WhatsOn />
    </>
  )
}

export default HomePage