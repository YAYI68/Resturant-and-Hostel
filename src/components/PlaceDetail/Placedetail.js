import React from 'react';
import {FaPhoneAlt } from "react-icons/fa";
import {ImLocation2} from "react-icons/im"
import { MdEmail } from "react-icons/md"
import { Link } from 'react-router-dom';
import { getPlaces } from '../api';


export const PlaceDetail = ({place}) => {

  return (
    <div>hello</div>
    // <div className='w-full flex-col bg-gray-800 mt-4 rounded'>
    //     <figure className="h-[15rem]">
    //         <img src={place.photo? place.photo.images.large.url:"../images/restaurant1.jpg" }   className='h-full w-full object-cover' alt={place.name} />
    //     </figure>
    //     <div className='w-full flex-col h-[15rem] p-2'>
    //         <p className='text-orange-400 text-[1.5rem] font-semibold capitalize'>{place.name}</p>
    //         <div className='flex justify-between items-center text-white text-[.8rem]'>
    //             <p>Price</p>
    //             <p>{place.price?place.price:place.price_level}</p>
    //         </div>
    //         <div className='flex justify-between items-center text-white text-[.8rem]'>
    //             <p>Ranking</p>
    //             <p>{place.ranking?place.ranking:""}</p>
    //         </div>
    //         {/* {place?  &&
    //         <div className='flex justify-between items-center text-white text-[.8rem]'>
    //             <img src={place?.awards[0]?.image.small} className='h-4 w-4 mr-1 ' alt="" id='Award' />
    //             <p>{place?.display_name}</p>
    //         </div>
    //       } */}
            
    //         <div className='text-[.8rem] flex my-1'>
    //         {place?.cuisine?.map(({name})=>(
    //            <p className='w-fit bg-[#fefaf4] p-1 rounded-xl mr-2'>{name}</p> 
    //         ))}      
    //         </div>
    //         <div className='flex justify-between items-center text-white text-[.8rem] my-1'>
    //         <div className="w-fit"> <ImLocation2 className='fill-orange-400'/> </div>
    //             <p>{place?.address}</p>
    //         </div>
    //         <div className='flex justify-between items-center text-white text-[.8rem] my-1'>
    //             <div className="w-fit"> <MdEmail className='fill-orange-400'/> </div>
    //             <a href={`mailto:${place?.email}`}>{place?.email}</a>
    //         </div>
    //         <div className='flex justify-between items-center text-white text-[.8rem] my-1'>
    //             <div className="w-fit"> <FaPhoneAlt className='fill-orange-400'/> </div>
    //             <p>{place?.phone}</p>
    //         </div>
    //         <div className='flex justify-between items-center text-[.8rem] my-1'>
    //             <div className='flex w-[70%] mx-auto justify-between'>
    //                 <div className='flex w-fit h-fit bg-[#f8eedd] p-1 mr-1 rounded-xl hover:underline items-center'>
    //                   <img src="./icons/web.png" className='h-4 w-4 mr-1' alt="" />  
    //                  <a href={place?.web_url} target='_blank' >visit Travel Advisor</a>
    //                 </div>
    //                 <div className='flex w-fit h-fit bg-[#f8eedd] p-1 rounded-xl hover:underline items-center'>
    //                 <img src="./icons/web.png" className='h-4 w-4 mr-1' alt="" />  
    //                  <a href={place?.website?place.website : place.web_url} target='_blank'>official website </a>
    //                 </div>
    //             </div>
    //         </div>

    //     </div>
    // </div>
  )
}
