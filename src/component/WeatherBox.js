import React from 'react'

const WeatherBox = ({weather}) => {
    console.log("weather?",weather)

  return (
    <div className='weather-box'>
      <div className='pb5'>{weather?.name}</div>
      <h3>온도</h3>
      <h2>{(weather?.main.temp).toFixed(1)}℃ &emsp; {(weather?.main.temp*1.8+32).toFixed(1)}℉</h2>
      <h3 className='pb5 background-color-1'>
        {weather?.weather[0].description}
        <img 
            src={`http://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`} 
            alt={weather?.weather[0].description} 
            />
      </h3>
      <h5>
        체감 : {weather?.main.feels_like}℃ &emsp;
        습도 : {weather?.main.humidity}%
      </h5>
      <h5>
        최고 : {weather?.main.temp_max}℃ &emsp;
        최저 : {weather?.main.temp_min}℃
      </h5>
    </div>
  )
}

export default WeatherBox
