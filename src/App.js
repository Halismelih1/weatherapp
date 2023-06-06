import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import City from "./city";

function App() {
  const key = "dfc76bc315a5ca849365d7f0035d2871";
  const [city, setCity] = useState();
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function getUser() {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${key}&units=metric`
        );
        setCity(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getUser();
  }, [search]);
  return (
    <div className=''>
      <h1 className=' bg-orange-400 text-center   text-white h-12   '>
        Weather App
      </h1>
      <div className='App'>
        <input
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          className=' w-1/2 border-b-2border-neutral-100 rounded-xl border-opacity-100 py-4 dark:border-opacity-50 text-center bg-black mt-8 text-white'
          type='text'
          placeholder='Search City..'
        ></input>
        <City city={city} />
      </div>
    </div>
  );
}

export default App;
