import axios from 'axios'

const baseURL = 'https://api.openweathermap.org/data/2.5/weather'

const getWeather = (lat, lon) => {
    const params = new URLSearchParams()
    params.append('lat', lat)
    params.append('lon', lon)
    params.append('appid', import.meta.env.VITE_WEATHER_API_KEY)
    params.append('units', 'metric')
    const req = axios.get(baseURL, {params})
    return req.then(res => res.data)
}

export default { getWeather }