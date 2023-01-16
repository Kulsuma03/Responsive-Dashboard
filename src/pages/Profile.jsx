import React from 'react';

const Profile = () => {
    return (
        <div className=''>
            <div className="hero h-20 rounded-t-lg" style={{ backgroundImage: `url("https://thumbs.dreamstime.com/b/landscape-nature-mountan-alps-rainbow-76824355.jpg")` }}>
                <div className="hero-overlay bg-opacity-60 rounded-t-lg"></div>
            </div>
            <div className='flex items-center justify-center mt-[-27px] '>
                <div>
                    <div className='ml-2'>
                        <img src="https://source.unsplash.com/75x75/?portrait" alt="" className=" ml-5 flex-shrink-0 w-14 h-14 border rounded-full md:justify-self-start dark:bg-gray-500 dark:border-gray-700" />
                    </div>
                    <p className='text-center'>Moushumi Akter</p>
                    <p className='text-center text-[11px]'>MERN Stack Developer</p>
                </div>
            </div>
            <div className='grid grid-cols-2 p-2 text-center gap-1 shadow-sm'>
                <div className='border-r'>
                    <p>19339</p>
                    <p className='text-[11px]'>Products</p>
                </div>
                <div>
                    <p>5.2k</p>
                    <p className='text-[11px]'>Followers</p>
                </div>
            </div >
            <div className='flex items-center justify-between p-2'>
                <p>Earning</p>
                <div className='w-4 h-4  border rounded-full text-[9px] flex items-center justify-center'>i</div>
            </div>
            <div className='box w-full flex items-center justify-center  relative'>
                <div className=''>
                    <svg width="100" height="100"> <circle fill="none" cx="40" cy="40" r="40" stroke="" stroke-width="8"></circle> <circle fill="none" cx="40" cy="40" r="40" stroke="#50a4e2" stroke-width="8" stroke-dasharray="250.68139693559328 " stroke-dashoffset="359.2034923389832" ></circle></svg>
                    <p className='absolute top-0 left-0 bottom-0 right-0 flex items-center justify-center'>80%</p>
                </div>
            </div>
            <div className='mt-[-40px] mb-3 z-50'>
                <p className='text-center'>$26,245</p>
                <p className='text-center text-[11px]'>Earning this month</p>
                <div className='flex items-center justify-between px-5'>
                <p className=' text-[11px] px-1 bg-green-50 text-green-500 rounded-lg'>+2.65%</p>
                <p className='text-[11px]'>From previous period</p>
                </div>
            </div>
            <div className='p-2 border-t'>
                <p >Percent Activity</p>
                <div className='flex my-3 '>
                    <div>
                       <p className='w-9 bg-gray-100 py-2 px-3 rounded-lg text-[11px]'><span className='font-bold text-semibold'>12</span> sep</p>
                    </div>
                    <p className='text-[11px] ml-3'>Response to need Volunteer activities</p>
                </div>
                <div className='flex my-3 '>
                    <div>
                       <p className='w-9 bg-gray-100 py-2 px-3 rounded-lg text-[11px]'><span className='font-bold text-semibold'>11</span> sep</p>
                    </div>
                    <p className='text-[11px] ml-3'>Everyone realize would be desirable...</p>
                </div>
                <div className='flex my-3 '>
                    <div>
                       <p className='w-9 bg-gray-100 py-2 px-3 rounded-lg text-[11px]'><span className='font-bold text-semibold'>10</span> sep</p>
                    </div>
                    <p className='text-[11px] ml-3'>Response to need Volunteer activities</p>
                </div>
            </div>

        </div>
    );
};

export default Profile;