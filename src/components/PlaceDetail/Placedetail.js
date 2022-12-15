import React from 'react';
import {FaPhoneAlt } from "react-icons/fa";
import {ImLocation2} from "react-icons/im"
import { MdEmail } from "react-icons/md"
import { Link } from 'react-router-dom';
import { getPlaces } from '../api';
import { RiStarSFill } from "react-icons/ri";


export const PlaceDetail = ({place}) => {

  return (
    // <div>hello</div>
    <div className="w-full mt-4 flex h-[20rem]  rounded-md shadow-md">
        <figure className="w-[40%] h-full">
            <img src={place.photo?place.photo.images.large.url:"../images/restaurant1.jpg"} alt="" className='h-full w-full rounded-md' />
        </figure>
        <div className="py-4 pl-4 w-[60%] h-full flex flex-col pr-1">
            <div className="h-[40%] ">
                <div className="flex justify-between items-center">
                 <h3 className='text-[1.2rem] font-semibold'>{place.name}</h3> 
                 <p className="text-[.9rem] font-semibold text-blue-500 w-fit rounded-lg bg-gray-100">{place.price?place.price:place.price_level}</p>  
                </div>
                <div className="flex items-center justify-between ">
                    <div className='w-[40%] flex items-center'>
                     <div className='flex items-center justify-between'>  
                      <RiStarSFill className='fill-yellow-400'/><small className="text-gray-700 text-[.8rem] font-semibold"> {place.rating}-star</small>
                      <small className="text-gray-700 text-[.8rem] font-semibold ml-2">of {place.num_reviews} reviews</small>
                     </div>   
                    </div>
                    <div className='w-50%] flex'>
                        {place?.cuisine?.map((cuis,index)=>(
                      <small key={index} className="bg-gray-200 rounded-xl mr-1 p-1 ">{cuis.name}</small>
                        ))}
                    </div>  
                </div>
            </div>
            <div className="h-[60%] flex flex-col mt-2 justify-between">
                <div className="h-[30%] w-full bg-white flex items-center">
                    <ImLocation2 className='mr-2 fill-blue-500 bg-gray-200 rounded-xl p-1 text-[1.5rem]'/>
                    <p className="font-semibold text-gray-700 text-[.8rem]">{place.address}</p>
                </div>
                <div className=' h-[60%] flex'>
                <div className='w-[50%] h-full border-r-2 border-gray-500 flex flex-col justify-between'>
                    <div className=" w-full flex items-center">
                    <FaPhoneAlt className='mr-2 fill-blue-500 bg-gray-200 rounded-xl p-1 text-[1.5rem]'/>
                    <p className="font-semibold text-gray-700 text-[.8rem]">{place.phone}</p>
                    </div>
                    <div className=" w-full flex items-center">
                    <MdEmail className='mr-2 fill-blue-500 bg-gray-200 rounded-xl p-1 text-[1.5rem]'/>
                    <button onClick={window.open(`mailto:${place.email}`,'_blank')} className="font-semibold text-gray-700 text-[.8rem] hover:underline">{place.email}</button>
                    </div>
                </div>
                    <div className='w-[50%] ml-4 flex flex-col justify-between'>
                        <div className=" w-full flex items-center">
                        <FaPhoneAlt className='mr-2 fill-blue-500 bg-gray-200 rounded-xl p-1 text-[1.5rem]'/>
                        <p className="font-semibold text-gray-700 text-[.8rem]">Travel Advisor</p>
                        </div>
                        <div className=" w-full flex items-center">
                        <FaPhoneAlt className='mr-2 fill-blue-500 bg-gray-200 rounded-xl p-1 text-[1.5rem]'/>
                        <p className="font-semibold text-gray-700 text-[.8rem]">Website</p>
                        </div>
                    </div>
                </div>
            </div>    
        </div>
        
    </div>
  )
}
