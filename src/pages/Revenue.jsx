import React from 'react';
import { FaChartPie, FaCalendar, FaUserFriends } from "react-icons/fa";

const Revenue = () => {
    return (
        <div className='flex items-center justify-center flex-col'>
        <div className=" w-full flex-shrink mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl ">
            <div className="grid  gap-3 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
                <div className=" p-3 flex bg-white border rounded shadow-sm">
                 <div className='p-3 bg-blue-400 rounded'>
                 <FaChartPie className='text-white text-xl'/>
                 </div>
                 <div className='ml-2'>
                    <p>Revenue</p>
                    <div className='flex items-center justify-between text-sm'>
                        <p>$12333</p>
                        <p className='ml-5 text-[11px] px-1 bg-green-50 text-green-500 rounded-lg'>+2.65%</p>
                    </div>
                </div> 
                 
                </div>                    
                <div className="p-3 flex bg-white border rounded shadow-sm">
                 <div className='p-3 bg-blue-400 rounded'>
                 <FaCalendar className='text-white text-xl'/>
                 </div>
                 <div className='ml-2'>
                    <p>Orders</p>
                    <div className='flex items-center justify-between text-sm'>
                        <p>$12333</p>
                        <p className='ml-5 text-[11px] text-red-400 bg-red-50 rounded-lg px-1'>-2.65%</p>
                    </div>
                </div> 
                 
                </div>                    
                <div className="p-3 flex bg-white border rounded shadow-sm">
                 <div className='p-3 bg-blue-400 rounded'>
                 <FaUserFriends className='text-white text-xl'/>
                 </div>
                 <div className='ml-2'>
                    <p>Customers</p>
                    <div className='flex items-center justify-between text-sm'>
                        <p>45254</p>
                        <p className='ml-5 text-[11px]  text-red-400 bg-red-50 rounded-lg px-1'>-1.04%</p>
                    </div>
                </div>  
                 
                </div>                    
                                  
            </div>
        </div>
    </div>
    );
};

export default Revenue;