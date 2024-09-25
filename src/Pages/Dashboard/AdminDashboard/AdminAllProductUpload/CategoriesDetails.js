import React, { useContext, useEffect, useState } from 'react';
import { Box, Grid, Paper, Typography, Button, Container, Stack, Modal, RadioGroup, FormControlLabel, Radio } from "@mui/material";
import Header from '../../../../Shared/Header/Header';
import Footer from '../../../../Shared/Footer/Footer';
import { useParams, NavLink } from 'react-router-dom';
import Swal from 'sweetalert2';
import { CartContext } from '../../../../Context/CartContext';
import PaidIcon from "@mui/icons-material/Paid";
import useAuth from '../../../../Hooks/useAuth';

const CategoryDetails = () => {
    const { category } = useParams();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [cart, setCart] = useContext(CartContext);
    const { user } = useAuth();

    const [openModal, setOpenModal] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [productPrice, setProductPrice] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const [incomePrice, setIncomePrice] = useState(0);
    const [shippingOption, setShippingOption] = useState(""); // State for shipping option
    const [shippingCost, setShippingCost] = useState(0);
    const [openCheckModal, setOpenCheckModal] = useState(false); 

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch(`http://localhost:5000/category/${category}`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                const services = data.flatMap(product => product.services || []);
                setProducts(services);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, [category]);

    useEffect(() => {
        if (selectedProduct) {
            setProductPrice(selectedProduct.ProductPrice || 0);
            setQuantity(1); // Reset quantity when product changes
            setIncomePrice((selectedProduct.ProductPrice || 0) - (selectedProduct.ProductPrice || 0));
        }
    }, [selectedProduct]);

     // Handle shipping option selection
     const handleShippingChange = (e) => {
        const option = e.target.value;
        setShippingOption(option);

        // Set shipping cost based on the selected option
        const cost = option === "Dhaka Onsite" ? 60 : 120;
        setShippingCost(cost);

        // Save the option and cost to local storage
        localStorage.setItem("shippingOption", JSON.stringify({ option, cost }));
    };


    const handlePriceChange = (e) => {
        const updatedPrice = parseFloat(e.target.value);
        if (!isNaN(updatedPrice)) {
            setProductPrice(updatedPrice);
            setIncomePrice(updatedPrice - (selectedProduct?.ProductPrice || 0));
        }
    };

    const handleAddToCart = (product) => {
        const storedCart = JSON.parse(localStorage.getItem("productCart")) || [];
        const existingProductIndex = storedCart.findIndex(pd =>
            pd.types === product.types &&
            pd.ProductPrice === product.ProductPrice &&
            pd.productimg === product.productimg
        );

        let updatedCart;

        if (existingProductIndex !== -1) {
            const updatedProduct = { ...storedCart[existingProductIndex] };
            updatedProduct.quantity += quantity; // Increment quantity
            updatedProduct.ProductPrices = productPrice; // Update price
            updatedProduct.totalIncome = incomePrice * updatedProduct.quantity; // Update total income
            updatedProduct.shippingOption = shippingOption;
            updatedProduct.shippingCost = shippingCost;
            updatedCart = [
                ...storedCart.slice(0, existingProductIndex),
                updatedProduct,
                ...storedCart.slice(existingProductIndex + 1),
            ];
        } else {
            const newProduct = {
                ...product,
                quantity,
                ProductPrices: productPrice,
                totalIncome: incomePrice * quantity,
                shippingOption,
                shippingCost
            };
            updatedCart = [...storedCart, newProduct];
        }

        localStorage.setItem("productCart", JSON.stringify(updatedCart));
        setCart(updatedCart);
        Swal.fire('Success', 'Product added to cart!', 'success');
        handleCloseModal(); // Close modal after adding to cart
    };

    const handleOpenModal = (product) => {
        setSelectedProduct(product);
        setProductPrice(product.ProductPrice || 0); // Initialize the price field
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
        setSelectedProduct(null);
    };
    const handleOpenCheckModal = (product) => {
        setSelectedProduct(product);
        setOpenCheckModal(true);
    };

    const handleCloseCheckModal = () => {
        setOpenCheckModal(false);
        setSelectedProduct(null);
    };

    // Increment product quantity
    const handleIncrementQuantity = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    // Decrement product quantity
    const handleDecrementQuantity = () => {
        setQuantity(prevQuantity => Math.max(1, prevQuantity - 1)); // Ensure quantity doesn't go below 1
    };

    useEffect(() => {
        if (selectedProduct) {
            setIncomePrice(productPrice - (selectedProduct?.ProductPrice || 0));
        }
    }, [productPrice]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <Header />
            <Container>
                <Grid container spacing={2} sx={{ mt: 6 }}>
                    {products.map((single) => (
                        <Grid item xs={12} sm={6} md={3} key={single._id}>
                            <Paper sx={{ p: 2, maxWidth: 400, boxShadow: "0px 10px 22px rgba(42, 135, 158, 0.5)" }}>
                                <Box textAlign="center">
                                    <img 
                                        height="230" 
                                        width="250" 
                                        style={{ borderRadius: "15px" }} 
                                        src={single?.img} 
                                        alt={single?.productName || "Product Image"} 
                                    />
                                </Box>
                                <Typography variant="h6" sx={{ fontWeight: 700, mt: 2,textAlign:"left" }}>
                                     {single?.types}
                                </Typography>
                                <Box style={{ fontWeight: "700", textAlign:"left"}}>
    {user && user?.email ? (
      <Typography variant="body">
        Price: {single?.ProductPrice}
      </Typography>
    ) : (
      null // Hides the price if the user is not logged in or has not received the email
    )}
  </Box>
                                <Typography variant="body1" sx={{ fontWeight: 700,textAlign:"left"  }}>
                                    Category: {single?.categories}
                                </Typography>
                                <Box sx={{ display: 'flex',justifyContent:"center",alignItems:"center", mt: 2 }}>
                                    
                                <Button 
                                        variant="contained" 
                                        color="primary" 
                                        size="small" 
                                        onClick={() => handleOpenCheckModal(single)} // Open Check Modal
                                    >
                                        Details
                                    </Button>
                                   
                                    <Button 
                                        variant="contained" 
                                         
                                        sx={{marginLeft:"5px",background:"#113350"}}
                                        size="small" 
                                        onClick={() => handleOpenModal(single)}
                                    >
                                        Add Cart
                                    </Button>
                                    {/* <Button 
                                        variant="contained" 
                                        color="success" 
                                        size="small" 
                                        onClick={() => handleAddToCart(single)}
                                    >
                                        Add to Cart
                                    </Button> */}
                                </Box>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
                <Stack spacing={2} sx={{ mt: 4 }}>
                    {/* Add pagination or other content if necessary */}
                </Stack>
              
            </Container>
            <Footer />

            <Modal
                open={openModal}
                onClose={handleCloseModal}
                aria-labelledby="product-details-modal"
                aria-describedby="product-details-description"
            >
                <Box sx={{ 
                    position: 'absolute', 
                    top: '50%', 
                    left: '50%', 
                    transform: 'translate(-50%, -50%)', 
                    width: 400, 
                    bgcolor: 'background.paper', 
                    border: '2px solid #000', 
                    boxShadow: 24, 
                    p: 4 
                }}>
                    {selectedProduct && (
                        <>
                            <Typography id="product-details-modal" variant="h6" component="h2">
                                {selectedProduct.types}
                            </Typography>
                            <span style={{ display: "flex", alignItems: "center" }}>
                                <PaidIcon color="primary" />
                                <Typography variant="body1" style={{ marginLeft: "10px", fontWeight: "600", textAlign: "left" }}>
                                    Price ৳ {productPrice * quantity +  shippingCost}
                                </Typography>
                            </span>
                           
                            <span style={{ display: "flex", alignItems: "center",marginTop:"10px" }}>
                                <PaidIcon color="primary" />
                                <Typography variant="body1" style={{ marginLeft: "10px", fontWeight: "600", textAlign: "left" }}>
                                    Total Income ৳ {incomePrice * quantity}
                                </Typography>
                            </span>
                            <div style={{display:"flex",marginTop:"10px"}}>
                                <Button onClick={handleIncrementQuantity} className='remove-design mt-2'>+</Button>
                                <Typography variant="body1" style={{ marginLeft: "10px",marginTop:"15px",fontWeight:"700" }}>{quantity}</Typography>
                                <Button onClick={handleDecrementQuantity} className='remove-design mt-2 ms-2'>-</Button>
                            </div>
                           
                            <Box sx={{ mt: 2 }}>
                    <Typography variant="h6">Select Shipping Option</Typography>
                    <RadioGroup value={shippingOption} onChange={handleShippingChange}>
                        <FormControlLabel value="Dhaka Onsite" control={<Radio />} label="Dhaka Onsite (60 Taka)" />
                        <FormControlLabel value="Dhaka Outside" control={<Radio />} label="Dhaka Outside (120 Taka)" />
                    </RadioGroup>
                </Box>
                           
                            <h4 sx={{mt:2}}>Sale Price</h4>
                            <input
                                onChange={handlePriceChange}
                                value={productPrice || ''}
                                style={{ fontWeight: "600", color: "#0E1621" }}
                                className='w-75'
                                type="number"
                                min="0"
                                step="0.01"
                                placeholder="Enter sale price"
                            />
                            <br />
                            <Button sx={{mt:2}} variant="contained" color="primary" onClick={() => handleAddToCart(selectedProduct)}>Add to Cart</Button>
                        </>
                    )}
                </Box>
            </Modal>

            {/* Check Modal */}
           {/* Check Modal */}
<Modal
    open={openCheckModal}
    onClose={handleCloseCheckModal}
    aria-labelledby="check-product-details-modal"
    aria-describedby="check-product-details-description"
>
    <Box sx={{ 
        position: 'absolute', 
        top: '50%', 
        left: '50%', 
        transform: 'translate(-50%, -50%)', 
        width: 400, 
        bgcolor: 'background.paper', 
        border: '2px solid #000', 
        boxShadow: 24, 
        p: 4 
    }}>
        {selectedProduct && (
            <>
                <Typography id="check-product-details-modal" variant="h6" component="h2">
                    Types: {selectedProduct.types}
                </Typography>
                <Box style={{ fontWeight: "700" }}>
    {user && user?.email ? (
      <Typography variant="body">
        Price: {selectedProduct?.ProductPrice}
      </Typography>
    ) : (
      null // Hides the price if the user is not logged in or has not received the email
    )}
  </Box>
                <Typography variant="body1" sx={{ fontWeight: 700 }}>
                    Category: {selectedProduct.categories}
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 700 }}>
                    Size: {selectedProduct.size}
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 700 }}>
                    Fabric: {selectedProduct.Fabric}
                </Typography>

                {/* Copy Button */}
                <Button 
                    variant="contained" 
                    color="primary" 
                    sx={{ mt: 2, mr: 1 }} 
                    onClick={() => {
                        const productDetails = `
                            Product Name: ${selectedProduct.types}\n
                            Price: TK. ${selectedProduct.ProductPrice}\n
                            Category: ${selectedProduct.categories}\n
                            Size: ${selectedProduct.size || 'N/A'}\n
                            Additional Info: ${selectedProduct.additionalInfo || 'N/A'}
                        `;
                        navigator.clipboard.writeText(productDetails)
                            .then(() => {
                                Swal.fire('Copied!', 'Product details have been copied to clipboard!', 'success');
                            })
                            .catch((err) => {
                                Swal.fire('Error', 'Failed to copy product details!', 'error');
                                console.error('Failed to copy: ', err);
                            });
                    }}
                >
                    Copy
                </Button>

                {/* Close Button */}
                <Button variant="contained" color="secondary" sx={{ mt: 2 }} onClick={handleCloseCheckModal}>
                    Close
                </Button>
            </>
        )}
    </Box>
</Modal>

        </div>
    );
};

export default CategoryDetails;
