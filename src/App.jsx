import React from 'react'
import Home from './Pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Services from './Pages/Services'
import Treatment from './Pages/Treatment'
import Contact from './Pages/Contact'
import About from './Pages/About'
import Tokens from './Pages/AppointmentTokens'
import Login from './Components/Login'

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          
        <Route path="/" element={<Home />} />
        <Route path='/services' element={<Services/>}/>
        <Route path='/treatment' element={<Treatment/>}/>
        <Route path='/tokens' element={<Tokens/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/login' element={<Login/>}/>
        
      </Routes>
      </Router>
    </>
  )
}

export default App