const Contacts = ({contacts, onDelete}) => {
    return(
        <>
            <h2>Numbers</h2>
            <div>
                {contacts.map(contact => {
                    return (
                        <div key={contact.id}>
                            <span>{contact.name} {contact.number}</span>
                            <button onClick={() => onDelete(contact)}>delete</button>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Contacts