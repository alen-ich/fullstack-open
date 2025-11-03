import { useState } from 'react'
import Contact from './components/Contact'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '090-1234567' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const handleNameChange = event => setNewName(event.target.value)

  const handleNumberChange = event => setNewNumber(event.target.value)

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
      setPersons(persons.concat(newContact))
    }
    setNewName('')
    setNewNumber('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addContact}>
        <div>name: <input value={newName} onChange={handleNameChange} /></div>
        <div>number: <input value={newNumber} onChange={handleNumberChange} /></div>
        <div><button type="submit">add</button></div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map(person => <Contact key={person.name} contact={person} />)}
      </div>
    </div>
  )
}

export default App