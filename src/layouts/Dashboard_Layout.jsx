import React, { useState } from 'react';
import {
    FaBars,
    FaBorderAll,
    FaCalendarAlt,
    FaRocketchat,
    FaFolder,
    FaRegSquare,
    FaWifi,
    FaUserPlus,
    FaPushed,
    FaLayerGroup,
    FaSearch, FaRegBell, FaRegSun
} from "react-icons/fa";
import { GoMail, GoInbox } from "react-icons/go";
import { GiGymBag } from "react-icons/gi";
import { AiOutlineEdit } from "react-icons/ai";

import { Link, Outlet } from 'react-router-dom';
import { motion } from 'framer-motion'
import Navbar from '../shared/Navbar';



const Dashboard_Layout = () => {
    const [expanded, setExpaned] = useState(false)
    const sidebarVariants = {
        true: {
            left: '0'
        },
        false: {
            left: '-60%'
        }
    }
    return (
        <div className='flex bg-gray-900 '>
            <motion.div
                className="flex flex-col h-full md:p-3 w-44 sidebar text-gray-100"
                variants={sidebarVariants}
                animate={window.innerWidth <= 768 ? `${expanded}` : ''}
            >
                <div className="space-y-3">
                    <div className="flex justify-between md:justify-end">
                        <div className='md:hidden '>
                            <ul className='flex mt-1 items-center justify-center'>
                                <li><img src="https://source.unsplash.com/75x75/?portrait" alt="" className="self-center ml-5 flex-shrink-0 w-6 h-6 border rounded-full md:justify-self-start dark:bg-gray-500 dark:border-gray-700" />
                                </li>
                                <li><FaRegBell className='mx-5' /></li>
                                <li><FaRegSun /></li></ul>
                        </div>
                        <button onClick={() => setExpaned(!expanded)} className="p-2 ">
                            <FaBars />
                        </button>
                    </div>

                    <div className="flex-1">
                        <div className="dropdown dropdown-right">
                            <label tabIndex={0} className=""><FaBorderAll /></label>
                            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 text-black rounded-box w-40">
                                <li><Link to='/dashboard'>Dashboard</Link></li>
                                <li><Link >ECommerce</Link></li>
                                <li><Link >Sass</Link></li>
                                <li><Link >Crypto</Link></li>
                            </ul>
                        </div>

                        <ul className=" pb-4 space-y-1 text-sm">
                            <li className="rounded-sm">
                                Applications
                            </li>
                            <li className="rounded-sm">
                                <a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
                                    <FaCalendarAlt />
                                    <span>Calendar</span>
                                </a>
                            </li>
                            <li className="rounded-sm">
                                <a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
                                    <FaRocketchat />
                                    <span>Chat</span>
                                </a>
                            </li>
                            <li className="rounded-sm">
                                <a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
                                    <FaFolder />
                                    <span>File Manager</span>
                                </a>
                            </li>
                            <li className="rounded-sm ">
                                <a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
                                    <FaRegSquare />
                                    <span>ECommerce</span>
                                </a>
                            </li>
                            <li className="rounded-sm">
                                <a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
                                    <GoMail />
                                    <span>Email</span>
                                </a>
                            </li>
                            <li className="rounded-sm">
                                <a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
                                    <GoInbox />
                                    <span>Invoices</span>
                                </a>
                            </li>
                            <li className="rounded-sm">
                                <a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
                                    <GiGymBag />
                                    <span>Projects</span>
                                </a>
                            </li>
                            <li className="rounded-sm">
                                <a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
                                    <FaWifi />
                                    <span>Contacts</span>
                                </a>
                            </li>
                            <li className="rounded-sm">
                                Layout
                            </li>
                            <li className="rounded-sm">
                                Pages
                            </li>
                            <li className="rounded-sm">
                                <a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
                                    <FaUserPlus />
                                    <span>Authentications</span>
                                </a>
                            </li>
                            <li className="rounded-sm">
                                <a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
                                    <FaPushed />
                                    <span>Utility</span>
                                </a>
                            </li>
                            <li className="rounded-sm">
                                Components
                            </li>
                            <li className="rounded-sm">
                                <a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
                                    <FaLayerGroup />
                                    <span>UI Elements</span>
                                </a>
                            </li>
                            <li className="rounded-sm">
                                <a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
                                    <AiOutlineEdit />
                                    <span>Forms</span>
                                </a>
                            </li>

                        </ul>
                    </div>
                </div>
            </motion.div>
            <div className='bg-gray-50 flex-auto border-dashboard'>
                <Navbar setExpaned={setExpaned} expanded={expanded}></Navbar>
                <Outlet ></Outlet>
            </div>
        </div>
    );
};

export default Dashboard_Layout;