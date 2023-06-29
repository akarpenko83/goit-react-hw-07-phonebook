import { Container, SectionName } from './App.styled';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';

import { getContacts } from 'redux/contactSlice';

const App = () => {
  const contacts = useSelector(getContacts);

  return (
    <Container>
      <Toaster />
      <SectionName>Phonebook</SectionName>
      <ContactForm />
      <h2>Contacts</h2>
      {contacts && <Filter />}
      {contacts && <ContactList />}
    </Container>
  );
};
export default App;
