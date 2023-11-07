import react from 'react';
import ContactCard from './ContactCard';
import { Link } from 'react-router-dom';

const ContactList = (props) => {
    console.log(props);

    const deleteContactHandler = (id) => {
        props.getContactId(id);  
    };
    const rendercontacts = props.contacts.map((contact) => {
        return (
            <ContactCard contact={contact} clickHander={deleteContactHandler} key={contact.id} />
        );
    })
    return (
        <div class="main">
            <h2 style={{ marginTop: "5%" }}>Contact List
                <Link to="/add">
                <button className='ui button blue right' style={{marginLeft:'48%'}}>Add Contact</button>
                </Link>
            
            </h2>
            <div className="ui celled list">
                {rendercontacts}
            </div> 
        </div>
    );
};

export default ContactList;