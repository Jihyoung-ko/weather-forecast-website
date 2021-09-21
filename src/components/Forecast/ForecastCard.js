import React from 'react';

export const ForecastCard = ({ data, type }) => {

  const renderHourlyCard = () => {
    return <div>
    <p>{new Date(data.dt * 1000).toLocaleTimeString(['en-US'], {hour: '2-digit', hour12: true})}</p>
    <h3>{ Math.round( data.temp )}&deg; </h3>
  </div>
  }

  const renderDailyCard = () => {
    return  <div>
    <p>{new Date(data.dt * 1000).toGMTString().split(",")[0]}</p>
    <h3>{ Math.round( data.temp.max )}&deg; </h3>
    <p>{ Math.round( data.temp.min )}&deg; </p> 
  </div>
  }

  const CardType = {
    'Hourly': renderHourlyCard(),
    'Daily': renderDailyCard(),
  }


  return (
    <div style={{marginRight:"20px"}}>
       {CardType[type]}
      <img src ={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`} alt="weather icon"/>

    </div>
  )
}