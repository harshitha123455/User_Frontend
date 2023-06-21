import atm from "../asset/atm.png";
import Button from "@mui/joy/Button";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import React, { useState } from "react";
import Flip from "react-reveal/Flip";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Routes,
  useParams,
  useLocation,
  useNavigate,
} from "react-router-dom";
import UserService from "../service/user-service";

import Button1 from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";

const Payment = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [expiryMonth, setExpiryMonth] = useState("");
  const [expiryYear, setExpiryYear] = useState("");
  const [cvv, setCVV] = useState("");

  const handleClick = () => {
    setIsLoading(true);

    // Simulating an asynchronous operation
    setTimeout(() => {
      setIsLoading(false);
    }, 50000);
  };

  const location = useLocation();
  const navigate = useNavigate();
  const userService = new UserService();

  const [open, setOpen] = React.useState(false);
  const [formData, setFormData] = useState(location.state?.formData || {});

  const handlePayment = async (e) => {
    e.preventDefault();

    // Validation
    if (!validateCardNumber(cardNumber)) {
      console.log("Invalid card number");
      return;
    }

    if (!validateExpiryMonth(expiryMonth)) {
      console.log("Invalid expiry month");
      return;
    }

    if (!validateExpiryYear(expiryYear)) {
      console.log("Invalid expiry year");
      return;
    }

    if (!validateCVV(cvv)) {
      console.log("Invalid CVV");
      return;
    }

    // View the loading page
    const response = await userService.bookTickets(formData);
    if (response[0]) {
      console.log("Tickets Booked Successfully with id: ", response[1]);
    } else {
      console.log("Error in booking tickets");
    }
    // Close the loading page and navigate to receipt
    navigate("/receipt", {
      state: { formData: { ...response[1], date: formData.date } },
    });
  };

  const validateCardNumber = (number) => {
    // Perform card number validation logic here
    // Example: Ensure the card number meets a certain pattern or length
    return number.length === 16;
  };

  const validateExpiryMonth = (month) => {
    // Perform expiry month validation logic here
    // Example: Ensure the month is a valid value (1-12)
    const monthNumber = parseInt(month);
    return monthNumber >= 1 && monthNumber <= 12;
  };

  const validateExpiryYear = (year) => {
    // Perform expiry year validation logic here
    // Example: Ensure the year is a valid value (e.g., not in the past)
    const currentYear = new Date().getFullYear();
    const yearNumber = parseInt(year);
    return yearNumber >= currentYear;
  };

  const validateCVV = (cvv) => {
    // Perform CVV validation logic here
    // Example: Ensure the CVV is a valid length (e.g., 3 or 4)
    return cvv.length === 3 || cvv.length === 4;
  };

  return (
    <div>
      {/* "Confirm Booking" Button Code +  Payment Gateway */}
      <Flip top duration={1800}>
        <React.Fragment>
          <div class="bla-on-hov">
            <Button
              style={{
                position: "relative",
                top: "130px",
                left: "630px",
                color: "white",
                borderColor: "white",
                width: "300px",
                height: "50px",
              }}
              variant="outlined"
              color="neutral"
              onClick={() => {
                setOpen(true);
              }}
            >
              <h2>PROCEED FOR PAYMENT</h2>
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
                height: "400px",
                width: "500px",
                maxWidth: 800,
                borderRadius: "md",
                p: 3,
                boxShadow: "lg",
              }}
            >
              {/* <ModalClose
                    variant="outlined"
                    sx={{
                      top: "calc(-1/4 * var(--IconButton-size))",
                      right: "calc(-1/4 * var(--IconButton-size))",
                      boxShadow: "0 2px 12px 0 rgba(0 0 0 / 0.2)",
                      borderRadius: "50%",
                      bgcolor: "background.body",
                    }}
                  /> */}
              <Typography
                component="h2"
                id="modal-title"
                level="h4"
                textColor="inherit"
                fontWeight="lg"
                mb={1}
              >
                <h5
                  style={{
                    position: "relative",
                    left: "160px",
                    bottom: "30px",
                  }}
                >
                  {" "}
                  Payment Gateway{" "}
                </h5>
              </Typography>
              <Typography id="modal-desc" textColor="text.tertiary">
                <div>
                  <div className="credit-card-image">
                    <img
                      src={atm}
                      alt="no atm card"
                      style={{
                        width: "950px",
                        height: "950px",
                        position: "relative",
                        right: "225px",
                        bottom: "330px",
                      }}
                    />
                  </div>
                  <form
                    style={{ position: "relative", bottom: "940px" }}
                    onSubmit={handlePayment}
                  >
                    <label>
                      {/* Card Number */}
                      <input
                        type="text"
                        placeholder="Card Number"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                        style={{
                          width: "382px",
                          height: "20px",
                          position: "relative",
                          left: "49px",
                          top: "25px",
                          borderRadius: "18px",
                        }}
                      />
                    </label>

                    <label>
                      {/* Card Name */}
                      <input
                        type="text"
                        placeholder="Card Name"
                        value={cardName}
                        onChange={(e) => setCardName(e.target.value)}
                        style={{
                          width: "382px",
                          height: "20px",
                          position: "relative",
                          left: "49px",
                          top: "37px",
                          borderRadius: "18px",
                        }}
                      />
                    </label>

                    <label>
                      {/* Expiry Month*/}
                      <input
                        type="text"
                        placeholder="M"
                        value={expiryMonth}
                        onChange={(e) => setExpiryMonth(e.target.value)}
                        style={{
                          width: "17px",
                          height: "12px",
                          position: "relative",
                          left: "58px",
                          top: "65px",
                          borderRadius: "10px",
                        }}
                      />
                    </label>

                    <label>
                      {/* Expiry Year*/}
                      <input
                        type="text"
                        placeholder="YY"
                        value={expiryYear}
                        onChange={(e) => setExpiryYear(e.target.value)}
                        style={{
                          width: "17px",
                          height: "12px",
                          position: "relative",
                          left: "99.5px",
                          top: "32px",
                          borderRadius: "10px",
                        }}
                      />
                    </label>

                    <label>
                      {/* CVV*/}
                      <input
                        type="password"
                        placeholder="CVV"
                        value={cvv}
                        onChange={(e) => setCVV(e.target.value)}
                        style={{
                          width: "46px",
                          height: "12px",
                          position: "relative",
                          left: "335px",
                          top: "0px",
                          borderRadius: "10px",
                        }}
                      />
                    </label>

                    <button
                      style={{
                        position: "relative",
                        top: "50px",
                        left: "200px",
                        backgroundColor: "white",
                      }}
                      type="submit"
                    >
                      <Button1
                        variant="contained"
                        color="warning"
                        disabled={isLoading}
                        onClick={handleClick}
                      >
                        {isLoading ? (
                          <CircularProgress size={24} />
                        ) : (
                          "PAY"
                        )}
                      </Button1>
                    </button>
                  </form>
                </div>
              </Typography>
            </Sheet>
          </Modal>
        </React.Fragment>
      </Flip>
    </div>
  );
};

export default Payment;
