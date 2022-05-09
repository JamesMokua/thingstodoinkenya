import React from "react";
import aircraft from "../img/aircraft.svg";

const Discover = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={aircraft} alt="Aircraft" />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold ">TRAVEL IN KENYA</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Discover places to visit in Kenya
          </h1>
          <p>
            Discover the best Restaurants,activities and places to enjoy with
            your family and friends in Kenya at a budget friendly price.
          </p>
          <button className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Discover;
