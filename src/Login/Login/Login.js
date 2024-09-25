import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css';
import { FcGoogle } from 'react-icons/fc'
import useAuth from '../../Hooks/useAuth';
import { TextField, Toolbar, Typography,Alert } from "@mui/material";
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';
import { useState } from 'react';
import { FaEye, FaEyeSlash } from "react-icons/fa";




const Login = () => {

    const { loginWithGoogle, loginWithOwnEmailAndPass,authError } = useAuth()

    //Location & navigate
    const location = useLocation()
    const navigate = useNavigate()

    //handle google login here
    const handleGoogleLogin = () => {
        loginWithGoogle(location, navigate);
    };



    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        // console.log(data.email)
        loginWithOwnEmailAndPass(data.email, data.password, location, navigate)
    }
    const [showPassword, setShowPassword] = useState(false);

    // Function to handle the visibility toggle
    const togglePasswordVisibility = () => {
      setShowPassword((prevState) => !prevState);
    };
    return (
<div>
<Header></Header>
<div className='login-background'>
          <div className='py-5'>

            <Container>
                <Row>
                <div className='row'>
                    <div className='col-lg-4'>
                     <div className='mt-5'>
                     <img data-aos="zoom-in" height="340" width="360" src='https://i.ibb.co/PYRQwwP/1622955529676.png' alt="" />
                     </div>
                    </div>
                    <div className='col-lg-8'>
                    <Col md={{ span: 8, offset: 2 }}>
                        <div className="login-form text-center" style={{background:"#113350",borderRadius:"20px"}}>
                            <h2 className=' text-white'>Login to SARONG</h2>
                            {/* onSubmit={handleSubmit(onSubmit)} */}
                            <form onSubmit={handleSubmit(onSubmit)}>
                               <div>
                               <input
                                style={{fontWeight:"500"}}
                                    className='w-75 mb-3'
                                    {...register("email", { required: true })}
                                    placeholder='Enter Email' />
                                <br />
                               </div>

                                <div className="position-relative w-75 mb-3" style={{marginLeft:"60px"}}>
      <input
        style={{ fontWeight: "500", }}
        type={showPassword ? "text" : "password"}
        className="form-control"
        {...register("password", { required: true })}
        placeholder="Enter Password"
      />
      <span
        className="position-absolute top-50 end-0 translate-middle-y pe-3"
        style={{ cursor: "pointer" }}
        onClick={togglePasswordVisibility}
      >
        {showPassword ? (
          <FaEyeSlash /> // Eye-slash icon for hiding password
        ) : (
          <FaEye /> // Eye icon for showing password
        )}
      </span>
    </div>

                                <button className='submit-all' type='submit'>Login</button>
                            </form>
                            <div className='login-meta'>
                                <p className='text-white mt-3'>New to Education <Link to={'/register'}><span className='login-links' style={{color:"#46AADC"}}>Create a free Account</span></Link></p>
                                <span onClick={handleGoogleLogin} style={{ cursor: "pointer" }} 
                                // onClick={handleGoogleLogin}
                                 className='fs-4 text-white'>Continue with <FcGoogle  className='fs-2 google' /></span>
                            </div>

                            {
          authError && 
          <Alert severity="error">{authError}</Alert>
      }
                        </div>
                    </Col>
                    </div>
                </div>
                </Row>
            </Container>
          
        </div>
      </div>
      <Footer></Footer>
</div>
    );
};

export default Login;