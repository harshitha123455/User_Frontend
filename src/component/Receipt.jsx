import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import tick from '../asset/tick.png'
import Fade from 'react-reveal/Fade';
import '../App.css'; 
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Routes,
    useParams,
    useNavigate,
    useLocation,
  } from "react-router-dom";

const NotificationComponent = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const [formData, setFormData] = useState(location.state?.formData || {});

   
  const handleButtonClick = () => {
    toast.info(
      <div>
        <p style={{ textAlign: 'center' }}>
          <strong>SUMMARY</strong>
        </p>
        <p>Seats Booked: {formData.pos.length}</p>
        <p>Date: {formData.date}</p>
        <p>Amount Paid: {formData.amount}</p>
        <Link to="/">
          <button style={{ position: 'relative', left: '82px' }}>OK</button>
        </Link>
      </div>,
      {
        position: toast.POSITION.TOP_CENTER,
        className: 'custom-toast',
      }
    );
  };

  return (
    <div>
        <img src={tick} alt="no tick" style={{width:'100px',position:'relative',left:'720px',top:'280px'}}/> <Fade>
        <h3 style={{color:'white',position:'relative',left:'670px',top:'280px'}}>Payment Is Succesfull !!</h3></Fade>
        <button style={{position:'relative',left:'700px',top:'280px'}} onClick={handleButtonClick}>Show Summary</button>
        <ToastContainer />
    </div>
  );
};

export default NotificationComponent;
