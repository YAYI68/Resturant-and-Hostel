import { Header } from './components/Header/Header';
import { IconHeader } from './components/Header/IconHeader';
import { List } from './components/List/List';
import {Map} from './components/Map/Map';
import {ImLocation2} from "react-icons/im"




function App() {
  return (
    <div>
      <Header /> 
      <main className="w-full px-4">
        <section className="w-full mx-auto">
          <IconHeader/>
        </section>
        <section className='w-full flex p-2'>
           <aside className='basis-[30%] h-[80vh] overflow-y-visible flex flex-col'>
           <div className="flex items-center w-fit bg-gray-100  rounded p-2 my-2">
              <ImLocation2 className='text-[1.5rem] fill-orange-400 mr-2'/>
              <div className="flex flex-col">
                <p className="text-[.8rem]">Location</p>
                <p className="text-[1rem] font-semibold">Nigeria, Lagos</p>
              </div>
            </div>
            <List />
          </aside>
          <div className='basis-[70%] h-[80vh] bg-blue-700'>
            <Map/>
         </div>
          
        </section>
        
      
      </main>    
    </div>
  );
}

export default App;

