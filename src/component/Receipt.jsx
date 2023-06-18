import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import tick from '../asset/tick.png'
import '../App.css'; 
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Routes,
    useParams,
  } from "react-router-dom";

const NotificationComponent = () => {
   
  const handleButtonClick = () => {
    toast.info(
        <div >
          <p style={{textAlign:'center'}}><strong>SUMMARY</strong></p>
          <p>Seats Booked :  </p>
          <p>Date : </p>
          <p>Amount Paid :</p>
          <Link to="/"><button style={{ position:'relative',left:'82px'}}>OK</button></Link>
        </div>,
        {
          position: toast.POSITION.TOP_CENTER,
          className: 'custom-toast',
        }
      );
  };

  return (
    <div>
        <img src={tick} alt="no tick" style={{width:'100px',position:'relative',left:'720px',top:'150px'}}/> 
        <h3 style={{color:'white',position:'relative',left:'670px',top:'150px'}}>Payment Is Succesfull !!</h3>
        <button style={{position:'relative',left:'700px',top:'150px'}} onClick={handleButtonClick}>Show Summary</button>
        <ToastContainer />
    </div>
  );
};

export default NotificationComponent;
