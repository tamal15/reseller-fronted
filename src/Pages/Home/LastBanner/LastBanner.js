import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { NavLink } from 'react-router-dom';
import './LastBanner.css'

const LastBanner = () => {
    return (
        <Box sx={{ height: '80vh', }}>
            <Container sx={{ height: '100%', position: 'relative', overflow: 'hidden' }}>
                <Grid container spacing={4} sx={{ height: '100%' }} alignItems='center'>
                    <Grid item md={6} xs={12}>
                        <Typography color="#2d3e50" gutterBottom variant='h3' sx={{ fontWeight: '900' ,textAlign:"left"}}>Let's grow together.</Typography>
                        <Typography gutterBottom variant='body1' sx={{textAlign:"left"}}>We're building a culture at service A to Z where amazing people (like you) can do their best work. If you're ready to grow your career and help millions of organizations grow better, you've come to the right place.</Typography>
                        <Button
                        className='last me-5'
                            component={NavLink}
                            to='/dashboard/becomeaprovider'
                            style={{ backgroundColor: "#FF5E14", textAlign:"left"}}
                            sx={{
                                textAlign:"left",
                                borderRadius: 1,
                                p: 2,
                                fontWeight: 'bold',
                                me: 5,
                                mt: 2,
                                position: 'relative',
                                zIndex: 2
                            }}
                            variant='contained'>
                            see all open options
                        </Button>

                    </Grid>
                </Grid>
                <Box
                    sx={{
                        position: 'absolute',
                        inset: 1,
                        display: { xs: 'none', md: 'block' }
                    }}
                    className='nestedBanner'
                >
                    <Box className='innerBanner' >
                        <Box className='innerTitle'  >
                            <Grid container spacing={4} sx={{ height: '100%' }} alignItems='center'>
                                <Grid item md={6} xs={12}>
                                    <Box
                                        sx={{
                                            background: 'rgb(17 17 17 / 75%)',
                                            px: 1,
                                            borderRadius: 2,
                                        }}
                                    >
                                        <Typography color="#ffffffed" gutterBottom variant='h4' sx={{ fontWeight: '900' }}>Let's be a Seller</Typography>
                                        <Typography color='#ffffffed' variant='body1' sx={{}}>We have most hard working and honest Seller who are got more than 4.5 star review from our customer . It easy to be a Seller and get paid after your appointment done. Joint with us</Typography>

                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>

                    </Box>

                </Box>
            </Container>



        </Box>
    );
};

export default LastBanner;