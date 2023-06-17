import HomePage from "./component/Home";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import { loadFull } from "tsparticles"
import React, { useCallback } from 'react'
import Particles from 'react-particles';
import particlesOption from "./particles.json"
import { BrowserRouter as Router,Route,Link,Switch, Routes} from 'react-router-dom';
import MovieDetails from "./component/MovieDetails";
import TicketSelection from "./component/TicketSelection";
import ScreenSelect from "./component/ScreenSelect";
import Payment from "./component/Payment";
import { useState } from "react";


const App = () => {
  
  const particlesInit = useCallback(main => {
    loadFull(main);
  },[])

  return ( 
    <div>
    <Navbar/>
    <Particles options={particlesOption} init={particlesInit}/>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movie-details" element={<MovieDetails />} />
        <Route path="/ticket-selection" element={<TicketSelection />} />
        <Route path="/screen-select" element={<ScreenSelect />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </Router>
    {/* <Footer/> */}
  
    </div>
   );
}
 
export default App;