import { Component } from "react"
import { ContactForm } from "./ContactForm/ContactForm";
import { Layout } from "./Layout";
import { GlobalStyles } from "./GlobalStyles";
import { ContactList } from "./ContactList/ContactList";
import { nanoid } from 'nanoid';
import { Filter } from "./Filter/Filter";

const localStorageKey = 'saved-contact';

export class App extends Component {
  state = {
    contacts: [ 
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
    filter: ''
  }

  componentDidMount() {
    const savedContacts = localStorage.getItem(localStorageKey);
    if (savedContacts !== null) {
      this.setState({
        contacts: JSON.parse(savedContacts),
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { contacts: prevContacts } = prevState;
    const { contacts: nextContacts } = this.state;

    if (prevContacts !== nextContacts) {
      localStorage.setItem(localStorageKey, JSON.stringify(nextContacts));
    }
  }


    addContact = newContact => {
      const addedContact = this.state.contacts.find(
        contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
      );
  
      if (addedContact) {
        alert(`${newContact.name} is already in contacts.`);
        return;
      }

      const item = {   
        id: nanoid(),
        name: newContact.name,
        number: newContact.number,
      }

      this.setState(prevState => ({
        contacts: [...prevState.contacts, item],
    })
  )}

  handleDelete = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== contactId),
      };
    });
  };

  changeContactFilter = newFilter => {
    this.setState({
          filter: newFilter,
        })
  };

  render () {
    const {filter, contacts} = this.state;
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

  return (
  <Layout>
  <h1>Phonebook</h1>
  <ContactForm onAddContact={this.addContact} />

  <h2>Contacts</h2>
  <Filter value={filter} onChange={this.changeContactFilter}/>
  <ContactList contacts={filteredContacts} name={contacts.name} number={contacts.number} onDelete={this.handleDelete}/>
  <GlobalStyles/>
  </Layout>
  );
};
}