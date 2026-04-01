import React from 'react';
import Dot from '../pic/Group 5 (1).png'
import Zero from '../pic/banner.png'
import { Play } from 'lucide-react';




const Hero = () => {
    return (
        <div className='flex flex-col lg:flex-row justify-center gap-16 md:justify-center md:items-center px-6 lg:px-20 py-10'>
            <div className='flex flex-col justify-center space-y-5 '>
                <div className='flex shrink-0 gap-2 items-center border-0 bg-gray-300 rounded-2xl w-[30vh]'>
                    <img className='w-4 h-4' src={Dot} alt="" />
                    <p>New: AI-Powered Tools Available</p>
                </div>
                <div className='space-y-3'>
                    <h2 className='text-4xl lg:text-7xl font-bold text-[#101727]'>Supercharge Your<br></br>Digital Workflow</h2>
                    <p className='text-[#627382]'>Access premium AI tools, design assets, templates, and productivity<br></br>
software—all in one place. Start creating faster today.<br></br>Explore Products
</p>
                </div>
                <div className='flex gap-3'>
                    <button className='btn btn-primary'>Explore Product</button>
                    <button className=' btn btn-outline'> <Play />Watch Demo</button>
                </div>
            </div>
            <div>
                <img src={Zero} alt="" />
            </div>
        </div>
    );
};

export default Hero;