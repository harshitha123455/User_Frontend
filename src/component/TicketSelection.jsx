import React, { useState } from "react";
import "../TicketSelect.css";
let a=5;
const Seat = ({ number, selected, onClick }) => {
  return (
    <div className={`seat ${selected ? "selected" : ""}`} onClick={onClick}>
      {number}
    </div>
  );
};

const TicketSelect = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeatClick = (seatNumber) => {
    if (selectedSeats.length < a) {
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
      let ratePerSeat = row === "I" || row === "J" ? 500 : 150;
      if (row == "G" || row == "H") {
        ratePerSeat = 300;
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
        let ratePerSeat = 150; // Default rate

        seatRow.push(
          <Seat
            key={seatId}
            number={seatId}
            selected={isSelected}
            onClick={() => handleSeatClick(seatId)}
            disabled={selectedSeats.length >= a && !isSelected}
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
    // Here you can make an API call to send the numeric seat numbers to the backend
    // For demonstration purposes, we'll just log the seat numbers to the console
    console.log(numericSeatNumbers);
  };

  return (
    <div>
      <div
        style={{
          margin:'130px',
          padding: "40px",
          backgroundColor: 'white',
          borderRadius: "30px",
          position: "relative",
          bottom: "105px",
        }}
      >
        <div style={{position: "relative", left: "50px" }}>
          <h1>Select Your Seats</h1>
          <div>
            <h2 style={{ position: "relative", left: "370px",}}>-------------------Screen-------------------</h2>
            <div className="seat-container">{renderSeats()}</div>
            <div className="selected-seats" style={{backgroundColor:'white',padding:'40px',marginRight:'90px',paddingBottom:'40px',}}>
              <u><h3>Selected Seats:</h3></u>
              <p>{selectedSeats.join(", ")}</p>
              <u><h3>Total Amount:</h3></u>
              <p>{`₹ ${totalAmount}`}</p>

              <div style={{ position: "relative",  left: "820px", bottom: "100px"}}><button onClick={sendDataToBackend}>Confirm Booking</button></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketSelect;
