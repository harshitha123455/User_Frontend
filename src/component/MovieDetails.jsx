import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Routes,
} from "react-router-dom";
import logo from "../asset/LOGO.png";
import Button from "@mui/joy/Button";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import "../App.css";


const MovieDetails = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <div>


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


    <div style={{position: "relative", bottom: "350px"}}>
      <u>
        <h1 style={{ position: "relative",top:'25px' ,left: "650px", color: "" }}>
          Movie Details
        </h1>
      </u>

      <div style={{ padding: "70px"}}>
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
              <h1 className="movie-title">Movie Title</h1>
              <p className="movie-genre">Genre: Action, Thriller</p>
              <p className="movie-duration">Duration: 2h 30min</p>
              <p className="movie-director">
                Movie Director: Shalom Aby Abraham
              </p>
              <p className="movie-releasedate">Release Date: 21/06/2023</p>
              <p className="movie-cast">
                Cast: Shah Rukh Khan, Deepika Padukone, John Abraham
              </p>
              <p className="movie-reviews">Reviews: Good</p>
              <p className="movie-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                pretium elit et dolor dapibus tincidunt. Nulla eget mi
                consequat, viverra dui non, pulvinar arcu. Sed sed fringilla
                felis. Sed sit amet aliquam purus, ac blandit mauris. Donec
                dapibus consectetur massa, nec dignissim tortor malesuada at.
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
                  <form class="form-group">
                    <div>
                      <label for="name">Name:</label>
                      <input type="text" id="name" name="name" required></input>
                    </div>

                    <div>
                      <label for="email">Email:</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                      ></input>
                    </div>

                    <div>
                      <label for="phone">Phone Number:</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                      ></input>
                    </div>
                    <div>
                      <label for="date">Date:</label>
                      <input type="date" id="date" name="date" required></input>
                    </div>

                    <div>
                      <label for="tickets">Number of Tickets:</label>
                      <input
                        type="number"
                        id="tickets"
                        name="tickets"
                        required
                      ></input>
                    </div>
                    <Link to="/screen-select">
                      <button
                        style={{
                          position: "relative",
                          top: "10px",
                          left: "60px",
                        }}
                      >
                        Select Screens
                      </button>
                    </Link>
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
