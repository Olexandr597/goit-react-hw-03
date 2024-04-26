import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./ContactForm.module.css";

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Your name is too Short!")
    .max(50, "Your name is too Long!")
    .required("Name is required"),
  phone: Yup.string()
    .min(3, "Your number is too Short!")
    .max(50, "Your number is too Long!")
    .required("Phone is required"),
});

const FORM_INITIAL_VALUES = {
  id: Date.now(),
  name: "",
  phone: "",
};

const ContactForm = ({ onAdd }) => {
  const handleSubmit = (values, actions) => {
    onAdd({
      id: Date.now(),
      name: values.name,
      number: values.phone,
    });
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={FORM_INITIAL_VALUES}
      validationSchema={FeedbackSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.contactForm}>
        <div className={css.formGroup}>
          <label htmlFor="name">Name:</label>
          <Field
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
          />
          <ErrorMessage component="p" name="name" />
        </div>
        <div className={css.formGroup}>
          <label htmlFor="phone">Number:</label>
          <Field
            type="tel"
            id="phone"
            name="phone"
            placeholder="Enter your phone number"
          />
          <ErrorMessage component="p" name="phone" />
        </div>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};


export default ContactForm;
