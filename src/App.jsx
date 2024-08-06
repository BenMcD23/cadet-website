import My_navbar from './components/navbar/Navbar'
import Home from './pages/Home'
import About from './pages/About'

import { Route, Routes } from "react-router-dom"
import './App.css'

function App() {
  return (
    
    <>
    <My_navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>

      </Routes>
    </>
  )
}

export default App;
