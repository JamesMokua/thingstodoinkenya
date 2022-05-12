import React from "react";
import activity from "../img/activity.svg";
import travel from "../img/travel.svg";
import restaurant from "../img/restaurant.svg";

const Activities = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-black">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-white">
          <img
            className="w-20 mx-auto  bg-white"
            src={activity}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">Activities</h2>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">Zip Lining</p>
            <p className="py-2 border-b mx-8">Bungee Jumping</p>
            <p className="py-2 border-b mx-8">Go Karting</p>
          </div>
          <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
            See More
          </button>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-white">
          <img
            className="w-20 mx-auto  bg-white"
            src={travel}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">Travel</h2>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">Locations outside Kenya</p>
            <p className="py-2 border-b mx-8">Locations in Kenya</p>
            <p className="py-2 border-b mx-8">Locations in Nairobi</p>
          </div>
          <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
            See More
          </button>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-white">
          <img
            className="w-20 mx-auto  bg-white"
            src={restaurant}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">Restaurants</h2>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">Local Restaurants</p>
            <p className="py-2 border-b mx-8">Italian Restaurants</p>
            <p className="py-2 border-b mx-8">Mexican Restaurants</p>
          </div>
          <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
            See More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Activities;
