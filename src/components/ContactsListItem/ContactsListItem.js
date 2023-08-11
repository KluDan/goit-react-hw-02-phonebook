export const ContactsListItem = ({ contact, onDelete }) => {
  return (
    <>
      <span>
        {contact.name}: {contact.number}:{contact.id}
      </span>
      <button onClick={() => onDelete(contact.id)}>Delete</button>
    </>
  );
};
