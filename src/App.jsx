import Navbar from './components/navbar/Navbar'
import Footer from "./components/footer/footer"

import ScrollToTop from "./components/scrollToTop/scrollToTop"

import Home from './pages/home'
import Programme from './pages/programme'
import Staff from './pages/adult-staff'
import NCOs from './pages/nco'
import Documents from './pages/documents'
import FlightP from './pages/flight-p'
import Join from './pages/join'
import Contact from './pages/contact'
import Parents from './pages/parents'

import { Route, Routes } from "react-router-dom"
import './App.css'

import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

function App() {
  return (
    
    <>
    <Analytics/>
    <SpeedInsights/>
    
    <div className="app-container">
      <Navbar/>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/programme" element={<Programme/>}/>
          <Route path="/adult-staff" element={<Staff/>}/>
          <Route path="/cadet-ncos" element={<NCOs/>}/>
          <Route path="/documents" element={<Documents/>}/>
          <Route path="/flight-points" element={<FlightP/>}/>
          <Route path="/join" element={<Join/>}/>
          <Route path="/parents" element={<Parents/>}/>

          <Route path="/contact" element={<Contact/>}/>

        </Routes>
      </ScrollToTop>

      <Footer/>

      </div>
    </>
  )
}

export default App;
