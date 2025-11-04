const Weather = ({weather}) => {
    if(weather === null){
        return null
    }
    return (
        <div>
            <h3>Weather in {weather.name}</h3>
            <p>Temperature {weather.main.temp} Celcius</p>
            <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="" />
            <p>Wind {weather.wind.speed} m/s</p>
            <p>Humidity {weather.main.humidity} %</p>
            <p>Pressure {weather.main.pressure} hPa</p>
        </div>
    )
}

export default Weather