import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { Alert } from "@mui/material";

import './Register.css';
import useAuth from '../../Hooks/useAuth';
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';
import { FaEye, FaEyeSlash } from "react-icons/fa";


const Register = () => {
  const { registerUser, loginWithGoogle, authError } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  // Handle Google login
  const handleGoogleLogin = () => {
    loginWithGoogle(location, navigate);
  };

  // Form handling
  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    if (data.password !== data.password2) {
      alert('Your passwords do not match');
      return;
    }

    // Register the user with payment details
    registerUser(
      data.email,
      data.password,
      data.name,
      data.bkashNumber,
      data.refCode,
      location,
      "pending",
      navigate
    );
  };

  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  // Functions to handle the visibility toggle
  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const togglePassword2Visibility = () => {
    setShowPassword2((prevState) => !prevState);
  };

  return (
    <div>
      <Header />
      <div className='signin-background'>
        <div className='py-5'>
          <Container>
            <Row>
              <div className='row'>
                <div className='col-lg-4'>
                  <div className='image-change'>
                    <img data-aos="zoom-in" height="430" width="370" src='https://i.ibb.co/PYRQwwP/1622955529676.png' alt="" />
                  </div>
                </div>
                <div className='col-lg-8'>
                  <Col md={{ span: 8, offset: 2 }}>
                    <div className="login-form text-center" style={{ background: "#113350", borderRadius: "20px" }}>
                      <h2 className=' text-white'style={{}}>Sign Up to SARONG</h2>
                      <form onSubmit={handleSubmit(onSubmit)}>
                        <input
                          className='w-75 mb-3'
                          {...register("name", { required: true })}
                          placeholder='Enter Full Name'
                        />
                        <br />
                        <input
                          className='w-75 mb-3'
                          {...register("email", { required: true })}
                          placeholder='Enter Email'
                        />
                        <br />
                        <div className="position-relative w-75 mb-3" style={{marginLeft:"60px"}}>
        <input
          type={showPassword ? "text" : "password"}
          className="form-control"
          {...register("password", { required: true })}
          placeholder="Enter Password"
          style={{ fontWeight: "500" }}
        />
        <span
          className="position-absolute top-50 end-0 translate-middle-y pe-3"
          style={{ cursor: "pointer" }}
          onClick={togglePasswordVisibility}
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </span>
      </div>

      <div className="position-relative w-75 mb-3" style={{marginLeft:"60px"}}>
        <input
          type={showPassword2 ? "text" : "password"}
          className="form-control"
          {...register("password2", { required: true })}
          placeholder="Re-enter Password"
          style={{ fontWeight: "500" }}
        />
        <span
          className="position-absolute top-50 end-0 translate-middle-y pe-3"
          style={{ cursor: "pointer" }}
          onClick={togglePassword2Visibility}
        >
          {showPassword2 ? <FaEyeSlash /> : <FaEye />}
        </span>
      </div>
                        <input
                          className='w-75 mb-3'
                          {...register("bkashNumber", { required: true })}
                          placeholder='bKash Number'
                        />
                        <br />
                        <input
                          className='w-75 mb-3'
                          {...register("refCode")}
                          placeholder='Reference Code'
                        />
                        <br />
                        <button className='submit-all' type='submit'>Sign Up</button>
                      </form>
                      <div className='login-meta mt-4 '>
                        <p className='text-white'>
                          Already have an account? 
                          <Link to={'/login'}>
                            <span className='login-links' style={{ color: "#46AADC" }}>Login here</span>
                          </Link>
                        </p>
                        {/* <span style={{ cursor: "pointer" }} className='fs-4 text-white'>
                          Continue with <FcGoogle onClick={handleGoogleLogin} className='fs-2 google' />
                        </span> */}
                      </div>
                      {authError && <Alert severity="error">{authError}</Alert>}
                    </div>
                  </Col>
                </div>
              </div>
            </Row>
          </Container>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
