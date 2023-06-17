import atm from "../asset/atm.png";
import Button from "@mui/joy/Button";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import React, { useState } from "react";

const Payment = () => {
    const [open, setOpen] = React.useState(false);

    return ( 
        <div>
             {/* "Confirm Booking" Button Code +  Payment Gateway */}

                <React.Fragment>
                  <div class="bla-on-hov">
                    <Button
                      style={{
                        position: "relative",
                        top: "130px",
                        left: "630px",
                        color: "white",
                        borderColor: "white",
                        width:'300px',
                        height:'50px',
                      }}
                      variant="outlined"
                      color="neutral"
                      onClick={() => {
                        setOpen(true)
                       }
                      }
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
                       <h5 style={{position:'relative',left:'160px',bottom:'30px'}}> Payment Gateway </h5>
                      </Typography>
                      <Typography id="modal-desc" textColor="text.tertiary">
                        <div>
                          <div className="credit-card-image">
                            <img src={atm} alt="no atm card" style={{width:'950px',height:'950px',position:'relative',right:'225px',bottom:'330px'}}/>
                          </div>
                          <form style={{position:'relative',bottom:'940px'}}>

                            <label>
                                {/* Card Number */}
                                <input type="text" placeholder="Card Number" style={{width:'382px',height:'20px',position:'relative',left:'49px',top:'25px',borderRadius:'18px'}} />
                            </label>

                            <label>
                                {/* Card Name */}
                                <input type="text" placeholder="Card Name" style={{width:'382px',height:'20px',position:'relative',left:'49px',top:'37px',borderRadius:'18px'}} />
                            </label>

                            <label>
                                {/* Expiry Month*/}
                                <input type="text" placeholder="M" style={{width:'17px',height:'12px',position:'relative',left:'58px',top:'65px',borderRadius:'10px'}} />
                            </label>

                            <label>
                                {/* Expiry Year*/}
                                <input type="text" placeholder="YY" style={{width:'17px',height:'12px',position:'relative',left:'99.5px',top:'32px',borderRadius:'10px'}} />
                            </label>

                            <label>
                                {/* CVV*/}
                                <input type="text" placeholder="CVV" style={{width:'46px',height:'12px',position:'relative',left:'335px',top:'0px',borderRadius:'10px'}} />
                            </label>
                            
                            <button
                                style={{
                                    position: "relative",
                                    top: "50px",
                                    left: "215px",
                                    backgroundColor:'grey'
                                }}
                            >
                            Pay
                            </button>


                          </form>
                        </div>
                      </Typography>
                    </Sheet>
                  </Modal>
                </React.Fragment>
        </div>
     );
}
 
export default Payment;
