import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import StyledContactForm, { StyledInput, StyledTextarea, ErrorMsg } from './StyledContactForm';
import StyledButton from '../../button/StyledButton';
import Loading from '../../loading/Loading';
import SuccessMsg from '../../loading/SuccessMsg';

const ContactForm = () => {
  const form = useRef();
  const [formErr, setFormErr] = useState('');
  const [loading, setLoading] = useState(false);
  const [showMsg, setShowMsg] = useState(false);

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
    
    setLoading(true);
    emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY)
      .then((res) => {
        setShowMsg(true);
        setLoading(false);
        e.target.reset();
      }, (err) => {
        console.log(err.text)
      });
  };

  return (
    <>
      <StyledContactForm ref={form} onSubmit={sendEmail} noValidate>
        <StyledInput type='text' name='user_name' placeholder='Name' onChange={updateFormErr} required />
        <StyledInput type='email' name='user_email' placeholder='Email' onBlur={validateEmail} required />
        <StyledInput type='subject' name='subject' placeholder='Subject' onChange={updateFormErr} required />
        <StyledTextarea name='message' placeholder='Message' rows='4' onChange={updateFormErr} required />
        <ErrorMsg>{formErr}</ErrorMsg>
        <StyledButton type='submit'>Send</StyledButton>
      </StyledContactForm>

      {(loading) ? <Loading /> : null}
      {(showMsg) ? <SuccessMsg setShowMsg={setShowMsg} /> : null}
    </>
  );
};

export default ContactForm;
