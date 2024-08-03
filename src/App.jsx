import BasicExample from './components/navbar/Navbar'
import Home from './pages/Home'
import About from './pages/About'

import { Route, Routes } from "react-router-dom"
import './App.css'

function App() {
  return (
    
    <>
    <BasicExample/>
    <div className="container">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>

      </Routes>
    </div>
    </>
  )
}

export default App;
