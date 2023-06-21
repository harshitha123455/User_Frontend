import React from "react";
import logo from "../asset/LOGO.png";
import arrow from "../asset/scroll.png";
import Fade from 'react-reveal/Fade';

import Image1 from "../asset/b.jpg";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Routes,
} from "react-router-dom";
import { useState, useEffect } from "react";
import UserService from "../service/user-service";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

// const highlight = [
//   {
//     mainMovImage: Image1,
//     mainName: "No Way Home",
//   },
// ];

const HomePage = () => {
  const zoomOutStyles = {
    transition: 'transform 0.5s ease',
  };

  const zoomOutHoverStyles = {
    transform: 'scale(0.9)', // Adjust the value to control the zoom level
  };

  const userService = new UserService();
  const [moviedetails, setMovieDetails] = useState([]);
  const [highlight, setHighlight] = useState([]);
  useEffect(() => {
    userService.getAllMovies().then((data) => {
      setMovieDetails(data);
    });
    userService.getHighlight().then((data) => {
      console.log(data);
      setHighlight(data);
    });
  }, []);
  

  return (
    <div>
      {/* Navbar */}
      {/* <ul className="navbar-items">
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
            href="/about"
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
      </ul> */}

      <img
        src={arrow}
        style={{
          position: "absolute",
          zIndex: "999",
          width: "100px",
          left: "700px",
          top:"620px",
          filter: "invert(100%)",
        }}
        alt="Arrow"
      />
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={true}
          transitionTime={1000}
          interval={3000}
        >
          {highlight.map((highlightItem, index1) => (
            <div key={index1} style={{ height: "750px", backgroundColor: "rgba(0, 0, 0, 1)" }}>
              <Link
                to={`/movie-details/${highlightItem.movie.id}`}
                style={{ textDecoration: "none" }}
              >
                <button
                  style={{
                    position: "relative",
                    top: "45px",
                    left: "42px",
                    zIndex: 1,
                  }}
                >
                  Book Tickets
                </button>
              </Link>

              <div style={{ textAlign: "center", position: "relative" }}>
                <img
                  className="bg"
                  src={highlightItem.largePosterUrl}
                  alt="Sorry"
                  style={{
                    width: "100%",
                    maxHeight: "1000px",
                    objectFit: "cover",
                    marginBottom: "-20px",
                  }}
                />
                <h1
                  style={{
                    color: "white",
                    width: "500px",
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  {highlightItem.movie.name}
                </h1>
              </div>
            </div>
          ))}
        </Carousel>
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          marginLeft: "48px",
          position: "relative",
          bottom: "300px",
        }}
      >
        {moviedetails.map((moviedetail, index) => (
          <Link
            key={index}
            to={`/movie-details/${moviedetail.id}`} // Update the to prop with a unique identifier
            style={{ textDecoration: "none" }}
          >
            <div>
            
            <div         style={zoomOutStyles}
      onMouseEnter={(e) => e.target.style.transform = 'scale(0.9)'}
      onMouseLeave={(e) => e.target.style.transform = ''}> 
            <div   
              style={{
                margin: "10px",
                marginLeft: "40px",
                marginRight: "40px",
              }}
            >
              <Fade delay={400} >
              <img
                className="bg"
                src={moviedetail.imageUrl}
                alt="Sorry"
                style={{
                  height: "400px",
                  borderStyle: "solid",
                  borderColor: "white",
                  borderRadius: "10px",
                }}
              />
              <h3
                style={{
                  color: "white",
                  textAlign: "center",
                }}
              >
                {moviedetail.name}
              </h3>
              </Fade>
            </div></div>
            
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
