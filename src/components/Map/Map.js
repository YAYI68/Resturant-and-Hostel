import React from 'react'
import GoogleMapReact from 'google-map-react';

export const Map = () => {

 const  coordinates = {lat:0, lng:0}

  return (
    <div className='h-[full w-full'>
      <GoogleMapReact 
       bootstrapURLKeys={{ key: "AIzaSyCXLdheq90ql8WHdVdrUSimDsw3eamBq80" }}
       defaultCenter={coordinates}
      center={coordinates}
       defaultZoom={14}
       margin={[50,50,50,50]}
      options={''}
      onChange={(e)=>{
        console.log(e)
      }}
    // onChildClick={''}
      >

      </GoogleMapReact>
    </div>
  )
}
