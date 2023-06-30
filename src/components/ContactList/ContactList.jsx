import Contact from '../Contact/Contact';
import {
  ContactListContainer,
  ContactItem,
} from './ContactList.styled.jsx';

import { useSelector } from 'react-redux';
import { selectFilterValue } from 'redux/filterSlice';
import { selectContacts } from 'redux/contactSlice';

export default function ContactList() {
  const filterValue = useSelector(selectFilterValue);
  const contacts = useSelector(selectContacts);

  const filteredContacts = () => {
    return contacts.filter(contact =>
      contact.name
        .toLowerCase()
        .includes(filterValue.toLowerCase()),
    );
  };
  const renderedContacts = filteredContacts();
  return (
    <ContactListContainer>
      {renderedContacts.map(({ name, number, id }) => (
        <ContactItem key={id}>
          <Contact
            name={name}
            number={number}
            contactId={id}
          />
        </ContactItem>
      ))}
    </ContactListContainer>
  );
}
