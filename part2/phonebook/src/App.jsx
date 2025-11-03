import { useState } from 'react'
import NewContactForm from './components/NewContactForm'
import Contacts from './components/Contacts'
import Filter from './components/Filter'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
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