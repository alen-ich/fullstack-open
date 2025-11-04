import { useState, useEffect } from 'react'
import axios from 'axios'
import NewContactForm from './components/NewContactForm'
import Contacts from './components/Contacts'
import Filter from './components/Filter'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterName, setFilterName] = useState('')

  const personsToShow = filterName.length
    ? persons.filter(person => person.name.toLowerCase().includes(filterName.toLowerCase()))
    : persons

  const handleNameChange = event => setNewName(event.target.value)

  const handleNumberChange = event => setNewNumber(event.target.value)

  const handleFilterNameChange = event => {
    setFilterName(event.target.value)
    
  }

  const addContact = event => {
    event.preventDefault()
    const checkName = persons.some(person => person.name === newName)
    if(checkName){
      alert(`${newName} is already added to phonebook`)
    }
    else{
      const newContact = {
        name: newName,
        number: newNumber,
        id: persons.length + 1
      }
      setPersons(persons.concat(newContact))
    }
    setNewName('')
    setNewNumber('')
  }

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => setPersons(response.data))
  }, [])

  return (
    <div>
      <h1>Phonebook</h1>
      <Filter filterName={filterName} onFilterChange={handleFilterNameChange} />
      <NewContactForm 
        newName={newName} 
        newNumber={newNumber} 
        onSubmit={addContact} 
        onNameChange={handleNameChange}
        onNumberChange={handleNumberChange}
      />
      <Contacts contacts={personsToShow} />
    </div>
  )
}

export default App