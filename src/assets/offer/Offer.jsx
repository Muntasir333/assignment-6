import React from 'react';
import { Check } from 'lucide-react';

const Offer = () => {
    return (
        <div className='bg-white w-full lg:w-300 mx-auto space-y-5'>
            <div className='text-center space-y-3'>
                <h2 className='text-5xl font-bold text-[#101727] pt-25 '>Simple, Transparent Pricing</h2>
                <p className='text-[#627382]'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            </div>
         <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
               
            <div className='space-y-5 bg-[#F9FAFC] p-5 rounded-lg'>
                <div>
                    <h2  className='text-3xl font-bold text-[#101727]'>Starter</h2>
                    <p className='text-[#627382]'>Perfect for getting started</p>
                </div>
                <div>
                    <p className='text-3xl font-bold text-[#101727]'>0$<span className='text-[#627382] text-xl'>/month</span></p>
                </div>
                <div className='flex flex-col gap-2 '>
                   <div className='flex gap-2 items-center'><Check /> <p>Access to 10 free tools</p></div> 
                   <div className='flex gap-2 items-center'><Check /> <p>Basic templates</p></div> 
                   <div className='flex gap-2 items-center'><Check /> <p>Community support</p></div> 
                   <div className='flex gap-2 items-center'><Check /> <p>1 project per month</p></div> 
                   <br></br>
                   <br></br>
                   <br></br>
                 

                </div>
                <button className='btn btn-primary w-full rounded-lg'>Get Started Free</button>
            </div>
            <div className='relative space-y-5 bg-purple-800 text-[#F9FAFC] p-5 rounded-lg'>
                 <div className='bg-amber-700 rounded-2xl w-50 text-center absolute -top-3 right-25'><h2 className='text-xl'>Most Popular</h2></div>
                <div>
                    <h2  className='text-3xl font-bold text-[#F9FAFC]'>Starter</h2>
                    <p className='text-[#627382] text-xl'>Perfect for getting started</p>
                </div>
                <div>
                    <p className='text-3xl font-bold text-[#F9FAFC]'>29$<span className='text-[#627382] text-xl'>/month</span></p>
                </div>
                <div className='flex flex-col gap-2'>
                   <div className='flex gap-2 items-center'><Check /> <p>Access to all premium tools</p></div> 
                   <div className='flex gap-2 items-center'><Check /> <p>Unlimited templates</p></div> 
                   <div className='flex gap-2 items-center'><Check /> <p>Priority support</p></div> 
                   <div className='flex gap-2 items-center'><Check /> <p>Unlimited projects</p></div> 
                   <div className='flex gap-2 items-center'><Check /> <p>Cloud sync</p></div> 
                   <div className='flex gap-2 items-center'><Check /> <p>Advanced analytics</p></div> 
                 

                </div>
                <button className='btn  w-full bg-amber-50 rounded-lg'>Get Started Free</button>
            </div>
            <div className='space-y-5 bg-[#F9FAFC] p-5 rounded-lg'>
               
                <div>
                    <h2  className='text-3xl font-bold text-[#101727]'>Starter</h2>
                    <p className='text-[#627382] text-xl'>Perfect for getting started</p>
                </div>
                <div>
                    <p className='text-3xl font-bold text-[#101727]'>99$<span className='text-[#627382] text-xl'>/month</span></p>
                </div>
                <div className='flex flex-col gap-2'>
                   <div className='flex gap-2 items-center'><Check /> <p>Everything in Pro</p></div> 
                   <div className='flex gap-2 items-center'><Check /> <p>Custom integrations</p></div> 
                   <div className='flex gap-2 items-center'><Check /> <p>Team collaboration</p></div> 
                   <div className='flex gap-2 items-center'><Check /> <p>Dedicated support</p></div> 
                   <div className='flex gap-2 items-center'><Check /> <p>SLA guarantee</p></div> 
                   <div className='flex gap-2 items-center'><Check /> <p>Custom branding</p></div> 
                 

                </div>
                <button className='btn btn-primary w-full rounded-lg'>Get Started Free</button>
            </div>
         </div>
            
        </div>
    );
};

export default Offer;