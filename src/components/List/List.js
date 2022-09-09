import React from 'react'
import { PlaceDetail } from '../PlaceDetail/PlaceDetail'

export const List = () => {

    const places= [
        {name:'Mumeen'},
        {name:'Jack'},
        {name:'Jane'},
        {name:'Joe'},
    ]
  return (
    <div className='flex flex-col overflow-y-scroll'>
        {places?.map((place,index)=>(
       <PlaceDetail key={index}  place={place}/>
        ))}

    </div>
  )
}
