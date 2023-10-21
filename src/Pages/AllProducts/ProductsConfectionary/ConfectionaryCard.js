import React from 'react';
import { BsStarFill,BsStarHalf } from "react-icons/bs";
import { Link } from 'react-router-dom';
import './ConfectionaryCard.css'

const ConfectionaryCard = ({confectionary}) => {
  const {_id, image, title,price } =confectionary;
    return (
        <div>
    
    <div className="card w-80 confectionaryCardHeight bg-base-100 shadow-xl sm:mb-5 lg:mb-20">
  <Link to={`/confectionary/${_id}`}>
    <img className='w-80' src={image} alt="" />
    </Link>
  
  <div className="mt-4 card-body ">
    <h2 className="card-title ml-8 font-bold">{price}</h2>
   
   <div className="flex ml-7 mt-4 ">
    <BsStarFill className="text-yellow-400"></BsStarFill>
    <BsStarFill className="text-yellow-400 ml-3"></BsStarFill>
    <BsStarFill className="text-yellow-400 ml-3"></BsStarFill>
    <BsStarFill className="text-yellow-400 ml-3"></BsStarFill>
    <BsStarHalf className="text-yellow-400 ml-3"></BsStarHalf>
   </div>
   <p className="mr-16 mt-3"> <span className="text-secondary text-lg font-medium  mt-3">{title}</span> </p>
  </div>
</div>





{/* <div className="card w-80 bg-base-100 shadow-xl sm:mb-5 lg:mb-20">
  <Link to="/productDetails"><img className='w-80' src="https://i.ibb.co/Fg9bcbv/21.png" alt="" /></Link>
  
  <div className="mt-4 card-body ">
    <h2 className="card-title ml-8 font-bold">£5.49</h2>
   
   <div className="flex ml-7 mt-4 ">
    <BsStarFill className="text-yellow-400"></BsStarFill>
    <BsStarFill className="text-yellow-400 ml-3"></BsStarFill>
    <BsStarFill className="text-yellow-400 ml-3"></BsStarFill>
    <BsStarFill className="text-yellow-400 ml-3"></BsStarFill>
    <BsStarHalf className="text-yellow-400 ml-3"></BsStarHalf>
   </div>
   <p className="mr-16 mt-3"> <span className="text-secondary text-xl font-medium  mt-3">Royal Gulabjam </span> </p>
  </div>
</div>
<div className="card w-80 bg-base-100 shadow-xl sm:mb-5 lg:mb-20">
  <Link to="/productDetails"><img className='w-80' src="https://i.ibb.co/k0Yq2vM/22.png" alt="" /></Link>
  
  <div className="mt-4 card-body ">
    <h2 className="card-title ml-8 font-bold">£5.49</h2>
   <div className="flex ml-7 mt-4">
    <BsStarFill className="text-yellow-400"></BsStarFill>
    <BsStarFill className="text-yellow-400 ml-3"></BsStarFill>
    <BsStarFill className="text-yellow-400 ml-3"></BsStarFill>
    <BsStarFill className="text-yellow-400 ml-3"></BsStarFill>
    <BsStarHalf className="text-yellow-400 ml-3"></BsStarHalf>
   </div>
   <p className="mr-16 mt-3"> <span className="text-secondary text-xl font-medium  mt-3">Pran Chinigura Aromatic Rice</span> </p>
  </div>
</div>
<div className="card w-80 bg-base-100 shadow-xl sm:mb-5 lg:mb-20">
<Link to="/productDetails"><img className='w-80' src="https://i.ibb.co/mDXdvSr/23.png" alt="" /></Link>
  
  <div className="mt-4 card-body ">
    <h2 className="card-title ml-8 font-bold">£2.49</h2>
   
   <div className="flex ml-7 mt-4">
    <BsStarFill className="text-yellow-400"></BsStarFill>
    <BsStarFill className="text-yellow-400 ml-3"></BsStarFill>
    <BsStarFill className="text-yellow-400 ml-3"></BsStarFill>
    <BsStarFill className="text-yellow-400 ml-3"></BsStarFill>
    <BsStarHalf className="text-yellow-400 ml-3"></BsStarHalf>
   </div>
   <p className="mr-16 mt-3"> <span className="text-secondary text-xl font-medium  mt-3">Fudco Himalayan Pink Salt </span> </p>
  </div>
</div>

<div className="card w-80 bg-base-100 shadow-xl sm:mb-5 lg:mb-20">
<Link to="/productDetails"><img className='w-80' src="https://i.ibb.co/ZXw929Y/24.png" alt="" /></Link>
  
  <div className="mt-4 card-body ">
    <h2 className="card-title ml-8 font-bold">£3.49</h2>
   
   <div className="flex ml-7 mt-4 ">
    <BsStarFill className="text-yellow-400"></BsStarFill>
    <BsStarFill className="text-yellow-400 ml-3"></BsStarFill>
    <BsStarFill className="text-yellow-400 ml-3"></BsStarFill>
    <BsStarFill className="text-yellow-400 ml-3"></BsStarFill>
    <BsStarHalf className="text-yellow-400 ml-3"></BsStarHalf>
   </div>
   <p className="mr-16 mt-3"> <span className="text-secondary text-xl font-medium  mt-3">Eat Real Crisps </span> </p>
  </div>
</div>
<div className="card w-80 bg-base-100 shadow-xl sm:mb-5 lg:mb-20">
<Link to="/productDetails"><img className='w-80' src="https://i.ibb.co/t4bVSR3/25.png" alt="" /></Link>
  
  <div className="mt-4 card-body ">
    <h2 className="card-title ml-8 font-bold">£2.99</h2>
  
   <div className="flex ml-7 mt-4">
    <BsStarFill className="text-yellow-400"></BsStarFill>
    <BsStarFill className="text-yellow-400 ml-3"></BsStarFill>
    <BsStarFill className="text-yellow-400 ml-3"></BsStarFill>
    <BsStarFill className="text-yellow-400 ml-3"></BsStarFill>
    <BsStarHalf className="text-yellow-400 ml-3"></BsStarHalf>
   
   </div>
   <p className="mr-16 mt-3"> <span className="text-secondary text-xl font-medium  mt-3">Pran Puffed Rice</span> </p>
  </div>
</div>
<div className="card w-80 bg-base-100 shadow-xl sm:mb-5 lg:mb-20">
<Link to="/productDetails"><img className='w-80' src="https://i.ibb.co/Np6Ps5h/26.png" alt="" /></Link>
  
  <div className="mt-4 card-body ">
    <h2 className="card-title ml-8 font-bold">£2.99</h2>
   
   <div className="flex ml-7 mt-4">
    <BsStarFill className="text-yellow-400"></BsStarFill>
    <BsStarFill className="text-yellow-400 ml-3"></BsStarFill>
    <BsStarFill className="text-yellow-400 ml-3"></BsStarFill>
    <BsStarFill className="text-yellow-400 ml-3"></BsStarFill>
    <BsStarHalf className="text-yellow-400 ml-3"></BsStarHalf>
 
   </div>
   <p className="mr-16 mt-3"> <span className="text-secondary text-xl font-medium  mt-3">Choco Leibniz Milk Chocolate</span> </p>
  </div>
</div>
<div className="card w-80 bg-base-100 shadow-xl sm:mb-5 lg:mb-20">
<Link to="/productDetails"> <img className='w-80' src="https://i.ibb.co/1m21LL8/27.png" alt="" /></Link>
 
  <div className="mt-4 card-body ">
    <h2 className="card-title ml-8 font-bold">£5.49</h2>
    
   <div className="flex ml-7 mt-4">
    <BsStarFill className="text-yellow-400"></BsStarFill>
    <BsStarFill className="text-yellow-400 ml-3"></BsStarFill>
    <BsStarFill className="text-yellow-400 ml-3"></BsStarFill>
    <BsStarFill className="text-yellow-400 ml-3"></BsStarFill>
    <BsStarHalf className="text-yellow-400 ml-3"></BsStarHalf>
   
   </div>
   <p className="mr-16 mt-3"> <span className="text-secondary text-xl font-medium  mt-3">Royal Rassomalai </span> </p>
  </div>
</div>
<div className="card w-80 bg-base-100 shadow-xl sm:mb-5 lg:mb-20">
<Link to="/productDetails"><img className='w-80' src="https://i.ibb.co/ZztvM4G/28.png" alt="" /></Link>
  
  <div className="mt-4 card-body ">
    <h2 className="card-title ml-8 font-bold">£1.99</h2>
    
   <div className="flex ml-7 mt-4 ">
    <BsStarFill className="text-yellow-400"></BsStarFill>
    <BsStarFill className="text-yellow-400 ml-3"></BsStarFill>
    <BsStarFill className="text-yellow-400 ml-3"></BsStarFill>
    <BsStarFill className="text-yellow-400 ml-3"></BsStarFill>
    <BsStarHalf className="text-yellow-400 ml-3"></BsStarHalf>
   
   </div>
   <p className="mr-16 mt-3"> <span className="text-secondary text-xl font-medium  mt-3">N'eat Natural Energy Fruit Bars</span> </p>
  </div>
</div>
<div className="card w-80 bg-base-100 shadow-xl sm:mb-5 lg:mb-20">
<Link to="/productDetails"><img className='w-80' src="https://i.ibb.co/84YRMnQ/29.png" alt="" /></Link>
  
  <div className="mt-4 card-body ">
    <h2 className="card-title ml-8 font-bold">£14.99</h2>
   
   <div className="flex ml-7 mt-4">
    <BsStarFill className="text-yellow-400"></BsStarFill>
    <BsStarFill className="text-yellow-400 ml-3"></BsStarFill>
    <BsStarFill className="text-yellow-400 ml-3"></BsStarFill>
    <BsStarFill className="text-yellow-400 ml-3"></BsStarFill>
    <BsStarHalf className="text-yellow-400 ml-3"></BsStarHalf>
   </div>
   <p className="mr-16 mt-3"> <span className="text-secondary text-xl font-medium  mt-3">Metcalfe's - Chocolate Rice Cakes (8 piece x 34 g)</span> </p>
  </div>
</div>
<div className="card w-80 bg-base-100 shadow-xl sm:mb-5 lg:mb-20">
<Link to="/productDetails"><img className='w-80' src="https://i.ibb.co/ftGHwpn/30.png" alt="" /></Link>
  
  <div className="mt-4 card-body ">
    <h2 className="card-title ml-8 font-bold">£2.99</h2>
   
   <div className="flex ml-7 mt-4">
    <BsStarFill className="text-yellow-400"></BsStarFill>
    <BsStarFill className="text-yellow-400 ml-3"></BsStarFill>
    <BsStarFill className="text-yellow-400 ml-3"></BsStarFill>
    <BsStarFill className="text-yellow-400 ml-3"></BsStarFill>
    <BsStarHalf className="text-yellow-400 ml-3"></BsStarHalf>
   </div>
   <p className="mr-16 mt-3"> <span className="text-secondary text-xl font-medium  mt-3">Cofresh Sev Mamra With Peanuts</span> </p>
  </div>
</div>
<div className="card w-80 bg-base-100 shadow-xl sm:mb-5 lg:mb-20">
<Link to="/productDetails"> <img className='w-80' src="https://i.ibb.co/fnvSQMD/31.png" alt="" /></Link>
 
  <div className="mt-4 card-body ">
    <h2 className="card-title ml-8 font-bold">£14.99</h2>
   
   <div className="flex ml-7 mt-4">
    <BsStarFill className="text-yellow-400"></BsStarFill>
    <BsStarFill className="text-yellow-400 ml-3"></BsStarFill>
    <BsStarFill className="text-yellow-400 ml-3"></BsStarFill>
    <BsStarFill className="text-yellow-400 ml-3"></BsStarFill>
    <BsStarHalf className="text-yellow-400 ml-3"></BsStarHalf>
   </div>
   <p className="mr-16 mt-3"> <span className="text-secondary text-xl font-medium  mt-3">TREK Energy Bar (12 piece x 50 g)</span> </p>
  </div>
</div>
<div className="card w-80 bg-base-100 shadow-xl sm:mb-5 lg:mb-20">
<Link to="/productDetails"> <img className='w-80' src="https://i.ibb.co/qRw23BK/32.png" alt="" /></Link>
 
  <div className="mt-4 card-body ">
    <h2 className="card-title ml-8 font-bold">£2.49</h2>
   
   <div className="flex ml-7 mt-4">
    <BsStarFill className="text-yellow-400"></BsStarFill>
    <BsStarFill className="text-yellow-400 ml-3"></BsStarFill>
    <BsStarFill className="text-yellow-400 ml-3"></BsStarFill>
    <BsStarFill className="text-yellow-400 ml-3"></BsStarFill>
    <BsStarHalf className="text-yellow-400 ml-3"></BsStarHalf>
   </div>
   <p className="mr-16 mt-3"> <span className="text-secondary text-xl font-medium  mt-3">Fudco Soya Chunks </span> </p>
  </div>
</div> */}



        </div>
    );
};

export default ConfectionaryCard;