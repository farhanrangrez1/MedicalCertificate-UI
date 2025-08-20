import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from "../src/features/Layouts/WebsiteLayouts/Nevbar"
import HeroSection from './features/Website/HeroSection'
import PatientPortal from './features/Website/PatientPortal'
import PractitionerPortal from './features/Website/PractitionerPortal'
import Login from './features/Auth/Login'
import Dashboard from '../src/features/Admin/Dashboard'
import Dasbord from '../src/features/Practitioner/Dasbord'



function App() {
  return (
    <>
      <Router>
        {/* <Navbar/> */}
        <Routes>
          <Route path='/' element={<HeroSection />} />
          <Route path='/PatientPortal' element={<PatientPortal />} />
          <Route path='/PractitionerPortal' element={<PractitionerPortal/>} />
          <Route path='/patient/login' element={<PatientPortal />}/>
          <Route path='/Login' element={<Login/>} />
          <Route path='/admin/dashboard' element={<Dashboard/>} />
          <Route path='/admin/practitioner-dashboard' element={<Dasbord/>} />
          
        </Routes>
      </Router>
      
    </>
  )
}

// farhan 
export default App