import React from 'react';
import ECommerce from './ECommerce';
import Overview from './Overview';
import Profile from './Profile';
import Revenue from './Revenue';


const Dashboard = () => {
    return (
        <div className='block md:p-3 md:grid gap-3 grid-cols-4'>
            <div className='md:col-span-3'>
                <Revenue />
                <Overview/>
                <ECommerce/>
            </div>
            <div className=' flex-1 bg-white rounded shadow-lg'>
                <Profile/>
            </div>
        </div>
    );
};

export default Dashboard;