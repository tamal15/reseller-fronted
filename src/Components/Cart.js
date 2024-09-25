import { Divider, List, ListItem, ListItemIcon, Typography } from '@mui/material';
import React from 'react';
import './Cart.css';
import CartCalculation from '../Hooks/UseCartCalculation';

const Cart = (props) => {
    const { shipping, tax, totalQuantity, total, grandtotal, totalIncome, handleSearchs, handleValues, searchValues, model } = CartCalculation();
    
    return (
        <div>
            {/* <form onSubmit={(e) => { e.preventDefault(); handleValues(); }} className="ms-2">
                <input
                    placeholder='Coupon code'
                    value={searchValues}
                    onChange={handleSearchs}
                    className="mb-2 input-design me-3 mt-3"
                />
                <button type="submit" className='apply-design'>Apply</button>
            </form> */}
            <List sx={{ pt: 0 }}>
                <ListItem className='order-design'>
                    <Typography variant='h5'>Order Summary</Typography>
                </ListItem>
                <Divider />
                <ListItem>
                    <Typography style={{ fontWeight: "500" }}>Total Quantity: {totalQuantity}</Typography>
                </ListItem>
                <ListItem>
                    <Typography style={{ fontWeight: "500" }}>Total: {total.toFixed(2)} Taka</Typography>
                </ListItem>
                <ListItem>
                    <Typography style={{ fontWeight: "500" }}>Shipping: {shipping.toFixed(2)} Taka</Typography>
                </ListItem>
                <ListItem>
                    <Typography style={{ fontWeight: "500" }}>Tax: {tax.toFixed(2)} Taka</Typography>
                </ListItem>
                <Divider />
                <ListItem>
                    <ListItemIcon>
                        <Typography style={{ fontWeight: "500" }}>Grand Total: {grandtotal.toFixed(2)} Taka</Typography>
                    </ListItemIcon>
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <Typography style={{ fontWeight: "500" }}>Total Income: {totalIncome.toFixed(2)} Taka</Typography>
                    </ListItemIcon>
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <Typography style={{ fontWeight: "500" }}>Discount Total: {model} Taka</Typography>
                    </ListItemIcon>
                </ListItem>
                <ListItem>
                    {props.children}
                </ListItem>
            </List>
        </div>
    );
};

export default Cart;
