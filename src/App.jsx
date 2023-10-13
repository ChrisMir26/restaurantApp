
import './App.css'
import { Route, Routes} from "react-router-dom"
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import MenuPage from './pages/MenuPage'
import WhatsOnPage from './pages/WhatsOnPage'

function App() {


  return (
    <>
     <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/about" element={<AboutPage/>} />
      <Route path="/menu" element={<MenuPage/>} />
      <Route path="/whats-on" element={<WhatsOnPage/>} />


     </Routes>
    </>
  )
}

export default App
