import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { Alert } from "@mui/material";
import './Register.css';
import useAuth from '../../Hooks/useAuth';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import queryString from 'query-string';

const NewRegister = () => {
  const { registerUser, loginWithGoogle, authError, user } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  
  // State to store user data fetched from the backend
  const [userData, setUserData] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  // Parse the query string for tran_id
  const { tran_id } = queryString.parse(location.search);

  // Fetch user data when the component mounts
  useEffect(() => {
    const fetchUserData = async () => {
      if (user?.email) {
        try {
          const response = await fetch(`https://server.exportmark.com/users/${user.email}`);
          
          // Check if the response status is OK (status code 200-299)
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
    
          const data = await response.json();
          console.log('Fetched user data:', data);
    
          setUserData(data);
        } catch (error) {
          console.error('Error fetching user data:', error.message);
        }
      }
    };
    
    fetchUserData();
  }, [user]);

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

  // Functions to handle the visibility toggle
  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const togglePassword2Visibility = () => {
    setShowPassword2((prevState) => !prevState);
  };

  return (
    <div>
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
                      <h2 className='text-white'>Sign Up to SARONG</h2>
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
                        <div className="position-relative w-75 mb-3" style={{ marginLeft: "60px" }}>
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

                        <div className="position-relative w-75 mb-3" style={{ marginLeft: "60px" }}>
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
                        {/* Reference Code field populated with data from backend */}
                        <input
                          className='w-75 mb-3'
                          {...register("refCode")}
                          defaultValue={userData.referralCode || ''}
                          placeholder='Enter Referral Code'
                        />
                        <br />
                        {/* Display the tran_id value from URL query */}
                        <input
                          className='w-75 mb-3'
                          {...register("tran_id")}
                          defaultValue={tran_id || ''}
                          placeholder='Transaction ID'
                          readOnly
                        />
                        <br />
                        <button className="btn-primary mb-4 px-5 py-2 text-white fw-bold">Sign Up</button>
                      </form>
                    </div>
                    
                  </Col>
                </div>
              </div>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default NewRegister;
