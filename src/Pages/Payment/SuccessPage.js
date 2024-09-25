// src/Components/SuccessPage.js
import React from "react";
import { useLocation } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import Confetti from 'react-confetti';
import { NavLink } from "react-router-dom";


const SuccessPage = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const name = query.get('name');
  const email = query.get('email');
  const bkash = query.get('bkash');

  return (
    <Box p={3} style={{background:"#113350",color:"white"}}>
                          <Confetti />

      <Typography variant="h4" gutterBottom>
        Submission Successful
      </Typography>
      <Typography variant="h6">Thank you, {name}!</Typography>
      <Typography variant="body1">Your email: {email}</Typography>
      <Typography variant="body1">Post Code: {bkash}</Typography>
      <NavLink to={`/dashboard/myorder`}>
      <button style={{background:"white",color:"#113350",padding:"6px 12px",borderRadius:"5px",fontWeight:"700"}}>Details Product</button>
      </NavLink>
      
    </Box>
  );
};

export default SuccessPage;
