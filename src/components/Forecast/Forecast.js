import React, { useEffect, useState } from 'react';

export const Forecast = () => {

  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);

  useEffect(()=> {
    navigator.geolocation.getCurrentPosition(function(position) {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });
    console.log('Latitude:', lat)
    console.log('Longitude:', long)
  }, [lat, long]);

  

  return (
    <div></div>
  )
}