// import { nanoid } from 'nanoid';

import { ContactItem } from "components/ContactItem/ContactItem";


export const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <li
          key={contact.id}
        >
        <ContactItem info={contact} onDelete={onDelete}/>
        </li>
      ))}
    </ul>
  );
};

