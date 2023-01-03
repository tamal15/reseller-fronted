// import React from 'react';
import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { Avatar, Box, Container, Rating, Typography , Paper} from "@mui/material";
import "./BestSellers.css";

// import required modules
import { FreeMode, Pagination,Autoplay } from "swiper";

const BestSellers = () => {
//  const {user}=useAuth()
//   const [review,setReview]=useState([])
//   useEffect(()=>{
//     fetch('http://localhost:5000/features')
//     .then(res=>res.json())
//     .then(data=>setReview(data))
//   },[])
  return (
    <div className="container">
        <h2 style={{fontSize:"3em", fontWeight:"700", textAlign:"center", marginTop:"100px",marginBottom:"10px",   color: "#7E2231"}} className="">Best Sellers</h2>
        <hr className='' style={{  width: '10%', height: '5px', backgroundColor: 'blsck', display:"inline-block", border:0}} />
     <div data-aos="fade-up" className="row">
      <div className="">
      <Swiper
         className="mySwiper"
         slidesPerView={3}
        //  spaceBetween={30}
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
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 30,
              }
          }}
       
         
         
        
         modules={[FreeMode, Pagination,Autoplay]}
        
       
       
       >



  

  
        
      
 
         
 
         
 
 
 
         <>
          {/* {
           review.map((reviews)=>( */}

             <Box>
            

             <SwiperSlide className="" style={{width:"300px",  background:" ",padding:"12px",borderRadius:"12px"}}>  
            
            {/* <Paper
                            sx={{
                              p: 1,
                              margin: "auto",
                            //   maxWidth: 400,
                              flexGrow: 1,
                              boxShadow: "0px 10px 22px rgb(42 135 158 / 30%)"
                            }}
                          > */}
            
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', width:"200px" }}>
             
             <Box sx={{ display: "flex", justifyContent: "center" }}>
               <img className="mt-4" height="80" width="110" style={{borderRadius:""}}
                src=' https://png.pngtree.com/png-vector/20211129/ourmid/pngtree-editable-text-effect-top-up-dengan-pattern-diamond-png-image_222837.png '
                 sx={{
                   width: 0,
                   borderRadius:"100%",
                   height: 30,
                   padding:"2px",
                   border: "1px solid lightgray",
                   marginBottom:"10px",
                   
                   marginTop:"10px"
                 }}
               />
             </Box>
            
            <Box style={{padding:"10px",textAlign:"",fontWeight:"700",marginTop:"30px",marginBottom:"10px"}}>
            {/* <h6 style={{fontSize:"15px"}}>  {reviews.name} </h6> */}
            {/* {reviews.productName} */}<a  href='/topShop' className="visits"  style={{background:"", color:"black"}}>Top Up</a>
            
            <br></br>
            
            <a  style={{fontSize:"16px",textAlign:"",fontWeight:"700",marginTop:"5px"}}><a href='/topShop' className="visitShop mt-2">Visit</a></a>
            <p>
            
            </p>
            
            </Box>
             </div>
            
            
            
                          {/* </Paper> */}
                          
                       
                     
                            
                         </SwiperSlide>



          
           
             {/* <SwiperSlide>{reviews.rating}</SwiperSlide> */}
             </Box>



             {/* 2nd  */}


             <Box>
            

            <SwiperSlide className="" style={{width:"300px",  background:" ",padding:"12px",borderRadius:"12px"}}>  
            
            {/* <Paper
                            sx={{
                              p: 1,
                              margin: "auto",
                            //   maxWidth: 400,
                              flexGrow: 1,
                              boxShadow: "0px 10px 22px rgb(42 135 158 / 30%)"
                            }}
                          > */}
            
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', width:"200px" }}>
             
             <Box sx={{ display: "flex", justifyContent: "center" }}>
               <img className="mt-4" height="80" width="110" style={{borderRadius:""}}
                src='https://img.freepik.com/premium-vector/letter-p-logo-power_42564-11.jpg?w=2000'
                 sx={{
                   width: 0,
                   borderRadius:"100%",
                   height: 30,
                   padding:"2px",
                   border: "1px solid lightgray",
                   marginBottom:"10px",
                   
                   marginTop:"10px"
                 }}
               />
             </Box>
            
            <Box style={{padding:"10px",textAlign:"",fontWeight:"700",marginTop:"30px",marginBottom:"10px"}}>
            {/* <h6 style={{fontSize:"15px"}}>  {reviews.name} </h6> */}
            {/* {reviews.productName} */}<a  href='/powerShop' className="visits"  style={{background:"", color:"black"}}>Power</a>
            
            <br></br>
            
            <a style={{fontSize:"16px",textAlign:"",fontWeight:"700",marginTop:"5px"}}><a href='/powerShop' className="visitShop">Visit</a></a>
            <p>
            
            </p>
            
            </Box>
             </div>
            
            
            
                          {/* </Paper> */}
                          
                       
                     
                            
                         </SwiperSlide>
            
            
            
                      
                       
                         {/* <SwiperSlide>{reviews.rating}</SwiperSlide> */}
                         </Box>


                         {/* 3rd  */}


                         <Box>
            

                         <SwiperSlide className="" style={{width:"300px",  background:" ",padding:"12px",borderRadius:"12px"}}>  
            
            {/* <Paper
                            sx={{
                              p: 1,
                              margin: "auto",
                            //   maxWidth: 400,
                              flexGrow: 1,
                              boxShadow: "0px 10px 22px rgb(42 135 158 / 30%)"
                            }}
                          > */}
            
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', width:"200px" }}>
             
             <Box sx={{ display: "flex", justifyContent: "center" }}>
               <img className="mt-4" height="80" width="110" style={{borderRadius:""}}
                src='https://img.freepik.com/premium-vector/abstract-expert-logo-icon_7790-20.jpg?w=2000 '
                 sx={{
                   width: 0,
                   borderRadius:"100%",
                   height: 30,
                   padding:"2px",
                   border: "1px solid lightgray",
                   marginBottom:"10px",
                   
                   marginTop:"10px"
                 }}
               />
             </Box>
            
            <Box style={{padding:"10px",textAlign:"",fontWeight:"700",marginTop:"30px",marginBottom:"10px"}}>
            {/* <h6 style={{fontSize:"15px"}}>  {reviews.name} </h6> */}
            {/* {reviews.productName} */}<a  href='/expertShop' className="visits"  style={{background:"", color:"black"}}>Expert</a>
            
            <br></br>
            
            <a style={{fontSize:"16px",textAlign:"",fontWeight:"700",marginTop:"5px"}}><a href='/expertShop' className="visitShop">Visit</a></a>
            <p>
            
            </p>
            
            </Box>
             </div>
            
            
            
                          {/* </Paper> */}
                          
                       
                     
                            
                         </SwiperSlide>
            
            
            
                      
                       
                         {/* <SwiperSlide>{reviews.rating}</SwiperSlide> */}
                         </Box>



                         {/* 4th  */}


                         <Box>
            

            <SwiperSlide className="" style={{width:"300px",  background:" ",padding:"12px",borderRadius:"12px"}}>  
            
            {/* <Paper
                            sx={{
                              p: 1,
                              margin: "auto",
                            //   maxWidth: 400,
                              flexGrow: 1,
                              boxShadow: "0px 10px 22px rgb(42 135 158 / 30%)"
                            }}
                          > */}
            
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', width:"200px" }}>
             
             <Box sx={{ display: "flex", justifyContent: "center" }}>
               <img height="140" width="110" style={{borderRadius:""}}
                src='https://store.focallurebd.com/storage/files/1/design-2-modern-minimalist-logo-design.jpg'
                 sx={{
                   width: 0,
                   borderRadius:"100%",
                   height: 30,
                   padding:"2px",
                   border: "1px solid lightgray",
                   marginBottom:"10px",
                   
                   marginTop:"10px"
                 }}
               />
             </Box>
            
            <Box style={{padding:"10px",textAlign:"",fontWeight:"700",marginTop:"30px",marginBottom:"10px"}}>
            {/* <h6 style={{fontSize:"15px"}}>  {reviews.name} </h6> */}
            {/* {reviews.productName} */}<a href='/rajShop' className="visits" style={{background:"", color:"black"}}>RajKonna</a>
            
            {/* <br></br> */}
            
            <p style={{fontSize:"16px",textAlign:"",fontWeight:"700",marginTop:"5px"}}><a href='/rajShop' className="visitShop">Visit</a></p>
            <p>
            
            </p>
            
            </Box>
             </div>
            
            
            
                          {/* </Paper> */}
                          
                       
                     
                            
                         </SwiperSlide>
            
            
            
                      
                       
                         {/* <SwiperSlide>{reviews.rating}</SwiperSlide> */}
                         </Box>



                         {/* 5th  */}


                         <Box>
            

            <SwiperSlide className="" style={{width:"300px",  background:" ",padding:"12px",borderRadius:"12px"}}>  
            
            {/* <Paper
                            sx={{
                              p: 1,
                              margin: "auto",
                            //   maxWidth: 400,
                              flexGrow: 1,
                              boxShadow: "0px 10px 22px rgb(42 135 158 / 30%)"
                            }}
                          > */}
            
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', width:"200px" }}>
             
             <Box sx={{ display: "flex", justifyContent: "center" }}>
               <img className="mt-3" height="90" width="110" style={{borderRadius:""}}
                src='https://t3.ftcdn.net/jpg/03/43/74/48/360_F_343744812_oE3ieaIhNS8Y7LNJlFUbszhyciCh16Jf.jpg'
                 sx={{
                   width: 0,
                   borderRadius:"100%",
                   height: 30,
                   padding:"2px",
                   border: "1px solid lightgray",
                   marginBottom:"10px",
                   
                   marginTop:"10px"
                 }}
               />
             </Box>
            
            <Box style={{padding:"10px",textAlign:"",fontWeight:"700",marginTop:"30px",marginBottom:"10px"}}>
            {/* <h6 style={{fontSize:"15px"}}>  {reviews.name} </h6> */}
            {/* {reviews.productName} */}<a href='/redvioletShop' className="visits" style={{background:"", color:"black"}}>Redviolet</a>
            
            {/* <br></br> */}
            
            <p style={{fontSize:"16px",textAlign:"",fontWeight:"700",marginTop:"5px"}}><a href='/redvioletShop' className="visitShop">Visit</a></p>
            <p>
            
            </p>
            
            </Box>
             </div>
            
            
            
                          {/* </Paper> */}
                          
                       
                     
                            
                         </SwiperSlide>
            
            
            
                      
                       
                         {/* <SwiperSlide>{reviews.rating}</SwiperSlide> */}
                         </Box>


                         {/* 6th  */}

                         <Box>
            

                         <SwiperSlide className="" style={{width:"300px",  background:" ",padding:"12px",borderRadius:"12px"}}>  
            
            {/* <Paper
                            sx={{
                              p: 1,
                              margin: "auto",
                            //   maxWidth: 400,
                              flexGrow: 1,
                              boxShadow: "0px 10px 22px rgb(42 135 158 / 30%)"
                            }}
                          > */}
            
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', width:"200px" }}>
             
             <Box sx={{ display: "flex", justifyContent: "center" }}>
               <img className="mt-3" height="80" width="110" style={{borderRadius:""}}
                src='https://png.pngtree.com/element_pic/00/16/09/2057e0eecf792fb.jpg'
                 sx={{
                   width: 0,
                   borderRadius:"100%",
                   height: 30,
                   padding:"2px",
                   border: "1px solid lightgray",
                   marginBottom:"10px",
                   
                   marginTop:"10px"
                 }}
               />
             </Box>
            
            <Box style={{padding:"10px",textAlign:"",fontWeight:"700",marginTop:"30px",marginBottom:"10px"}}>
            {/* <h6 style={{fontSize:"15px"}}>  {reviews.name} </h6> */}
            {/* {reviews.productName} */}<a href='/brother' className="visits" style={{background:"", color:"black"}}>Brothers</a>
            
            {/* <br></br> */}
            
            <p style={{fontSize:"16px",textAlign:"",fontWeight:"700",marginTop:"5px"}}><a href='/brother' className="visitShop">Visit</a></p>
            <p>
            
            </p>
            
            </Box>
             </div>
            
            
            
                          {/* </Paper> */}
                          
                       
                     
                            
                         </SwiperSlide>
            
            
            
                      
                       
                         {/* <SwiperSlide>{reviews.rating}</SwiperSlide> */}
                         </Box>
           {/* )) */}
          {/* } */}
         </>
      
       </Swiper>



       {/* start  */}

       <Swiper
         className="mySwiper"
         style={{marginTop:"-130px"}}
         slidesPerView={3}
        //  spaceBetween={30}
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
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 30,
              }
          }}
       
         
         
        
         modules={[FreeMode, Pagination,Autoplay]}
        
       
       
       >



  

  
        
      
 
         
 
         
 
 
 
         <>
          {/* {
           review.map((reviews)=>( */}

             <Box>
            

             <SwiperSlide className="" style={{width:"300px",  background:" ",padding:"12px",borderRadius:"12px"}}>  
            
            {/* <Paper
                            sx={{
                              p: 1,
                              margin: "auto",
                            //   maxWidth: 400,
                              flexGrow: 1,
                              boxShadow: "0px 10px 22px rgb(42 135 158 / 30%)"
                            }}
                          > */}
            
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', width:"200px" }}>
             
             <Box sx={{ display: "flex", justifyContent: "center" }}>
               <img className="mt-3" height="120" width="110" style={{borderRadius:""}}
                src='https://png.pngtree.com/element_pic/16/11/02/bd886d7ccc6f8dd8db17e841233c9656.jpg'
                 sx={{
                   width: 0,
                   borderRadius:"100%",
                   height: 30,
                   padding:"2px",
                   border: "1px solid lightgray",
                   marginBottom:"10px",
                   
                   marginTop:"10px"
                 }}
               />
             </Box>
            
            <Box style={{padding:"10px",textAlign:"",fontWeight:"700",marginTop:"30px",marginBottom:"10px"}}>
            {/* <h6 style={{fontSize:"15px"}}>  {reviews.name} </h6> */}
            {/* {reviews.productName} */}<a href='/redvioletShop' className="visits" style={{background:"", color:"black"}}>Skmei</a>
            
            {/* <br></br> */}
            
            <p style={{fontSize:"16px",textAlign:"",fontWeight:"700",marginTop:"5px"}}><a href='/redvioletShop' className="visitShop">Visit</a></p>
            <p>
            
            </p>
            
            </Box>
             </div>
            
            
            
                          {/* </Paper> */}
                          
                       
                     
                            
                         </SwiperSlide>



          
           
             {/* <SwiperSlide>{reviews.rating}</SwiperSlide> */}
             </Box>



             {/* 2nd  */}


             <Box>
            

             <SwiperSlide className="" style={{width:"300px",  background:" ",padding:"12px",borderRadius:"12px"}}>  
            
            {/* <Paper
                            sx={{
                              p: 1,
                              margin: "auto",
                            //   maxWidth: 400,
                              flexGrow: 1,
                              boxShadow: "0px 10px 22px rgb(42 135 158 / 30%)"
                            }}
                          > */}
            
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', width:"200px" }}>
             
             <Box sx={{ display: "flex", justifyContent: "center" }}>
               <img className="mt-3" height="120" width="110" style={{borderRadius:""}}
                src='https://png.pngtree.com/png-clipart/20190604/original/pngtree-creative-company-logo-png-image_1197025.jpg'
                 sx={{
                   width: 0,
                   borderRadius:"100%",
                   height: 30,
                   padding:"2px",
                   border: "1px solid lightgray",
                   marginBottom:"10px",
                   
                   marginTop:"10px"
                 }}
               />
             </Box>
            
            <Box style={{padding:"10px",textAlign:"",fontWeight:"700",marginTop:"30px",marginBottom:"10px"}}>
            {/* <h6 style={{fontSize:"15px"}}>  {reviews.name} </h6> */}
            {/* {reviews.productName} */}<a href='/expertShop' className="visits" style={{background:"", color:"black"}}>DeshiShop</a>
            
            {/* <br></br> */}
            
            <p style={{fontSize:"16px",textAlign:"",fontWeight:"700",marginTop:"5px"}}><a href='/expertShop' className="visitShop">Visit</a></p>
            <p>
            
            </p>
            
            </Box>
             </div>
            
            
            
                          {/* </Paper> */}
                          
                       
                     
                            
                         </SwiperSlide>
            
            
            
                      
                       
                         {/* <SwiperSlide>{reviews.rating}</SwiperSlide> */}
                         </Box>


                         {/* 3rd  */}


                         <Box>
            

                         <SwiperSlide className="" style={{width:"300px",  background:" ",padding:"12px",borderRadius:"12px"}}>  
            
            {/* <Paper
                            sx={{
                              p: 1,
                              margin: "auto",
                            //   maxWidth: 400,
                              flexGrow: 1,
                              boxShadow: "0px 10px 22px rgb(42 135 158 / 30%)"
                            }}
                          > */}
            
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', width:"200px" }}>
             
             <Box sx={{ display: "flex", justifyContent: "center" }}>
               <img className="mt-3" height="120" width="110" style={{borderRadius:""}}
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Android_O_Preview_Logo.png/768px-Android_O_Preview_Logo.png'
                 sx={{
                   width: 0,
                   borderRadius:"100%",
                   height: 30,
                   padding:"2px",
                   border: "1px solid lightgray",
                   marginBottom:"10px",
                   
                   marginTop:"10px"
                 }}
               />
             </Box>
            
            <Box style={{padding:"10px",textAlign:"",fontWeight:"700",marginTop:"30px",marginBottom:"10px"}}>
            {/* <h6 style={{fontSize:"15px"}}>  {reviews.name} </h6> */}
            {/* {reviews.productName} */}<a href='/PowerShop' className="visits" style={{background:"", color:"black"}}>Zabeenbd</a>
            
            {/* <br></br> */}
            
            <p style={{fontSize:"16px",textAlign:"",fontWeight:"700",marginTop:"5px"}}><a href='/PowerShop' className="visitShop">Visit</a></p>
            <p>
            
            </p>
            
            </Box>
             </div>
            
            
            
                          {/* </Paper> */}
                          
                       
                     
                            
                         </SwiperSlide>
            
            
            
                      
                       
                         {/* <SwiperSlide>{reviews.rating}</SwiperSlide> */}
                         </Box>



                         {/* 4th  */}


                         <Box>
            

                         <SwiperSlide className="" style={{width:"300px",  background:" ",padding:"12px",borderRadius:"12px"}}>  
            
            {/* <Paper
                            sx={{
                              p: 1,
                              margin: "auto",
                            //   maxWidth: 400,
                              flexGrow: 1,
                              boxShadow: "0px 10px 22px rgb(42 135 158 / 30%)"
                            }}
                          > */}
            
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', width:"200px" }}>
             
             <Box sx={{ display: "flex", justifyContent: "center" }}>
               <img className="mt-4" height="80" width="110" style={{borderRadius:""}}
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZgtsO6eKHzUZ1m-frl3ZvuTrkWjoSE1S5DasKwDSGp7IDdrmOUvMnIUW0kpebb6BRwiY&usqp=CAU'
                 sx={{
                   width: 0,
                   borderRadius:"100%",
                   height: 30,
                   padding:"2px",
                   border: "1px solid lightgray",
                   marginBottom:"10px",
                   
                   marginTop:"10px"
                 }}
               />
             </Box>
            
            <Box style={{padding:"10px",textAlign:"",fontWeight:"700",marginTop:"30px",marginBottom:"10px"}}>
            {/* <h6 style={{fontSize:"15px"}}>  {reviews.name} </h6> */}
            {/* {reviews.productName} */}<a href='/topShop' className="visits" style={{background:"", color:"black"}}>Hobby</a>
            
            {/* <br></br> */}
            
            <p style={{fontSize:"16px",textAlign:"",fontWeight:"700",marginTop:"5px"}}><a href='/topShop' className="visitShop">Visit</a></p>
            <p>
            
            </p>
            
            </Box>
             </div>
            
            
            
                          {/* </Paper> */}
                          
                       
                     
                            
                         </SwiperSlide>
            
            
            
                      
                       
                         {/* <SwiperSlide>{reviews.rating}</SwiperSlide> */}
                         </Box>



                         {/* 5th  */}


                         <Box>
            

                         <SwiperSlide className="" style={{width:"300px",  background:" ",padding:"12px",borderRadius:"12px"}}>  
            
            {/* <Paper
                            sx={{
                              p: 1,
                              margin: "auto",
                            //   maxWidth: 400,
                              flexGrow: 1,
                              boxShadow: "0px 10px 22px rgb(42 135 158 / 30%)"
                            }}
                          > */}
            
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', width:"200px" }}>
             
             <Box sx={{ display: "flex", justifyContent: "center" }}>
               <img className="mt-4" height="90" width="110" style={{borderRadius:""}}
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPWOjkXZsZiicQJi8aCU9QDQOIUbSFmYNELNAzfAvQVPBJjdiksOPJY17Bvptx1_Gii8Q&usqp=CAU'
                 sx={{
                   width: 0,
                   borderRadius:"100%",
                   height: 30,
                   padding:"2px",
                   border: "1px solid lightgray",
                   marginBottom:"10px",
                   
                   marginTop:"10px"
                 }}
               />
             </Box>
            
            <Box style={{padding:"10px",textAlign:"",fontWeight:"700",marginTop:"30px",marginBottom:"10px"}}>
            {/* <h6 style={{fontSize:"15px"}}>  {reviews.name} </h6> */}
            {/* {reviews.productName} */}<a href='/rajShop' className="visits" style={{background:"", color:"black"}}>L4Fashion</a>
            
            {/* <br></br> */}
            
            <p style={{fontSize:"16px",textAlign:"",fontWeight:"700",marginTop:"5px"}}><a href='/rajShop' className="visitShop">Visit</a></p>
            <p>
            
            </p>
            
            </Box>
             </div>
            
            
            
                          {/* </Paper> */}
                          
                       
                     
                            
                         </SwiperSlide>
            
            
            
                      
                       
                         {/* <SwiperSlide>{reviews.rating}</SwiperSlide> */}
                         </Box>


                         {/* 6th  */}

                         <Box>
            

                         <SwiperSlide className="" style={{width:"300px",  background:" ",padding:"12px",borderRadius:"12px"}}>  
            
            {/* <Paper
                            sx={{
                              p: 1,
                              margin: "auto",
                            //   maxWidth: 400,
                              flexGrow: 1,
                              boxShadow: "0px 10px 22px rgb(42 135 158 / 30%)"
                            }}
                          > */}
            
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', width:"200px" }}>
             
             <Box sx={{ display: "flex", justifyContent: "center" }}>
               <img className="" height="150" width="110" style={{borderRadius:""}}
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZTn_DPvhzdsYinfMx4nRz3JS__5w6lYwBLLqkEh1aoUsVEcpL3XxuX_pcyqFAEICHkPg&usqp=CAU'
                 sx={{
                   width: 0,
                   borderRadius:"100%",
                   height: 30,
                   padding:"2px",
                   border: "1px solid lightgray",
                   marginBottom:"10px",
                   
                   marginTop:"10px"
                 }}
               />
             </Box>
            
            <Box style={{padding:"10px",textAlign:"",fontWeight:"700",marginTop:"30px",marginBottom:"10px"}}>
            {/* <h6 style={{fontSize:"15px"}}>  {reviews.name} </h6> */}
            {/* {reviews.productName} */}<a href='/rajShop' className="visits" style={{background:"", color:"black"}}>Sara</a>
            
            {/* <br></br> */}
            
            <p style={{fontSize:"16px",textAlign:"",fontWeight:"700",marginTop:"5px"}}><a href='/rajShop' className="visitShop">Visit</a></p>
            <p>
            
            </p>
            
            </Box>
             </div>
            
            
            
                          {/* </Paper> */}
                          
                       
                     
                            
                         </SwiperSlide>
            
            
            
                      
                       
                         {/* <SwiperSlide>{reviews.rating}</SwiperSlide> */}
                         </Box>
           {/* )) */}
          {/* } */}
         </>
      
       </Swiper>
      </div>

     </div>
      
    </div>



// new start 


  );
};

export default BestSellers;