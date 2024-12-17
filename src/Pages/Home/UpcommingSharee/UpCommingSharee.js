import React, { useEffect, useState } from 'react';
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

     const [data, setData] = useState([]);
      const [loading, setLoading] = useState(true);
    
      useEffect(() => {
        async function fetchData() {
          try {
            const response = await fetch(
              `https://server.exportmark.com/getupcommings`
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
        <div className="py-5 container">
            <h1 data-text="User Reviews" className="text-center my-3 user-reviews mb-2"> Upcomming Product</h1>
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
                        <img src={data[0]?.image1} alt="..." width="250" height="300" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={data[0]?.image2} alt="..." width="250" height="300" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src={data[0]?.image3} alt="..." width="250" height="300" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={data[0]?.image4} alt="..." width="250" height="300" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={data[0]?.image5} alt="..." width="250" height="300" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={data[0]?.image6} alt="..." width="250" height="300" />
                    </SwiperSlide>

                </Swiper>
            </>
        </div>
    );
};

export default UpCommingSharee;