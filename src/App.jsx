import Navbar from './components/navbar/Navbar'
import Home from './pages/Home'
import Programme from './pages/Programme'
import Staff from './pages/Staff'

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

        </Routes>
      </div>
    </>
  )
}

export default App;
