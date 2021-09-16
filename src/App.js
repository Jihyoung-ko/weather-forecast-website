import React, { useEffect, useState } from 'react';
import './App.css';
import { Current } from './components/Current/Current';
import { Forecast } from './components/Forecast/Forecast';

const App = () => {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);

  useEffect(()=> {
    const getData = async () => {
      navigator.geolocation.getCurrentPosition(function(position) {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
      });

      await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&units=metric&appid=6fde6b33e376e50371677db95126f6fd`)
        .then(res =>res.json())
        .then(result => {
          setData(result)
          console.log(result)
        });
    }
    getData();
  }, [lat, long]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
      </header>
      <main>
        <div>
          <Current data={data} />
          <Forecast data={data.daily} type="Daily" />
      
        </div>
      </main>
      
    </div>
  );
}

export default App;