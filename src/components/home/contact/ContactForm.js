import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import StyledContactForm from './StyledContactForm';

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY)
      .then((result) => {
        e.target.reset();
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <StyledContactForm ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Subject</label>
      <input type="subject" name="subject" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </StyledContactForm>
  );
};

export default ContactForm;
