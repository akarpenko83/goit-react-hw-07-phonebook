import { useEffect } from 'react';
import { Container, SectionName } from './App.styled';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';

import {
  selectContacts,
  selectError,
  selectIsloading,
} from 'redux/contactSlice';
import { fetchContacts } from 'redux/operations';

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsloading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <Toaster />
      <SectionName>Phonebook</SectionName>
      <ContactForm />
      <h2>Contacts</h2>
      {contacts && <Filter />}
      {isLoading && !error && <p>Loading contacts...</p>}
      {error && <p>{error}</p>}
      {contacts && <ContactList />}
    </Container>
  );
};
export default App;
