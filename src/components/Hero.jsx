import React from 'react';
import Typed from 'react-typed';


const Hero = () => {
  return (
    <div className='text-white'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
          Discover Kenya
        </h1>
        <div className='flex justify-center items-center'>
          <p className='md:text-4xl sm:text-3xl text-xl font-bold py-3'>
            Find
          </p>
          <Typed
          className='md:text-4xl sm:text-3xl text-xl font-bold md:pl-3 pl-1'
            strings={['Restaurants', 'Activities', 'Experiences']}
            typeSpeed={50}
            backSpeed={100}
            loop
          />
         
        </div>
        <p className='md:text-2xl text-xl font-bold text-gray-500'>Monitor your data analytics to increase revenue for BTB, BTC, & SASS platforms.</p>
        <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Discover</button>
      </div>
    </div>
  )
}

export default Hero