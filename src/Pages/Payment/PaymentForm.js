import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Autocomplete, Button, Grid, TextField, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import Swal from 'sweetalert2';
import { countries } from "./CountryData/CountryData";
import CartCalculation from "../../Hooks/UseCartCalculation";
import useAuth from "../../Hooks/useAuth";
import './PaymentForm.css';

const PaymentFrom = () => {

  const [currency, setCurrency] = useState([]);
  const { cartProducts, grandtotal } = CartCalculation();
  const { user } = useAuth();
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
    };
    axios
      .post('https://sellerportal.vercel.app/init', paymentData)
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
        console.log(error);
        Swal.fire({
          title: 'Error!',
          text: 'Something went wrong. Please try again.',
          icon: 'error',
          confirmButtonText: 'OK'
        });
      });
  };

  return (
    <div>
      <Box>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 8 }}
          >
            <Grid item xs={4} sm={4} md={4}>
              <TextField
                label="Full Name"
                variant="filled"
                color="warning"
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
                color="warning"
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
                color="warning"
                variant="filled"
                fullWidth
                focused
                size="small"
                {...register("date", { required: true })}
              />
              {errors.date && <span>This field is required</span>}
            </Grid>
            <Grid item xs={4} sm={4} md={4}>
              <Autocomplete
                id="country-select-demo"
                size="small"
                disableClearable
                options={currency}
                autoHighlight
                getOptionLabel={(option) => option.code}
                renderOption={(props, option) => (
                  <Box
                    component="li"
                    sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                    {...props}
                  >
                    <img
                      loading="lazy"
                      width="20"
                      src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                      srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                      alt=""
                    />
                    ({option.code}) +{option.phone}
                  </Box>
                )}
                renderInput={(params) => (
                  <TextField
                    label="Currency"
                    color="warning"
                    variant="filled"
                    fullWidth
                    focused
                    size="small"
                    {...params}
                    inputProps={{
                      ...params.inputProps,
                      autoComplete: "new-password",
                    }}
                    {...register("currency", { required: true })}
                  />
                )}
              />
              {errors.currency && <span>This field is required</span>}
            </Grid>
            <Grid item xs={4} sm={4} md={4}>
              <TextField
                label="Address"
                color="warning"
                variant="filled"
                fullWidth
                focused
                size="small"
                {...register("cus_add1", { required: true })}
              />
              {errors.cus_add1 && <span>This field is required</span>}
            </Grid>
            <Grid item xs={4} sm={4} md={4}>
              <Autocomplete
                id="country-select-demo"
                options={countries}
                fullWidth
                autoHighlight
                size="small"
                getOptionLabel={(option) => option.label}
                renderOption={(props, option) => (
                  <Box
                    component="li"
                    sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                    {...props}
                  >
                    <img
                      loading="lazy"
                      width="20"
                      src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                      srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                      alt=""
                    />
                    {option.label}
                  </Box>
                )}
                renderInput={(params) => (
                  <TextField
                    label="County"
                    color="warning"
                    variant="filled"
                    fullWidth
                    focused
                    size="small"
                    {...params}
                    inputProps={{
                      ...params.inputProps,
                      autoComplete: "new-password",
                    }}
                    {...register("cus_country", { required: true })}
                  />
                )}
              />
              {errors.cus_country && <span>This field is required</span>}
            </Grid>
            <Grid item xs={4} sm={4} md={4}>
              <TextField
                label="City"
                color="warning"
                variant="filled"
                fullWidth
                focused
                size="small"
                {...register("cus_city", { required: true })}
              />
              {errors.cus_city && <span>This field is required</span>}
            </Grid>
            <Grid item xs={4} sm={4} md={4}>
              <TextField
                label="State"
                color="warning"
                variant="filled"
                fullWidth
                focused
                size="small"
                {...register("cus_state", { required: true })}
              />
              {errors.cus_state && <span>This field is required</span>}
            </Grid>
            <Grid item xs={4} sm={4} md={4}>
              <TextField
                label="Post Code"
                color="warning"
                variant="filled"
                type="number"
                fullWidth
                focused
                size="small"
                {...register("cus_postcode", { required: true })}
              />
            </Grid>
            <Grid item xs={4} sm={4} md={4}>
              <Autocomplete
                id="country-select-demo"
                size="small"
                freeSolo
                disableClearable
                options={countries}
                autoHighlight
                getOptionLabel={(option) => option.phone}
                renderOption={(props, option) => (
                  <Box
                    component="li"
                    sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                    {...props}
                  >
                    <img
                      loading="lazy"
                      width="20"
                      src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                      srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                      alt=""
                    />
                    ({option.code}) +{option.phone}
                  </Box>
                )}
                renderInput={(params) => (
                  <TextField
                    label="Phone"
                    color="warning"
                    variant="filled"
                    fullWidth
                    focused
                    size="small"
                    {...params}
                    inputProps={{
                      ...params.inputProps,
                      autoComplete: "new-password",
                    }}
                    {...register("cus_phone", { required: true })}
                    />
                  )}
                />
                {errors.cus_phone && <span>This field is required</span>}
              </Grid>
            </Grid>
  
            <Toolbar />
  
            <Button className="sub-design mt-5" style={{background:"", color:"", marginBottom:"100px"}} type="submit" sx={{ width: "50%" }}>
              Submit
            </Button>
          </form>
        </Box>
      </div>
    );
  };
  
  export default PaymentFrom;
  
                      
