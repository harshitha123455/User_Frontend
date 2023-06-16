import React from "react";
import Image1 from "../asset/b.jpg";
import Image2 from "../asset/avatar.png";
import Image3 from "../asset/fastx.png";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Routes,
} from "react-router-dom";

const moviedetails = [
  {
    movImage: Image2,
    name: "Avatar",
  },
  {
    movImage: Image3,
    name: "Fast X",
  },
  {
    movImage: Image2,
    name: "Avatar",
  },
  {
    movImage: Image3,
    name: "Fast X",
  },
];

const HomePage = () => {
  return (
    <div>
      <div>
        <img
          class="bg"
          src={Image1}
          alt="Sorry"
          style={{ width: "1519px", height: "900px", objectFit: "cover" }}
        />
        <h1
          style={{
            color: "white",
            position: "relative",
            bottom: "590px",
            left: "670px",
            width: "500px",
          }}
        >
          No Way Home
        </h1>
        <Link to="/movie-details">
          <button
            style={{ position: "relative", bottom: "550px", left: "730px" }}
          >
            Book Tickets
          </button>
        </Link>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", marginLeft: "48px" }}>
        {moviedetails.map((moviedetail, index) => (
          <Link
            key={index}
            to={`/movie-details/${index}`} // Update the to prop with a unique identifier
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
                src={moviedetail.movImage}
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
