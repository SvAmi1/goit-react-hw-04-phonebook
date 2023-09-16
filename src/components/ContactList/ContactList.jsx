// import { nanoid } from 'nanoid';

import { ContactItem } from "components/ContactItem/ContactItem";


export const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <li
          key={contacts.id}
        >
        <ContactItem info={contact} onDelete={onDelete}/>
        </li>
      ))}
    </ul>
  );
};

