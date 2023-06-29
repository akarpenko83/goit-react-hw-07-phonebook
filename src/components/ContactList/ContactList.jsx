import Contact from '../Contact/Contact';
import {
  ContactListContainer,
  ContactItem,
} from './ContactList.styled.jsx';

import { useSelector } from 'react-redux';
import { getFilterValue } from 'redux/filterSlice';
import { getContacts } from 'redux/contactSlice';

export default function ContactList() {
  const filterValue = useSelector(getFilterValue);
  const contacts = useSelector(getContacts);

  const filteredContacts = () => {
    return contacts.filter(contact =>
      contact.name
        .toLowerCase()
        .includes(filterValue.toLowerCase()),
    );
  };

  return (
    <ContactListContainer>
      {filteredContacts().map(({ name, number, id }) => (
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
