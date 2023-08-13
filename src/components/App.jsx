import { GlobalStyle } from './GlobalStyle';
import { Component } from 'react';
import { PhonebookForm } from './PhonebookForm/PhonebookForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './FilterByName/Filter';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 20px;
`;

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-563' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-122' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-791' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-260' },
    ],
    filter: '',
  };

  addPhoneNumber = newContact => {
    const { contacts } = this.state;
    const existingContact = contacts.find(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (existingContact) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }

    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, newContact],
      };
    });
  };

  handleDelete = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(
          contact => contact.id !== contactId
        ),
      };
    });
  };

  changeFilter = newFilter => {
    this.setState({ filter: newFilter });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    const { filter } = this.state;
    const filteredContacts = this.getFilteredContacts();
    return (
      <Wrapper>
        <h1>Phonebook</h1>
        <PhonebookForm onAdd={this.addPhoneNumber} />
        <h2>Contacts</h2>
        <Filter filter={filter} onChangeName={this.changeFilter} />
        <ContactsList
          contacts={filteredContacts}
          onDelete={this.handleDelete}
        />
        <GlobalStyle />
      </Wrapper>
    );
  }
}
