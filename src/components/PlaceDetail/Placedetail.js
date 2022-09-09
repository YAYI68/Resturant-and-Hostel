import React from 'react';
import {FaPhoneAlt } from "react-icons/fa";
import {ImLocation2} from "react-icons/im"
import { Link } from 'react-router-dom';

export const PlaceDetail = ({place}) => {
    console.log(place)
  return (
    <div className='w-full flex-col bg-gray-900 mt-4 rounded'>
        <figure className="h-[15rem]">
            <img src="../images/restaurant1.jpg" className='h-full w-full object-cover' alt={place.name} />
        </figure>
        <div className='w-full flex-col h-[15rem] p-2'>
            <p className='text-orange-400 text-[1.5rem] font-semibold capitalize'>Restaurant Name</p>
            <div className='flex justify-between items-center text-white text-[.8rem]'>
                <p>Price</p>
                <p>$$-$$$</p>
            </div>
            <div className='flex justify-between items-center text-white text-[.8rem]'>
                <p>Ranking</p>
                <p>1 of 200</p>
            </div>
            <div className='flex justify-between items-center text-white text-[.8rem]'>
                <img src="./icons/web.png" className='h-4 w-4 mr-1 bg-white' alt="" id='Award' />
                <p>$$-$$$</p>
            </div>
            <div className='flex justify-between items-center text-white text-[.8rem]'>
               <img src="./icons/web.png" className='h-4 w-4 mr-1 bg-white' alt="" id='certificate' />
                <p>$$-$$$</p>
            </div>
            <div className='text-[.8rem] flex my-1'>
                <p className='w-fit bg-[#fefaf4] p-1 rounded-xl mr-2'>Austrian</p>
                <p className='w-fit bg-[#fefaf4] p-1 rounded-xl mr-2'>Austrian</p>
                <p className='w-fit bg-[#fefaf4] p-1 rounded-xl mr-2'>Austrian</p>
            </div>
            <div className='flex justify-between items-center text-white text-[.8rem] my-1'>
            <div className="w-fit"> <ImLocation2 className='fill-orange-400'/> </div>
                <p>$$-$$$</p>
            </div>
            <div className='flex justify-between items-center text-white text-[.8rem] my-1'>
                <div className="w-fit"> <FaPhoneAlt className='fill-orange-400'/> </div>
                <p>$$-$$$</p>
            </div>
            <div className='flex justify-between items-center text-[.8rem] my-1'>
                <div className='flex w-[70%] mx-auto justify-between'>
                    <div className='flex w-fit h-fit bg-[#f8eedd] p-1 mr-1 rounded-xl hover:underline items-center'>
                      <img src="./icons/web.png" className='h-4 w-4 mr-1' alt="" />  
                     <a href='' target='_blank' >visit Travel Advisor</a>
                    </div>
                    <div className='flex w-fit h-fit bg-[#f8eedd] p-1 rounded-xl hover:underline items-center'>
                    <img src="./icons/web.png" className='h-4 w-4 mr-1' alt="" />  
                     <a href='' target='_blank'>official website </a>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}
