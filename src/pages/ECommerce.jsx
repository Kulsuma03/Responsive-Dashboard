import React from 'react';
import OrderStatus from './OrderStatus';
import TopProduct from './TopProduct';
import UserActivity from './UserActivity';

const ECommerce = () => {
    return (
        <div className='md:grid grid-cols-3 gap-4'>
            <UserActivity/>
            <OrderStatus/>
            <TopProduct/>
        </div>
    );
};

export default ECommerce;