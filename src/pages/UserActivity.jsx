import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Page A',
        uv: 40,
        pv: 20,
        amt: 2400,
    },
    {
        name: 'Page B',
        uv: 30,
        pv: 18,
        amt: 2210,
    },
    {
        name: 'Page C',
        uv: 20,
        pv: 30,
        amt: 2290,
    },
    {
        name: 'Page D',
        uv: 20,
        pv: 38,
        amt: 2000,
    },
    {
        name: 'Page E',
        uv: 10,
        pv: 40,
        amt: 2181,
    },
    {
        name: 'Page F',
        uv: 20,
        pv: 30,
        amt: 2500,
    },
    {
        name: 'Page G',
        uv: 10,
        pv: 40,
        amt: 2100,
    },
];

const UserActivity = () => {
    return (
        <div className='bg-white rounded-lg shadow-lg p-2'>
            <div className='flex items-center justify-between '>
                <p>User Activity</p>
                <div className='flex items-center justify-center'>Weekly
                    <span className="dropdown dropdown-end">
                        <label tabIndex={0} className="">
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>

                        </label>
                        <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Item 1</a></li>
                            <li><a>Item 2</a></li>
                        </ul>
                    </span>
                </div>
            </div>
            <div className='w-full'>
                <div className=''>
                    <p className='text-[10px]'>This Month</p>
                    <div className='flex items-center'>
                        <h2 className='text-xs font-bold'>$16,543</h2>

                    </div>
                </div>
                <div style={{ width: '100%', height: 140 }}>
                    <ResponsiveContainer >
                        <AreaChart height={200} data={data}>
                            <defs>
                                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#60A5FA" stopOpacity={0.8} />
                                    <stop offset="95%" stopColor="#60A5FA" stopOpacity={0} />
                                </linearGradient>
                                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                                    <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <XAxis dataKey="name" />
                            <YAxis />
                            <CartesianGrid strokeDasharray="0 1" />
                            <Tooltip />
                            <Area type="monotone" dataKey="uv" stroke="#60A5FA" fillOpacity={1} fill="url(#colorUv)" />
                            <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default UserActivity;