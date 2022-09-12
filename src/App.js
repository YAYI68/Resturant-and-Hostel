import { Header } from './components/Header/Header';
import { List } from './components/List/List';
import {Map} from './components/Map/Map';
import { useEffect, useState } from 'react';
import { getPlaces } from './components/api';
import { Carousel } from './components/Header/Carousel';
import { LocationOPtion } from './components/List/LocationOPtion';






function App() {
  const [places, setPlaces] = useState([]);
    const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);
    // const [data, setData] = useState([]);

  useEffect(() => {
    (async() => {
       const places = await getPlaces()
       setPlaces(places)
    })()
  }, [])

  console.log(places)  


  return (
    <div>
      <Header /> 
      <Carousel />
      <main className="w-full">
        <section className='w-full flex '>
           <aside className='basis-[50%] h-[100vh] flex flex-col'>
            {/* <LocationOPtion /> */}
            <List places={places} />
            <List  />
          </aside>
          <div className='basis-[50%] h-[100vh] bg-blue-700'>
            <Map/>
         </div>
          
        </section>
        
      
      </main>    
    </div>
  );
}

export default App;

