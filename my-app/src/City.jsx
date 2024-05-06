import React from 'react';
import './input.css'

const City = (props) => {
    const { city } = props;
    // city prop'u var mı yok mu kontrol edelim
    if (!city) {
        return null; // city prop'u yoksa bileşeni null olarak döndür
    }

    console.log(city); // Konsola şehir bilgisini logla
    return (

        <div className=' rounded-lg flex justify-center items-center bg-gradient-to-r from-slate-50 to-sky-500 hover:from-sky-200 hover:to-yellow-500  grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-w-3 xl:grid-cols-3'>
            <div className=''>
                <h1 className="text-4xl font-semibold">{city.name}</h1>
                <h1 className="text-6xl font-bold">{city.main.temp}°C</h1>
                <h1 className="text-2xl">{city.weather[0].main}</h1>
            </div>
            <div className='flex flex-col justify-between'>
                <div className='relative'>
                    <img src={`https://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`}
                        className='w-[400px]' alt={city.weather[0].description} />
                </div>
            </div>
        </div>

    );
}

export default City;
