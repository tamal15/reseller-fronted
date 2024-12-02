import React, { useEffect, useState } from 'react';
import { CardActionArea, Grid, CardContent, Card, Typography, Box, Paper } from "@mui/material";
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import ServiceDetailsPart from './ServiceDetailsPart';
import Cart from '../../../../../Components/Cart';
import { useContext } from 'react';
import Swal from 'sweetalert2';
import { CartContext } from '../../../../../Context/CartContext';
// import { CartContext } from '../../../../../Context/CartContext';
const ServiceCard = ({ProductName,img,_id,ProductPrice,item}) => {
  console.log(item)
  const [cart, setCart] = useContext(CartContext);
  const [details, setDetails] = useState([]);
  useEffect(()=>{
    fetch('https://server.exportmark.com/potterservice')
    .then(res=>res.json())
    .then(data=>setDetails(data))
},[])

const handleAddToCart = (product) => {

  const exists = cart.find(pd => pd._id === product._id);
  let newCart = [];
  if (exists) {
      const rest = cart.filter(pd => pd._id !== product._id);
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, product];
  } else {
      product.quantity = 1;
      newCart = [...cart, product]

  }
  localStorage.setItem("productCart", JSON.stringify(newCart));
  setCart(() => newCart);
  Swal.fire(
    'Success Product!',
    
)
};

    return (
        <>

        <Grid
          item xs={12} sm={6} md={4}
        //   onClick={() => handleCardClick(Id)}
        //   className={classes.root}
        // sx={{ marginBottom: "50px",
        // boxShadow: 2}}
        >
  
          <Paper   elevation={2} sx={{ width: { xs: '100%', md: '250px' }, borderRadius: 2 }}>
  
            <Box
             
              sx={{
                backgroundImage: `url(${img})`,
               
                height: '150px', width: { xs: '100%', md: '250px' },
                backgroundSize: 'cover',
                borderRadius: 2
              }}>
                
  
            </Box>
  
          </Paper>
  
          <Typography sx={{
            color: 'rgba(0,0,0,.9)',
            fontWeight: 600,
            fontSize: '16px',
            lineHeight: 1.44,
            paddingBottom: '10px',
            textAlign: 'center',
            mt: 1,
          }} gutterBottom variant="h6" component="div">
          Name:  {ProductName}
          </Typography>
          <Typography sx={{
            color: 'rgba(0,0,0,.9)',
            fontWeight: 600,
            fontSize: '16px',
            lineHeight: 1.44,
            paddingBottom: '10px',
            textAlign: 'center',
            mt: 1,
          }} gutterBottom variant="h6" component="div">
           Price: TK. {ProductPrice}
          </Typography>


          {/* start  */}

          <Button
                  className='btn-style download-btn'
                    size="small"
                    // sx={ButtonStyle}
                    style={{textAlign:"left"}}
                    onClick={() => handleAddToCart(item)}
                  >
                    Add cart
                  </Button>

         {/* <section id={`{_id}`}> */}
         {/* <NavLink
                    to={`/servicesDetails/${_id}`}
                    className="details-show"
                    style={{ textDecoration: "none", marginRight: "4px" }}
                  >
                    <Button
                     className='btn-style download-btn details-show ms-2'
                     style={{padding:"5px"}}
                    size="small">
                      Details
                    </Button>
                  </NavLink> */}
         {/* </section> */}



          {/* end  */}

         

          

                 

  
  
        </Grid>


  
      </>
    );
};

export default ServiceCard;