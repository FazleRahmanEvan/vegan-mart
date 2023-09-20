import React from 'react';
import { BsStarFill,BsStarHalf } from "react-icons/bs";
import Service from '../Home/Service/Service';

const Combo = () => {
    return (
        <div>
             <div className="mt-14  lg:px-20 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3">
  
  <div className="card w-80 bg-base-100 shadow-xl sm:mb-5 lg:mb-20">
    <img src="https://i.ibb.co/Wy9s4hV/41.png" alt="" />
    <div className="mt-4 card-body ">
      <h2 className="card-title ml-8 font-bold">Deal 1: Snacks Deal</h2>
      <p className="mr-16 mt-3"> <span className="text-secondary text-xl font-medium  mt-3">£19.99</span> <span className="text-xl text-gray-500 font-medium line-through ml-8">$300</span> </p>
     <div className="flex ml-7 mt-4 ">
      <BsStarFill className="text-yellow-400"></BsStarFill>
      <BsStarFill className="text-yellow-400 ml-3"></BsStarFill>
      <BsStarFill className="text-yellow-400 ml-3"></BsStarFill>
      <BsStarFill className="text-yellow-400 ml-3"></BsStarFill>
      <BsStarHalf className="text-yellow-400 ml-3"></BsStarHalf>
     </div>
    </div>
  </div>
  <div className="card w-80 bg-base-100 shadow-xl sm:mb-5 lg:mb-20">
    <img src="https://i.ibb.co/C8zYQPW/42.png" alt="" />
    <div className="mt-4 card-body ">
      <h2 className="card-title ml-8 font-bold">Deal 2: Healthy Deal</h2>
      <p className="mr-16 mt-3"> <span className="text-secondary text-xl font-medium  mt-3">£19.19</span> <span className="text-xl text-gray-500 font-medium line-through ml-8">$300</span> </p>
     <div className="flex ml-7 mt-4">
      <BsStarFill className="text-yellow-400"></BsStarFill>
      <BsStarFill className="text-yellow-400 ml-3"></BsStarFill>
      <BsStarFill className="text-yellow-400 ml-3"></BsStarFill>
      <BsStarFill className="text-yellow-400 ml-3"></BsStarFill>
      <BsStarHalf className="text-yellow-400 ml-3"></BsStarHalf>
     </div>
    </div>
  </div>
  <div className="card w-80 bg-base-100 shadow-xl sm:mb-5 lg:mb-20">
    <img src="https://i.ibb.co/1qGTfVF/43.png" alt="" />
    <div className="mt-4 card-body ">
      <h2 className="card-title ml-8 font-bold">Deal 3: Fiji Deal</h2>
      <p className="mr-16 mt-3"> <span className="text-secondary text-xl font-medium  mt-3">£19.99</span> <span className="text-xl text-gray-500 font-medium line-through ml-8">$300</span> </p>
     <div className="flex ml-7 mt-4">
      <BsStarFill className="text-yellow-400"></BsStarFill>
      <BsStarFill className="text-yellow-400 ml-3"></BsStarFill>
      <BsStarFill className="text-yellow-400 ml-3"></BsStarFill>
      <BsStarFill className="text-yellow-400 ml-3"></BsStarFill>
      <BsStarHalf className="text-yellow-400 ml-3"></BsStarHalf>
     </div>
    </div>
  </div>
  <div className="card w-80 bg-base-100 shadow-xl sm:mb-5 lg:mb-20">
    <img src="https://i.ibb.co/kJn7g4H/44.png" alt="" />
    <div className="mt-4 card-body ">
      <h2 className="card-title ml-8 font-bold">Deal 4 : Sweet Deal</h2>
      <p className="mr-16 mt-3"> <span className="text-secondary text-xl font-medium  mt-3">£19.99</span> <span className="text-xl text-gray-500 font-medium line-through ml-8">$300</span> </p>
     <div className="flex ml-7 mt-4">
      <BsStarFill className="text-yellow-400"></BsStarFill>
      <BsStarFill className="text-yellow-400 ml-3"></BsStarFill>
      <BsStarFill className="text-yellow-400 ml-3"></BsStarFill>
      <BsStarFill className="text-yellow-400 ml-3"></BsStarFill>
      <BsStarHalf className="text-yellow-400 ml-3"></BsStarHalf>
     </div>
    </div>
  </div>

</div>
<Service></Service>
        </div>
    );
};

export default Combo;