import './App.css';
import axios from "axios";
import {useEffect, useState} from "react";
import City from './City';
import Menu from './menu';
import './input.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';



function App() {
  const key = "a803e41670adab97e59fd681355c7d94";


  const [search,setSearch] = useState('');
  const [city,setCity] = useState();
  


  useEffect(() => {
    async function getApi() {
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${key}&units=metric`);
        
        console.log(response);
        setCity(response.data)
      } catch (error) {
        console.error(error);
      }
    }
    getApi();
  },[search]);//her render edildiğinde bu verinin değişmesi için
  
  console.log(search);

  


  return (

    <div>
       <Menu />
       <div className=" group relative overflow-hidden:space-x-4  w-full flex lg:w-auto px-4 lg:static  lg:justify-start">
              <button >
                <FontAwesomeIcon icon={faSearch} flip="horizontal" size="sm" style={{ color: "#FFD43B" }} />
              </button>
              <input className="my-5 px-3 w-[250px] py-3 placeholder-blueGray-10   bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring "

                type="text"
                placeholder="konum giriniz"
                onChange={(e) => setSearch(e.target.value)}
                
              />
            </div>
           
      {city && <City city={city} />}

      
      </div>

     
    
  
  
  )

          
        
} 


export default App;
