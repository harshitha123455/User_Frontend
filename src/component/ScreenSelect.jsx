import React from "react";
import logo from "../asset/LOGO.png";
import { Link } from "react-router-dom";

const screens = [
  {
    id: 1,
    available_seats: 100,
    time: "7:00 AM",
  },
  {
    id: 2,
    available_seats: 100,
    time: "11:00 AM",
  },
  {
    id: 3,
    available_seats: 50,
    time: "2:00 PM",
  },
  {
    id: 2,
    available_seats: 100,
    time: "6:00 PM",
  },
  {
    id: 3,
    available_seats: 100,
    time: "6:00 PM",
  },
  {
    id: 2,
    available_seats: 100,
    time: "9:00 PM",
  },

];

const ScreenSelect = () => {
  return (
    <div >

<div> {/* Navbar */}
      <ul className="navbar-items">
        <img
          src={logo}
          alt="No Logo"
          style={{position: "relative", left: "80px" ,bottom:'220px', width:'150px',zIndex:1 }}
        />
        <li>
          <a href="/" style={{ position: "relative", left: "1040px",bottom:'170px' ,zIndex:1}}>
            Home
          </a>
        </li>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <li>
          <a href="/movies" style={{ position: "relative", left: "1040px",bottom:'170px' ,zIndex:1}}>
            Movies
          </a>
        </li>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <li>
          <a href="/contact" style={{ position: "relative", left: "1040px",bottom:'170px' ,zIndex:1}}>
            Contact
          </a>
        </li>
      </ul></div>


      <u>
        <h1 style={{ position: "relative", left: "650px", bottom: "260px", color:'white' }}>
          Select Screen
        </h1>
      </u>

      <div style={{ position: "relative", bottom: "280px" }}>
      <div style={{ display: "flex",flexWrap:"wrap" ,marginLeft:"40px" }}>
      {screens.map((screen, index) => (
        <Link
        key={index}
        to={`/ticket-selection`}
        style={{ textDecoration: "none" }}
      >
        <div
          key={index}
          style={{
            color:'black',
            backgroundColor: "white",
            borderRadius: "15px",
            margin: "50px",
            padding: "10px",
            paddingLeft:"30px",
            paddingRight:"30px",
            
          }}
        >
          <h1 className="screen-number">Screen No - {screen.id}</h1>
          <p className="time-movie">Time - {screen.time}</p>
          <p className="available-seats">
            Available Seats - {screen.available_seats}
          </p>
        </div>
        </Link>
      ))}
      </div>
      </div>
    </div>
  );
};

export default ScreenSelect;
