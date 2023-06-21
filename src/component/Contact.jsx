import React from "react";
import contact from "../asset/contact.mp4";
import logo from "../asset/LOGO.png";
import phone from "../asset/phone.png";
import movie2 from "../asset/movie2.png";
import c1 from "../asset/c1.mp4";
import c2 from "../asset/c2.mp4";
import { Carousel } from 'antd';
import '../App.css'
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

const Contact = () => {
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
      </ul>

      <video
        autoPlay
        muted
        loop
        src={contact}
        style={{
          width: "1520px",
          height: "780px",
          position: "relative",
          bottom: "376px",
          objectFit: "cover",
          backgroundColor: "50px",
        }}
      ></video>
    
      <div>
        <h1
          style={{
            position: "relative",
            bottom: "850px",
            left: "100px",
            color: "white",
            zIndex: 123,
          }}
        >
          Contact Us
        </h1>

        <p
          style={{
            position: "relative",
            bottom: "860px",
            left: "100px",
            color: "white",
            zIndex: 123,
          }}
        >
          Communication is the fuel that keeps relationships alive.
        </p>
      </div>
      
      <div><Fade>
        <img
          src={phone}
          alt="No"
          style={{ position: "relative", bottom: "330px", left: "850px" }}
        /> </Fade>
        <Zoom cascasde>
        <div
          style={{
            color: "white",
            width: "650px",
            position: "relative",
            left: "120px",
            bottom: "900px",

            textAlign: "center",
            fontSize: "16px",
          }}
        >
          <h3>
            We are excited to connect with you and provide the assistance you
            need.
          </h3>
          <p>
            Your feedback is valuable to us as we continuously strive to improve
            our services. We are dedicated to providing the best movie booking
            experience by offering a seamless and convenient platform to book
            tickets for the latest movies.
          </p>
        </div></Zoom>

        <div
          style={{
            backgroundColor: "white",
            width: "650px",
            height: "490px",
            position: "relative",
            left: "120px",
            bottom: "900px",
            borderRadius: "30px",
            textAlign: "center",
            fontSize: "16px",
          }}
        >
          <h4 style={{ position: "relative", top: "20px" }}>
            Phone : +91 6234879808
          </h4>
          <h4 style={{ position: "relative", top: "5px" }}>
            Email : showtimesupport@gmail.com
          </h4>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.8174890503847!2d77.73105289999997!3d12.983522400000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae11e5387989b3%3A0x1480fe5c1c38efd4!2sIBM%20India%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1687316580925!5m2!1sen!2sin"
            width="630"
            height="390"
            style={{border:'0'}}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>


        </div>

        {/* <div>
        ReactDOM.render(
          <Carousel autoplay>
      <div className="carousel-item">
        <div className="content">
          <h3></h3>
          <video src={c1} />
        </div>
      </div>
      <div className="carousel-item">
        <div className="content">
          <h3></h3>
        </div>
      </div>
      <div className="carousel-item">
        <div className="content">
          <h3>Slide 3</h3>
        </div>
      </div>
      <div className="carousel-item">
        <div className="content">
          <h3>Slide 4</h3>
        </div>
      </div>
    </Carousel>
        </div> */}
      </div>
    </div>
  );
};

export default Contact;
