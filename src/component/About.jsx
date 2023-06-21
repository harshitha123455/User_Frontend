import React from "react";
import about from "../asset/about.mp4";
import logo from "../asset/LOGO.png";
import movie1 from "../asset/movie1.png";
import movie2 from "../asset/movie2.png";
import movie22 from "../asset/one.jpg";
import i1 from "../App.css";
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

const About = () => {
  return (
    <div>
            <div style={{position:'relative',top:'149px'}}>
      {/* Navbar */}
      <div>
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
      </ul> </div></div>

      <video
        autoPlay
        muted
        loop
        src={about}
        style={{
          width: "1519px",
          height: "780px",
          position: "relative",
          bottom: "246px",
          objectFit: "cover",
        }}
      ></video>

      <div>
      
        <h1
          style={{
            position: "relative",
            bottom: "750px",
            left: "100px",
            color: "white",
            zIndex: 123,
          }}
        > 
          About Us
        </h1>
        
        <p
          style={{
            position: "relative",
            bottom: "760px",
            left: "100px",
            color: "white",
            zIndex: 123,
          }}
        >   Welcome to a world of movies and extraordinary memories. 
        </p>
      </div>

      <div>
        <img
          src={movie1}
          alt="No"
          style={{ position: "relative", bottom: "260px", left: "100px" }}
        />
        <Fade>
        <div
          style={{
            color: "white",
            width: "650px",
            position: "relative",
            left: "700px",
            bottom: "700px",
            justifyContent: "center",
            alignItems:'center',
            fontSize: "16px",
          }}
        >
          "At ShowTime, we believe in the power of cinema to inspire, entertain,
          and create unforgettable experiences. We are a team of movie
          enthusiasts who are passionate about connecting movie lovers with
          their favorite films, providing a seamless platform for booking
          tickets, and enhancing the overall movie-going experience. Our mission
          is to bring the magic of the big screen to your fingertips. With a
          user-friendly interface, comprehensive movie listings, and convenient
          booking options, we aim to make your movie journey effortless and
          enjoyable. Whether you're a fan of blockbuster action films, heartfelt
          dramas, spine-chilling thrillers, or heartwarming comedies, we've got
          you covered.
          <br></br> <br></br>We collaborate with theaters to bring you the
          latest releases, special screenings, and exclusive events. From the
          comfort of your home or on the go, you can explore movie showtimes,
          choose your preferred seats, and secure your tickets with just a few
          clicks. But we're not just about booking tickets. We're about creating
          an immersive movie experience. Our website features in-depth movie
          information, trailers, reviews, and recommendations to help you make
          informed choices and discover new cinematic gems. We want to ignite
          your passion for film and help you explore the vast world of cinema.
        </div></Fade>
      </div>

      <div>
        <img
          src={movie2}
          alt="No"
          style={{ position: "relative", bottom: "480px", left: "830px" }}
        />
        <Zoom cascade>
        <div
          style={{
            color: "white",
            width: "650px",
            position: "relative",
            left: "100px",
            bottom: "980px",
            textAlign: "center",
            fontSize: "16px",
          }}
        >
          <h3>Our Mission</h3>
          <p>
            We are dedicated to providing the best movie booking experience by
            offering a seamless and convenient platform to book tickets for the
            latest movies.
          </p>

          <br></br><h3>Wide Movie Selection</h3>
              <p>
                Partnering with top cinemas and theaters, we bring you a diverse range of movies, including
                the latest blockbusters, independent films, and special screenings.
              </p>

              <br></br><h3>Privacy and Security</h3>
              <p>
                We prioritize the protection of your personal information and transactions, ensuring a secure
                and safe booking process.
              </p>
        </div></Zoom>
      </div>

          {/* <h1 style={{color:'white',position: "relative",
              bottom: "840px",
              left:'650px',}}>Meet Our Team </h1>
      <div style={{
              padding: "110px",
              backgroundColor: "",
              borderRadius: "50px",
              position: "relative",
              bottom: "830px",
              left:'65px',
              width:'1150px',
              height:'250px',
              paddingBottom: "8px",
            }}>


<div class="team-member">
  <img src={movie22} alt="Team Member 1" class="member-img" />
  <div class="member-overlay" style={{ position:'absolute',
  bottom: '10px',
  left: '21px',
  width: '300px',
  height: '300px'}}>
    <h3>John Doe</h3>
    <p>Position: Developer</p>
  </div>
</div>




      </div> */}


    </div>
  );
};

export default About;
