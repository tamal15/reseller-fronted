// import React from 'react';
import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Avatar, Box, Container, Rating, Typography } from "@mui/material";
// import "./TestimonialSlider.css";
import './Categories.css'

// import required modules
import { FreeMode, Pagination,Autoplay } from "swiper";
// import useAuth from "../../ManyPages/hooks/useAuth";

const Categories = () => {
//  const {user}=useAuth()
//   const [review,setReview]=useState([])
//   useEffect(()=>{
//     fetch('http://localhost:5000/review')
//     .then(res=>res.json())
//     .then(data=>setReview(data))
//   },[])
  return (
    <div className="container">
         <h1 className="mt-5">Categories</h1>
     <div className="row">
      <div className="">
      <Swiper
         className="mySwiper"
         slidesPerView={6}
         spaceBetween={30}
         freeMode={true}
         // pagination={{
         //   clickable: true,
         // }}
         autoplay={{
           delay: 2000
         }}
        
          breakpoints={{
            300: {
              slidesPerView: 1,
              spaceBetween: 40,
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1280: {
              slidesPerView: 5,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 40,
            }
          }}
       
         
         
        
         modules={[FreeMode, Pagination,Autoplay]}
        
       
       
       >



  

  
        
      
 
         
 
         
 
 
 
         <>
        
        
             <div>

              

                <Swiper>


                <SwiperSlide style={{width:"150px",  background:" #182533",padding:"12px",borderRadius:"12px"}}>  
               <div style={{ }}>
               {/* <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)',width:"300px" }}> */}
 
               <Box sx={{ display: "flex", justifyContent: "center" }}>
                 <img height='90' style={{borderRadius:"50%"}}
                  src='https://storage.googleapis.com/monarchmart-storage/uploads/all/so09ZxWECbxkv7YJ4Gz8mVKlzZIX2Palu5wNUXGC.png'
                   sx={{
                    //  width: 30,
                     borderRadius:"100%",
                     height: 10,
                     padding:"2px",
                     border: "1px solid lightgray",
                    //  marginBottom:"10px",
                     
                    //  marginTop:"10px"
                   }}
                 />
               </Box>
 
              <Box style={{padding:"10px",textAlign:"left"}}>
            <h6 style={{fontSize:"15px"}}> name </h6>
            {/* {reviews.name} */}
             
             {/* <br></br> */}
        
          <p style={{fontSize:"12px",textAlign:"left"}}>commnet</p>
            <p>
         
            </p>
 
              </Box>
               </div>
           
         
                
             </SwiperSlide>


             <SwiperSlide style={{width:"200px",  background:" #182533",padding:"12px",borderRadius:"12px"}}>  
               <div style={{ }}>
               {/* <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)',width:"300px" }}> */}
 
               <Box sx={{ display: "flex", justifyContent: "center" }}>
                 <img height='90' style={{borderRadius:"50%"}}
                  src='https://storage.googleapis.com/monarchmart-storage/uploads/all/so09ZxWECbxkv7YJ4Gz8mVKlzZIX2Palu5wNUXGC.png'
                   sx={{
                    //  width: 30,
                     borderRadius:"100%",
                     height: 10,
                     padding:"2px",
                     border: "1px solid lightgray",
                    //  marginBottom:"10px",
                     
                    //  marginTop:"10px"
                   }}
                 />
               </Box>
 
              <Box style={{padding:"10px",textAlign:"left"}}>
            <h6 style={{fontSize:"15px"}}> name </h6>
            {/* {reviews.name} */}
             
             {/* <br></br> */}
        
          <p style={{fontSize:"12px",textAlign:"left"}}>commnet</p>
            <p>
         
            </p>
 
              </Box>
               </div>
           
         
                
             </SwiperSlide>




             <SwiperSlide style={{width:"200px",  background:" #182533",padding:"12px",borderRadius:"12px"}}>  
               <div style={{ }}>
               {/* <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)',width:"300px" }}> */}
 
               <Box sx={{ display: "flex", justifyContent: "center" }}>
                 <img height='90' style={{borderRadius:"50%"}}
                  src='https://storage.googleapis.com/monarchmart-storage/uploads/all/so09ZxWECbxkv7YJ4Gz8mVKlzZIX2Palu5wNUXGC.png'
                   sx={{
                    //  width: 30,
                     borderRadius:"100%",
                     height: 10,
                     padding:"2px",
                     border: "1px solid lightgray",
                    //  marginBottom:"10px",
                     
                    //  marginTop:"10px"
                   }}
                 />
               </Box>
 
              <Box style={{padding:"10px",textAlign:"left"}}>
            <h6 style={{fontSize:"15px"}}> name </h6>
            {/* {reviews.name} */}
             
             {/* <br></br> */}
        
          <p style={{fontSize:"12px",textAlign:"left"}}>commnet</p>
            <p>
         
            </p>
 
              </Box>
               </div>
           
         
                
             </SwiperSlide>



             <SwiperSlide style={{width:"200px",  background:" #182533",padding:"12px",borderRadius:"12px"}}>  
               <div style={{ }}>
               {/* <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)',width:"300px" }}> */}
 
               <Box sx={{ display: "flex", justifyContent: "center" }}>
                 <img height='90' style={{borderRadius:"50%"}}
                  src='https://storage.googleapis.com/monarchmart-storage/uploads/all/so09ZxWECbxkv7YJ4Gz8mVKlzZIX2Palu5wNUXGC.png'
                   sx={{
                    //  width: 30,
                     borderRadius:"100%",
                     height: 10,
                     padding:"2px",
                     border: "1px solid lightgray",
                    //  marginBottom:"10px",
                     
                    //  marginTop:"10px"
                   }}
                 />
               </Box>
 
              <Box style={{padding:"10px",textAlign:"left"}}>
            <h6 style={{fontSize:"15px"}}> name </h6>
            {/* {reviews.name} */}
             
             {/* <br></br> */}
        
          <p style={{fontSize:"12px",textAlign:"left"}}>commnet</p>
            <p>
         
            </p>
 
              </Box>
               </div>
           
         
                
             </SwiperSlide>




             <SwiperSlide style={{width:"200px",  background:" #182533",padding:"12px",borderRadius:"12px"}}>  
               <div style={{ }}>
               {/* <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)',width:"300px" }}> */}
 
               <Box sx={{ display: "flex", justifyContent: "center" }}>
                 <img height='90' style={{borderRadius:"50%"}}
                  src='https://storage.googleapis.com/monarchmart-storage/uploads/all/so09ZxWECbxkv7YJ4Gz8mVKlzZIX2Palu5wNUXGC.png'
                   sx={{
                    //  width: 30,
                     borderRadius:"100%",
                     height: 10,
                     padding:"2px",
                     border: "1px solid lightgray",
                    //  marginBottom:"10px",
                     
                    //  marginTop:"10px"
                   }}
                 />
               </Box>
 
              <Box style={{padding:"10px",textAlign:"left"}}>
            <h6 style={{fontSize:"15px"}}> name </h6>
            {/* {reviews.name} */}
             
             {/* <br></br> */}
        
          <p style={{fontSize:"12px",textAlign:"left"}}>commnet</p>
            <p>
         
            </p>
 
              </Box>
               </div>
           
         
                
             </SwiperSlide>





             <SwiperSlide style={{width:"200px",  background:" #182533",padding:"12px",borderRadius:"12px"}}>  
               <div style={{ }}>
               {/* <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)',width:"300px" }}> */}
 
               <Box sx={{ display: "flex", justifyContent: "center" }}>
                 <img height='90' style={{borderRadius:"50%"}}
                  src='https://storage.googleapis.com/monarchmart-storage/uploads/all/so09ZxWECbxkv7YJ4Gz8mVKlzZIX2Palu5wNUXGC.png'
                   sx={{
                    //  width: 30,
                     borderRadius:"100%",
                     height: 10,
                     padding:"2px",
                     border: "1px solid lightgray",
                    //  marginBottom:"10px",
                     
                    //  marginTop:"10px"
                   }}
                 />
               </Box>
 
              <Box style={{padding:"10px",textAlign:"left"}}>
            <h6 style={{fontSize:"15px"}}> name </h6>
            {/* {reviews.name} */}
             
             {/* <br></br> */}
        
          <p style={{fontSize:"12px",textAlign:"left"}}>commnet</p>
            <p>
         
            </p>
 
              </Box>
               </div>
           
         
                
             </SwiperSlide>
             {/* <SwiperSlide>{reviews.rating}</SwiperSlide> */}

                </Swiper>
             {/* <h1>{reviews._id}</h1> */}
           
             </div>
          
         </>
      
       </Swiper>
      </div>

     </div>
      
    </div>
  );
};

export default Categories;