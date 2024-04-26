import React from "react";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

const ContactList = ({ contactDatas, onDelete }) => {
  return (
    <ul className={css.personList}>
      {contactDatas.map((contactData) => {
        return (
          <li className={css.personItem} key={contactData.id}>
            <Contact
              name={contactData.name}
              number={contactData.number}
              id={contactData.id}
              onDelete={onDelete}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
