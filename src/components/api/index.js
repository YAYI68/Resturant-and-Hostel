import axios from "axios";

export const getPlaces = async()=>{
   try{
    const URL = `https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary`
    const  options = {
        params: {
            bl_latitude: '11.847676',
            tr_latitude: '12.838442',
            bl_longitude: '109.095887',
            tr_longitude: '109.149359',
            limit: '30',
            currency: 'USD',
            lang: 'en_US'
        },
        headers: {
          'X-RapidAPI-Key': 'e6e424d117msh949f3e2a01d5db5p1344d0jsnc0427ea381db',
          'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
        }
      };
      const {data:{data}} = await axios.get(`https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary`,options)
      return data   
   }
   catch(error){
    console.log(error);
   }

}


// process.env.REACT_APP_RAPIDAPI_TRAVEL_KEY