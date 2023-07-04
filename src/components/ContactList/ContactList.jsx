import Contact from '../Contact/Contact';
import {
  ContactListContainer,
  ContactItem,
} from './ContactList.styled.jsx';

import { useSelector } from 'react-redux';
import { selectFilterValue } from 'redux/filterSlice';
import { useGetContactsQuery } from 'redux/contactSlice';

export default function ContactList() {
  const { data: contacts } = useGetContactsQuery();

  const filterValue = useSelector(selectFilterValue);

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
