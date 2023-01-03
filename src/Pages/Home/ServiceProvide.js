import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, CardActions, CardContent, Collapse, Container, IconButton } from '@mui/material';
import Card from '@mui/material/Card';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styled from '@emotion/styled';



const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(0deg)',
    marginLeft: 'auto',
}));


const ServiceProvide = () => {

    const [expanded1, setExpanded1] = React.useState(false);
    const [expanded2, setExpanded2] = React.useState(false);
    const [expanded3, setExpanded3] = React.useState(false);
    const [expanded4, setExpanded4] = React.useState(false);

    const handleExpandClick1 = () => {
        setExpanded1(!expanded1);
    };
    const handleExpandClick2 = () => {
        setExpanded2(!expanded2);
    };
    const handleExpandClick3 = () => {
        setExpanded3(!expanded3);
    };
    const handleExpandClick4 = () => {
        setExpanded4(!expanded4);
    };

    return (
        <Box id="services" sx={{ flexGrow: 1, my: 5 }}>
            <Container>

            {/* <h2 style={{ textAlign: 'center', fontSize:"3em",fontWeight:"700", margin: 0, padding: 0 ,marginBottom:"0px" , color: "#7E2231", marginTop:"50px"}}> Services We Provide
                        </h2>

                        <hr style={{ display: 'inline-block', width: '20%', height: '3px', backgroundColor: '#D0425C', border: 0, }} /> */}

                <h2 style={{ textAlign: 'center', fontSize:"3em",fontWeight:"700",marginBottom:"10px" , color: "#7E2231", marginTop:"50px"}} variant="h4" gutterBottom component="div">
                    Services We Provide
                    
                </h2>
                <hr className='' style={{  width: '15%', height: '5px', backgroundColor: 'blsck', display:"inline-block", border:0}} />
                
                <Grid sx={{ pt: 5 }} container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>

                    {/* =========1===========
                    =========================== */}
                    <Grid item xs={12} sm={12} md={3}>

                        <Card sx={{ textAlign: 'center', fontFamily: 'Poppins', pt: 5, pb: 2, borderRadius: '25px' }} style={{ boxShadow: '0px 17px 15px 5px #dad6d6' }}>
                            <img
                                component="img"
                                height="194"
                                src='https://i.ibb.co/2NkX7wb/counselling.png'
                                alt="Paella dish"
                            />
                            <h2 style={{ fontSize: '18px' }}>Order</h2>
                            <CardContent>
                                <p>
                                Order System means a software application, satisfactory to the Market Operator, for entering Orders into the Trading Platform through a Terminal.
                                </p>
                            </CardContent>
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', placeContent: 'center' }}>
                                <CardActions disableSpacing>
                                    <ExpandMore
                                        expand={expanded1}
                                        onClick={handleExpandClick1}
                                        aria-expanded={expanded1}
                                        aria-label="show more"
                                    >
                                        <Button style={{ backgroundColor: '#7E2231', color: 'white', padding: '10px', borderRadius: '15px' }} variant="contained">{expanded1 ? 'Learn Less' : 'Learn More'} <ExpandMoreIcon /></Button>
                                    </ExpandMore>
                                </CardActions>
                            </div>
                            <Collapse in={expanded1} timeout="auto" unmountOnExit>
                                <CardContent>
                                    <p>
                                    Order System means a software application, satisfactory to the Market Operator, for entering Orders into the Trading Platform through a Terminal.
                                    </p>
                                </CardContent>
                            </Collapse>
                        </Card>
                    </Grid>

                    {/* =======2==========
                    ====================== */}

                    <Grid item xs={12} sm={12} md={3}>

                        <Card sx={{ textAlign: 'center', fontFamily: 'Poppins', pt: 5, pb: 2, mt: { md: 36 }, borderRadius: '25px' }} style={{ boxShadow: '0px 17px 15px 5px #dad6d6' }}>
                            <img
                                component="img"
                                height="194"
                                src='https://i.ibb.co/LdQndHJ/Doctors-pana.png'
                                alt="Paella dish"
                            />
                            <h2 style={{ fontSize: '18px' }}>Delivery</h2>
                            <CardContent>
                                <p>
                                Delivery system. a manmade system with the purpose of delivering a drug or another chemical directly into a cellular target, such as a via a manmade vesicle called a liposome.
                                </p>
                            </CardContent>
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', placeContent: 'center' }}>
                                <CardActions disableSpacing>
                                    <ExpandMore
                                        expand={expanded2}
                                        onClick={handleExpandClick2}
                                        aria-expanded={expanded2}
                                        aria-label="show more"
                                    >
                                        <Button style={{ backgroundColor: '#7E2231', color: 'white', padding: '10px', borderRadius: '15px' }} variant="contained">{expanded2 ? 'Learn Less' : 'Learn More'} <ExpandMoreIcon /></Button>
                                    </ExpandMore>
                                </CardActions>
                            </div>
                            <Collapse in={expanded2} timeout="auto" unmountOnExit>
                                <CardContent>
                                    <p>
                                    Delivery system. a manmade system with the purpose of delivering a drug or another chemical directly into a cellular target, such as a via a manmade vesicle called a liposome.
                                    </p>
                                </CardContent>
                            </Collapse>
                        </Card>
                    </Grid>
                    {/* =========3========
                      ====================== */}
                    <Grid item xs={12} sm={12} md={3}>

                        <Card sx={{ textAlign: 'center', fontFamily: 'Poppins', pt: 5, pb: 2, borderRadius: '25px' }} style={{ boxShadow: '0px 17px 15px 5px #dad6d6' }}>
                            <img
                                component="img"
                                height="194"
                                src='https://i.ibb.co/10KbXYH/mental-care.png'
                                alt="Paella dish"
                            />
                            <h2 style={{ fontSize: '18px' }}>Payment</h2>
                            <CardContent>
                                <p>
                                Payment & settlement systems are mechanisms established to facilitate the clearing and settlement of monetary and other financial transactions. Secure, affordable & accessible payment systems
                                </p>
                            </CardContent>
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', placeContent: 'center' }}>
                                <CardActions disableSpacing>
                                    <ExpandMore
                                        expand={expanded3}
                                        onClick={handleExpandClick3}
                                        aria-expanded={expanded3}
                                        aria-label="show more"
                                    >
                                        <Button style={{ backgroundColor: '#7E2231', color: 'white', padding: '10px', borderRadius: '15px' }} variant="contained">{expanded3 ? 'Learn Less' : 'Learn More'} <ExpandMoreIcon /></Button>
                                    </ExpandMore>
                                </CardActions>
                            </div>
                            <Collapse in={expanded3} timeout="auto" unmountOnExit>
                                <CardContent>
                                    <p>
                                    Payment & settlement systems are mechanisms established to facilitate the clearing and settlement of monetary and other financial transactions. Secure, affordable & accessible payment systems
                                    </p>
                                </CardContent>
                            </Collapse>
                        </Card>
                    </Grid>
                    {/* =======4========
                     ==================*/}

                    <Grid item xs={12} sm={12} md={3}>

                        <Card sx={{ textAlign: 'center', fontFamily: 'Poppins', pt: 5, pb: 2, mt: { md: 36 }, borderRadius: '25px' }} style={{ boxShadow: '0px 17px 15px 5px #dad6d6' }}>
                            <img
                                component="img"
                                height="194"
                                src='https://i.ibb.co/r7J2DVM/training.png'
                                alt="Paella dish"
                            />
                            <h2 style={{ fontSize: '18px' }}>Buyer Service</h2>
                            <CardContent>
                                <p>
                                Payment & settlement systems are mechanisms established to facilitate the clearing and settlement of monetary and other financial transactions. Secure, affordable & accessible payment systems
                                </p>
                            </CardContent>
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', placeContent: 'center' }}>
                                <CardActions disableSpacing>
                                    <ExpandMore
                                        expand={expanded4}
                                        onClick={handleExpandClick4}
                                        aria-expanded={expanded4}
                                        aria-label="show more"
                                    >
                                        <Button style={{ backgroundColor: '#7E2231', color: 'white', padding: '10px', borderRadius: '15px' }} variant="contained">{expanded4 ? 'Learn Less' : 'Learn More'} <ExpandMoreIcon /></Button>
                                    </ExpandMore>
                                </CardActions>
                            </div>
                            <Collapse in={expanded4} timeout="auto" unmountOnExit>
                                <CardContent>
                                    <p>
                                    Payment & settlement systems are mechanisms established to facilitate the clearing and settlement of monetary and other financial transactions. Secure, affordable & accessible payment systems
                                    </p>
                                </CardContent>
                            </Collapse>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default ServiceProvide;