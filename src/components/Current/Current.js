import React from 'react';

export const Current = ({ data }) => {

  return (
    <div>
      <h3>{ data.timezone }</h3>
      <p> </p>
      <h1>{ Math.round( data.current.temp )}&deg;C</h1>
      <img src ={`http://openweathermap.org/img/w/${data.current.weather[0].icon}.png`} alt="weather icon"/>
      <p>{ data.current.weather[0].description }</p>
    </div>
  )
}