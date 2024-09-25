import { Container, Grid, Toolbar, Button, TextField, Autocomplete, Box, MenuItem } from '@mui/material';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import Cart from '../../Components/Cart';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import { useForm } from 'react-hook-form';
import { countries } from "./CountryData/CountryData";
import CartCalculation from '../../Hooks/UseCartCalculation';
import useAuth from '../../Hooks/useAuth';
import { Divider, List, ListItem, ListItemIcon, Typography } from '@mui/material';
import '../../Components/Cart.css';



const Payment = (props) => {
    
  const [currency, setCurrency] = useState([]);
  const { cartProducts, grandtotal,shipping, tax, totalQuantity, total, totalIncome, handleSearchs, handleValues, searchValues, model } = CartCalculation();
  const [selectedOption, setSelectedOption] = useState(""); // Track selected option
  const { user } = useAuth();
  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    reset({
      cus_name: user.displayName,
      cus_email: user.email,
      date: new Date().toLocaleDateString()
    });
  }, [reset, user.displayName, user.email]);

  useEffect(() => {
    fetch("Currency.json")
      .then((res) => res.json())
      .then((data) => setCurrency(data));
  }, []);

  const onSubmit = (data) => {
    const paymentData = {
      ...data,
      total_amount: grandtotal,
      cartProducts: [...cartProducts],
      status: "Pending",
      courier_id:"id"
    };

    axios
      .post('http://localhost:5000/init', paymentData)
      .then((res) => {
        Swal.fire({
          title: 'Success!',
          text: 'Your payment was successful!',
          icon: 'success',
          confirmButtonText: 'OK'
        }).then(() => {
          localStorage.removeItem('productCart');
          reset();  // Clear form data
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
    <>
      <Header />
      <Toolbar />
      <Container>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid item xs={4} sm={5} md={8}>
            <Box>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 8 }}>
                  <Grid item xs={4} sm={4} md={4}>
                    <TextField
                      label="Full Name"
                      variant="filled"
                      sx={{color:"#113350"}}
                      focused
                      size="small"
                      fullWidth
                      {...register("cus_name", { required: true })}
                    />
                    {errors.cus_name && <span>This field is required</span>}
                  </Grid>
                  <Grid item xs={4} sm={4} md={4}>
                    <TextField
                      label="Your Email"
                      sx={{color:"#113350"}}
                      variant="filled"
                      fullWidth
                      focused
                      size="small"
                      {...register("cus_email", { required: true })}
                    />
                    {errors.cus_email && <span>This field is required</span>}
                  </Grid>
                  <Grid item xs={4} sm={4} md={4}>
                    <TextField
                      label="Date"
                      sx={{color:"#113350"}}
                      variant="filled"
                      fullWidth
                      focused
                      size="small"
                      {...register("date", { required: true })}
                    />
                    {errors.date && <span>This field is required</span>}
                  </Grid>

                 
                
                  <Grid item xs={4} sm={4} md={4}>
                    <TextField
                      label="address"
                      sx={{color:"#113350"}}
                      variant="filled"
                      fullWidth
                      focused
                      size="small"
                      {...register("address", { required: true })}
                    />
                    {errors.address && <span>This field is required</span>}
                  </Grid>
                  
                 
                
                  <Grid item xs={4} sm={4} md={4}>
                    <TextField
                      label="Post Code"
                      sx={{color:"#113350"}}
                      variant="filled"
                      type="number"
                      fullWidth
                      focused
                      size="small"
                      {...register("cus_postcode", { required: true })}
                    />
                    {errors.cus_postcode && <span>This field is required</span>}
                  </Grid>

                  <Grid item xs={4} sm={4} md={4}>
                    <TextField
                      label="Phone Number"
                      sx={{color:"#113350"}}
                      variant="filled"
                      fullWidth
                      focused
                      size="small"
                      {...register("phone", { required: true })}
                    />
                    {errors.payment_number && <span>This field is required</span>}
                  </Grid>


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

                  {selectedOption === "wallet" && (
                    <Grid item xs={12} md={6}>
                      <TextField
                        label="Wallet Amount"
                        variant="filled"
                        type="number"
                        fullWidth
                        {...register("wallet_amount", { required: selectedOption === "wallet" })}
                        error={!!errors.wallet_amount}
                        helperText={errors.wallet_amount && "Wallet amount is required"}
                      />
                    </Grid>
                  )}

                  {selectedOption === "payment" && (
                    <Grid item xs={12} md={6}>
                      <TextField
                        label="Payment Number"
                        variant="filled"
                        fullWidth
                        {...register("payment_number", { required: selectedOption === "payment" })}
                        error={!!errors.payment_number}
                        helperText={errors.payment_number && "Payment number is required"}
                      />
                    </Grid>
                    )}
                 
                  <Grid item xs={12}>

                 <h6> ★ শুধুমাত্র ডেলিভারি চার্জ এডভান্স করতে হবে <span style={{color:"red",fontWeight:"500"}}>( Dhaka city তে 60Tk এবং ঢাকা Dhaka city এর বাহিরে 120Tk ) ।</span></h6>
               <h6 style={{textAlign:"left"}}>★ এই নাম্বারে <span style={{color:"red",fontWeight:"500"}}>01511-514172</span> ডেলিভারি চার্জ সেন্ড মানি করুন(বিকাশ, নগদ, রকেট)।</h6>
                <h6 style={{textAlign:"left"}}>★ যে নাম্বার থেকে সেন্ড মানি করেছেন সেই নাম্বারটি নিচের বক্সে সাবমিট করুন।</h6>


           



                    <Button type="submit" variant="contained" color="primary" className="mt-5 ms-3">
                      Submit Payment
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Box>
          </Grid>

          <Grid item xs={4} sm={3} md={4}>
           

          <div>
            {/* <form onSubmit={(e) => { e.preventDefault(); handleValues(); }} className="ms-2">
                <input
                    placeholder='Coupon code'
                    value={searchValues}
                    onChange={handleSearchs}
                    className="mb-2 input-design me-3 mt-3"
                />
                <button type="submit" className='apply-design'>Apply</button>
            </form> */}
            <List sx={{ pt: 0 }}>
                <ListItem className='order-design'>
                    <Typography variant='h5'>Order Summary</Typography>
                </ListItem>
                <Divider />
                <ListItem>
                    <Typography style={{ fontWeight: "500" }}>Total Quantity: {totalQuantity}</Typography>
                </ListItem>
                <ListItem>
                    <Typography style={{ fontWeight: "500" }}>Total: {total.toFixed(2)} Taka</Typography>
                </ListItem>
                <ListItem>
                    <Typography style={{ fontWeight: "500" }}>Shipping: {shipping.toFixed(2)} Taka</Typography>
                </ListItem>
                <ListItem>
                    <Typography style={{ fontWeight: "500" }}>Tax: {tax.toFixed(2)} Taka</Typography>
                </ListItem>
                <Divider />
                <ListItem>
                    <ListItemIcon>
                        <Typography style={{ fontWeight: "500" }}>Grand Total: {grandtotal.toFixed(2)} Taka</Typography>
                    </ListItemIcon>
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <Typography style={{ fontWeight: "500" }}>Total Income: {totalIncome.toFixed(2)} Taka</Typography>
                    </ListItemIcon>
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <Typography style={{ fontWeight: "500" }}>Discount Total: {model} Taka</Typography>
                    </ListItemIcon>
                </ListItem>
                <ListItem>
                    {props.children}
                </ListItem>
            </List>
        </div>


          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
};

export default Payment;
