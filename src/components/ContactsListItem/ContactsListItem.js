import { ListItem } from './ContactsListItem.styled';

export const ContactsListItem = ({ contact, onDelete }) => {
  return (
    <>
      <ListItem>
        {contact.name}: {contact.number}
      </ListItem>
      <button onClick={() => onDelete(contact.id)}>Delete</button>
    </>
  );
};
