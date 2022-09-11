import React from 'react'
import {ImLocation2} from "react-icons/im"

export const Header = () => {
  return (
    <header className="fixed w-full z-10">
      <nav className="flex justify-between  p-4 text-white items-center ">
        <h3 className='w-fit font-[Pacifico,cursive] text-[1.5rem] font-semibold'>Know More</h3>
        <div className="flex basis-[40%] items-center ">
          <p className="mr-4">Explore New Places</p>
          <form className="flex border-2 p-1 items-center rounded-sm bg-white border-none">
             <ImLocation2 className='fill-blue-500 mr-1'/>
             <input type="search" placeholder="Where to" name="" value=""  className='outline-none p-1 placeholder:text-center placeholder:text-gray-400 focus:outline-none  text-gray-800'/>
          </form>
        </div>
      </nav>
    </header>
  )
}
