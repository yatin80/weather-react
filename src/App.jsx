import { useEffect, useState } from 'react'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { NavLink, Route, Routes } from 'react-router-dom';
import CurrentWeather from './CurrentWeather';
import DayDetails from './DayDetails';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import ForecastDetails from './ForecastDetails';


function App() {
  const [navToggle, setNavToggle] = useState(false);
  const handleNavToggle = () => {
    // alert("Sidebar Toggle");
    setNavToggle(!navToggle);
  };
  if ("geolocation" in navigator) {
    // Geolocation is available
    // alert("Geolocation is available");
  } else {
    // Geolocation is not available
    alert("Geolocation is not available Please enable your Location");
  }
  
  return (

    <>
      <Sidebar navToggle={navToggle} />
      {navToggle && <div className='backDrop' onClick={handleNavToggle}></div>}
      <Header handleSidebarToggle={handleNavToggle} />
      <div
        className='zindex-5 position-relative'
      // style={{ paddingTop: "5rem" }}
      >
        <Routes>
          <Route path='/' element={<CurrentWeather />} />
          <Route path='/forecast/:date' element={<ForecastDetails />} />
          <Route path='/day-details' element={<DayDetails />} />
        </Routes>
      </div>
    </>

  )
}

export default App
