import React, { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";
import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import Swal from 'sweetalert2';

const AdminProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/adminShowproduct')
      .then((res) => res.json())
      .then((data) => setProducts(data.allQuestions))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  const handleDelete = async (parentId, index) => {
    try {
        // Ensure IDs and index are correctly formatted
        const response = await fetch(`http://localhost:5000/productdelete/${parentId}/${index}`, {
            method: 'DELETE',
        });

        const data = await response.json();

        if (response.ok && data.deletedCount > 0) {
            Swal.fire({
                icon: 'success',
                title: 'Success!',
                text: 'Service deleted successfully',
            });

            // Update state to reflect deletion
            setProducts(prevProducts => 
                prevProducts.map(product => {
                    if (product._id === parentId) {
                        return {
                            ...product,
                            services: product.services.filter((_, i) => i !== parseInt(index))
                        };
                    }
                    return product;
                }).filter(product => product.services.length > 0) // Remove products with empty services array
            );
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: data.message || 'Failed to delete the service. Please try again.',
            });
        }
    } catch (error) {
        Swal.fire({
            icon: 'error',
            title: 'Error!',
            text: 'An error occurred while deleting the service. Please try again.',
        });
        console.error('Error deleting service:', error);
    }
  };

  return (
    <Grid container spacing={2} sx={{ mt: 6 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      {products.map((single) =>
        single?.services?.map((service, index) => (
          <Grid sx={{ py: 3 }} key={`${single._id}-${index}`} item xs={4} sm={4} md={4}>
            <Paper
              sx={{
                p: 1,
                margin: "auto",
                maxWidth: 500,
                flexGrow: 1,
                boxShadow: "0px 14px 22px rgb(42 135 158 / 50%)"
              }}
            >
              <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 4 }}>
                <Grid item xs={12} sm={12} md={12}>
                  <div className='photo'>
                    <div className='photoShops photoalbums'>
                      <img
                        height="230"
                        width="250"
                        style={{ borderRadius: "15px" }}
                        src={service?.img}
                        alt={service?.categories}
                      />
                    </div>
                  </div>
                </Grid>
                <Grid item xs={2} sm={4} md={8} pl={2} my={3}>
                  <Box style={{ textAlign: "left" }}>
                    <Typography variant="h6" fontWeight="bold">Type: {service?.types}</Typography>
                    <Typography variant="body1" fontWeight="bold">Price: TK.{service?.ProductPrice}</Typography>
                    <Typography variant="body1" fontWeight="bold">Category: {service?.categories}</Typography>
                    <Typography variant="body1" fontWeight="bold">Fabric: {service?.Fabric}</Typography>
                    <Typography variant="body1" fontWeight="bold">Gender: {service?.gender}</Typography>
                    <Typography variant="body1" fontWeight="bold">Size: {service?.size}</Typography>
                  </Box>
                </Grid>
              </Grid>
              <Box sx={{ display: 'flex', justifyContent: 'right' }}>
                <NavLink to={`/dashboard/updateadminproducts/${single?._id}/${index}`}>
                  <Button variant="contained" color="primary" sx={{ mr: 1 }}>
                    Edit
                  </Button>
                </NavLink>
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => handleDelete(single?._id, index)}
                >
                  Delete
                </Button>
              </Box>
            </Paper>
          </Grid>
        ))
      )}
    </Grid>
  );
};

export default AdminProducts;
