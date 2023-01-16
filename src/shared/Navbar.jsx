import React from 'react';
import { FaBars, FaSearch, FaBorderAll, FaRegBell, FaRegSun } from "react-icons/fa";

const Navbar = ({ setExpaned, expanded }) => {

    return (
        <div className='flex items-center justify-between px-5 my-3'>
            <h2>Dashboard</h2>
            
            <ul className='hidden md:flex items-center justify-center'>
            <li className="flex sm:mr-0 items-center rounded-md">
                <input type="text" />
                <FaSearch />
            </li>
                <li className='mx-5'><img src="https://www.countryflagicons.com/FLAT/24/MY.png" /></li>
                <li><FaBorderAll /></li>
                <li><FaRegBell className='mx-5' /></li>
                <li><FaRegSun /></li>
                <li><img src="https://source.unsplash.com/75x75/?portrait" alt="" className="self-center ml-5 flex-shrink-0 w-8 h-8 border rounded-full md:justify-self-start dark:bg-gray-500 dark:border-gray-700" />
                </li>
            </ul>
            <>
            <span className="flex lg:hidden sm:mr-0 items-center rounded-md">
                <input type="text" />
                <FaSearch />
            </span>
            <div className="bars" style={expanded ? { left: '60%' } : { left: '5%' }} onClick={() => setExpaned(!expanded)}>
                <FaBars />
            </div></>
        </div>
    );
};

export default Navbar;