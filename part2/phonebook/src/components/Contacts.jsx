const Contacts = ({contacts, onDelete}) => {
    return(
        <>
            <h2>Numbers</h2>
            <ul>
                {contacts.map(contact => {
                    return (
                        <li key={contact.id}>
                            <span>{contact.name} {contact.number}</span>
                            <button onClick={() => onDelete(contact)}>delete</button>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

export default Contacts