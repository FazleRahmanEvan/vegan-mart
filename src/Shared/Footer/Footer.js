import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaLinkedin,FaPhoneAlt} from "react-icons/fa"
import { ImLocation } from "react-icons/im";
import { IoMailSharp } from "react-icons/io5";

const Footer = () => {
    return (
        <footer class="footer bg-secondary text-white justify-evenly">
    
        <div className='mt-12 mb-24'>
            <img className='w-40 h-44' src="https://i.ibb.co/dDHV2Nc/Group.png" alt=''/>
            
       
            <div className="footer-start grid grid-flow-col gap-4 mt-2">
        <p class="footer-title text-white"></p> 
            <a className='text-xl' href="/"><FaFacebookF></FaFacebookF></a>
               <a className='text-xl' href="/"><FaLinkedin></FaLinkedin></a> 
              
               </div>
               <div>
               <p className='mt-5'>02 Sovereign House, Cambridge heath road, E1 5RZ</p>
               <p className='mr-20 mt-2'>E-mail: shantonupaulsaikot@gmail.com</p>
               <p className='mr-36 mt-2'>Phone: +880 1234 - 567890</p>
               </div>
         
        
        </div> 
        <div className='mt-36 mb-20'>
        <header className="text-xl font-bold text-white">Account</header> 
        <Link to="/"><a class="link link-hover mt-6">My Account</a></Link>
        
        <Link to="/blogs"> <a class="link link-hover mt-6">Login/Register</a></Link>
        <Link to="/about"><a class="link link-hover mt-4">Cart</a> </Link>
        <Link to="/ourWork"> <a class="link link-hover mt-4">Shop</a> </Link>
       
     
        </div> 
        <div className='mt-36 mb-20'>
          <span class="text-xl font-bold text-white">Quick Link</span> 
          <Link to="/"><a class="link link-hover mt-6">Privacy</a></Link>
        
        <Link to="/blogs"> <a class="link link-hover mt-6">Terms Of Use</a></Link>
        <Link to="/about"><a class="link link-hover mt-4">FAQ</a> </Link>
        <Link to="/ourWork"> <a class="link link-hover mt-4">Contact</a> </Link>
          {/* <div className="grid grid-flow-col gap-2 mt-1 mb-2 ">
          <a><FaPhoneAlt></FaPhoneAlt></a>
          <p>+8801755-460159</p>
          </div> */}
      
        </div>
        
      </footer>
    );
};

export default Footer;