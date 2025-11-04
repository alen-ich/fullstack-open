import CountryData from './CountryData'

const Countries = ({countries, countryData, weather, onShowCountry}) => {
    if(countries.length > 10){
        return (
            <p>Too many matches, specify another filter</p>
        )
    }else if(countries.length === 0){
        return (
            <p>No countries found</p>
        )
    }else if(countryData){
        return (
            <CountryData country={countryData} weather={weather} />
        )
    }
    return (
        <ul>
            {countries.map(country => <li key={country.cca3}>
                <span>{country.name.common}</span>
                <button onClick={() => {onShowCountry(country.name.common)}}>show</button>
            </li>)}
        </ul>
    )
}

export default Countries