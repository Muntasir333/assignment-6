import React from 'react';
import User from '../pic//user.png'
import Useage from '../pic/package.png'
import Rocket from '../pic/rocket.png'

const Started = () => {
    return (
        <div className='bg-[#F9FAFC] mt-28 space-y-5 '>
            <div className='text-center space-y-3 '>
                <h2 className='text-5xl font-bold text-[#101727] pt-25 '>Get Started in 3 Steps</h2>
            <p className='text-[#627382]'>Start using premium digital tools in minutes, not hours.</p>
            </div>
            <div className=' bg-[#F9FAFC] grid grid-cols-1 lg:grid-cols-3 gap-5 w-max lg:w-300 mx-auto pb-25 '>
                <div className='relative p-8 border border-gray-100 bg-white'>
                    <h2 className='absolute text-xl text-white bg-violet-800 rounded-full top-4 right-4 mb-6'>01</h2>
                    <div className='flex flex-col justify-center items-center'>
                   <div className='bg-[#F9FAFC] rounded-full w-30 h-30 mx-auto flex items-center justify-center mb-6'> <img  src={User} alt="" /></div>
                    <div className='text-center'>
                        <h1 className='text-2xl font-bold text-[#101727]'>Create Account</h1>
                        <p className='text-[#627382]'>Sign up for free in seconds.<br></br> No credit card required to get started.</p>
                    </div>
                    </div>
                </div>
                <div className='relative p-8 border border-gray-100 bg-white'>
                    <h2 className='absolute text-xl text-white bg-violet-800 rounded-full top-4 right-4 mb-6'>02</h2>
                    <div className='flex flex-col justify-center items-center'>
                    <div className='bg-[#F9FAFC] rounded-full w-30 h-30 mx-auto flex items-center justify-center mb-6'><img src={Useage} alt="" /></div>
                    <div className='text-center'>
                        <h1 className='text-2xl font-bold text-[#101727]'>Choose Product</h1>
                        <p className='text-[#627382]'>Browse our catalog and select the tools <br></br>that fit your needs.</p>
                    </div>
                    </div>
                </div>
                <div className='relative p-8 border border-gray-100 bg-white'>
                    <h2 className='absolute text-xl text-white bg-violet-800 rounded-full top-4 right-4 mb-6'>03</h2>
                    <div className='flex flex-col justify-center items-center'>
                    <div className='bg-[#F9FAFC] rounded-full w-30 h-30 mx-auto flex items-center justify-center mb-6'><img  src={Rocket} alt="" /></div>
                    <div className='text-center'>
                        <h1 className='text-2xl font-bold text-[#101727]'>Start Creating</h1>
                        <p className='text-[#627382]'>Download and start using your premium<br></br> tools immediately.</p>
                    </div>
                    </div>
                </div>
               
            </div>
        </div>
    );
};

export default Started;