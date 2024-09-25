import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import './UpCommingSharee.css'
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";



// import required modules
import { Autoplay, EffectCoverflow, Pagination } from "swiper";

const UpCommingSharee = () => {
    return (
        <div className="py-5 container">
            <h1 data-text="User Reviews" className="text-center my-3 user-reviews mb-2"> Upcomming Sharee</h1>
            <hr className='' style={{  width: '15%', height: '5px', backgroundColor: 'blsck', display:"inline-block", border:0}} />
            <>
                <Swiper
                    effect={"coverflow"}
                    grabCursor={true}
                    // centeredSlides={true}
                    slidesPerView={3}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        loop: true,
                        speed: 600,

                        slideShadows: true
                    }
                    }
                    autoplay={{
                        delay: 1000
                    }}


                    pagination={true}
                    modules={[EffectCoverflow, Pagination, Autoplay]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSej-e650YffDXSEI2ZEyg46orgwsWJw3MX1Q&usqp=CAU" alt="..." width="250" height="300" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjF22YG73WolrKtp5Hc26u3pu4HVMiOMvdelyB7B5W1Zi5Pp7du6iwgtZsNeBf45GtW5c&usqp=CAU" alt="..." width="250" height="300" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSej-e650YffDXSEI2ZEyg46orgwsWJw3MX1Q&usqp=CAU" alt="..." width="250" height="300" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://media.istockphoto.com/id/1270784859/photo/pretty-indian-young-hindu-bride-in-studio-shot.jpg?b=1&s=170667a&w=0&k=20&c=Nsq-5187MoHN337cbLPwwKyrng1t2khkLsKDebPavhY=" alt="..." width="250" height="300" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://wedbook.in/wp-content/uploads/2020/10/5.-Hot-Pink-Bridal-Lehenga--819x1024.jpg" alt="..." width="250" height="300" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://static-01.daraz.com.bd/p/9e0d518ccf84044f48d05eab88e7ad36.jpg" alt="..." width="250" height="300" />
                    </SwiperSlide>

                </Swiper>
            </>
        </div>
    );
};

export default UpCommingSharee;