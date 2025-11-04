import { useState, useEffect } from 'react'
import contactsService from './services/contacts'
import NewContactForm from './components/NewContactForm'
import Contacts from './components/Contacts'
import Filter from './components/Filter'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterName, setFilterName] = useState('')
  const [message, setMessage] = useState(null)
  const [errMessage, setErrMessage] = useState(null)

  const personsToShow = filterName.length
    ? persons.filter(person => person.name.toLowerCase().includes(filterName.toLowerCase()))
    : persons

  const handleNameChange = event => setNewName(event.target.value)

  const handleNumberChange = event => setNewNumber(event.target.value)

  const handleFilterNameChange = event => setFilterName(event.target.value)

  const addContact = event => {
    event.preventDefault()
    const personExist = persons.find(person => person.name === newName)
    if(personExist){
      if(window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)){
        const updContact = {
          ...personExist,
          number: newNumber
        }
        contactsService.updateContact(updContact)
          .then(response => {
            setPersons(persons.map(person => person.id === updContact.id ? response : person))
            setMessage(`Updated ${response.name}`)
            setTimeout(() => setMessage(null), 5000)
          })
      }
    }
    else{
      const newContact = {
        name: newName,
        number: newNumber
      }
      contactsService.createContact(newContact)
        .then(response => {
          setPersons(persons.concat(response))
            setMessage(`Added ${response.name}`)
            setTimeout(() => setMessage(null), 5000)
        })
    }
    setNewName('')
    setNewNumber('')
  }

  const handleDelete = contact => {
    if(window.confirm(`Delete ${contact.name} ?`)) {
    contactsService.deleteContact(contact.id)
      .then(response => setPersons(persons.filter(person => person.id !== response.id)))
      .catch(() => {
        setErrMessage(`Informaion of ${contact.name} has already been removed from server`)
        setTimeout(() => setErrMessage(null), 5000)
      })
    }
  }

  useEffect(() => {
    contactsService.getContacts()
      .then(response => setPersons(response))
  }, [])

  return (
    <div>
      <h1>Phonebook</h1>
      <Notification message={message} errMessage={errMessage} />
      <Filter filterName={filterName} onFilterChange={handleFilterNameChange} />
      <NewContactForm 
        newName={newName} 
        newNumber={newNumber} 
        onSubmit={addContact} 
        onNameChange={handleNameChange}
        onNumberChange={handleNumberChange}
      />
      <Contacts contacts={personsToShow} onDelete={handleDelete} />
    </div>
  )
}

export default App