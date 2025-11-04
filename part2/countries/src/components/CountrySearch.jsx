const CountrySearch = ({searchString, onSearch}) => {
    return (
        <div>
            find countries <input value={searchString} onChange={onSearch}/>
        </div>
    )
}

export default CountrySearch