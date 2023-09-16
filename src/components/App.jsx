import { ContactForm } from "./ContactForm/ContactForm";
import { Layout } from "./Layout";
import { GlobalStyles } from "./GlobalStyles";
import { ContactList } from "./ContactList/ContactList";
import { nanoid } from 'nanoid';
import { Filter } from "./Filter/Filter";
import { useState, useEffect } from "react";

const localStorageKey = 'saved-contact';

export const App = () => {
  const [contacts, setContacts] =
  //  useState(getStorageContacts);
  useState([ 
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ]);
  const [filter, setFilter] = useState('');
  
 const addContact = newContact => {
    const oldContact = contacts.find(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (oldContact) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }

    const item = {   
      id: nanoid(),
      name: newContact.name,
      number: newContact.number,
    }

    setContacts(prevState => 
      [ ...prevState, item]
)};

const handleDelete = contactId => {
  setContacts(contacts.filter(contact => contact.id !== contactId))
  };

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(contacts));
  }, [contacts]); 

  const changeContactFilter = newFilter => {
    setFilter(newFilter);
  };

  const filteredContacts = () => { 
    return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  )};

  return (
  <Layout>
  <h1>Phonebook</h1>
  <ContactForm onAddContact={addContact} />

  <h2>Contacts</h2>
  <Filter value={filter} onChange={changeContactFilter}/>
  <ContactList contacts={filteredContacts()} onDelete={handleDelete}/>
  <GlobalStyles/>
  </Layout>
  );
};
