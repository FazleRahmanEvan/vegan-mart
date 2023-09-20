import React from 'react';
import { BsStarFill,BsStarHalf } from "react-icons/bs";
import { Link } from 'react-router-dom';

const ComboPackage = () => {
    return (
        <div className="bg-primary ">
        <div className="flex justify-between ">
          <div>
            <h2 className="text-2xl font-bold lg:ml-24 mt-16">Combo Packages</h2>
          </div>
          <div>
            <Link to="/combo"> <button className="btn btn-secondary lg:mr-24 mt-16">View All</button></Link>           
          </div>
        </div>
  
        <div className="mt-14 mb-10  grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 gap-4 pb-10 lg:px-9 ml-10">
  
          <div className="card w-80 bg-base-100 shadow-xl sm:mb-10 lg:mb-20">
            <Link to="/combo"> <img src="https://i.ibb.co/Wy9s4hV/41.png" alt="" /></Link>
           
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
          <div className="card w-80 bg-base-100 shadow-xl sm:mb-10 lg:mb-20">
          <Link to="/combo"><img src="https://i.ibb.co/C8zYQPW/42.png" alt="" /></Link>
            
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
          <div className="card w-80 bg-base-100 shadow-xl sm:mb-10 lg:mb-20">
          <Link to="/combo"><img src="https://i.ibb.co/1qGTfVF/43.png" alt="" /></Link>
            
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
          <div className="card w-80 bg-base-100 shadow-xl sm:mb-10 lg:mb-20">
          <Link to="/combo"><img src="https://i.ibb.co/kJn7g4H/44.png" alt="" /></Link>
            
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
      </div>
    );
};

export default ComboPackage;