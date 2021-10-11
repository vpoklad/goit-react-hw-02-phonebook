export default function ContactList({ contacts }) {
  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>{contact.name}</li>
      ))}
    </ul>
  );
}
