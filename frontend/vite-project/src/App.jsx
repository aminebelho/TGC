import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import LandingPage from './pages/landingPage';
import AboutPage from './pages/AboutPage';
import Navbar from './components/navbar/navbar';
import ContributeAddPage from './pages/contributeAddPage';
import ContributeMainPage from './pages/ContributeMainPage';
import ContributeDonatePage from './pages/contributeDonatePage';


function App() {

  return (
      <div className='App'>
        <Navbar />
        <Routes >
          <Route index element={<LandingPage />}/>
          <Route path='/landing' element={<LandingPage />}/>
          <Route path='/about' element={<AboutPage />}/>
          <Route path='/contributeMain' element={<ContributeMainPage />}/>
          <Route path='/contributeAdd' element={<ContributeAddPage />}/>
          <Route path='/contributeDonate' element={<ContributeDonatePage />}/>


        </Routes>

      </div>
  )
}

export default App
