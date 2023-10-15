
import './App.css'
import { Route, Routes} from "react-router-dom"
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import MenuPage from './pages/MenuPage'
import WhatsOnPage from './pages/WhatsOnPage'
import ContactPage from './pages/ContactPage'
import CronLocation from './pages/CronLocation'
import BonLocation from './pages/BonLocation'
import EventsPage from './pages/EventsPage'
import BookingPage from './pages/BookingPage'

function App() {


  return (
    <>
     <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/about" element={<AboutPage/>} />
      <Route path="/menu" element={<MenuPage/>} />
      <Route path="/whats-on" element={<WhatsOnPage/>} />
      <Route path="/contact" element={<ContactPage/>} />
      <Route path="/cronulla-location" element={<CronLocation/>} />
      <Route path="/bondi-location" element={<BonLocation/>} />
      <Route path="/event" element={<EventsPage/>} />
      <Route path="/booking" element={<BookingPage/>} />



     </Routes>
    </>
  )
}

export default App
