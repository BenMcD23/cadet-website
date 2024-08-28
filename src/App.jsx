import Navbar from './components/navbar/Navbar'
import Home from './pages/Home'
import Programme from './pages/Programme'

import About from './pages/About'

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
          <Route path="/about" element={<About/>}/>

        </Routes>
      </div>
    </>
  )
}

export default App;
