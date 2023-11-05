import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className='bg-primary'>
             <div className="ml-8 lg:ml-36 mt-14 mb-14">
       <div className="text-xl font-medium breadcrumbs">
        <ul className='mt-16'>
            <li>
             <Link to="/"><a>Home</a></Link> 
            </li>
            <li>
            <Link to="/contact"><a>Contact</a></Link>
            </li>
          </ul>
      </div>
    </div>

    <div className="hero min-h-screen ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src="https://i.ibb.co/Km74c2R/Side-Image.png" className="lg:max-w-lg rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold lg:mr-40">About</h1>
      <p className="py-6 text-justify lg:mr-12 mt-8">Embracing a sustainable and eco-friendly lifestyle is at the core of my values. We are dedicated to reducing plastic waste by opting for packaging-free alternatives and supporting businesses that share this commitment. Additionally, we prioritize using vegan and organic products, not only for the benefit of my health but also for the planet. Incorporating a healthy daily routine, which includes monitoring calorie intake, allows me to maintain a balanced and mindful approach to nutrition. Furthermore, we have a penchant for collecting organic fruits and vegetables from Asian countries, appreciating the rich diversity of flavors and nutritional benefits they offer. This holistic approach to wellness and sustainability drives our choices and resonates with our belief in responsible consumption and global food diversity.</p>
      
    </div>
  </div>
</div>
        </div>
    );
};

export default About;