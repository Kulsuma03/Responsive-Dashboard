import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { overview } from '../shared/data';


const data = [
    {
        name: "Feb",
        uv: 4000,
        pv: 2400,
        amt: 2400
    },
    {
        name: "Mar",
        uv: 3000,
        pv: 1398,
        amt: 2210
    },
    {
        name: "Apr",
        uv: 2000,
        pv: 980,
        amt: 2290
    },
    {
        name: "May",
        uv: 2780,
        pv: 3908,
        amt: 2000
    },
    {
        name: "Jun",
        uv: 1890,
        pv: 4800,
        amt: 2181
    },
    {
        name: "Jul",
        uv: 2390,
        pv: 3800,
        amt: 2500
    },
    {
        name: "Aug",
        uv: 3490,
        pv: 4300,
        amt: 2100
    },
    {
        name: "Sep",
        uv: 3490,
        pv: 4300,
        amt: 2100
    },
    {
        name: "Oct",
        uv: 3490,
        pv: 4300,
        amt: 21
    },
];

const Overview = () => {
    const overviewData = overview;
    
    return (
        <div className='md:bg-white shadow-lg md:p-2 my-4 md:rounded-lg'>  
            <div className='flex items-center justify-between '>
                <p>Overview</p>
                <div className='hidden md:flex items-center justify-center '>Sort By: Yearly
                    <span className="dropdown dropdown-end">
                        <label tabIndex={0} className="">
                        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>

                        </label>
                        <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>2022</a></li>
                            <li><a>2023</a></li>
                        </ul>
                    </span>
                </div>
            </div>

            {/* ---------Overview section -------- */}
            <div className='block md:flex'>
                <div className='md:w-1/3 sm:full'>
                   <div className=''>
                    <p className='text-[10px]'>This Month</p>
                    <div className='flex items-center'>
                        <h2 className='text-xl font-bold'>$24,568</h2>
                        <p className='text-[11px] px-1 ml-4 bg-green-50 text-green-500 rounded-lg'>+2.65%</p>
                    </div>
                   </div>
                   <div className='grid grid-cols-2  '>
                    
                    {
                        overviewData?.map((o, i) => 
                            <div className='shadow-md p-1 text-sm' key={i}>
                                <p>{o.name}</p>
                                <p className='font-semibold'>{o.amount}</p>
                            </div>
                        )
                    }
                   </div>
                </div>

                {/* ---------- Chart section ------------- */}
                <ResponsiveContainer width="70%" height={220}>
                    <BarChart
                        width={400}
                        height={200}
                        data={data}
                        
                    >
                        <CartesianGrid strokeDasharray="0 1 " />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="pv" fill="#60A5FA" />
                        <Bar dataKey="uv" fill="#82ca9d" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>

    );
};

export default Overview;