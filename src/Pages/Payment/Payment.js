import React, { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';

const Payment = () => {
    const [cart, setCart] = useContext(CartContext);
    console.log(cart);
    return (
        <div>
            <h1>Payment page</h1>
        </div>
    );
};

export default Payment;