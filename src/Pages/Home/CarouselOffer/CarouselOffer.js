import React from 'react';
import { Carousel } from 'react-bootstrap';
// import slider1 from '../../../images/bike-11.png'
// import slider2 from '../../../images/bike-12.png'
// import slider3 from '../../../images/bike-13.png'
// import "./Banner.css"
import './CarouselOffer.css'
import { Link } from 'react-router-dom';


const CarouselOffer = () => {
    return (
        <div data-aos="fade-up" className='mb-5 mt-4'>

<Carousel className="banners">
  <Carousel.Item className="carousel-design values">
  <img
      className="d-block w-100  slide"
      src="https://i.ibb.co/XbfCpjv/6.png"
      alt="First slide"
    />
  
  
    <Carousel.Caption className="styles">
      
    <Link to='/tat'>
    <button className="banner  text-white">More Products</button>
    </Link>
     
    </Carousel.Caption>
  

   
  </Carousel.Item>
  
  <Carousel.Item className="carousel-design values">
    <img
      className="d-block w-100  slide"
      src="https://i.ibb.co/WD6Hvvs/9.png"
      alt="Second slide"
    />

    <Carousel.Caption>
 
    <Link to='/jamdani'>
    <button className="banner  text-white">More Products</button>
    </Link>
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item className="carousel-design values">
    <img
      className="d-block w-100  slide"
      src="https://i.ibb.co/RbJDrQJ/8.png"
      alt="Third slide"
    />

    <Carousel.Caption>
  
    <Link to='/tat'>
    <button className="banner  text-white">More Products</button>
    </Link>
    
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
            
        </div>
    );
};

export default CarouselOffer;