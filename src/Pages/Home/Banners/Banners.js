import React, { useEffect, useState } from 'react';
import { Carousel, Container } from 'react-bootstrap';
// import slider1 from '../../../images/bike-11.png'
// import slider2 from '../../../images/bike-12.png'
// import slider3 from '../../../images/bike-13.png'
import "./Banners.css"
import { Link } from 'react-router-dom';
import { Card, CardActions, CardContent, CardMedia,  Paper} from '@mui/material';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typewriter from 'typewriter-effect';
const Banners = () => {

    const [data, setData] = useState([]);
      const [loading, setLoading] = useState(true);
    
      useEffect(() => {
        async function fetchData() {
          try {
            const response = await fetch(
              `https://server.exportmark.com/bannerparts`
            );
            const result = await response.json();
            setData(result);
            setLoading(false);
          } catch (error) {
            console.error(error);
            setLoading(false);
          }
        }
        fetchData();
      }, []);


    return (
        <div>

<Carousel className="banners">
  <Carousel.Item className="carousel-design valuesPicture">
  <section className="" style={{
      backgroundImage: `url(${data[0]?.image1 || "defaultImageURL"})`,
      height: "83vh",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
    }}>
           
           <div className="container" >
               <div className="row mb-5 pb-5">
                   <div className="d-flex justify-content-center align-items-center">
                       <div style={{marginTop:"-90px"}}>
                           <div id="home"  className="row align-items-center d-flex  justify-content-start px-5 my-5 py-5">
                               <div className=" text-center my-5 py-5 ">
                                   <h1 className="text-white fw-bold  display-2" >
                                   <Typewriter
    options={{
        strings: [data[0]?.typewriter1 || ""], // Ensure it's a valid string
        autoStart: true,
        loop: true,
    }}
/>

                                   </h1>
                               </div>

                           </div>
                       </div>
                   </div>
               </div>
           </div>

       </section>
  
  
    <Carousel.Caption className="styles">
      
    {/* <Link to='/piece'>
    <button className="banner  text-white">More Products</button>
    </Link> */}
     
    </Carousel.Caption>

    <Container>
<Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 8, md: 12 }}>



      
{/* down image system paper use  */}

{/* 2nd step  */}


      {/* 3rd step  */}

   

</Grid>
</Container>
  

   
  </Carousel.Item>
  
  {/* 2dn the item  */}
  <Carousel.Item className="carousel-design valuesPicture">
  <section className=""  style={{
      backgroundImage: `url(${data[0]?.image2 || "defaultImageURL"})`,
      height: "83vh",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
    }}>
           
           <div className="container">
               <div className="row mb-5 pb-5">
                   <div className="d-flex justify-content-center align-items-center ">
                       <div style={{marginTop:"-90px"}}>
                           <div id="home" className="row align-items-center d-flex  justify-content-start px-5 my-5 py-5">
                               <div className=" text-center my-5 py-5 ">
                                   <h1 className="text-white fw-bold  display-2">
                                   <Typewriter
    options={{
        strings: [data[0]?.typewriter2 || ""], // Ensure it's a valid string
        autoStart: true,
        loop: true,
    }}
/>

                                   </h1>
                               </div>

                           </div>
                       </div>
                   </div>
               </div>
           </div>

       </section>

    <Carousel.Caption>
 
    {/* <Link to='/more'>
    <button className="banner  text-white">More Products</button>
    </Link> */}
     
    </Carousel.Caption>

    <Container>
<Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 8, md: 12 }}>



      
      {/* down image system  */}

{/* 2nd step  */}



      {/* 3rd step  */}

      

</Grid>
</Container>
  </Carousel.Item>
  <Carousel.Item className="carousel-design valuesPicture">
  <section className=""  style={{
      backgroundImage: `url(${data[0]?.image3 || "defaultImageURL"})`,
      height: "83vh",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
    }}>
           
           <div className="container">
               <div className="row mb-5 pb-5">
                   <div className="d-flex justify-content-center align-items-center ">
                       <div style={{marginTop:"-90px"}}>
                           <div id="home" className="row align-items-center d-flex  justify-content-start px-5 my-5 py-5">
                               <div className=" text-center my-5 py-5 ">
                                   <h1 className="text-white fw-bold  display-2">
                                   <Typewriter
    options={{
        strings: [data[0]?.typewriter3 || ""], // Ensure it's a valid string
        autoStart: true,
        loop: true,
    }}
/>

                                   </h1>
                               </div>

                           </div>
                       </div>
                   </div>
               </div>
           </div>

       </section>
    
    <Carousel.Caption>
  
    {/* <Link  to='/more'>
    <button style={{marginTop:"-100px"}} className="banner  text-white">More Products</button>
    </Link> */}
    
    </Carousel.Caption>
    <Container>
<Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 8, md: 12 }}>



      
    

{/* 2nd step  */}



      {/* 3rd step  */}

     

</Grid>
</Container>
  </Carousel.Item>
  
</Carousel>
            
        </div>
    );
};

export default Banners;