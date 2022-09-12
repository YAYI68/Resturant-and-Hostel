import React from 'react';
import {ImLocation2} from "react-icons/im";

export const LocationOPtion = () => {
  return (
    <div className='flex w-[80%] my-4 mx-auto justify-between'>        
     <div className="flex items-center w-fit bg-gray-100  rounded p-2 my-1">
      <ImLocation2 className='text-[1.5rem] fill-blue-500 mr-2'/>
      <div className="flex flex-col">
        <p className="text-[.8rem]">Location</p>
        <p className="text-[1rem] font-semibold">Nigeria, Lagos</p>
      </div>
    </div>
    <select className='h-[2.5rem] text-[1.5rem] w-[10rem] font-semibold text-1[1.2rem] px-2 border-2 rounded-md border-gray-400 shadow-xl text-blue-500  outline-none'>
        <option value="restaurant" className=" font-semibold text-[1.2rem]">Restaurant</option>
        <option value="hotels" className="font-semibold text-[1.2rem]">Hotels</option>
        <option value="attractions" className=" font-semibold text-[1.2rem]">Attractions</option>
    </select>
    <select className='h-[2.5rem] text-[1rem] w-[7rem] font-semibold text-1[1.2rem] px-2 border-2 rounded-md border-gray-400 shadow-xl text-gray-700  outline-none'>
        <option value="0" className=" font-semibold text-[1rem]">Rating</option>
        <option value="3.0" className=" font-semibold text-[1rem]">Above 3</option>
        <option value="4.0" className="font-semibold text-[1rem]">Above 4</option>
        <option value="4.5" className=" font-semibold text-[1rem]">Above 4.5</option>
    </select>
    </div>
  )
}
