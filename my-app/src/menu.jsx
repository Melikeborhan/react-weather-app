import axios from 'axios';
import React, { useState } from 'react';

const Menu = ({ setCity }) => {
  const [search, setSearch] = useState('');
  const key = "a803e41670adab97e59fd681355c7d94";

  const handleSearch = async () => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${key}&units=metric`);
      setCity(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <nav className=" shadow-xl relative w-full px-5 py-5 bg-gradient-to-r from-cyan-50 to-blue-100">
      <div className=" px-4 mx-auto  flex-wrap items-center justify-between mg:">
        <form onSubmit={e => { e.preventDefault(); handleSearch(); }} mx-8 my-8>
          <div className="space-x-2 w-full flex justify-center items-center px-10 lg:static">
            <input
              className="my-5 px-3 w-[400px] py-3 placeholder-blueGray-300 bg-white rounded text-sm border-0 shadow-2xl outline-blue focus:outline-none focus:ring"
              type="text"
              placeholder="Konum giriniz"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Ara
            </button>
          </div>
        </form>
      </div>
    </nav>
  );
}

export default Menu;
