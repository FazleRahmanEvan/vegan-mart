import React from 'react';
import { BsStarFill,BsStarHalf } from "react-icons/bs";
import { Link } from 'react-router-dom';
import "./DrinksCard.css"

const DrinksCard = ({drink}) => {
  const { image, title,price } =drink;
    return (
        <div>
             

<div className="card w-80 drinkCardHeight bg-base-100 shadow-xl sm:mb-5 lg:mb-20">
  <Link to="/productDetails">
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
  <Link to="/productDetails"><img className='w-80' src="https://i.ibb.co/BnpJwjp/2.jpg" alt="" /></Link>
  
  <div className="mt-4 card-body ">
    <h2 className="card-title ml-8 font-bold">£4.99</h2>
   <div className="flex ml-7 mt-4">
    <BsStarFill className="text-yellow-400"></BsStarFill>
    <BsStarFill className="text-yellow-400 ml-3"></BsStarFill>
    <BsStarFill className="text-yellow-400 ml-3"></BsStarFill>
    <BsStarFill className="text-yellow-400 ml-3"></BsStarFill>
    <BsStarHalf className="text-yellow-400 ml-3"></BsStarHalf>
   </div>
   <p className="mr-16 mt-3"> <span className="text-secondary text-xl font-medium  mt-3">Pakeeza Ayran Lassi</span> </p>
  </div>
</div>
<div className="card w-80 bg-base-100 shadow-xl sm:mb-5 lg:mb-20">
<Link to="/productDetails"> <img className='w-80' src="https://i.ibb.co/LNg1Cz0/3.png" alt="" /></Link>
 
  <div className="mt-4 card-body ">
    <h2 className="card-title ml-8 font-bold">£11.99</h2>
   
   <div className="flex ml-7 mt-4">
    <BsStarFill className="text-yellow-400"></BsStarFill>
    <BsStarFill className="text-yellow-400 ml-3"></BsStarFill>
    <BsStarFill className="text-yellow-400 ml-3"></BsStarFill>
    <BsStarFill className="text-yellow-400 ml-3"></BsStarFill>
    <BsStarHalf className="text-yellow-400 ml-3"></BsStarHalf>
   </div>
   <p className="mr-16 mt-3"> <span className="text-secondary text-xl font-medium  mt-3">Barebells Milkshakes (4 Cans x 330ml)</span> </p>
  </div>
</div>

<div className="card w-80 bg-base-100 shadow-xl sm:mb-5 lg:mb-20">
<Link to="/productDetails"> <img className='w-80' src="https://i.ibb.co/6nJ7fLv/4.png" alt="" /></Link>
 
  <div className="mt-4 card-body ">
    <h2 className="card-title ml-8 font-bold">£2.49</h2>
   
   <div className="flex ml-7 mt-4 ">
    <BsStarFill className="text-yellow-400"></BsStarFill>
    <BsStarFill className="text-yellow-400 ml-3"></BsStarFill>
    <BsStarFill className="text-yellow-400 ml-3"></BsStarFill>
    <BsStarFill className="text-yellow-400 ml-3"></BsStarFill>
    <BsStarHalf className="text-yellow-400 ml-3"></BsStarHalf>
   </div>
   <p className="mr-16 mt-3"> <span className="text-secondary text-xl font-medium  mt-3">FIX8 KOMBUCHA</span> </p>
  </div>
</div>
<div className="card w-80 bg-base-100 shadow-xl sm:mb-5 lg:mb-20">
<Link to="/productDetails"><img className='w-80' src="https://i.ibb.co/yfKbQn3/5.png" alt="" /></Link>
  
  <div className="mt-4 card-body ">
    <h2 className="card-title ml-8 font-bold">£5.99</h2>
  
   <div className="flex ml-7 mt-4">
    <BsStarFill className="text-yellow-400"></BsStarFill>
    <BsStarFill className="text-yellow-400 ml-3"></BsStarFill>
    <BsStarFill className="text-yellow-400 ml-3"></BsStarFill>
    <BsStarFill className="text-yellow-400 ml-3"></BsStarFill>
    <BsStarHalf className="text-yellow-400 ml-3"></BsStarHalf>
   
   </div>
   <p className="mr-16 mt-3"> <span className="text-secondary text-xl font-medium  mt-3">Innocent Juice</span> </p>
  </div>
</div>
<div className="card w-80 bg-base-100 shadow-xl sm:mb-5 lg:mb-20">
<Link to="/productDetails"><img className='w-80' src="https://i.ibb.co/6s1QGzZ/6.png" alt="" /></Link>
  
  <div className="mt-4 card-body ">
    <h2 className="card-title ml-8 font-bold">£4.99</h2>
   
   <div className="flex ml-7 mt-4">
    <BsStarFill className="text-yellow-400"></BsStarFill>
    <BsStarFill className="text-yellow-400 ml-3"></BsStarFill>
    <BsStarFill className="text-yellow-400 ml-3"></BsStarFill>
    <BsStarFill className="text-yellow-400 ml-3"></BsStarFill>
    <BsStarHalf className="text-yellow-400 ml-3"></BsStarHalf>
 
   </div>
   <p className="mr-16 mt-3"> <span className="text-secondary text-xl font-medium  mt-3">Pakeeza Exotic Mango Lassi</span> </p>
  </div>
</div>
<div className="card w-80 bg-base-100 shadow-xl sm:mb-5 lg:mb-20">
<Link to="/productDetails"><img className='w-80' src="https://i.ibb.co/0nKh8Qs/7.png" alt="" /></Link>
  
  <div className="mt-4 card-body ">
    <h2 className="card-title ml-8 font-bold">£6.99</h2>
    
   <div className="flex ml-7 mt-4">
    <BsStarFill className="text-yellow-400"></BsStarFill>
    <BsStarFill className="text-yellow-400 ml-3"></BsStarFill>
    <BsStarFill className="text-yellow-400 ml-3"></BsStarFill>
    <BsStarFill className="text-yellow-400 ml-3"></BsStarFill>
    <BsStarHalf className="text-yellow-400 ml-3"></BsStarHalf>
   
   </div>
   <p className="mr-16 mt-3"> <span className="text-secondary text-xl font-medium  mt-3">Dash Sparkling Water (6 pack x 330ml box)</span> </p>
  </div>
</div>
<div className="card w-80 bg-base-100 shadow-xl sm:mb-5 lg:mb-20">
<Link to="/productDetails"><img className='w-80' src="https://i.ibb.co/gSD9FNq/8.png" alt="" /></Link>
  
  <div className="mt-4 card-body ">
    <h2 className="card-title ml-8 font-bold">£2.99</h2>
    
   <div className="flex ml-7 mt-4 ">
    <BsStarFill className="text-yellow-400"></BsStarFill>
    <BsStarFill className="text-yellow-400 ml-3"></BsStarFill>
    <BsStarFill className="text-yellow-400 ml-3"></BsStarFill>
    <BsStarFill className="text-yellow-400 ml-3"></BsStarFill>
    <BsStarHalf className="text-yellow-400 ml-3"></BsStarHalf>
   
   </div>
   <p className="mr-16 mt-3"> <span className="text-secondary text-xl font-medium  mt-3">Alpro Oat No Sugars Chilled Drink</span> </p>
  </div>
</div>
<div className="card w-80 bg-base-100 shadow-xl sm:mb-5 lg:mb-20">
<Link to="/productDetails"><img className='w-80' src="https://i.ibb.co/rZXH43S/9.png" alt="" /></Link>
  
  <div className="mt-4 card-body ">
    <h2 className="card-title ml-8 font-bold">£2.99</h2>
  
   <div className="flex ml-7 mt-4">
    <BsStarFill className="text-yellow-400"></BsStarFill>
    <BsStarFill className="text-yellow-400 ml-3"></BsStarFill>
    <BsStarFill className="text-yellow-400 ml-3"></BsStarFill>
    <BsStarFill className="text-yellow-400 ml-3"></BsStarFill>
    <BsStarHalf className="text-yellow-400 ml-3"></BsStarHalf>
   </div>
   <p className="mr-16 mt-3"> <span className="text-secondary text-xl font-medium  mt-3">Alpro Coconut Barista</span> </p>
  </div>
</div> */}


</div>
       
    );
};

export default DrinksCard;