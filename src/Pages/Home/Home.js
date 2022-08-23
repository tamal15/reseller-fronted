import { Button } from '@mui/material';
import React from 'react';
import Cart from '../../Components/Cart';
import CartCalculation from '../../Hooks/UseCartCalculation';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Banner from './Banner/Banner';
import './Banner/Banner.css'
import BuyerProduct from './BuyerProduct/BuyerProduct';
import Categories from './Categories/Categories';

const Home = () => {
    const { shipping, tax, totalQuantity, total, grandtotal, cartProducts } = CartCalculation();

    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <BuyerProduct></BuyerProduct>
            <Categories></Categories>
            <Footer></Footer>
        </div>
    );
};

export default Home;