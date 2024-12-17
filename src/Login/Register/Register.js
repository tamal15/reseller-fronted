import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Alert } from "@mui/material";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';
import useAuth from '../../Hooks/useAuth';

const Register = () => {
  const { registerUser, loginWithGoogle, authError } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm();

  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  const handleGoogleLogin = () => {
    loginWithGoogle(location, navigate);
  };

  const onSubmit = (data) => {
    if (data.password !== data.password2) {
      alert('Passwords do not match');
      return;
    }
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

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const togglePassword2Visibility = () => {
    setShowPassword2(!showPassword2);
  };

  return (
    <div>
      <Header />
      <div className='signin-background d-flex flex-column align-items-center justify-content-center'>
        <Container className='py-5'>
          <Row className='align-items-center'>
            <Col lg={4} className='text-center mb-4 mb-lg-0'>
              <div className='image-container '>
                <img
                  className='img-fluid'
                  src='https://i.ibb.co/PYRQwwP/1622955529676.png'
                  alt='Register Illustration'
                />
              </div>
            </Col>
            <Col lg={8}>
              <div className="register-form login-form mx-auto p-4" style={{ background: "#113350", borderRadius: "30px",padding:"50px" }}>
                <h2 className='text-white text-center pt-5'>Sign Up to ExportMark</h2>
                <form onSubmit={handleSubmit(onSubmit)} className='text-center'>
                  <input
                    className='form-control w-75 mx-auto mb-3' 
                    {...register("name", { required: true })}
                    placeholder='Enter Full Name'
                  />
                  <input
                    className='form-control w-75 mx-auto mb-3'
                    {...register("email", { required: true })}
                    placeholder='Enter Email'
                  />
                  <div className="position-relative w-75 mx-auto mb-3">
                    <input
                      type={showPassword ? "text" : "password"}
                      className='form-control'
                      {...register("password", { required: true })}
                      placeholder='Enter Password'
                    />
                    <span
                      className="position-absolute top-50 end-0 translate-middle-y pe-3"
                      style={{ cursor: "pointer" }}
                      onClick={togglePasswordVisibility}
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </span>
                  </div>
                  <div className="position-relative w-75 mx-auto mb-3">
                    <input
                      type={showPassword2 ? "text" : "password"}
                      className='form-control'
                      {...register("password2", { required: true })}
                      placeholder='Re-enter Password'
                    />
                    <span
                      className="position-absolute top-50 end-0 translate-middle-y pe-3"
                      style={{ cursor: "pointer" }}
                      onClick={togglePassword2Visibility}
                    >
                      {showPassword2 ? <FaEyeSlash /> : <FaEye />}
                    </span>
                  </div>
                  <p style={{color:"white"}}>এই নাম্বারে 01714191051 সেন্ড <br/>মানি করুন(বিকাশ, নগদ, রকেট)।</p>
                  <input
                    className='form-control w-75 mx-auto mb-3'
                    {...register("bkashNumber", { required: true })}
                    placeholder='bKash Number'
                  />
                  <input
                    className='form-control w-75 mx-auto mb-3'
                    {...register("refCode")}
                    placeholder='Reference Code'
                  />
                  <button className='btn btn-primary w-75 mb-3' type='submit'>Sign Up</button>
                </form>
                <p className='text-white'>
                  Already have an account?{' '}
                  <Link to='/login' className='text-decoration-none' style={{ color: "#46AADC" }}>
                    Login here
                  </Link>
                </p>
                {authError && <Alert severity='error'>{authError}</Alert>}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
