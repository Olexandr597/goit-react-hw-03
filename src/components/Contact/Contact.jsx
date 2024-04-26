import React from "react";
import { FaUser, FaPhone } from "react-icons/fa";
import css from "./Contact.module.css";

const Contact = ({ id, name, number, onDelete }) => {
  return (
    <>
      <div className={css.personData}>
        <div className={css.personName}>
          <FaUser className={css.iconPerson} />
          <p>{name}</p>
        </div>
        <div className={css.personPhon}>
          <FaPhone className={css.iconPhon} />
          <p>{number}</p>
        </div>
      </div>
      <button onClick={() => onDelete(id)}>Delete</button>
    </>
  );
};

export default Contact;
