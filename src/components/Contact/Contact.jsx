import css from "./Contact.module.css";

const Contact = ({ contact, deleteContact }) => {
  return (
    <li className={css.li}>
      {contact.name} <br />
      {contact.number}
      <button className={css.btn} onClick={() => deleteContact(contact.id)}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
