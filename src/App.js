import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import WeatherBox from './component/WeatherBox';
import WeatherButton from './component/WeatherButton';

function App() {
  const [weather,setWeather]=useState(null)
  const [city,setCity]=useState('')

  const cities=['Paris','New york','Tokyo','Seoul']

  const getCurrentLocation=()=>{
    navigator.geolocation.getCurrentPosition((position)=>{
      let lat = position.coords.latitude
      let lon = position.coords.longitude
      getWeatherByCurrentLocation(lat,lon)
    });
  }

  const getWeatherByCurrentLocation = async(lat,lon) =>{
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=5ea8354909fb9376f43e80c47cc8b62a&units=metric`
    let response = await fetch(url)
    let data = await response.json();
    setWeather(data)
  }

  const getWeatherByCity= async()=>{
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5ea8354909fb9376f43e80c47cc8b62a&units=metric`
    let response = await fetch(url)
    let data = await response.json();
    setWeather(data)
  }

  useEffect(()=>{
    if(city==""){
      getCurrentLocation();
    }else{
      getWeatherByCity()
    }
    
    
  },[city])



  return (
    <div>
      <div className='container'>
        <WeatherBox weather={weather}/>
        <WeatherButton cities={cities} setCity={setCity}/>
      </div>
    </div>
  );
}

export default App;
