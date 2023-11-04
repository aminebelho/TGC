import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Navbar from './components/navbar/navbar'
import Search from './components/search/search'
import TodaysPicks from './components/todaysPicks/todaysPicks'
import FindAlternatives from './components/findAlternatives/findAlternatives';

function App() {

  return (
    <div className='App'>
      <Navbar />
      <Search />
      <TodaysPicks />
      <FindAlternatives />
    </div>
  )
}

export default App
