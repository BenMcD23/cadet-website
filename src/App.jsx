import Navbar from './components/navbar/Navbar'
import Footer from "./components/footer/footer"

import Home from './pages/home'
import Programme from './pages/programme'
import Staff from './pages/adult-staff'
import NCOs from './pages/nco'
import Documents from './pages/documents'

import { Route, Routes } from "react-router-dom"
import './App.css'

function App() {
  return (
    
    <>
    <div className="app-container">
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/programme" element={<Programme/>}/>
          <Route path="/adult-staff" element={<Staff/>}/>
          <Route path="/cadet-ncos" element={<NCOs/>}/>
          <Route path="/documents" element={<Documents/>}/>

        </Routes>
      <Footer/>

      </div>
    </>
  )
}

export default App;
