import React from 'react';
import Fb from '../assets/pic/Facebook.png'
import Insta from '../assets/pic/Instagram.png'
import Twitter from '../assets/pic/Twitter.png'
import Foot from '../assets/pic/DigiTools (1).png'

const Footer = () => {
    return (
        <>
        <div>
            <footer className="footer sm:footer-horizontal bg-[#101727] text-white p-20 mt-32 ">
  <aside>
    <h1 className='lg:px-40'><img src={Foot} alt="" /></h1>
    <p className='lg:px-40'> 
      Premium digital tools for<br></br> creators, professionals, and businesses.<br></br> Work smarter with our suite of powerful tools.
    </p>
  </aside>
  <nav>
    <h6 className="footer-title">Products</h6>
    <a className="link link-hover">Features</a>
    <a className="link link-hover">Pricing</a>
    <a className="link link-hover">Templates</a>
    <a className="link link-hover">Intigration</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Blog</a>
    <a className="link link-hover">Career</a>
    <a className="link link-hover">Press</a>
  </nav>
  <nav>
    <h6 className="footer-title">Resources</h6>
    <a className="link link-hover">Documentation</a>
    <a className="link link-hover">Help Center</a>
    <a className="link link-hover">Community</a>
    <a className="link link-hover">Contact</a>
  </nav>
  <nav>
    <h6 className="footer-title">Social Link</h6>
  <div className='flex gap-3'>
    <div className=''><img src={Insta} alt="" /></div>
    <div className=''><img src={Fb} alt="" /></div>
    <div className=''><img src={Twitter} alt="" /></div>
  
  </div>
  </nav>
</footer>
        </div>
         <hr className='border-t border-gray-600 lg:w-300 mx-auto bg-[#101727]'></hr>
        <div className="footer sm:footer-horizontal bg-[#101727] text-white p-10">
            
 <div className='flex justify-between lg:w-300 m-auto'>
        <div><h2>© 2026 Digitools. All rights reserved.</h2></div>
        <div className='flex gap-3'>
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
            <p>Cookies</p>
        </div>

 </div>
 </div>
    </>
        
    );
    
};

export default Footer;