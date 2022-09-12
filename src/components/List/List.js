import React from 'react'
import { PlaceDetail } from '../PlaceDetail/PlaceDetail'
// import { places } from './places'


export const List = ({places}) => {
  return (
    <div className='flex flex-col overflow-y-scroll p-4'>
        {places?.map((place,index)=>(
       <PlaceDetail key={index}  place={place}/>
        ))}
    </div>
  )
}
