import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { toast } from 'react-toastify';

const New = ({mod, carts, setCarts}) => {
    console.log(mod)
     const [buy, setBuy]= useState(false)
     const handleBuy=()=>{
       setBuy(true) 
       setCarts([...carts, mod]);
       toast.success("Items added to cart!");

     }
    return (
        <div className=' border p-8'>
                        <div>
                        <div className=''><p className='text-right pr-3 bg-amber-300 w-20 rounded-3xl translate-x-60 '>{mod.tagType}</p>
                         <img className='h-10 w-10 border rounded-4xl' src={mod.icon} alt="" />
                        </div>
                    
                        <h1 className='text-3xl font-bold text-[#101727]'>{mod.name}</h1>
                        <p className='text-[#627382]'>{mod.description}</p>
                        <p className='text-3xl font-bold text-[#101727]'>{mod.price}/<span className='text-[#627382] font-normal text-[20px]'>{mod.period}</span></p>
                        <p>{mod.features.map((feature, index)=> (<div className='flex gap-2 items-center'><Check /> <p key={index}>{feature}</p></div>))}</p>
                        <button onClick={handleBuy} className='btn btn-primary w-full rounded-3xl'>{buy ? "Added the Cart" : "Buy Now"}</button>
                       </div>
                    </div>
    );
};

export default New;