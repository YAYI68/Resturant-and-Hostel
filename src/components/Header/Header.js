import React from 'react'
import {ImLocation2} from "react-icons/im"

export const Header = () => {
  return (
    <header className="">
      <nav className="flex justify-between  bg-orange-400 p-4 text-white items-center">
        <h3 className='w-fit font-[Pacifico,cursive]'>Know More</h3>
        <div className="flex basis-[40%] items-center ">
          <p className="mr-4">Explore New Places</p>
          <form className="flex border-2 p-1 items-center rounded-sm bg-[#f8eedd]">
             <ImLocation2 className='fill-orange-400 mr-1'/>
             <input type="search" placeholder="Location" name="" value=""  className='outline-none p-1 placeholder:text-center focus:outline-none bg-[#f8eedd] text-gray-800'/>
          </form>
        </div>
      </nav>
    </header>
  )
}
