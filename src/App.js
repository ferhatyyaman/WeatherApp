import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { usePosition} from 'use-position';
import { Weathers } from './components/Weathers';
import { Button,Col,Input, Row, InputGroup } from 'reactstrap';

function App() {
  
  const [weather, setWeather]=useState();
  const {latitude,longitude,} = usePosition();

  const getWeatherData = async (lat, lon)=>{
    const key=process.env.REACT_APP_WEATHER_API_KEY;
    try{
      const {data} =await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`);
      setWeather(data);
    }catch{
      alert("veri alınırken hata")
    }
    
  }
  useEffect(()=>{
      latitude && longitude && getWeatherData(latitude,longitude);
  },[latitude,longitude])
  

  const APP_KEY="5a986bafbe66468da5c54335231102";
  let cityInput="";
  const [weatherdata, setWeatherdata]=useState([]);
  function handleChange(event) {
    cityInput=event.target.value
    console.log(event.target.value);
  }
  async function getdata(value) {
    const data=await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${APP_KEY}&q=${value}&days=3&aqi=no&alerts=no`);
    const result = await data.json();
    setWeatherdata(result.forecast.forecastday);
    console.log(result)
    console.log(result.forecast.forecastday)
  }

  return (
    <div> 
      <div className="search">
        <Row>
        <InputGroup>
          <Input type="text" placeholder='search a city...' onChange={handleChange}/>
          <Button onClick={()=>getdata(cityInput)}>Search</Button>
        </InputGroup>
        </Row> 
      </div>
      <div>
      {weatherdata.map(item=>(
            <Weathers key={item.date} weather={weather} date={item.date} mintemp={item.day.mintemp_c} maxtemp={item.day.maxtemp_c} condition={item.day.condition.text} icon={item.day.condition.icon}/>
      ))}
      </div>





           
           
          
    </div>
  );
}

export default App;
