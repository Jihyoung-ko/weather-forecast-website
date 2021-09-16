import React from 'react';

export const Current = ({ data }) => {


  return (
    <div>
      <p>{ data.timezone }</p>
      <h1>{ data.current.temp } &deg;C</h1>
      <img src ={`http://openweathermap.org/img/w/${data.current.weather[0].icon}.png`} alt="weather icon"/>
      <p>{ data.current.weather[0].description }</p>
    </div>
  )
}