import React from 'react';
import { ForecastCard } from './ForecastCard';

export const Forecast = ({ data, type }) => {
  return (
    <div>
      <h1>{ type } Forecast</h1>
      <div style={{display:"flex", justifyContent:"center"}}>
        {data.slice(0, 7).map(dataItem => {
          return <ForecastCard data={ dataItem } type={ type } />
        })}
      </div>
    </div>
  )
} 