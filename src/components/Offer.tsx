import Image from "next/image";
import React from "react";
import CountDown from "./CountDown";

const Offer = () => {
  return (
    <div className="bg-gradient-to-r from-black via-gray-900 to-black h-screen flex flex-col md:flex-row md:justify-between md:bg-[url('/offerBg.png')] md:bg-cover md:bg-center md:h-[70vh]">

      <div className="flex-1 flex flex-col justify-center items-center text-center gap-8 p-6 md:p-12">
        <h1 className="text-white text-5xl font-extrabold xl:text-6xl drop-shadow-lg">
          Savor the Best Burger & Crispy Fries
        </h1>
        <p className="text-white xl:text-xl max-w-2xl leading-relaxed drop-shadow-md">
          Indulge in a feast of bold flavors with our gourmet burgers and crispy fries, 
          crafted to perfection. Fresh ingredients, savory taste, and an unforgettable experience 
          await you. Why wait? Dive into deliciousness today!
        </p>
        <CountDown />
        <button className="bg-red-600 hover:bg-red-700 transition-all duration-300 text-white rounded-md py-3 px-8 shadow-lg">
          Order Now
        </button>
      </div>

      <div className="flex-1 w-full relative md:h-full">
        <Image 
          src="/offerProduct.png" 
          alt="Burger and Fries" 
          fill 
          className="object-contain drop-shadow-2xl" 
        />
      </div>
    </div>
  );
};

export default Offer;
