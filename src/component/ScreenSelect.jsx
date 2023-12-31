import React from "react";
import logo from "../asset/LOGO.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import UserService from "../service/user-service";
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';


const ScreenSelect = () => {
  const hoverUpStyles = {
    transition: 'transform 0.3s ease',
  };

  const hoverUpHoverStyles = {
    transform: 'translateY(-10px)', // Adjust the value to control the amount of upward movement
  };

  const userService = new UserService();
  const location = useLocation();
  const navigate = useNavigate();

  const [shows, setShows] = useState([]);
  const [formData, setFormData] = useState(location.state?.formData || {});

  useEffect(() => {
    userService.getAllShowsByMovieId(formData.mid).then(async (data) => {
      const updatedShows = await Promise.all(
        data.map(async (show) => {
          const timeTable = await userService.getTimeTableByShowId(show.id);
          return {
            ...show,
            screen: timeTable.screen,
            date: timeTable.date,
          };
        })
      );
      setShows(updatedShows);
    });
  }, []);

  const screenSelect = (show) => {
    navigate("/ticket-selection", { state: { formData: { ...formData, show: show, date: show.date } } });
  };
  
  

  return (
    <div>
      <div>
        {" "}
        {/* Navbar */}
        <ul className="navbar-items">
          <img
            src={logo}
            alt="No Logo"
            style={{
              position: "relative",
              left: "80px",
              bottom: "220px",
              width: "150px",
              zIndex: 1,
            }}
          />
          <li>
            <a
              href="/"
              style={{
                position: "relative",
                left: "1040px",
                bottom: "170px",
                zIndex: 1,
              }}
            >
              Home
            </a>
          </li>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <li>
            <a
              href="/movies"
              style={{
                position: "relative",
                left: "1040px",
                bottom: "170px",
                zIndex: 1,
              }}
            >
              About
            </a>
          </li>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <li>
            <a
              href="/contact"
              style={{
                position: "relative",
                left: "1040px",
                bottom: "170px",
                zIndex: 1,
              }}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>

      <u>
      <Zoom right>
        <h1
          style={{
            position: "relative",
            left: "650px",
            bottom: "80px",
            color: "white",
          }}
        >
          Select Screen
        </h1>
        </Zoom>
      </u>

       
        <div           style={hoverUpStyles}
      onMouseEnter={(e) => e.target.style.transform = 'translateY(-10px)'}
      onMouseLeave={(e) => e.target.style.transform = ''}> <Fade duration={1900}>
      <div style={{ position: "relative", bottom: "80px" ,width:'700px'}}>
        <div style={{ display: "flex", flexWrap: "wrap", marginLeft: "70px" }}>
          {shows.map((show, index) => (
            <button
            key={index}
            onClick={() => screenSelect(show)}
            style={{
              textDecoration: "none",
              color: "black",
              backgroundColor: "white",
              borderRadius: "15px",
              margin: "50px",
              padding: "10px",
              paddingLeft: "30px",
              paddingRight: "30px",
            }}
          >
            <h1 className="screen-number">{show.screen.name}</h1>
            <p className="time-movie">Time - {show.time}</p>
            <p className="available-seats">
              Available Seats - {show.seatingArrangement.availableSeats}
            </p>
            <p className="date">Date - {show.date}</p>
          </button>
          ))}
        </div>
      </div></Fade>
      </div>
      
    </div>
  );
};

export default ScreenSelect;
