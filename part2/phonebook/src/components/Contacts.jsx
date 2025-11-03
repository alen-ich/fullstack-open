const Contacts = ({contacts}) => {
    return(
        <>
            <h2>Numbers</h2>
            <div>
                {contacts.map(contact => <p key={contact.id}>{contact.name} {contact.number}</p>)}
            </div>
        </>
    )
}

export default Contacts