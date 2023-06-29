import PropTypes from 'prop-types';
import { DeleteButton } from './Contact.styled';
import { useDispatch } from 'react-redux';
import { removeContact } from 'redux/contactSlice';
import { toast } from 'react-hot-toast';

export default function Contact({
  name,
  number,
  contactId,
}) {
  const dispatch = useDispatch();

  const deleteContact = () => {
    console.log(contactId);
    dispatch(removeContact(contactId));
    toast.success(`Successfully deleted from contact list`);
  };
  return (
    <>
      {name}: {number}
      <DeleteButton onClick={deleteContact} type="button">
        Delete
      </DeleteButton>
    </>
  );
}
Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  contactId: PropTypes.string.isRequired,
};
