import { Button } from '@mui/material';
import React from 'react';
import Cart from '../../Components/Cart';
import CartCalculation from '../../Hooks/UseCartCalculation';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Banner from './Banner/Banner';
import './Banner/Banner.css'
import BestSellers from './BestSellers/BestSellers';
import Bonus from './Bonus/Bonus';
import BuyerProduct from './BuyerProduct/BuyerProduct';
import CarouselOffer from './CarouselOffer/CarouselOffer';
import Categories from './Categories/Categories';
import Fashion from './Fashion/Fashion';
import FeaturesProduct from './FeaturesProduct/FeaturesProduct';
import Partner from './Partner/Partner';
import Visit from './Visit/Visit';

const Home = () => {
    const { shipping, tax, totalQuantity, total, grandtotal, cartProducts } = CartCalculation();

    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Visit></Visit>
            <Bonus></Bonus>
            <BuyerProduct></BuyerProduct>
            <Categories></Categories>
            <CarouselOffer></CarouselOffer>
            <FeaturesProduct></FeaturesProduct>
            <BestSellers></BestSellers>
            <Fashion></Fashion>
            <Partner></Partner>
            <Footer></Footer>
        </div>
    );
};

export default Home;