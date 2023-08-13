import { ContactsListItem } from 'components/ContactsListItem/ContactsListItem';
import { List, ListItem } from './ContactsList.styled';

export const ContactsList = ({ contacts, onDelete }) => {
  return (
    <List>
      {contacts.map(contact => (
        <ListItem key={contact.id}>
          <ContactsListItem contact={contact} onDelete={onDelete} />
        </ListItem>
      ))}
    </List>
  );
};
