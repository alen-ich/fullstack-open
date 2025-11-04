import CountryData from './CountryData'

const Countries = ({countries, countryData}) => {
    if(countries.length > 10){
        return (
            <p>Too many matches, specify another filter</p>
        )
    }else if(countries.length === 0){
        return (
            <p>No countries found</p>
        )
    }else if(countries.length === 1 && countryData){
        return (
            <CountryData country={countryData} />
        )
    }
    return (
        <ul>
            {countries.map(country => <li key={country.cca3}>{country.name.common}</li>)}
        </ul>
    )
}

export default Countries