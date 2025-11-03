const NewContactForm = ({newName, newNumber, onSubmit, onNameChange, onNumberChange}) => {
    return (
        <div>
            <h2>Add new contact</h2>
            <form onSubmit={onSubmit}>
            <div>name: <input value={newName} onChange={onNameChange} /></div>
            <div>number: <input value={newNumber} onChange={onNumberChange} /></div>
            <div><button type="submit">add</button></div>
            </form>
        </div>
    )
}

export default NewContactForm