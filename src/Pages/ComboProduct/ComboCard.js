import React from 'react';
import { BsStarFill,BsStarHalf } from "react-icons/bs";
import { Link} from 'react-router-dom';
import "./ComboCard.css"
const ComboCard = ({combo}) => {
    const {_id, image, title,price } =combo;
    return (
        <div>
            <div className="card w-80 drinkCardHeight bg-base-100 shadow-xl sm:mb-5 lg:mb-20">
  <Link to={`/combo/${_id}`}>
    <img className='w-80' src={image} alt="" />
    </Link>
  
  <div className="mt-4 card-body ">
    <h2 className="card-title ml-8 font-bold">{price}</h2>
   
   <div className="flex ml-7  mt-4 ">
    <BsStarFill className="text-yellow-400"></BsStarFill>
    <BsStarFill className="text-yellow-400 ml-3"></BsStarFill>
    <BsStarFill className="text-yellow-400 ml-3"></BsStarFill>
    <BsStarFill className="text-yellow-400 ml-3"></BsStarFill>
    <BsStarHalf className="text-yellow-400 ml-3"></BsStarHalf>
   </div>
   <p className="mr-16 mt-3"> <span className="text-secondary text-lg font-medium  mt-3">{title}</span> </p>
  </div>
</div>
        </div>
    );
};

export default ComboCard;