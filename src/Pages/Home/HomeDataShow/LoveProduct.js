import React, { useContext, useEffect, useState } from "react";
import {
  Box,
  Button,
  Grid,
  Paper,
  Typography,
  Modal,
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@mui/material";
import ReactPaginate from "react-paginate";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../../Context/CartContext";
import useAuth from "../../../Hooks/useAuth";
import PaidIcon from "@mui/icons-material/Paid"; 
import './HomeDataShow.css'
import { MdDelete } from "react-icons/md";
import Slider from 'react-slick';
import { CgDetailsMore } from "react-icons/cg";
import { FcLike } from "react-icons/fc";
import Footer from "../../../Shared/Footer/Footer";
import Header from "../../../Shared/Header/Header";
import { FaCartPlus } from "react-icons/fa";
import axios from "axios";
const LoveProduct = () => {
  const [cart, setCart] = useContext(CartContext);
  const { user } = useAuth();
  console.log(user)
  const userData = { email: user.email, name: user.displayName };
  const [model, setModel] = useState([]);
  const [filteredModel, setFilteredModel] = useState([]);
  const [selectedType, setSelectedType] = useState(null);
  const [page, setPage] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const size = 15;
  const [searchValue, setSearchValue] = useState("");

  const [openModal, setOpenModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [productPrice, setProductPrice] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [incomePrice, setIncomePrice] = useState(0);
  const [shippingOption, setShippingOption] = useState(""); // State for shipping option
  const [shippingCost, setShippingCost] = useState(0);
  const [openCheckModal, setOpenCheckModal] = useState(false);
  const [selectedSize, setSelectedSize] = useState('');

  const navigate = useNavigate();

  const fetchData = () => {
    fetch(`https://server.exportmark.com/getlovesproduct?page=${page}&size=${size}`)
      .then((res) => res.json())
      .then((data) => {
        setModel(data.allQuestions);
        setFilteredModel(data.allQuestions);
        const count = data.count;
        const pageNumber = Math.ceil(count / size);
        setPageCount(pageNumber);
      });
  };

  useEffect(() => {
    fetchData();
  }, [page, size]);

  const handlePageChange = (data) => {
    setPage(data.selected);
  };

  const handleTypeClick = (category) => {
    navigate(`/category/${category}`);
  };

  const handleTypeClicks = (type) => {
    setSelectedType(type);
    const filteredData = model.filter((single) => single.types === type);
    setFilteredModel(filteredData);
  };

  useEffect(() => {
    if (selectedProduct) {
      setProductPrice(selectedProduct.ProductPrice || 0);
      setQuantity(1); // Reset quantity when product changes
      setIncomePrice(
        (selectedProduct.ProductPrice || 0) -
          (selectedProduct.ProductPrice || 0)
      );
    }
  }, [selectedProduct]);

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
    const existingProductIndex = storedCart.findIndex(
      (pd) =>
        pd.types === product.types &&
        pd.ProductPrice === product.ProductPrice &&
        pd.productimg === product.productimg &&
        pd.selectedSize === product.selectedSize
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
        shippingCost,
        selectedSize
      };
      updatedCart = [...storedCart, newProduct];
    }

    localStorage.setItem("productCart", JSON.stringify(updatedCart));
    setCart(updatedCart);
    Swal.fire("Success", "Product added to cart!", "success");
    handleCloseModal(); // Close modal after adding to cart
  };

  const handleOnChange = (e) => {
    const values = e.target.value.toLowerCase();
    setSearchValue(values);

    const newValue = model.filter((product) =>
      product.services?.some((service) =>
        service.categories?.toLowerCase().includes(values)
      )
    );

    if (newValue.length === 0) {
      Swal.fire("Warning", "Not Found Your Result", "warning");
    }

    setFilteredModel(newValue);
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

  const handleIncrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrementQuantity = () => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity - 1)); // Ensure quantity doesn't go below 1
  };

  useEffect(() => {
    if (selectedProduct) {
      setIncomePrice(productPrice - (selectedProduct?.ProductPrice || 0));
    }
  }, [productPrice]);

  const groupedByType = filteredModel.reduce((acc, product) => {
    acc[product.types] = acc[product.types] || [];
    acc[product.types].push(product);
    return acc;
  }, {});

  const handleSeeMore = (type) => {
    navigate(`/partcategories/${type}`);
  };
  const placeholder = "Search by Sharee Categories Name";

  const handleLikeProducts = (product) => {
    const likedProductData = {
      category: product.categories,
      size: product.size,
      img: product.img,
      description: product.description,
      price: product.ProductPrice,
      userEmail: user.email // Assuming the user is logged in and the email is available
    };
  
    // Send the product data to the backend using POST
    fetch("https://server.exportmark.com/addLikedProductdata", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(likedProductData),
    })
      .then((response) => response.json())
      .then((data) => {
        Swal.fire("Success", "Product liked successfully!", "success");
      })
      .catch((error) => {
        console.error("Error liking product:", error);
        Swal.fire("Error", "Failed to like product", "error");
      });
  };
  
  const [zoom, setZoom] = useState({
      backgroundPositionX: 'center',
      backgroundPositionY: 'center',
    });
  
    // Handle mouse move for zoom effect (optional)
    const handleMouseMove = (event) => {
      const { left, top, width, height } = event.target.getBoundingClientRect();
      const x = ((event.pageX - left) / width) * 100;
      const y = ((event.pageY - top) / height) * 100;
  
      setZoom({
        backgroundPositionX: `${x}%`,
        backgroundPositionY: `${y}%`,
      });
    };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enables autoplay
    autoplaySpeed: 3000, // Time in ms for each slide (3 seconds)
  };
 

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`https://server.exportmark.com/loveprojectdelete/${id}`)
          .then((response) => {
            response.status === 204 &&
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            const deleted = filteredModel.filter((d) => d._id !== id);
            setFilteredModel(deleted);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  };

  return (
    <div>
        <Header/>
      <div className="container text-black mt-5 mb-5">
        <div className="row">
          {/* <SearchBar
            handleOnChange={handleOnChange}
            placeholder={placeholder}
          /> */}
        </div>
        <div className="row g-4">
          <div className="col-12 ">
            
              <div>
                

                <Grid
                  container
                  spacing={2}
                  sx={{ mt: 2 }}
                  columns={{ xs: 8, sm: 8, md: 12 }}
                >
                   {filteredModel.map((product) => (
                <Grid sx={{ py: 3 }} key={product._id} item xs={4} sm={4} md={3}>
                  <Paper
                    sx={{
                      p: 1,
                      margin: "auto",
                      maxWidth: 400,
                      flexGrow: 1,
                      boxShadow: "0px 10px 22px rgb(42 135 158 / 50%)",
                    }}
                  >
                    <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 4 }}>
                      <Grid item xs={12} sm={12} md={12}>
                        <div className="photo">
                          <div className="photoShops">
                            <img src={product.img} alt={product.categories} />
                          </div>
                        </div>
                      </Grid>

                      <Grid item xs={2} sm={4} md={8} pl={2} my={3}>
                        <Box style={{ textAlign: "left", marginTop: "-20px" }}>
                          <h5 style={{ fontWeight: "600" }}>{product.categories.slice(0,22)}</h5>
                          
                          <Typography variant="body">
                            <span style={{ fontWeight: "600" }}>
                              BDT: {product.ProductPrice}
                            </span>
                          </Typography>
                        </Box>

                        <Grid   mt={1}>
                          <Grid xs={8} sm={4} md={12}>
                          <Button
                                  sx={{ fontSize:"20px"}}
                                  onClick={() => handleOpenModal(product)}
                                  variant="outlined"
                                >
                                  <FaCartPlus />
                                </Button>

                                <Button
                                      sx={{mt: { xs: 0, md: 1 }, mb: {xs:0,md:1}, marginLeft: "5px", background: "#113350",fontSize:"20px" }}
                                      onClick={() => handleOpenCheckModal(product)}
                                      variant="contained"
                                    >
                                     <CgDetailsMore  />
                                    </Button>
                                <Button
                                      sx={{mt: { xs: 0, md: 1 }, mb: {xs:0,md:1}, marginLeft: "5px",fontSize:"20px"}}
                                      onClick={() => handleDelete(product?._id)}
                                      variant="outlined"
                                    >
                                      <MdDelete />
                                    </Button>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Paper>
                </Grid>
              ))}
                </Grid>
              </div>
            
          </div>
        </div>
        {/* <ReactPaginate
          previousLabel={"previous"}
          nextLabel={"next"}
          breakLabel={"..."}
          pageCount={pageCount}
          onPageChange={handlePageChange}
          containerClassName={"pagination"}
          pageClassName={"page-item"}
          pageLinkClassName={"page-link"}
          previousClassName={"page-item"}
          previousLinkClassName={"page-link"}
          nextClassName={"page-item"}
          nextLinkClassName={"page-link"}
          breakClassName={"page-item"}
          breakLinkClassName={"page-link"}
          activeClassName={"active"}
        /> */}
      </div>

      {/* Details Modal */}
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="product-details-modal"
        aria-describedby="product-details-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}
        >
          {selectedProduct && (
            <>
              <Typography
                id="product-details-modal"
                variant="h6"
                component="h2"
              >
                {selectedProduct.types}
              </Typography>
              <span style={{ display: "flex", alignItems: "center" }}>
                <PaidIcon color="primary" />
                <Typography
                  variant="body1"
                  style={{
                    marginLeft: "10px",
                    fontWeight: "600",
                    textAlign: "left",
                  }}
                >
                  Price ৳ {productPrice * quantity + shippingCost}
                </Typography>
              </span>

              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: "10px",
                }}
              >
                <PaidIcon color="primary" />
                <Typography
                  variant="body1"
                  style={{
                    marginLeft: "10px",
                    fontWeight: "600",
                    textAlign: "left",
                  }}
                >
                  Total Income ৳ {incomePrice * quantity}
                </Typography>
              </span>
              <div style={{ display: "flex", marginTop: "10px" }}>
                <Button
                  onClick={handleIncrementQuantity}
                  className="remove-design mt-2"
                >
                  +
                </Button>
                <Typography
                  variant="body1"
                  style={{
                    marginLeft: "10px",
                    marginTop: "15px",
                    fontWeight: "700",
                  }}
                >
                  {quantity}
                </Typography>
                <Button
                  onClick={handleDecrementQuantity}
                  className="remove-design mt-2 ms-2"
                >
                  -
                </Button>
              </div>

              <Box>
      {/* Display the currently selected size */}
      <Typography variant="h6" sx={{ fontWeight: 700 }}>
        Selected Size: {selectedSize || 'None'}
      </Typography>

      {/* Only render sizes if selectedProduct is available */}
      {selectedProduct && (
        <Box>
          {/* Split sizes and trim spaces directly in JSX */}
          {selectedProduct.size && 
            selectedProduct.size.split(',').map(size => size.trim()).map((size, index) => (
              <Button 
                key={index}
                variant="outlined" 
                onClick={() => setSelectedSize(size)} // Set selected size
                sx={{ margin: '0 5px' }}
              >
                {size.toUpperCase()} {/* Display size in uppercase */}
              </Button>
            ))}
        </Box>
      )}
    </Box>

              <Box sx={{ mt: 2 }}>
                <Typography variant="h6">Select Shipping Option</Typography>
                <RadioGroup
                  value={shippingOption}
                  onChange={handleShippingChange}
                >
                  <FormControlLabel
                    value="Dhaka Onsite"
                    control={<Radio />}
                    label="Dhaka Onsite (60 Taka)"
                  />
                  <FormControlLabel
                    value="Dhaka Outside"
                    control={<Radio />}
                    label="Dhaka Outside (120 Taka)"
                  />
                </RadioGroup>
              </Box>

              <h4 sx={{ mt: 2 }}>Sale Price</h4>
              <input
                onChange={handlePriceChange}
                value={productPrice || ""}
                style={{ fontWeight: "600", color: "#0E1621" }}
                className="w-75"
                type="number"
                min="0"
                step="0.01"
                placeholder="Enter sale price"
              />
              <br />
              <Button
                sx={{ mt: 2 }}
                variant="contained"
                color="primary"
                onClick={() => handleAddToCart(selectedProduct)}
              >
                Add to Cart
              </Button>
              
            </>
          )}
        </Box>
      </Modal>

      {/* Check Modal */}
      <Modal
  open={openCheckModal}
  onClose={handleCloseCheckModal}
  aria-labelledby="check-product-details-modal"
  aria-describedby="check-product-details-description"
>
  <Box
    sx={{
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: "90vw",
      height: {
        xs: "65vh",
        sm: "75vh",
        md: "80vh",
        lg: "85vh",
      },
      bgcolor: "background.paper",
      border: "2px solid #000",
      boxShadow: 24,
      p: 4,
      overflowY: "auto",
    }}
  >
    {selectedProduct && (
      <>
        {/* Copy Button */}
        <Button
          variant="contained"
          color="primary"
          sx={{
            position: "absolute",
            top: 16,
            right: 16,
          }}
          onClick={() => {
            const productDetails = `
              Product Name: ${selectedProduct.types}
              Price: TK. ${selectedProduct.ProductPrice}
              Category: ${selectedProduct.categories}
              Size: ${selectedProduct.size || "N/A"}
              Additional Info: ${selectedProduct.Fabric || "N/A"}
              Description: ${selectedProduct.description || "N/A"}
            `;
            navigator.clipboard
              .writeText(productDetails)
              .then(() => {
                Swal.fire(
                  "Copied!",
                  "Product details have been copied to clipboard!",
                  "success"
                );
              })
              .catch((err) => {
                Swal.fire("Error", "Failed to copy product details!", "error");
                console.error("Failed to copy: ", err);
              });
          }}
        >
          Copy
        </Button>

        {/* Content */}
        <Box
          sx={{
            display: "flex",
            gap: { xs: 1, md: 2 },
            flexDirection: { xs: "column", md: "row" },
            marginTop: "20px",
          }}
        >
          {/* Image Slider */}
          <Box style={{ width: "300px", margin: "auto" }}>
            {selectedProduct?.multipleimg?.length > 0 ? (
              <Slider {...sliderSettings}>
                {selectedProduct.multipleimg.map((imgUrl, index) => (
                  <Box
                    key={index}
                    sx={{
                      position: "relative",
                      overflow: "hidden",
                      height: "230px",
                      width: "300px",
                      marginTop: "10px",
                    }}
                  >
                    <img
                      src={imgUrl}
                      alt={`Product ${index}`}
                      style={{
                        height: "100%",
                        width: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </Box>
                ))}
              </Slider>
            ) : (
              <Typography>No Images Available</Typography>
            )}
          </Box>

          {/* Product Details */}
          <Box style={{ marginLeft: "10px" }}>
            <Box style={{ fontWeight: "700" }}>
              {user?.email && (
                <Typography variant="body">
                  Price: {selectedProduct.ProductPrice}
                </Typography>
              )}
            </Box>
            <Typography variant="body1" sx={{ fontWeight: 700 }}>
              Category: {selectedProduct.categories}
            </Typography>
            <Typography variant="body1" sx={{ fontWeight: 700 }}>
              Size: {selectedProduct.size || "N/A"}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontWeight: 700,
                whiteSpace: "pre-line",
                lineHeight: 1,
              }}
            >
              Description: {selectedProduct.description || "N/A"}
            </Typography>

            {/* Buttons */}
            <Box sx={{ display: "flex", gap: 1 }}>
              <Button
                variant="contained"
                sx={{ mt: 2, background: "#113350" }}
                onClick={() => handleLikeProducts(selectedProduct)}
              >
                <FcLike
                  style={{
                    cursor: "pointer",
                    fontSize: "20px",
                    color: "white",
                  }}
                />
              </Button>

              <Button
                variant="contained"
                sx={{ mt: 2, background: "#113350" }}
                onClick={handleCloseCheckModal}
              >
                Close
              </Button>
            </Box>
          </Box>
        </Box>
      </>
    )}
  </Box>
</Modal>


<Footer/>

    </div>
  );
};

export default LoveProduct;
