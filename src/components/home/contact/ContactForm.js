import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import StyledContactForm, { StyledInput, StyledTextarea, SubmitButton } from './StyledContactForm';

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
      <StyledInput type='text' name='user_name' placeholder='Name' />
      <StyledInput type='email' name='user_email' placeholder='Email' />
      <StyledInput type='subject' name='subject' placeholder='Subject' />
      <StyledTextarea name='message' placeholder='Message' rows='4' />

      <SubmitButton type='submit'>Send</SubmitButton>
    </StyledContactForm>
  );
};

export default ContactForm;
