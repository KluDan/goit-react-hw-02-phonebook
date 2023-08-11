import { ContactsListItem } from 'components/ContactsListItem/ContactsListItem';

export const ContactsList = ({ contacts, onDelete }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          <ContactsListItem contact={contact} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
};
