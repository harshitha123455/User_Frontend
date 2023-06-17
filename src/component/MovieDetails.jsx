import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Routes,
  useParams,
} from "react-router-dom";
import logo from "../asset/LOGO.png";
import Button from "@mui/joy/Button";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import { useState, useEffect } from "react";
import UserService from "../service/user-service";
import { useNavigate } from "react-router-dom";
import "../App.css";

const MovieDetails = () => {
  const userService = new UserService();
  const navigate = useNavigate();
  const { id } = useParams();
  const [open, setOpen] = React.useState(false);
  const [shows, setShows] = useState([]);
  const [moviedetail, setMovieDetail] = useState(null);

  useEffect(() => {
    userService.getMoviebyId(id).then((data) => {
      setMovieDetail(data);
    });
  }, []);
  const [formData, setFormData] = useState({
    mid: id,
    name: "",
    email: "",
    phone: "",
    date: "",
    tickets: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/screen-select", { state: { formData } });
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

      <div style={{ position: "relative", bottom: "350px" }}>
        <u>
          <h1
            style={{
              position: "relative",
              top: "25px",
              left: "650px",
              color: "",
            }}
          >
            Movie Details
          </h1>
        </u>

        <div style={{ padding: "70px" }}>
          <div
            style={{
              padding: "110px",
              backgroundColor: "white",
              borderRadius: "50px",
              position: "relative",
              bottom: "25px",
              paddingBottom: "8px",
            }}
          >
            <div className="movie-details-container">
              <div className="movie-poster">
                {/* <img src="movie-poster.jpg" alt="Movie Poster" /> */}
              </div>

              <div
                className="movie-info"
                style={{ position: "relative", bottom: "70px" }}
              >
                <h1 className="movie-title">
                  {moviedetail ? moviedetail.name : ""}
                </h1>
                <p className="movie-genre">
                  Genre: {moviedetail ? moviedetail.genre.join(", ") : ""}{" "}
                </p>
                <p className="movie-duration">
                  Duration: {moviedetail ? moviedetail.duration : ""}{" "}
                </p>
                <p className="movie-director">
                  Movie Director: {moviedetail ? moviedetail.director : ""}
                </p>
                <p className="movie-releasedate">
                  Release Date: {moviedetail ? moviedetail.releaseDate : ""}{" "}
                </p>
                <p className="movie-cast">
                  Cast: {moviedetail ? moviedetail.cast.join(", ") : ""}
                </p>
                <p className="movie-description">
                  {moviedetail ? moviedetail.description : ""}
                </p>
              </div>
            </div>

            {/* "Book Now" Button Code + Filling Personal Details */}

            <React.Fragment>
              <div class="bla-on-hov">
                <Button
                  style={{
                    position: "relative",
                    bottom: "60px",
                    right: "1px",
                    color: "",
                  }}
                  variant="outlined"
                  color="neutral"
                  onClick={() => setOpen(true)}
                >
                  Book Now
                </Button>
              </div>
              <Modal
                aria-labelledby="modal-title"
                aria-describedby="modal-desc"
                open={open}
                onClose={() => setOpen(false)}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Sheet
                  variant="outlined"
                  sx={{
                    maxWidth: 500,
                    borderRadius: "md",
                    p: 3,
                    boxShadow: "lg",
                  }}
                >
                  <ModalClose
                    variant="outlined"
                    sx={{
                      top: "calc(-1/4 * var(--IconButton-size))",
                      right: "calc(-1/4 * var(--IconButton-size))",
                      boxShadow: "0 2px 12px 0 rgba(0 0 0 / 0.2)",
                      borderRadius: "50%",
                      bgcolor: "background.body",
                    }}
                  />
                  <Typography
                    component="h2"
                    id="modal-title"
                    level="h4"
                    textColor="inherit"
                    fontWeight="lg"
                    mb={1}
                  >
                    Please Enter the Details.
                  </Typography>
                  <Typography id="modal-desc" textColor="text.tertiary">
                    <form className="form-group" onSubmit={handleSubmit}>
                      <div>
                        <label htmlFor="name">Name:</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div>
                        <label htmlFor="email">Email:</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div>
                        <label htmlFor="phone">Phone Number:</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div>
                        <label htmlFor="date">Date:</label>
                        <input
                          type="date"
                          id="date"
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div>
                        <label htmlFor="tickets">Number of Tickets:</label>
                        <input
                          type="number"
                          id="tickets"
                          name="tickets"
                          value={formData.tickets}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <button
                        type="submit"
                        style={{
                          position: "relative",
                          top: "10px",
                          left: "60px",
                        }}
                      >
                        Select Screens
                      </button>
                    </form>
                  </Typography>
                </Sheet>
              </Modal>
            </React.Fragment>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MovieDetails;
