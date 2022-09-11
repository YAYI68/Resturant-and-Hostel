import React from 'react'
import {ImLocation2} from "react-icons/im"
import "./Carousel.css";



export const Carousel = () => {
  return (
    <div className="h-[30rem] w-full relative">
        <div className="relative w-full h-full">      
          <div className="header__slider-1">
            <div className="w-full h-full relative flex flex-col items-center justify-center">
              <div className="h-[70%] w-[80%] px-8 py-8">
               <h3 className="text-[2.5rem] text-white  text-center font-semibold mt-[1.5rem]">Find Restaurant, Hotels & Attractions around you</h3>
               <div className="w-[60%] my-8 h-[3rem] bg-white mx-auto rounded-xl flex items-center px-2">
                <ImLocation2  className='flex-grow text-[1.2rem] fill-blue-500'/>
                <input type="search" placeholder="Where to"name="" value="" className='flex-grow-[9] text-[1.2rem] outline-none' />
               </div> 
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
