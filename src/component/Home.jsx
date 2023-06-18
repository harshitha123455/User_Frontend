import React from "react";
import logo from "../asset/LOGO.png";
import arrow from "../asset/scroll.png";
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

// const highlight = [
//   {
//     mainMovImage: Image1,
//     mainName: "No Way Home",
//   },
// ];

const HomePage = () => {
  const userService = new UserService();
  const [moviedetails, setMovieDetails] = useState([]);
  const [highlight, setHighlight] = useState([]);
  useEffect(() => {
    userService.getAllMovies().then((data) => {
      setMovieDetails(data);
    });
    userService.getHighlight().then((data) => {
      setHighlight([
        {
          mainMovImage: "http://localhost:8880/highlight/highlight.jpg",
          mainName: data.name,
<<<<<<< HEAD
          id: data.id,
        }
=======
        },
>>>>>>> 3975b3d9aac78d7df806c6dcead74dac42678fc9
      ]);
    });
  }, []);

  return (
    <div>
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
        {highlight.map((highlight, index1) => (
          <div>
            <Link
              // key={index1}
              // to={`/movie-details/${index1}`}    // Update the to prop with a unique identifier

              to={`/movie-details/${highlight.id}`}
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

            <div style={{ textAlign: "center" }}>
              <img
                className="bg"
                src={highlight.mainMovImage}
                alt="Sorry"
                style={{
                  width: "1519px",
                  height: "900px",
                  position: "relative",
                  bottom: "376px",
                  objectFit: "cover",
                }}
              />
              <h1
                style={{
                  color: "white",
                  position: "relative",
                  bottom: "980px",

                  width: "500px",
                }}
              >
                {highlight.mainName}
              </h1>
            </div>
          </div>
        ))}
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
            <div
              style={{
                margin: "10px",
                marginLeft: "40px",
                marginRight: "40px",
              }}
            >
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
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
