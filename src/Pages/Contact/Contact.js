import React from 'react';
import { Link } from 'react-router-dom';
import { BiSolidPhoneCall} from "react-icons/bi";
import { BsFillEnvelopeFill} from "react-icons/bs";

const Contact = () => {
    return (
      <div className="bg-primary">
        <div className="ml-8 lg:ml-36 mt-14 mb-14">
          <div className="text-xl font-medium breadcrumbs">
            <ul className="mt-16">
              <li>
                <Link to="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>
                <Link to="/about">
                  <a>About</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className='flex justify-center'>
        <div className="card w-96 bg-base-100 mb-20 shadow-xl">
          <div className="card-body">
            <div className='flex mb-4'>
            <BiSolidPhoneCall className='text-secondary text-3xl ml-4'/>
            <p className='mr-20 text-xl font-medium'>Call To Us</p>
            </div>
            <p>We are available 24/7, 7 days a week.</p>
            <p>Phone: +44 7538820944</p>
            <div className="divider"></div>
            <div className='flex mb-4 mt-4'>
            <BsFillEnvelopeFill className='text-secondary text-3xl ml-4'/>
            <p className='mr-20 text-xl font-medium'>Write To Us</p>
            </div>
            <p>Fill out our form and we will contact you within 24 hours.</p>
            <p>Emails: shantonupaulsaikot@gmail.com</p>
            
          </div>
        </div>
        </div>
        
      </div>
    );
};

export default Contact;