import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Cart from '../../Components/Cart';
// import useAuth from '../../Hooks/useAuth';
import CartCalculation from '../../Hooks/UseCartCalculation';
// import Login from '../../Login/Login/Login';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
// import Banner from './Banner/Banner';
import './Banner/Banner.css'
import Banners from './Banners/Banners';
import BestSellers from './BestSellers/BestSellers';
import Bonus from './Bonus/Bonus';
import BuyerProduct from './BuyerProduct/BuyerProduct';
import CarouselOffer from './CarouselOffer/CarouselOffer';
import Categories from './Categories/Categories';
import Fashion from './Fashion/Fashion';
import FeaturesProduct from './FeaturesProduct/FeaturesProduct';
import LastBanner from './LastBanner/LastBanner';
import Partner from './Partner/Partner';
import ScrollBar from './Scrollbar';
import ServiceProvide from './ServiceProvide';
import ShowBuyerPotter from './ShowBuyerPotter/ShowBuyerPotter';
import UpCommingSharee from './UpcommingSharee/UpCommingSharee';
import Visit from './Visit/Visit';
import HomeDataShow from './HomeDataShow/HomeDataShow';
import Partners from './Partner/Partners';



const Home = () => {
    const { shipping, tax, totalQuantity, total, grandtotal, cartProducts } = CartCalculation();
   
    // const [model, setModel] = useState([]);
    // useEffect(()=>{
    //     fetch('https://sellerportal.vercel.app/users')
    //     .then(res=>res.json())
    //     .then(data=>setModel(data))
    // },[])

    // const { admin, userLogOut ,buyer,buyers} = useAuth()
    return (

        
        <div style={{overflowX:"hidden"}}>

           

                <Header></Header>
                            {/* <Banner></Banner> */}
                            <Banners></Banners>
                            <Visit></Visit>

                            {/* <Visit></Visit> */}
                            {/* <Bonus></Bonus> */}
                            {/* <BuyerProduct></BuyerProduct> */}
                            <HomeDataShow/>
                            {/* <ShowBuyerPotter></ShowBuyerPotter> */}
                            {/* <Categories></Categories> */}
                            {/* <ServiceProvide></ServiceProvide> */}
                            {/* <Visit></Visit> */}
                            {/* <CarouselOffer></CarouselOffer> */}
                            <UpCommingSharee></UpCommingSharee>
                            {/* <FeaturesProduct></FeaturesProduct> */}
                            {/* <LastBanner></LastBanner> */}
                            {/* <BestSellers></BestSellers>  */}
                            {/* <Fashion></Fashion> */}
                            <Partner></Partner>

                            {/* <Visit></Visit> */}
                            <Footer></Footer>
                            <ScrollBar></ScrollBar>
                             
             
                
                
             

             
           
          
           
            
           
        </div>
    );
};

export default Home;