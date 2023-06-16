import React from "react";
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
    <div>
      <u>
        <h1 style={{ position: "relative", left: "650px" }}>
          Screen Select
        </h1>
      </u>

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
  );
};

export default ScreenSelect;
