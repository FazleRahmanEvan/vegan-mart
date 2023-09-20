import React from "react";
import { BsLink45Deg, BsStarFill,BsStarHalf } from "react-icons/bs";
import { Link } from "react-router-dom";

const BestSellingProduct = () => {
  return (
    <div className=" bg-primary">
      <div className="flex justify-between ">
        <div>
          <h2 className="text-2xl font-bold lg:ml-24 mt-16">Best Selling Product</h2>
        </div>
        <div>
          <Link to="/"></Link>
          <button className="btn btn-secondary lg:mr-24 mt-16">View All</button>
        </div>
      </div>

      <div className="mt-14  lg:px-20 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3">

        <div className="card w-80 bg-base-100 shadow-xl sm:mb-5 lg:mb-20">
          <Link to="/confectionary"><img className="w-80" src="https://i.ibb.co/D1H92vz/Cart.png" alt="" /></Link>
          
          <div className="mt-4 card-body ">
            <h2 className="card-title ml-8 font-bold">Fudco Soya Chunks 150g
(per packet)</h2>
            <p className="mr-16 mt-3"> <span className="text-secondary text-xl font-medium  mt-3">£2.49</span>  </p>
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
          <Link to="/drinks"><img className="w-80" src="https://i.ibb.co/9vWy4C2/Cart-1.png" alt="" /></Link>
          <div className="mt-4 card-body ">
            <h2 className="card-title ml-8 font-bold">Pakeeza Exotic Mango Lassi</h2>
            <p className="mr-16 mt-3"> <span className="text-secondary text-xl font-medium  mt-3">£4.99</span>  </p>
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
        <Link to="/confectionary"> <img className="w-80" src="https://i.ibb.co/Thrd23x/Cart-2.png" alt="" /></Link>
          <div className="mt-4 card-body ">
            <h2 className="card-title ml-8 font-bold">Cofresh Sev Mamra With
Peanuts (per pcs)</h2>
            <p className="mr-16 mt-3"> <span className="text-secondary text-xl font-medium  mt-3">£2.99</span>  </p>
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
        <Link to="/drinks"><img className="w-80" src="https://i.ibb.co/CP91qwR/Cart-3.png" alt="" /></Link>
          <div className="mt-4 card-body ">
            <h2 className="card-title ml-8 font-bold">Barebells Milkshakes </h2>
            <p className="mr-16 mt-5"> <span className="text-secondary text-xl font-medium  mt-3">£11.99</span>  </p>
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

export default BestSellingProduct;
