import React, { useEffect, useState } from 'react';
import './App.css';
import { Current } from './components/Current/Current';
import { Forecast } from './components/Forecast/Forecast';

const App = () => {
  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);
  const [data, setData] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(()=> {
    const getData = async () => {
      setIsLoading(true);
      navigator.geolocation.getCurrentPosition(function(position) {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
      });

      await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&units=metric&appid=6fde6b33e376e50371677db95126f6fd`)
        .then(res =>res.json())
        .then(result => {
          setData(result)
          setIsLoading(false)
          console.log(result)
        });
    }
    getData();
  }, [lat, long]);

  const renderHeader = () => {
    return <header className="App-header">
    <h1>Weather App</h1>
  </header>
  }

  const renderForecast = () => {
    if(isLoading){
      return <p>Loading...</p> 
    }else{
      if(data){
        return <div>

        <Current data={data} />
        <Forecast data={data.hourly} type="Hourly" />
        <Forecast data={data.daily} type="Daily" />
    
      </div>
      }
    }
  }

  return (
    <div className="App">
      {renderHeader()}
      <main>
        {renderForecast()}  
      </main>
      
    </div>
  );
}

export default App;