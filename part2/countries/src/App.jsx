import { useState, useEffect } from 'react'
import countriesService from './services/countries'
import CountrySearch from './components/CountrySearch'
import Countries from './components/Countries'

function App() {
  const [countries, setCountries] = useState([])
  const [searchString, setSearchString] = useState('')
  const [countryData, setCountryData] = useState(null)

  const countriesToShow = countries.filter(country => country.name.common.toLowerCase().includes(searchString.toLowerCase()))

  const handleSearchStringChange = event => setSearchString(event.target.value) 

  useEffect(() => {
    countriesService.getAll()
      .then(res => setCountries(res))
  }, [])

  useEffect(() => {
    if(countriesToShow.length === 1){
      countriesService.getCountry(countriesToShow[0].name.common.toLowerCase())
        .then(res => setCountryData(res))
    }
  }, [searchString])

  return (
    <>
      <CountrySearch searchString={searchString} onSearch={handleSearchStringChange} />
      <Countries countries={countriesToShow} countryData={countryData} />
    </>
  )
}

export default App
