import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid'; // Updated import for uuidv4
import './App.css';
import Header from './Header';
import Contact from './Contact';
import ContactList from './ContactList';

const App = () => {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  // Function to add a new contact
  const addContact = (newContact) => {
    setContacts([...contacts, { id: uuidv4(), ...newContact }]);
  };

  const removeContact = (id) => {
    const newContactList = contacts.filter((newContact) => {
      return newContact.id !== id;
    });
    setContacts(newContactList);
  };

  useEffect(() => {
    // Retrieve data from local storage when the component mounts
    try {
      const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
      if (retrieveContacts) {
        setContacts(retrieveContacts);
      }
    } catch (error) {
      console.error("Error retrieving data from local storage:", error);
    }
  }, []);

  useEffect(() => {
    // Store data in local storage whenever the 'contacts' state changes
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className='ui container'>
      <Router>
        <Header />
        <Routes>
          <Route path="/add" element={<Contact addContact={addContact} />} />
          <Route path="/" element={<ContactList contacts={contacts} getContactId={removeContact} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
