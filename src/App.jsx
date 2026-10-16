import Navbar from './components/navbar/Navbar'
import Footer from "./components/footer/footer"

import ScrollToTop from "./components/scrollToTop/scrollToTop"

import Home from './pages/home'
import Programme from './pages/programme'
import Staff from './pages/adult-staff'
import NCOs from './pages/nco'
import FlightP from './pages/flight-p'
import Join from './pages/join'
import Contact from './pages/contact'
import Parents from './pages/parents'
import Newsletter from './pages/newsletter'
import Gallery from './pages/gallery'
import Enrol from './pages/enrol'
import NotFound from './pages/404'

import { Route, Routes } from "react-router-dom"
import './App.css'

import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    
    <>
    {/* Joining-form links carry a secret token: report them to analytics without it. */}
    <Analytics beforeSend={(event) => ({ ...event, url: event.url.replace(/\/enrol\/[^/?#]+/, "/enrol/[token]") })}/>
    <a href="#main" className="skip-link">Skip to main content</a>
    <div className="pt-16 pb-16 lg:pb-0">
      <Navbar/>
      <ScrollToTop>
        <main id="main">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/programme" element={<Programme/>}/>
          <Route path="/adult-staff" element={<Staff/>}/>
          <Route path="/cadet-ncos" element={<NCOs/>}/>
          <Route path="/flight-points" element={<FlightP/>}/>
          <Route path="/join" element={<Join/>}/>
          <Route path="/parents" element={<Parents/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/newsletter" element={<Newsletter/>}/>
          <Route path="/gallery" element={<Gallery/>}/>
          <Route path="/enrol/:token" element={<Enrol/>}/>

          <Route path='*' element={<NotFound />}/>
        </Routes>
        </main>
      </ScrollToTop>

      <Footer/>

      </div>
    </>
  )
}

export default App;
