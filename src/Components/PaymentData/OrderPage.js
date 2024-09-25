import React from 'react';
import MyOrder from '../../Pages/Dashboard/UserDashboard/MyOrder/MyOrder';

const OrderPage = () => {
    return (
        <div>
           <h2 style={{fontWeight:"700"}}><span style={{color:"#0658a2"}}>Order</span> Page</h2> 

           <div>
            <MyOrder/>
           </div>
        </div>
    );
};

export default OrderPage;