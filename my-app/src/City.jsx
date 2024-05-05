import React from 'react';
import './input.css'

const City = ({ city }) => {
    console.log(city); // Konsola şehir bilgisini loglar.
    return (

        <div className="w-[500px] h-[500px] bg-gray-300 shadow-xl raunded-xl m-auto relative px-6 top[10] ">
            <div className=''>
                <h1 className="text-4xl font-semibold">{city.name}</h1>
                <h1 className="text-6xl font-bold">{city.main.temp} °C</h1>
                <h1 className="text-2xl">{city.weather[0].main}</h1>

            </div>
            <div className='w-1/2 flex flex-col justify-between items-end '>
                <div className='relative'>
                    <img src={`https://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`} className='w-[100px]' />
                </div>


            </div>
        </div>
    );
}

export default City;
