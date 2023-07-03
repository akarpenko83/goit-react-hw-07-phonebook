import PropTypes from 'prop-types';
import { DeleteButton } from './Contact.styled';

import { toast } from 'react-hot-toast';
import { useRemoveContactMutation } from 'redux/contactSlice';

export default function Contact({
  name,
  number,
  contactId,
}) {
  const [removeContact, result] =
    useRemoveContactMutation();

  const deleteContact = async contactId => {
    try {
      await removeContact(contactId);
      toast.success(
        `Successfully deleted from contact list`,
      );
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <>
      {name}: {number}
      <DeleteButton
        onClick={() => deleteContact(contactId)}
        type="button"
        disabled={result.isLoading}
      >
        Delete
      </DeleteButton>
    </>
  );
}
Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.any.isRequired,
  contactId: PropTypes.string.isRequired,
};
