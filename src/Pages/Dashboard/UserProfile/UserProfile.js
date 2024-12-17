import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FaEdit } from 'react-icons/fa';
import useAuth from '../../../Hooks/useAuth';
import UserUpdateProfile from './UserUpdateProfile'; // Import the component
import { Box, Typography, Grid, Button } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

import './UserProfile.css';
import { Link } from 'react-router-dom';
import OrderPage from 'Components/PaymentData/OrderPage';
import NewUserDashboard from 'Components/PaymentData/UserDashboard';
import RefferPage from 'Components/PaymentData/RefferPage';
import Swal from 'sweetalert2';

const UserProfile = () => {
  const { user } = useAuth();
  const [userInfo, setUserInfo] = useState({});
  const [editMode, setEditMode] = useState(false); // State to control form visibility

  
  const [userData, setUserData] = useState({ name: '', email: '', referralCode: '', tran_id:'' });
  const [activePage, setActivePage] = useState(''); // State to track which page to display

  

  // Fetch user details from the backend
  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await fetch(`https://server.exportmark.com/api/user-details?email=${user.email}`);
        const data = await response.json();
        if (data) {
          setUserData({
            name: data.name,
            email: data.email,
            referralCode: data.referralCode,
            tran_id:data.tran_id
          });
        }
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };

    if (user.email) {
      fetchUserDetails();
    }
  }, [user.email]);

  // Function to handle navigation between different pages
  const handlePageChange = (page) => {
    setActivePage(page);
  };

  const copyToClipboard = () => {
    const link = `https://exportmark.com/newregister?tran_id=${userData.tran_id}`;
    navigator.clipboard.writeText(link).then(() => {
      Swal.fire({
                title: "Success!",
                text: "copy link",
                icon: "success",
                timer: 2000,
              });
    }).catch(err => {
      console.error('Error copying link: ', err);
    });
  };

  useEffect(() => {
    fetch(`https://server.exportmark.com/updateUser/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setUserInfo(data);
        console.log(data);
      });
  }, [user.email]);

  return (
   <div>

<div
      className="user-profile "
      style={{ background: '#113350', borderRadius: '20px', margin: '9px',marginLeft:"30px",marginRight:"30px",paddingBottom:"9px" }}
    >
      <div>
        <div className="profile-title d-flex justify-content-between align-items-center">
          <h3 style={{ color: 'white' }}>My Profile</h3>
          <span
            onClick={() => setEditMode(!editMode)} // Toggle form visibility on click
            style={{ textDecoration: 'none', cursor: 'pointer' }}
          >
            <FaEdit className="edit-icon" /> Edit
          </span>
        </div>
        <Container>
          <Row>
            <Col md={3}>
              <div className="user-verify py-4">
                <img
                  src={
                    user.photoURL
                      ? user.photoURL
                      : 'https://i.ibb.co/Xsnkx3L/user.png'
                  }
                  alt=""
                />
                <p style={{ color: 'white', textDecoration: 'left' }}>
                  {userInfo?.address
                    ? 'Profile Completed (100%)'
                    : 'Profile Completed (40%)'}
                </p>
              </div>
            </Col>
            <Col md={9}>
              <div
                className="profile-information py-4"
                style={{
                  textAlign: 'left',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <div className="single-box">
                  <h6 className="text-white mt-3">
                    Full Name : {user.displayName}
                  </h6>

                  <h6 className="text-white mt-2">Email : {user.email}</h6>

                  <h6 className="text-white mt-2">
                    Address : {userInfo?.address ? userInfo?.address : 'null'}
                  </h6>

                  <p className="text-capitalize text-white mt-2">
                    Mobile : {userInfo?.mobile ? userInfo?.mobile : 'null'}
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

     

      {/* Conditionally render the UserUpdateProfile form below */}
      {editMode && (
        <UserUpdateProfile userInfo={userInfo} setEditMode={setEditMode} />
      )}

    </div>


    <div>

    <Box
  sx={{
    p: 3, // Padding for the outer box
    mt: 4, // Margin from the top
    border: '1px solid #ddd', // Light border
    borderRadius: '8px', // Rounded corners
    backgroundColor: 'white', // Light gray background
     boxShadow: "0px 10px 22px rgb(42 135 158 / 50%)",
    marginLeft:"10px",
    marginRight:"10px"
  }}
>
  <Typography variant="h4" style={{color:"black",fontWeight:"700"}} gutterBottom align="center">
    Welcome, {userData.name}
  </Typography>
  <Grid container spacing={2} sx={{ mt: 2 }}>
    <Grid item xs={12} sm={3}> {/* Adjusting Grid size for responsiveness */}
      <Box
        sx={{
          p: 2,
          border: '1px solid #eee',
          borderRadius: '8px',
          backgroundColor: '#427bb1',
          color:"white",
          textAlign: 'left',
           height:"130px"
        }}
      >
        <Typography variant="h6">
          Name: <strong>{userData.name}</strong>
        </Typography>
      </Box>
    </Grid>

    <Grid item xs={12} sm={3}>
      <Box
        sx={{
          p: 2,
          border: '1px solid #eee',
          borderRadius: '8px',
          backgroundColor: '#113350',
          color:"white",
          textAlign: 'left',
           height:"130px"
        }}
      >
        <Typography variant="h6">
          Email: <strong>{userData.email}</strong>
        </Typography>
      </Box>
    </Grid>

    <Grid item xs={12} sm={3}>
      <Box
        sx={{
          p: 2,
          border: '1px solid #eee',
          borderRadius: '8px',
          backgroundColor: '#427bb1',
          color:"white",
          textAlign: 'left',
           height:"130px"
        }}
      >
        <Typography variant="h6">
         You Reffer: <strong>{userData.referralCode?.slice(
                                0,
                                8
                              )}</strong>
        </Typography>
      </Box>
    </Grid>
    
    {/* Updated Grid with clickable tran_id */}
    <Grid item xs={12} sm={3}>
      <Box
        sx={{
          p: 2,
          border: '1px solid #eee',
          borderRadius: '8px',
          backgroundColor: '#427bb1',
          color:"white",
          textAlign: 'left',
          height:"130px",
        }}
      >
        <Typography variant="h6">
          MY Referral:  
          
            {userData.tran_id?.slice(
                                0,
                                8
                              )}
          
        </Typography>
      </Box>
    </Grid>
    <div className='mt-3 ms-3' style={{display:"flex",justifyContent:"right"}}>
      {/* The link */}
      <Box
       sx={{
        p: 2,
        border: '1px solid #eee',
        borderRadius: '8px',
        backgroundColor: '#113350',
        color:"white",
        textAlign: 'center',
      }}>
      <Link 
      
        to={`/newregister?tran_id=${userData.tran_id}`} 
        style={{ color: "white", textDecoration: "none" }}
      >
        https://exportmark.com/newregister?tran_id={userData.tran_id?.slice(
                                0,
                                8
                              )}
      </Link>
      </Box>

      {/* Copy button */}
     <Box>
     <Button
        variant="contained" 
        onClick={copyToClipboard}
        startIcon={<ContentCopyIcon />} // Copy icon from Material-UI
        style={{ marginLeft: '300px' }}
      >
        Copy Link
      </Button>
     </Box>
    </div>
  </Grid>
</Box>


      {/* Grid Layout for Order, Wallet, Refer, Info */}
      <Grid 
        container 
        spacing={2} 
        mt={4} 
        justifyContent="center" 
        sx={{ paddingX: 4 }}  // Adjust left and right padding
      >
        <Grid item xs={12} sm={6} md={3}>
          <Box 
            textAlign="center" 
            sx={{ backgroundColor: '#113350', color: 'white', padding: 2, cursor: 'pointer', borderRadius: "10px" }}
            onClick={() => handlePageChange('order')}
          >
            <Typography variant="h6">Order</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Box 
            textAlign="center" 
            sx={{ backgroundColor: '#427bb1', color: 'white', padding: 2, cursor: 'pointer', borderRadius: "10px" }}
            onClick={() => handlePageChange('wallet')}
          >
            <Typography variant="h6">Wallet</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Box 
            textAlign="center" 
            sx={{ backgroundColor: '#113350', color: 'white', padding: 2, cursor: 'pointer', borderRadius: "10px" }}
            onClick={() => handlePageChange('refer')}
          >
            <Typography variant="h6">Refer</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Box 
            textAlign="center" 
            sx={{ backgroundColor: '#427bb1', color: 'white', padding: 2, cursor: 'pointer', borderRadius: "10px" }}
            onClick={() => handlePageChange('info')}
          >
            <Typography variant="h6">Info</Typography>
          </Box>
        </Grid>
      </Grid>
      
      {/* Render the selected page based on the activePage state */}
      <Box mt={4}>
        {activePage === 'order' && <OrderPage />}
        {activePage === 'wallet' && <NewUserDashboard />}
        {activePage === 'refer' && <RefferPage />}
        {activePage === 'info' && <UserProfile />}
      </Box>


    </div>


   </div>
  );
};

export default UserProfile;
