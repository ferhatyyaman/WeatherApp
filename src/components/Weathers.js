import React from 'react'
import './Weather.css';

export const Weathers = ({weather, date ,mintemp, maxtemp, condition, icon}) => {
  if(!weather){
    return <p>Yükelniyor ...</p>
  }
  
  return (
    <div> 

      <div className='result'>
            <h2>{date}</h2>
            <ul>
              <li><img src={icon} alt="" /></li>
              <li>{condition}</li>
              <li>{mintemp} C /{maxtemp} C</li>
            </ul>
      </div>

      {/* <div>
          <h3>{weather.name}</h3>
              <h4>{weather.weather.map(data=>data.description).join(", ")}</h4>
              <p>{weather.main.temp} °C</p>
              <p>{new Date(weather.dt*1000).toLocaleDateString()}</p>
    </div> */}
   
            
    </div>
  )
}
