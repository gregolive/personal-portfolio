import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import StyledContactForm, { StyledInput, StyledTextarea, ErrorMsg, SubmitButton } from './StyledContactForm';

const ContactForm = () => {
  const form = useRef();
  const [formErr, setFormErr] = useState('');

  const updateFormErr = () => {
    if (formErr === 'Invalid email address') { return; }
    setFormErr('');
  };

  const validateEmail = (e) => {
    const { validity } = e.target;

    if (validity['typeMismatch']) {
      setFormErr('Invalid email address');
    } else {
      setFormErr('');
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();
    const valid = e.target.checkValidity();

    if (!valid) {
      setFormErr('Please fill in all fields and enter a valid email address');
      return;
    }
    
    emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY)
      .then((res) => e.target.reset(),
            (err) => console.log(err.text));
  };

  return (
    <StyledContactForm ref={form} onSubmit={sendEmail} noValidate>
      <StyledInput type='text' name='user_name' placeholder='Name' onChange={updateFormErr} required />
      <StyledInput type='email' name='user_email' placeholder='Email' onBlur={validateEmail} required />
      <StyledInput type='subject' name='subject' placeholder='Subject' onChange={updateFormErr} required />
      <StyledTextarea name='message' placeholder='Message' rows='4' onChange={updateFormErr} required />
      <ErrorMsg>{formErr}</ErrorMsg>
      <SubmitButton type='submit'>Send</SubmitButton>
    </StyledContactForm>
  );
};

export default ContactForm;
