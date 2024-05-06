import './App.css';
import React, { useState } from 'react';
import Menu from './menu';
import City from './City';

function App() {
  const [city, setCity] = useState(null);

  return (

    <div className="app">
      <Menu setCity={setCity} />
      <div className="shadow-l mt-44 grid justify-items-center"> {/* City komponentini dikey olarak ortala */}
        <City city={city} />
      </div>
    </div>

  );
}

export default App;
