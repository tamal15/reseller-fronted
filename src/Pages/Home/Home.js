import { Button } from '@mui/material';
import React from 'react';
import Cart from '../../Components/Cart';
import CartCalculation from '../../Hooks/UseCartCalculation';

import BuyerProduct from './BuyerProduct/BuyerProduct';

const Home = () => {
    const { shipping, tax, totalQuantity, total, grandtotal, cartProducts } = CartCalculation();

    return (
        <div>

            <BuyerProduct></BuyerProduct>
        </div>
    );
};

export default Home;