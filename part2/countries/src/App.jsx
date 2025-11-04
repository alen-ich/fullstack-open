import { useState, useEffect } from 'react'
import countriesService from './services/countries'
import weatherService from './services/weather'
import CountrySearch from './components/CountrySearch'
import Countries from './components/Countries'

function App() {
  const [countries, setCountries] = useState([])
  const [searchString, setSearchString] = useState('')
  const [countryData, setCountryData] = useState(null)
  const [weather, setWeather] = useState(null)

  const countriesToShow = countries.filter(country => country.name.common.toLowerCase().includes(searchString.toLowerCase()))

  const handleSearchStringChange = event => {
    setSearchString(event.target.value) 
    if(searchString.length === 0){
      setCountryData(null)
    }
  }

  const getWeatherData = (lat, lon) => {
    weatherService.getWeather(lat, lon)
      .then(res => setWeather(res))
  }

  const handleShowCountry = countryName => {
    countriesService.getCountry(countryName.toLowerCase())
      .then(res => {
        setCountryData(res)
        getWeatherData(res.capitalInfo.latlng[0], res.capitalInfo.latlng[1])
      })
  }

  useEffect(() => {
    countriesService.getAll()
      .then(res => setCountries(res))
  }, [])

  useEffect(() => {
    if(countriesToShow.length === 1){
      countriesService.getCountry(countriesToShow[0].name.common.toLowerCase())
        .then(res =>{ 
          setCountryData(res)
          getWeatherData(res.capitalInfo.latlng[0], res.capitalInfo.latlng[1])
        })
    }
  }, [searchString])

  return (
    <>
      <CountrySearch searchString={searchString} onSearch={handleSearchStringChange} />
      <Countries 
        countries={countriesToShow} 
        countryData={countryData} 
        onShowCountry={handleShowCountry} 
        weather={weather}
      />
    </>
  )
}

export default App
