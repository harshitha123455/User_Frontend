import React from "react";
import logo from "../asset/LOGO.png";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import UserService from "../service/user-service";

const ScreenSelect = () => {
  const userService = new UserService();
  const location = useLocation();

  const [shows, setShows] = useState([]);
  const [formData, setFormData] = useState(location.state?.formData || {});

  useEffect(() => {
    console.log(formData);
    userService.getAllShowsByMovieId(formData.mid).then((data) => {
      setShows(data);
      console.log(data);
    });
  }, []);

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
              Movies
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
        <h1
          style={{
            position: "relative",
            left: "650px",
            bottom: "260px",
            color: "white",
          }}
        >
          Select Screen
        </h1>
      </u>

      <div style={{ position: "relative", bottom: "280px" }}>
        <div style={{ display: "flex", flexWrap: "wrap", marginLeft: "40px" }}>
          {shows.map((show, index) => (
            <Link
              key={index}
              to={`/ticket-selection`}
              style={{ textDecoration: "none" }}
            >
              <div
                key={index}
                style={{
                  color: "black",
                  backgroundColor: "white",
                  borderRadius: "15px",
                  margin: "50px",
                  padding: "10px",
                  paddingLeft: "30px",
                  paddingRight: "30px",
                }}
              >
                <h1 className="screen-number">Screen No - {show.id}</h1>
                <p className="time-movie">Time - {show.time}</p>
                <p className="available-seats">
                  Available Seats - {show.available_seats}
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
