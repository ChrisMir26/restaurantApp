import React from 'react'
import Nav from "../components/Nav/Nav"
import Header from "../components/Header/Header"
import About from "../components/About/About"
import Menus from '../components/Menus/Menus'
import WhatsOn from '../components/WhatsOn/WhatsOn'
import Footer from '../components/Footer/Footer'
import Contact from '../components/Contact/Contact'

const HomePage = () => {
  return (
    <>
    <Nav />
    <Header />
    <About />
    <Menus/>
    <WhatsOn />
    <Contact/>
    <Footer/>
    </>
  )
}

export default HomePage