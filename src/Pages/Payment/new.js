import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { Container, Grid, TextField, MenuItem, Button } from '@mui/material';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import useAuth from '../../Hooks/useAuth';

const Payment = () => {
  const { user } = useAuth(); // Get logged-in user details
  const [balance, setBalance] = useState(null); 
  const [walletAmount, setWalletAmount] = useState(''); 
  const [selectedOption, setSelectedOption] = useState(''); 

  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  useEffect(() => {
    reset({
      cus_name: user.displayName,
      cus_email: user.email,
      date: new Date().toLocaleDateString()
    });
  }, [reset, user.displayName, user.email]);

  // Fetch user balance from the backend
  useEffect(() => {
    axios.get(`http://localhost:5000/userbalancedata/${user.email}`)
      .then((response) => {
        const data = response.data[0]; // Access the first item in the array
  
        console.log("API Response:", data); // Debug: Log the actual user data
  
        if (data && typeof data.balance === 'number') {
          setBalance(data.balance); // Set balance from the response (800)
        } else {
          setBalance(0); // Default to 0 if balance is missing or undefined
        }
      })
      .catch((error) => {
        console.error("Error fetching balance:", error);
        setBalance(0); // Set balance to 0 in case of error
      });
  }, [user.email]);
  

  const handleWalletInputChange = (e) => {
    const enteredAmount = Number(e.target.value);

    if (enteredAmount > balance) {
      // Show alert if the entered amount is greater than the balance
      Swal.fire({
        title: "Insufficient Balance",
        text: "You don't have enough money in your account.",
        icon: "error",
        confirmButtonText: "OK"
      });

      // Clear the input field if the amount exceeds balance
      setWalletAmount('');
    } else {
      setWalletAmount(enteredAmount);
    }
  };

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const onSubmit = (data) => {
    if (selectedOption === 'wallet' && walletAmount > balance) {
      Swal.fire({
        title: 'Insufficient Balance!',
        text: `Your wallet balance is only ${balance} Taka.`,
        icon: 'error',
        confirmButtonText: 'OK'
      });
      return;
    }

    const paymentData = {
      ...data,
      wallet_amount: walletAmount,
      // total_amount: grandtotal,
      // cartProducts: [...cartProducts],
      status: 'Pending',
      courier_id: 'id'
    };

    axios.post('https://your-backend-api-url.com/init', paymentData)
      .then((res) => {
        Swal.fire({
          title: 'Success!',
          text: 'Your payment was successful!',
          icon: 'success',
          confirmButtonText: 'OK'
        }).then(() => {
          localStorage.removeItem('productCart');
          reset();
          window.location.replace(`/success?name=${data.cus_name}&email=${data.cus_email}&bkash=${data.cus_postcode}`);
        });
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          title: 'Error!',
          text: 'Something went wrong. Please try again.',
          icon: 'error',
          confirmButtonText: 'OK'
        });
      });
  };

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TextField
            select
            label="Select Payment Method"
            variant="filled"
            fullWidth
            value={selectedOption}
            onChange={handleOptionChange}
          >
            <MenuItem value="">Select Payment Method</MenuItem>
            <MenuItem value="wallet">Wallet</MenuItem>
            <MenuItem value="payment">Payment</MenuItem>
          </TextField>
        </Grid>

        {selectedOption === 'wallet' && (
          <Grid item xs={12} md={6}>
            <TextField
              label="Wallet Amount"
              variant="filled"
              type="number"
              fullWidth
              value={walletAmount}
              onChange={handleWalletInputChange}
              helperText={balance !== null ? `Your current balance is ${balance} Taka` : 'Loading balance...'}  // Display balance or loading message
            />
          </Grid>
        )}

        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary" disabled={selectedOption === 'wallet' && walletAmount === ''}>
            Submit Payment
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Payment;
