import React from "react";
// import Slider from "react-slick";
import Slider from "react-styled-carousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaMobileScreenButton } from "react-icons/fa6";
import { Link } from "react-router-dom";
import "./BrowswCategoryz.css"

const BrowseByCategory = () => {
  const responsive = [
    { breakPoint: 1280, cardsToShow: 5, showArrows: true }, // this will be applied if screen size is greater than 1280px. cardsToShow will become 4.
    { breakPoint: 760, cardsToShow: 2 },
  ];

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "gray" }}
        onClick={onClick}
      />
    );
  } 

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "gray" }}
        onClick={onClick}
      />
    );
  }
  const settings = {
    autoplay: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="lg:p-10 lg:ml-14">
      {/* <div className="text-start">
        <h2 className="text-xl font-medium text-secondary">Categories</h2>
        <h1 className="text-2xl font-bold">Browse By Category</h1>
      </div>
      <div className="mt-14 lg:px-36 lg:ml-10">
      <Slider>
    <h1>1</h1>
    <h1>2</h1>
    <h1>3</h1>
    <h1>4</h1>
  </Slider>
        {/* <Slider {...settings}>
          <div className="mr-8">
            <div className="card w-48 bg-base-100  border-solid border-2 border-black-600">
              <div className="card-body">
                <h3 className="text-6xl ml-9 mt-2 mb-2">
                  <FaMobileScreenButton />
                </h3>
                <p>Phones</p>
              </div>
            </div>
          </div>

          <div className="mr-8">
            <div className="card w-48 bg-base-100  border-solid border-2 border-black-600">
              <div className="card-body">
                <h3 className="text-6xl ml-9 mt-2 mb-2">
                  <FaMobileScreenButton />
                </h3>
                <p>Phones</p>
              </div>
            </div>
          </div>
          <div className="mr-8">
            <div className="card w-48 bg-base-100  border-solid border-2 border-black-600">
              <div className="card-body">
                <h3 className="text-6xl ml-9 mt-2 mb-2">
                  <FaMobileScreenButton />
                </h3>
                <p>Phones</p>
              </div>
            </div>
          </div>
          <div className="mr-8">
            <div className="card w-48 bg-base-100  border-solid border-2 border-black-600">
              <div className="card-body">
                <h3 className="text-6xl ml-9 mt-2 mb-2">
                  <FaMobileScreenButton />
                </h3>
                <p>Phones</p>
              </div>
            </div>
          </div>
          <div className="mr-8">
            <div className="card w-48 bg-base-100  border-solid border-2 border-black-600">
              <div className="card-body">
                <h3 className="text-6xl ml-9 mt-2 mb-2">
                  <FaMobileScreenButton />
                </h3>
                <p>Phones</p>
              </div>
            </div>
          </div>
          <div className="mr-8">
            <div className="card w-48 bg-base-100  border-solid border-2 border-black-600">
              <div className="card-body">
                <h3 className="text-6xl ml-9 mt-2 mb-2">
                  <FaMobileScreenButton />
                </h3>
                <p>Phones</p>
              </div>
            </div>
          </div>
          <div className="mr-8">
            <div className="card w-48 bg-base-100  border-solid border-2 border-black-600">
              <div className="card-body">
                <h3 className="text-6xl ml-9 mt-2 mb-2">
                  <FaMobileScreenButton />
                </h3>
                <p>Phones</p>
              </div>
            </div>
          </div>
          <div className="mr-8">
            <div className="card w-48 bg-base-100  border-solid border-2 border-black-600">
              <div className="card-body">
                <h3 className="text-6xl ml-9 mt-2 mb-2">
                  <FaMobileScreenButton />
                </h3>
                <p>Phones</p>
              </div>
            </div>
          </div>
          <div className="mr-8">
            <div className="card w-48 bg-base-100  border-solid border-2 border-black-600">
              <div className="card-body">
                <h3 className="text-6xl ml-9 mt-2 mb-2">
                  <FaMobileScreenButton />
                </h3>
                <p>Phones</p>
              </div>
            </div>
          </div>
        </Slider> */}
      {/* </div>  */}
      <div className="lg:text-start sm:text-center">
        <h2 className="text-xl font-medium text-secondary">Categories</h2>
        <h1 className="text-2xl font-bold">Browse By Category</h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-14 ">
       
        <div className="categoryWidth  relative  rounded-lg shadow-xl">
          
          <img className="h-52 " src="https://i.ibb.co/rH1brP8/Frame-5063-2.png" alt="" />
          <Link to="/drinks"> <button className="button  bg-secondary w-36 h-16 text-white text-xl font-medium rounded-full ">Drinks</button></Link>
         
         
        </div>
        <div className="categoryWidth relative  rounded-lg shadow-xl">
          
          <img className="h-52 " src="https://i.ibb.co/88n97xM/Frame-5062-1.png" alt="" />
          <Link to="/confectionary"> <button className="absolute button top-24 right-36  bg-secondary w-40 h-16 text-white text-xl font-medium p-2 rounded-full ">Confectionary</button></Link>
         
         
        </div>
        <div className="categoryWidth  relative  rounded-lg shadow-xl">
          
          <img className="h-52 " src="https://i.ibb.co/MCXpzrN/combo-1.png" alt="" />
          <Link to="/combo"> <button className="button bg-secondary w-36 h-16 text-white text-xl font-medium p-2 rounded-full ">Combo</button></Link>
         
         
        </div>
     
     
        
      
      </div>
    </div>
  );
};

export default BrowseByCategory;
