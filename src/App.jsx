import { useEffect, useState } from 'react'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { NavLink, Route, Routes } from 'react-router-dom';
import CurrentWeather from './CurrentWeather';
import DayDetails from './DayDetails';
import Sidebar from './components/Sidebar';
import Header from './components/Header';


function App() {
  const [navToggle, setNavToggle] = useState(false);
  const handleNavToggle = () => {
    // alert("Sidebar Toggle");
    setNavToggle(!navToggle);
  };
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
          <Route path='/day-details' element={<DayDetails />} />
        </Routes>
      </div>
    </>

  )
}

export default App
