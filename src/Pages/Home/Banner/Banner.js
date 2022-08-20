import React from 'react';
import { Carousel } from 'react-bootstrap';
// import slider1 from '../../../images/bike-11.png'
// import slider2 from '../../../images/bike-12.png'
// import slider3 from '../../../images/bike-13.png'
import "./Banner.css"
import { Link } from 'react-router-dom';


const Banner = () => {
    return (
        <div>

<Carousel className="banners">
  <Carousel.Item className="carousel-design values">
  <img
      className="d-block w-100 slide"
      src="https://i.ytimg.com/vi/Ai7k3rI21H8/maxresdefault.jpg"
      alt="First slide"
    />
  
  
    <Carousel.Caption className="styles">
      
    <Link to='/piece'>
    <button className="banner  text-white">More Products</button>
    </Link>
     
    </Carousel.Caption>
  

   
  </Carousel.Item>
  
  <Carousel.Item className="carousel-design values">
    <img
      className="d-block w-100 slide"
      src="https://5.imimg.com/data5/EP/IZ/YC/SELLER-100211663/polo-t-shirts-500x500.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
 
    <Link to='/more'>
    <button className="banner  text-white">More Products</button>
    </Link>
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item className="carousel-design values">
    <img
      className="d-block w-100  slide"
      src="https://cdn.shopify.com/s/files/1/0093/5601/7721/files/colorful-shirts-in-file-1561434.jpg?v=1546875678"
      alt="Third slide"
    />

    <Carousel.Caption>
  
    <Link to='/more'>
    <button className="banner  text-white">More Products</button>
    </Link>
    
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
            
        </div>
    );
};

export default Banner;