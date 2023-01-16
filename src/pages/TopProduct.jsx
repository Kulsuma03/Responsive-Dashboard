import React from 'react';

const TopProduct = () => {
    const productData = [
        {name: 'Polo blue T-shirt', price: 25.4, monthly: 3.82},
        {name: 'Hoodie for Men', price: 24.5, monthly: 3.12},
        {name: 'Red color Cup', price: 22.5, monthly: 2.8},
        {name: 'Pocket T-shirt', price: 25.06, monthly: 3.82},
    ]
    return (
        <div className='bg-white rounded-lg shadow-lg p-2'>
            <div className='flex items-center justify-between'>
                <p>Top Product</p>
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
            <div>
                {
                    productData.map((p, i) => 
                    <div
                    className='flex items-center justify-between'
                     key={i}>
                        
                        <div className='flex items-center'>
                        <p className='p-1 bg-blue-400 rounded-lg text-[14px] mr-1'> #{i+1} </p>
                            <div>
                            <p className='text-[14px]'> {p.name} </p>
                            <p className='text-[12px]'> ${p.price} </p>
                            </div>
                        </div>
                        <p className='ml-5 text-[11px]  bg-green-50 text-green-500 rounded-lg'> {p.monthly}k </p>
                    </div>)
                }
            </div>
        </div>
    );
};

export default TopProduct;