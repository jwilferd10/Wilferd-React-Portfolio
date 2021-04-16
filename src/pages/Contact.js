import React, { useState } from 'react';
import {Form, Button, Card} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';

import { validateEmail } from '../utils/helpers';

function ContactForm() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log('Submit Form', formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log('Handle Form', formState);
    }
  };

  return (
    <section>
        <h1 class="section-title about">Reach Out:</h1>
        <div class="contact-container">
          <Form id="contact-form" onSubmit={handleSubmit}>
              <div>
                  <Form.Group controlId="NameInput">
                      <h3>Name:</h3>
                      <Form.Control id="nameValue" as="textarea" name="name" defaultValue={name} onBlur={handleChange}/>
                  </Form.Group>

                  <Form.Group controlId="EmailInput">
                      <h3>Email:</h3>
                      <Form.Control id="emailValue" type="email" name="email" defaultValue={email} onBlur={handleChange} />
                  </Form.Group>

                  <Form.Group controlId="MessageInput">
                      <h3 htmlFor="message">Message:</h3>
                      <Form.Control id="messageValue" as="textarea" name="MessageInput" rows={3} defaultValue={message} onBlur={handleChange} />
                  </Form.Group>

                  {errorMessage && (
                  <div>
                      <p className="error-text">{errorMessage}</p>
                  </div>
                  )}
                  <Button data-testid="button" type="submit">Submit</Button>
              </div>
          </Form>
        </div>
    </section>
  );
}

export default ContactForm;