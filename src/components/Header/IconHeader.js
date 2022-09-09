import React from 'react';
import { FaHotel } from "react-icons/fa";
import {MdRestaurantMenu,MdAttractions} from "react-icons/md"
import "./IconHeader.css";

export const IconHeader = () => {
  return (
    <div className="w-full flex items-center"> 
       <div className="basis-[30%]">
        <h3 className="text-[1.5rem] text-blue-800 font-semibold p-1">Find Restaurant,Hotels & Attractions around you</h3>
       </div>    
      <div className='basis-[70%] flex p-2 '>
        <div className="flex w-[30%] justify-between">
        <div className='basis-[30%] h-[4rem] bg-white hover:shadow-md flex flex-col items-center justify-center scrollbar translate-y-1 rounded-lg cursor-pointer'>
        <FaHotel  className='fill-orange-400 text-[1.5rem]'/>
        <p className='text-orange-400 mt-2'>Hotels</p>
      </div>
      <div className='basis-[30%] h-[4rem] bg-white hover:shadow-md flex flex-col items-center justify-center scrollbar translate-y-1 rounded-lg cursor-pointer'>
        <MdRestaurantMenu className='fill-orange-400 text-[1.5rem]' />
        <p className='text-orange-400 mt-2'>Restaurant</p>
      </div>
      <div className='basis-[30%] h-[4rem] bg-white hover:shadow-md flex flex-col items-center justify-center scrollbar translate-y-1 rounded-lg cursor-pointer'>
        <MdAttractions className='fill-orange-400 text-[1.5rem]' />
        <p className='text-orange-400 mt-2'>Attractions</p>
      </div>
        </div>
      </div>
    </div>
  )
}
