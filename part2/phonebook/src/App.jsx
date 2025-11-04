import { useState, useEffect } from 'react'
import contactsService from './services/contacts'
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
        number: newNumber
      }
      contactsService.createContact(newContact)
        .then(response => setPersons(persons.concat(response)))
    }
    setNewName('')
    setNewNumber('')
  }

  useEffect(() => {
    contactsService.getContacts()
      .then(response => setPersons(response))
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
      <Contacts contacts={persons} />
    </div>
  )
}

export default App