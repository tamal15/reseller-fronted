import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css';
import { FcGoogle } from 'react-icons/fc';
import useAuth from '../../Hooks/useAuth';
import { Alert } from "@mui/material";
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';
import { useState } from 'react';
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
    const { loginWithGoogle, loginWithOwnEmailAndPass, authError,sendPasswordReset } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const [resetEmail, setResetEmail] = useState("");
    const [resetMessage, setResetMessage] = useState("");
    const [showResetForm, setShowResetForm] = useState(false);

    const handleResetPassword = async (e) => {
        e.preventDefault();
        if (resetEmail) {
            const response = await sendPasswordReset(resetEmail);
            if (response.success) {
                setResetMessage(response.message);
                setResetEmail(""); // Clear the email input
            } else {
                setResetMessage(response.message);
            }
        } else {
            setResetMessage("Please enter your email.");
        }
    };
  

    const handleGoogleLogin = () => {
        loginWithGoogle(location, navigate);
    };

    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        loginWithOwnEmailAndPass(data.email, data.password, location, navigate);
    };

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword((prevState) => !prevState);
    };

    return (
        <div>
            <Header />
            <div className="login-background">
                <Container>
                    <Row className="align-items-center py-5">
                        <Col lg={5} md={6} sm={12} className="text-center mb-4">
                            <img
                                data-aos="zoom-in"
                                className="img-fluid"
                                src="https://i.ibb.co/PYRQwwP/1622955529676.png"
                                alt="Login Illustration"
                            />
                        </Col>
                        <Col lg={7} md={6} sm={12}>
                            <div className="login-form text-center mx-auto" style={{background:"#113350"}}>
                                <h2 className="text-white">Login to ExportMark</h2>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div>
                                        <input
                                            className="w-75 mb-3"
                                            {...register("email", { required: true })}
                                            placeholder="Enter Email"
                                        />
                                    </div>
                                    <div className="position-relative w-75 mx-auto mb-3">
                                        <input
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
                                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                                        </span>
                                    </div>
                                    <button className="submit-all" type="submit">
                                        Login
                                    </button>
                                </form>
                                <div className="login-meta mt-3">
                                    <p className="text-white">
                                        New to Education?{" "}
                                        <Link to="/register">
                                            <span className="login-links">Create a free Account</span>
                                        </Link>
                                    </p>
                                    <p className='text-white cursor-pointer' onClick={() => setShowResetForm(!showResetForm)}>Forget Password?</p>
                                </div>
                                {authError && <Alert severity="error">{authError}</Alert>}

                                  {/* Password Reset Section */}
                                  {showResetForm && (
                                    <div className="reset-password-form login-form">
                                        <h4 className="text-white">Reset Password</h4>
                                        <div className="w-75 mx-auto mb-3">
                                            <input
                                                type="email"
                                                value={resetEmail}
                                                onChange={(e) => setResetEmail(e.target.value)}
                                                placeholder="Enter your email"
                                                className="form-control"
                                                required
                                            />
                                        </div>
                                        <button className="submit-all mb-2" onClick={handleResetPassword}>Reset Email</button>
                                        {resetMessage && <Alert severity={resetMessage.includes("success") ? "success" : "error"}>{resetMessage}</Alert>}
                                        <button className="btn btn-secondary mt-2" onClick={() => setShowResetForm(false)}>Cancel</button>
                                    </div>
                                )}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Footer />
        </div>
    );
};

export default Login;
