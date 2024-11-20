import React, { useContext, useState } from 'react';
import { Box, Button, CardMedia, Container, Grid, ListItem, ListItemIcon, Paper, Divider, List, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';
import Header from "../../Shared/Header/Header";
import Footer from "../../Shared/Footer/Footer";
import { useForm } from 'react-hook-form';
import './OrderReviewPage.css';
import CartCalculation from '../../Hooks/UseCartCalculation';

const OrderReviewPage = (props) => {
    const { register, handleSubmit, reset } = useForm();
    const [date, setDate] = useState('');
    const { shipping, tax, totalQuantity, total, grandtotal, totalIncome, handleSearchs, handleValues, searchValues, model } = CartCalculation();
    const [open, setOpen] = useState(false);
    const [cart, setCart] = useContext(CartContext);
    let navigate = useNavigate();

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    // Handle input date change
    const handleonChange = (e) => {
        setDate(e.target.value);
    };

    // Function to remove a product from the cart
    const handleRemoveToCart = (productToRemove) => {
        const updatedCart = cart.filter(product => 
            product.types !== productToRemove.types ||
            product.ProductPrice !== productToRemove.ProductPrice ||
            product.productimg !== productToRemove.productimg
        );
        localStorage.setItem('productCart', JSON.stringify(updatedCart));
        setCart(updatedCart);
    };

    // Navigate to payment page
    const handlePaymentGoToPage = () => {
        return navigate('/payment');
    };

    // Increment product quantity
    const handleIncrementQuantity = (id) => {
        const updatedCart = cart.map(product => 
            product._id === id ? { ...product, quantity: product.quantity + 1 } : product
        );
        localStorage.setItem('productCart', JSON.stringify(updatedCart));
        setCart(updatedCart);
    };

    // Decrement product quantity
    const handleDecrementQuantity = (id) => {
        const updatedCart = cart.map(product =>
            product._id === id && product.quantity > 1
                ? { ...product, quantity: product.quantity - 1 }
                : product
        );
        localStorage.setItem('productCart', JSON.stringify(updatedCart));
        setCart(updatedCart);
    };

    return (
        <div>
            <Header></Header>
            <Container>
                <Grid container spacing={2} columns={{ xs: 12, sm: 6, md: 6 }}>
                    {/* Cart items display */}
                    <Grid sx={{mt:3}} item xs={12} sm={3} md={3}>
                        {cart.map((cartItem, index) =>
                            <Box sx={{ pb: 3 }} key={`${cartItem.types}-${index}`} setData={cartItem.buyerEmail}>
                                <Paper
                                    sx={{
                                        p: 1,
                                        margin: "auto",
                                        maxWidth: 500,
                                        flexGrow: 1,
                                        boxShadow: "0px 14px 22px rgb(42 135 158 / 60%)",
                                    }}
                                >
                                    <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
                                        <Grid item xs={2} sm={4} md={8}>
                                            <CardMedia
                                                component="img"
                                                sx={{ objectFit: "cover", height: { xs: 150, sm: 180, md: 200 }, width: { xs: 150, sm: 120,md:260 }, }}
                                                alt="complex"
                                                src={cartItem?.img}
                                            />
                                        </Grid>
                                        <Grid style={{ textAlign: "left" }} item xs={2} sm={4} md={4} pl={2} my={3}>
                                            <Box style={{ textAlign: "" }}>
                                                <Typography variant="body"
                                                    sx={{  fontWeight: 900 }}
                                                >Types: {cartItem?.types}</Typography>
                                                <br/>
                                                <Typography variant="body" style={{ fontWeight: 700, fontSize: "20px" }}>
                                                    <span>Size: </span> {cartItem?.selectedSize}
                                                </Typography>
                                                <br />
                                                <Typography variant="body" style={{ fontWeight: 700 }}>
                                                    <span style={{ fontWeight: 700 }}>Price: </span> {cartItem?.ProductPrices}
                                                </Typography>
                                                <br />
                                                <Typography variant="body" style={{ fontWeight: 700 }}>
                                                    <span style={{ fontWeight: 700 }}>Quantity: </span> {cartItem?.quantity}
                                                </Typography>
                                            </Box>
                                            <Button
                                                onClick={() => handleRemoveToCart(cartItem)}
                                                color="error"
                                                className='remove-design mt-1'
                                            >
                                                Remove
                                            </Button>
                                            {/* <div>
                                                <Button onClick={() => handleIncrementQuantity(cartItem._id)} className='remove-design mt-2'>+</Button>
                                                <Button onClick={() => handleDecrementQuantity(cartItem._id)} className='remove-design mt-2 ms-2'>-</Button>
                                            </div> */}
                                        </Grid>
                                    </Grid>
                                </Paper>
                            </Box>
                        )}
                    </Grid>

                    {/* Order summary and payment */}
                    <Grid item xs={12} sm={3} md={3}>
                        <div>
                            {/* <form onSubmit={(e) => { e.preventDefault(); handleValues(); }} className="ms-2">
                                <input
                                    placeholder='Coupon code'
                                    value={searchValues}
                                    onChange={handleSearchs}
                                    className="mb-2 input-design me-3 mt-3"
                                />
                                <button type="submit" className='apply-design'>Apply</button>
                            </form> */}
                            <List sx={{ pt: 0 }}>
                                <ListItem className='order-design '>
                                    <Typography variant='h5'>Order Summary</Typography>
                                </ListItem>
                                <Divider />
                                <ListItem>
                                    <Typography style={{ fontWeight: "500" }}>Total Quantity: {totalQuantity}</Typography>
                                </ListItem>
                                <ListItem>
                                    <Typography style={{ fontWeight: "500" }}>Total: {total.toFixed(2)} Taka</Typography>
                                </ListItem>
                                <ListItem>
                                    <Typography style={{ fontWeight: "500" }}>Shipping: {shipping.toFixed(2)} Taka</Typography>
                                </ListItem>
                                <ListItem>
                                    <Typography style={{ fontWeight: "500" }}>Tax: {tax.toFixed(2)} Taka</Typography>
                                </ListItem>
                                <Divider />
                                <ListItem>
                                    <ListItemIcon>
                                        <Typography style={{ fontWeight: "500" }}>Grand Total: {grandtotal.toFixed(2)} Taka</Typography>
                                    </ListItemIcon>
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <Typography style={{ fontWeight: "500" }}>Total Income: {totalIncome.toFixed(2)} Taka</Typography>
                                    </ListItemIcon>
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <Typography style={{ fontWeight: "500" }}>Discount Total: {model} Taka</Typography>
                                    </ListItemIcon>
                                </ListItem>
                                <ListItem>
                                    {props.children}
                                </ListItem>
                            </List>
                            <Button className='orders-design' style={{ textAlign: "left" }} onClick={handlePaymentGoToPage} sx={{ width: 1 }}>Order Now</Button>
                        </div>
                    </Grid>
                </Grid>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default OrderReviewPage;
