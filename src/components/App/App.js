import React, { useState, useEffect } from 'react';

import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
import { Container, TitleH1, TitleH2 } from './App.styled';
import './App.module.css';

const { v4: uuidv4 } = require('uuid');

export default function App() {
  const [contacts, setContacts] = useState(
  [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
  )
  const [filter, setFilter] = useState('')

    function addContact (name, number)  {
    const doubleName = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase(),
    );
    const doublePhoneNumber = contacts.find(
      contact => contact.number === number,
    );
    doubleName && alert(`${name} is already in contacts`);
    doublePhoneNumber && alert(`This number ${number} is already in contacts`);

    const newContact = {
      id: uuidv4(),
      name,
      number,
    };
    !doublePhoneNumber &&
      !doubleName &&
      setContacts(prevContacts =>
        [newContact, ...prevContacts],
      );
  };

   const changeFilter = e => {
     setFilter( e.currentTarget.value);
   };
  
  const getVisibleContacts = () => {
   
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(({name}) =>
     name.toLowerCase().includes(normalizedFilter),
    );
  };

   const handleBlur = (e) => {
   setFilter('')
    e.currentTarget.value = '';
  };

  return (
     <Container>
        <TitleH1>Phonebook</TitleH1>
        <ContactForm onSubmit={addContact} />
        <TitleH2>Contacts</TitleH2>
        <Filter
          value={filter}
          onChange={changeFilter}
          onBlur={handleBlur}
        />
        <ContactList
          contacts={getVisibleContacts()}
          // onRemove={deleteContact}
        />
      </Container>
  )
}

// class App extends React.Component {
//   state = {
//     contacts: [
//       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     ],

//     filter: '',
//   };

//   #contacts = 'contacts';

//   addContact = ({ name, number }) => {
//     const doubleName = this.state.contacts.find(
//       contact => contact.name.toLowerCase() === name.toLowerCase(),
//     );
//     const doublePhoneNumber = this.state.contacts.find(
//       contact => contact.number === number,
//     );
//     doubleName && alert(`${name} is already in contacts`);
//     doublePhoneNumber && alert(`This number ${number} is already in contacts`);

//     const newContact = {
//       id: uuidv4(),
//       name,
//       number,
//     };
//     !doublePhoneNumber &&
//       !doubleName &&
//       this.setState(prevState => ({
//         contacts: [newContact, ...prevState.contacts],
//       }));
//   };

//   changeFilter = e => {
//      this.setState({ filter: e.currentTarget.value });
//   };


//   handleBlur = (e) => {
//     this.setState({ filter: '' });
//     e.currentTarget.value = '';
//   };

//   getVisibleContacts = () => {
//     const { filter, contacts } = this.state;
//     const normalizedFilter = filter.toLowerCase();

//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normalizedFilter),
//     );
//   };

//   deleteContact = contactId => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(contact => contact.id !== contactId),
//     }));
//   };

//   componentDidUpdate(prevProps, prevState) {
//     if (this.state.contacts !== prevState.contacts) {
//       localStorage.setItem(this.#contacts, JSON.stringify(this.state.contacts));
//     }
//   }

//   componentDidMount() {
//     const parsedContacts = JSON.parse(localStorage.getItem('contacts'));
//      parsedContacts &&
//       this.setState({ contacts: parsedContacts });
//   }


//   //export default function App(){
//   // const[name, setName] = useLocalStorage('name', '')
//   // const[number, setNumber] = useLocalStorage('number', '')
//   // }
  
//   render() {
//     const { filter } = this.state;

//     return (
//     <Container>
//         <TitleH1>Phonebook</TitleH1>
//         <ContactForm onSubmit={this.addContact} />
//         <TitleH2>Contacts</TitleH2>
//         <Filter
//           value={filter}
//           onChange={this.changeFilter}
//           onBlur={this.handleBlur}
//         />
//         <ContactList
//           contacts={this.getVisibleContacts()}
//           onRemove={this.deleteContact}
//         />
//       </Container>
//     );
//   }
// }

// export default App;
