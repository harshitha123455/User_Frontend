import React, { useState, useEffect } from "react";
import "../TicketSelect.css";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Routes,
  useLocation
} from "react-router-dom";
import logo from "../asset/LOGO.png";
import { useNavigate } from "react-router-dom";

const Seat = ({ number, selected, disabled, onClick }) => {
  const seatClassName = `seat ${selected ? "selected" : ""} ${disabled ? "disabled" : ""}`;

  return (
    <div className={seatClassName} onClick={disabled ? null : onClick}>
      {number}
    </div>
  );
};

const TicketSelect = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [formData, setFormData] = useState(location.state?.formData || {});
  const [showPopup, setShowPopup] = useState(false);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [limit, setLimit] = useState(0);
  const normalRate = formData.show.normalRate;
  const premiumRate = formData.show.premiumRate;
  const executiveRate = formData.show.executiveRate;

  // Array of booked seats received from the backend
  const bookedSeats = [
    { seatNumber: "A1", disabled: true },
    { seatNumber: "B3", disabled: true },
    { seatNumber: "D5", disabled: true },
    { seatNumber: "H5", disabled: true },
  ];

  useEffect(() => {
    setLimit(parseInt(formData.tickets));
  }, []);

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
          (bookedSeat) => bookedSeat.seatNumber === seatId && bookedSeat.disabled
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

  // Send numeric seat numbers to the backend
  const sendDataToBackend = () => {
    // Make an API call to send the numeric seat numbers to the backend
    // log the seat numbers to the console
    console.log(numericSeatNumbers);

    if (selectedSeats.length < limit) {
      setShowPopup(true);
    } else {
      navigate('/payment');
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
          bottom: "360px",
        }}
      >
        <div style={{ position: "relative", left: "50px" }}>
          <h1>Select Your Seats</h1>
          <div>
            <h2 style={{ position: "relative", left: "370px" }}>
              -------------------Screen-------------------
            </h2>
            <div className="seat-container">{renderSeats()}</div>
            <div
              className="selected-seats"
              style={{
                backgroundColor: "white",
                padding: "40px",
                marginRight: "90px",
                paddingBottom: "40px",
              }}
            >
              <u>
                <h3>Selected Seats:</h3>
              </u>
              <p>{selectedSeats.join(", ")}</p>
              <u>
                <h3>Total Amount:</h3>
              </u>
              <p>{`₹ ${totalAmount}`}</p>

              <div
                style={{ position: "relative", left: "820px", bottom: "60px" }}
              >
                <button onClick={sendDataToBackend}>Confirm Booking</button>
                {showPopup && (
                  <div className="popup">
                    <p>
                      Please select {limit} seat{limit > 1 ? "s" : ""}!
                    </p>
                    <button onClick={() => setShowPopup(false)}>OK</button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketSelect;
