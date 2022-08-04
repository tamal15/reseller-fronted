import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './BuyerProduct.css'
import BuyerProductShow from './BuyerProductShow';

const BuyerProduct = () => {
    const [work,setWork]=useState([])

//     useEffect(()=>{
//         Aos.init({duration:2000});
//   },[])

    useEffect(()=>{
        fetch('http://localhost:5000/postBuyer')
        .then(res=>res.json())
        .then(data=>setWork(data))
    },[])
    return (
        <div className="" id="work"> 

            <div className="container">
<h1 data-aos="fade-up"  className="text-info mb-5 mt-5">My Recent Products</h1>
                <div data-aos="fade-up" className="row row-cols-1 row-cols-md-3 g-4">


                {
                        work.map(services => <BuyerProductShow
                            services={services}
                        >

                        </BuyerProductShow>)
                    }

                


                </div>
                
            </div>
            
        </div>
    );
};

export default BuyerProduct;