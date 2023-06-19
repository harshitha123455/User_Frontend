import React, { useState, useEffect } from "react";
import "../TicketSelect.css";
import curve from '../asset/curve.png'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Routes,
  useLocation,
} from "react-router-dom";
import logo from "../asset/LOGO.png";
import { useNavigate } from "react-router-dom";
import UserService from "../service/user-service";

const Seat = ({ number, selected, disabled, onClick }) => {
  const seatClassName = `seat ${selected ? "selected" : ""} ${
    disabled ? "disabled" : ""
  }`;

  return (
    <div className={seatClassName} onClick={disabled ? null : onClick}>
      {number}
    </div>
  );
};

const TicketSelect = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const userService = new UserService();

  const [formData, setFormData] = useState(location.state?.formData || {});
  const [showPopup, setShowPopup] = useState(false);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [limit, setLimit] = useState(0);
  const [tempBookedSeats, setTempBookedSeats] = useState([]);
  const [bookedSeats, setBookedSeats] = useState([]);
  const normalRate = formData.show.normalRate;
  const premiumRate = formData.show.premiumRate;
  const executiveRate = formData.show.executiveRate;

  // Array of booked seats received from the backend
  // const bookedSeats = [
  //   { seatNumber: "A1", disabled: true },
  //   { seatNumber: "B3", disabled: true },
  //   { seatNumber: "D5", disabled: true },
  //   { seatNumber: "H5", disabled: true },
  // ];

  useEffect(() => {
    const fetchReservedSeats = async () => {
      const reservedSeats = await userService.getReservedSeats(
        formData.show.id
      );
      const convertedSeats = convertToSeatNumbers(reservedSeats);
      setTempBookedSeats(convertedSeats);
      setLimit(parseInt(formData.tickets));
    };

    fetchReservedSeats();
  }, []);

  useEffect(() => {
    const updatedBookedSeats = tempBookedSeats.map((seatNumber) => ({
      seatNumber,
      disabled: true,
    }));

    setBookedSeats(updatedBookedSeats);
  }, [tempBookedSeats]);

  const handleSeatClick = (seatNumber) => {
    if (selectedSeats.length < limit) {
      if (selectedSeats.includes(seatNumber)) {
        setSelectedSeats(selectedSeats.filter((seat) => seat !== seatNumber));
      } else {
        setSelectedSeats([...selectedSeats, seatNumber]);
      }
    } else if (selectedSeats.includes(seatNumber)) {
      setSelectedSeats(selectedSeats.filter((seat) => seat !== seatNumber));
    }
  };

  const calculateTotalAmount = () => {
    let totalAmount = 0;

    for (const seat of selectedSeats) {
      const row = seat.charAt(0);
      let ratePerSeat = row === "I" || row === "J" ? premiumRate : normalRate;
      if (row === "G" || row === "H") {
        ratePerSeat = executiveRate;
      }
      totalAmount += ratePerSeat;
    }

    return totalAmount;
  };

  const renderSeats = () => {
    const rows = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
    const seatsPerRow = 10;
    const seats = [];

    for (let seatNumber = 1; seatNumber <= seatsPerRow; seatNumber++) {
      const seatRow = [];

      for (let row of rows) {
        const seatId = `${row}${seatNumber}`;
        const isSelected = selectedSeats.includes(seatId);
        const isDisabled = bookedSeats.some(
          (bookedSeat) =>
            bookedSeat.seatNumber === seatId && bookedSeat.disabled
        );

        seatRow.push(
          <Seat
            key={seatId}
            number={seatId}
            selected={isSelected}
            disabled={isDisabled}
            onClick={() => handleSeatClick(seatId)}
          />
        );
      }

      seats.push(
        <div key={seatNumber} className="seat-row">
          {seatRow}
        </div>
      );
    }

    return seats;
  };

  const totalAmount = calculateTotalAmount();

  // Convert seat numbers to numeric values
  const numericSeatNumbers = selectedSeats.map((seatNumber) => {
    const row = seatNumber.charAt(0).charCodeAt(0) - 64;
    const seat = parseInt(seatNumber.slice(1));
    return (row - 1) * 10 + seat;
  });

  // Convert numeric seat numbers to seat numbers
  const convertToSeatNumbers = (numericSeats) => {
    var seats = [];
    numericSeats.map((numericSeat) => {
      const row = String.fromCharCode(Math.floor((numericSeat - 1) / 10) + 65);
      const seat = ((numericSeat - 1) % 10) + 1;
      seats.push(row + seat);
    });
    return seats;
  };

  // Send numeric seat numbers to the backend
  const sendDataToBackend = () => {
    // Make an API call to send the numeric seat numbers to the backend
    // log the seat numbers to the console
    console.log(numericSeatNumbers);

    if (selectedSeats.length < limit) {
      setShowPopup(true);
    } else {
      navigate("/payment", {
        state: {
          formData: {
            ...formData,
            selectedSeats: numericSeatNumbers,
            totalAmount: totalAmount,
          },
        },
      });
    }
  };

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
        
      <div
        style={{
          margin: "130px",
          padding: "40px",
          backgroundColor: "white",
          borderRadius: "30px",
          position: "relative",
          bottom: "390px",
          height:"100vh"
        }}
      >
        <div style={{ position: "relative", left: "50px" }}>
          <h1 style={{ position: "relative", left: "30px" }}>Select Your Seats</h1>
          <div>
            <h3 style={{ position: "relative", left: "560px",top:'10px' }}>Screen</h3>
            <h2 style={{ position: "relative", left: "320px",bottom:'10px' }}>
              .....................................................................................
            </h2>
            <div style={{ position: "relative", left: "60px",top:'85px' }}>
            <h4 >Classic - [A-F] - </h4> <p style={{position:'relative',left:'120px',bottom:'41px'}}>₹ 100</p>
            <h4 >Executive - [G-H] - </h4> <p style={{position:'relative',left:'145px',bottom:'40px'}}>₹ 200</p>
            <h4 >Premium - [I-J] - </h4> <p style={{position:'relative',left:'130px',bottom:'40px'}}>₹ 300</p>
            </div>
            <div style={{ position: "relative", bottom: "273px" }} className="seat-container">{renderSeats()}</div>
              <div style={{position:'relative',bottom:'245px',left:'58px',backgroundColor:'',width:'700px'}}>
                <p>
                  <h4 style={{fontSize:'16.38px'}}>Selected Seats : {selectedSeats.join(", ")}</h4>
                </p>
                <p>
                  <h4>Total Amount : {`₹ ${totalAmount}`}</h4>
                </p>
              </div>
              
              <div
                style={{
                  position: "relative",
                  left: "920px",
                  bottom: "628px",
                  backgroundColor: "white",
                  height: "130px",
                  width: "200px",
                }}
              >
                <button
                  style={{ position: "relative", left: "7px" }}
                  onClick={sendDataToBackend}
                >
                  Confirm Booking
                </button>
                {showPopup && (
                  <div className="popup">
                    <p>
                      Please select {limit} seat{limit > 1 ? "s" : ""}!
                    </p>
                    <button
                      style={{ position: "relative", left: "45px" }}
                      onClick={() => setShowPopup(false)}
                    >
                      OK
                    </button>
                  </div>
                )}
              </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketSelect;
