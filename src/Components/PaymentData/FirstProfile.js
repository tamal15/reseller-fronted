import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import { Box, Typography, Grid, Button } from '@mui/material';
import OrderPage from './OrderPage';
import WalletPage from './WalletPage';
import RefferPage from './RefferPage';
import InfoPage from './InfoPage';
import { Link } from 'react-router-dom';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
// Importing icons from React Icons
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaEnvelope } from 'react-icons/fa';
import SupportTicketForm from './SupportTicket';
import SupportTicketsList from './ShowSupportTicket';
import Dashboard from './UserDashboard';
import UserProfile from '../../Pages/Dashboard/UserProfile/UserProfile';
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';
import UserDashboard from './UserDashboard';
import NewUserDashboard from './UserDashboard';

const FirstProfile = () => {
  const { user } = useAuth(); // Get the current logged-in user
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
    const link = `http://localhost:3000/newregister?tran_id=${userData.tran_id}`;
    navigator.clipboard.writeText(link).then(() => {
      alert('Link copied to clipboard!');
    }).catch(err => {
      console.error('Error copying link: ', err);
    });
  };

  return (
    <Box className="dashboard">
      <Header/>
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
        https://car-mechines.web.app/newregister?tran_id={userData.tran_id?.slice(
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

      {/* Only show below sections when no specific page is active */}
      {activePage === '' && (
        <>
          {/* YouTube Video Embedding */}
          <Box mt={4} style={{ textAlign: "left", marginLeft: "30px" }}>
            <Typography style={{ marginBottom: "20px", fontWeight: "600" }} variant="h4">Support Tutorial</Typography>
            <iframe
              width="360"
              height="215"
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </Box>

          {/* Contact Us Section with 2 Rows and 3 Columns */}
          <Box mt={4} style={{ textAlign: "left", marginLeft: "30px" }}>
            <Typography style={{ marginBottom: "20px", fontWeight: "600" }} variant="h4">Contact Us</Typography>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <Box style={{ display: "flex", alignItems: "center" }}>
                  <FaFacebook size={24} style={{ marginRight: "10px" }} />
                  <Box>
                    <Typography><Link style={{ textDecoration: "none", color: "black" }} to="/">Follow us on Facebook</Link></Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={4}>
                <Box style={{ display: "flex", alignItems: "center" }}>
                  <FaTwitter size={24} style={{ marginRight: "10px" }} />
                  <Box>
                    <Typography><Link style={{ textDecoration: "none", color: "black" }} to="/">Follow us on Twitter</Link></Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={4}>
                <Box style={{ display: "flex", alignItems: "center" }}>
                  <FaInstagram size={24} style={{ marginRight: "10px" }} />
                  <Box>
                    <Typography><Link style={{ textDecoration: "none", color: "black" }} to="/">Follow us on Instagram</Link></Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={4}>
                <Box style={{ display: "flex", alignItems: "center" }}>
                  <FaLinkedin size={24} style={{ marginRight: "10px" }} />
                  <Box>
                    <Typography><Link style={{ textDecoration: "none", color: "black" }} to="/">Connect with us on LinkedIn</Link></Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={4}>
                <Box style={{ display: "flex", alignItems: "center" }}>
                  <FaYoutube size={24} style={{ marginRight: "10px" }} />
                  <Box>
                    <Typography><Link style={{ textDecoration: "none", color: "black" }} to="/">Subscribe to our YouTube</Link></Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={4}>
                <Box style={{ display: "flex", alignItems: "center" }}>
                  <FaEnvelope size={24} style={{ marginRight: "10px" }} />
                  <Box>
                    <Typography><Link style={{ textDecoration: "none", color: "black" }} to="/">Email Us</Link></Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>

          {/* Support Ticket Form and List */}
          <Box mt={4} style={{ textAlign: "left", marginLeft: "30px" }}>
            <SupportTicketForm />
          </Box>
          <Box mt={4} style={{ textAlign: "left", marginLeft: "30px" }}>
            <SupportTicketsList />
          </Box>
        </>
      )}
      <Footer/>
    </Box>
  );
};

export default FirstProfile;
