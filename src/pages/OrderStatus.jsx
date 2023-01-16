import React from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

const OrderStatus = () => {
    return (
        <>
           
        <div className='bg-white rounded-lg shadow-lg flex items-center justify-center'>
            
            <ResponsiveContainer style={{ width: '80%', height: '40%' }}>
                <PieChart width={600} height={300}>
                    <Pie
                        data={data}
                        innerRadius={60}
                        outerRadius={80}
                        fill="#8884d8"
                        paddingAngle={5}
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>

                </PieChart>
            </ResponsiveContainer>
            
        </div>
        </>
    );
};

export default OrderStatus;