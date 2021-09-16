import React from 'react';

export const ForecastCard = ({ data, type }) => {

  const intNumber = (num) => {
    return Math.round(num);
  }

  return (
    <div style={{marginRight:"20px"}}>
      {type==="Hourly" && 
        <div>
          <h4>{new Date(data.dt * 1000).toLocaleTimeString(['en-US'], {hour: '2-digit', hour12: true})}</h4>
          <h3>{ intNumber( data.temp )}&deg; </h3>
        </div> }
      {type==="Daily" && 
        <div>
          <h3>{ intNumber( data.temp.max )}&deg; </h3>
          <p>{ intNumber( data.temp.min )}&deg; </p> 
        </div> }
      <img src ={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`} alt="weather icon"/>

    </div>
  )
}