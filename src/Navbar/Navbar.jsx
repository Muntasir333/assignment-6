import React from 'react';
import Logo from '../assets/pic/DigiTools.png'
import Cart from '../assets/pic/shopping-cart.png'

const Navbar = () => {
    return (
        <div className='flex flex-col lg:flex-row justify-between items-center px-20 py-7'>
            <div>
                <img className='' src={Logo} alt="" />
            </div>
            <div className='flex gap-5'>
                <p>Products</p>
                <p>Features</p>
                <p>Pricing</p>
                <p>Testimonials</p>
                <p>FAQ</p>
            </div>
            <div className='flex gap-4 items-center'> 
                <img className='w-4 h-4' src={Cart} alt="" />
                <button>Login</button>
                <button className='btn btn-primary rounded-2xl'>Get Started</button>
            </div>
            
        </div>
    );
};

export default Navbar;