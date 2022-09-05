import { Box, Button, CardMedia, Container, Grid, Paper, Rating, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Cart from '../../Components/Cart';
import { CartContext } from '../../Context/CartContext';

const OrderReviewPage = () => {
    const [cart, setCart] = useContext(CartContext);
    let navigate = useNavigate();


    const handleRemoveToCart = (id) => {
        const getDb = localStorage.getItem('productCart');
        const removeCartParse = JSON.parse(getDb);
        const newCart = removeCartParse.filter(product => product._id !== id);
        localStorage.setItem("productCart", JSON.stringify(newCart));
        setCart(() => newCart);
    }


    const handlePaymentGoToPage = () => {
        return navigate('/payment');
    }


    return (
        <Container>
            <br />
            <Grid container spacing={2} columns={{ xs: 12, sm: 6, md: 6 }}>
                <Grid item xs={12} sm={3} md={3}>
                    {
                        cart.map(cart =>
                            <Box sx={{ pb: 3 }} key={cart._id} >
                                <Paper
                                    sx={{
                                        p: 1,
                                        margin: "auto",
                                        maxWidth: 500,
                                        flexGrow: 1,
                                        boxShadow: "0px 14px 22px rgb(42 135 158 / 10%)",
                                    }}
                                >
                                    <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
                                        <Grid item xs={2} sm={4} md={4}>
                                            <CardMedia
                                                component="img"
                                                sx={{ objectFit: "cover", height: 200, width: "auto" }}
                                                alt="complex"
                                                src={cart?.img}
                                            />
                                        </Grid>
                                        <Grid item xs={2} sm={4} md={8} pl={2} my={3}>
                                            <Box>
                                                <Typography variant="h6"
                                                    sx={{ fontSize: '12px', fontWeight: 900 }}
                                                >{cart?.bookName}</Typography>


                                                <br />

                                                <Typography variant="body">
                                                    <span style={{ fontWeight: 700 }}>  Product: </span>
                                                    {cart?.productName}

                                                </Typography>
                                                <br />
                                                <Typography variant="body">
                                                    <span style={{ fontWeight: 700 }}> Price:</span>
                                                    {cart?.ProductPrice}
                                                </Typography>
                                                <br />
                                                <Typography variant="body">
                                                    <span style={{ fontWeight: 700 }}> Quantity:</span>
                                                    {cart?.quantity}
                                                </Typography>

                                            </Box>


                                            <Button
                                                onClick={() => handleRemoveToCart(cart._id)}
                                                color="error"
                                            >
                                                Remove
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </Paper>
                            </Box>
                        )
                    }
                </Grid>


                <Grid item xs={12} sm={3} md={3}>

                    <Cart>
                        <Button onClick={handlePaymentGoToPage} sx={{ width: 1 }}>Order Now</Button>
                    </Cart>
                </Grid>
            </Grid>
        </Container>
    );
};

export default OrderReviewPage;