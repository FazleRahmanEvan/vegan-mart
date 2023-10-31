import React, { useEffect, useState } from 'react';
import { BsStarFill,BsStarHalf } from "react-icons/bs";
import Service from '../../Home/Service/Service';
import { ImWhatsapp } from "react-icons/im";
import { useParams } from 'react-router-dom';

const ComboDetails = () => {
    const { _id } = useParams()
    const [combo, setCombo] = useState({});
    useEffect ( () => {
      fetch(`https://vegan-mart-server.vercel.app/combo/${_id}`)
      .then(res => res.json())
      .then(data => setCombo(data));
    
  },)
    return (
        <div className=" bg-primary">
        <div >
     <div className=" grid grid-cols-1 grid-cols-2 lg:p-16 sm:p-3 lg:ml-20 lg:justify-evenly">
       <img src={combo.image} className="w-2/3 lg:ml-20 rounded-lg shadow-2xl" alt=''/>
       <div className='lg:ml-20 lg:mt-10'>
         <h1 className="text-2xl font-bold text-start ">{combo.title}</h1>
         <div className="flex  mt-6 ">
       <BsStarFill className="text-yellow-400"></BsStarFill>
       <BsStarFill className="text-yellow-400 ml-3"></BsStarFill>
       <BsStarFill className="text-yellow-400 ml-3"></BsStarFill>
       <BsStarFill className="text-yellow-400 ml-3"></BsStarFill>
       <BsStarHalf className="text-yellow-400 ml-3"></BsStarHalf>
      </div>
      <p className="card-title mt-2 font-bold">{combo.price}</p>
         <p className="text-justify mt-6 lg:mr-20">{combo.shortDescription}</p>
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
       <p className="py-4 text-xl text-center font-medium">2.Express delivery £4.99 (wothin 48 hours)</p>
       <p className="py-4 text-xl text-center font-medium">3.Over £25.99 shopping delivery free</p>
       <div className='text-center mt-6'>
       <h3 className="font-bold text-lg text-center">Please Confirm Your Orders By Contacting With Us:</h3>
       <br />
       <h3 className="font-bold text-lg text-center">And for customize order inbox us:</h3>
       <br />
      <a href="https://wa.me/+4407538820944"><button className="btn btn-accent text-2xl btn-wide"><ImWhatsapp className=''/>Order Now</button></a>
   
       </div>
      
       
   
   
     </div>
   </dialog>
         </div>
   
       </div>
     </div>
      {/* product description */}
 <div className="card w-10/12 lg:ml-32 bg-base-100 shadow-xl mt-20">
  <div className="text-start">
      <h1 className="text-xl font-bold ml-5 mt-5">Product Description</h1>
      <div className="divider"></div>

      <p className="mt-1 ml-16">{combo.line1}</p>
      <p className="mt-1 ml-16">{combo.line2}</p>
      <p className="mt-1 ml-16">{combo.line3}</p>
      <p className="mt-1 ml-16">{combo.line4}</p>
      <p className="mt-1 ml-16">{combo.line5}</p>
      <div className="divider"></div>
      <p className=" px-7 mb-5"><span className='font-bold'>Directions:</span> {combo.Directions}</p>
      
   
  </div>
</div>
   </div>
   
   <Service></Service>
           </div>
    );
};

export default ComboDetails;