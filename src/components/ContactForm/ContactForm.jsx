import React from 'react';
import toast from 'react-hot-toast';
import { useState } from 'react';
import {
  Form,
  FormGroup,
  Button,
} from './ContactForm.styled.jsx';
import {
  useAddContactMutation,
  useGetContactsQuery,
} from 'redux/contactSlice.js';

export default function ContactForm(props) {
  const { data: contacts } = useGetContactsQuery();
  const [addContact] = useAddContactMutation();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const formReset = () => {
    setName('');
    setNumber('');
  };

  const onSubmit = async contact => {
    if (contacts.find(arr => arr.name === contact.name)) {
      toast.error(
        `${contact.name} is already in the contact list`,
      );

      return;
    }

    try {
      await addContact(contact);
      toast.success(
        `${contact.name} added to your contact list`,
      );
    } catch (error) {
      toast.error(
        `${contact.name} unable to add contact to the list`,
      );
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const contact = {
      name: form.elements.name.value,
      number: form.elements.number.value,
    };
    onSubmit(contact);
    formReset();
    form.reset();
  };

  const handleChange = evt => {
    const event = evt.currentTarget.name;
    switch (event) {
      case 'name':
        setName(evt.currentTarget.value.trim());
        break;
      case 'number':
        setNumber(evt.currentTarget.value.trim());
        break;
      default:
        break;
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          Name
          <input
            value={name}
            placeholder="John Doe"
            onChange={handleChange}
            type="text"
            name="name"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </FormGroup>
        <FormGroup>
          Number
          <input
            value={number}
            type="tel"
            placeholder="050-000-00-00"
            onChange={handleChange}
            name="number"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </FormGroup>
        <Button type="submit">Add contact</Button>
      </Form>
    </>
  );
}
