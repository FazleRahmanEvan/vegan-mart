import React from 'react';
import { BsStarFill,BsStarHalf } from "react-icons/bs";
import Service from '../../Home/Service/Service';
import { ImWhatsapp } from "react-icons/im";


const ProductDetails = () => {
    return (
        <div>
     <div className=" bg-primary">
  <div className=" grid grid-cols-1 grid-cols-2 lg:p-16 sm:p-3 ">
    <img src="https://i.ibb.co/rZXH43S/9.png" className="w-2/3 lg:ml-20 rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-2xl font-bold text-start ">Alpro Coconut Barista</h1>
      <div className="flex  mt-6 ">
    <BsStarFill className="text-yellow-400"></BsStarFill>
    <BsStarFill className="text-yellow-400 ml-3"></BsStarFill>
    <BsStarFill className="text-yellow-400 ml-3"></BsStarFill>
    <BsStarFill className="text-yellow-400 ml-3"></BsStarFill>
    <BsStarHalf className="text-yellow-400 ml-3"></BsStarHalf>
   </div>
   <p className="card-title mt-2 font-bold">£6.99</p>
      <p className="text-justify mt-6 lg:mr-20">Take me to the tropics, now! Coffee plus the dreamy, creamy taste of coconut, the fabulous foamability of soya. Just made to turn humdrum into heavenly with every brew.</p>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <div className='text-start mt-10'>
      <button className="w-28 btn btn-secondary" onClick={()=>document.getElementById('my_modal_3').showModal()}>Buy</button>
<dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <p className="py-4 text-xl text-center font-medium">1.Standard delivery 3-5 days cost £3.99</p>
    <p className="py-4 text-xl text-center font-medium">2.Express shipping on next day £4.99</p>
    <p className="py-4 text-xl text-center font-medium">3.Over £25.00 delivery free</p>
    <h3 className="font-bold text-lg text-center">Please Confirm Your Orders By Contacting With Us:</h3>
    <div className='text-center mt-6'>
   <a href="https://wa.me/07538820944"><button className="btn btn-accent text-2xl btn-wide"><ImWhatsapp className=''/>Order Now</button></a>

    </div>
   
    


  </div>
</dialog>
      </div>

    </div>
  </div>
</div>

<Service></Service>
        </div>
    );
};

export default ProductDetails;