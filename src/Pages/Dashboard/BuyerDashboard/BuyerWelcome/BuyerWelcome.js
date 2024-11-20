import React from 'react';
import AdminsWelcome from './AdminsWelcome';
import SellerWelcome from './SellerWelcome';
import useAuth from '../../../../Hooks/useAuth';

const BuyerWelcome = () => {
    const { admin, user } = useAuth();

    return (
        <div>
            {admin ? <AdminsWelcome /> : user && <SellerWelcome />}
        </div>
    );
};

export default BuyerWelcome;
