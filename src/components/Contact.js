import React, { useState } from 'react';
import styled from 'styled-components';
import { validateEmail } from '../utils/helpers';

const FormStyles = styled.form`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 1rem;

  .form-group {
    width: 100%;
    margin-bottom: 2rem;
    margin: 20px;
  }
  label {
    form-size: 1.8rem;
  }
  input,
  textarea {
    width: 100%;
    font-size: 2rem;
    padding: 1.2 rem;
    ${'' /* color and background colors */}
    outline: none;
    border: none;
    border-radius: 8px;
    margin-top: 1rem;
  }
  textarea {
    min-height: 175px;
    resize: vertical;
  }
  button[type='submit'] {
    font-size: 1.5rem;
    display: inline-block;
    outline: none;
    border: none;
    padding: 0.5rem 2 rem;
    border-radius: 6px;
    cursor: pointer;
    margin: 20px;
  }
`;

function Contact() {
  // state variables for name
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // email validation
  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;
    if (inputType === 'name') {
      setName(inputValue);
    } else if (inputType === 'email') {
      setEmail(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // if invalid email send error message
    if (!validateEmail(email)) {
      setErrorMessage('Email is invalid');
      return;
    }
    if (!name || !message) {
      setErrorMessage('Please fill out your name and message');
      return;
    }
    // otherwise set email
    setEmail('');
  };

  return (
    <div className="container">
      {/* Contact Form */}
      <FormStyles>
        <div className="form-group">
          <label htmlFor="name">
            Name:
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="this field is required"
              pattern="[a-zA-Z0-9]+"
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="email">
            Email:
            <input
              value={email}
              name="email"
              onChange={handleInputChange}
              type="email"
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="message">
            Message:
            <textarea
              type="text"
              id="message"
              name="message"
              value={message}
              pattern="[a-zA-Z0-9]+"
              onChange={(e) => setMessage(e.target.value)}
            />
          </label>
        </div>
        <button type="submit" onClick={handleFormSubmit}>
          Send
        </button>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
      </FormStyles>
      {/* Contact Links */}
      <main id="contact">
        <h2 className="sm-heading">This is how you can reach me...</h2>
        <div className="boxes">
          <div>
            <span className="text-secondary">Email:</span>{' '}
            Evince.Edouard@Gmail.com
          </div>
          <div>
            <span className="text-secondary">Github:</span>
            <a href="https://github.com/EEdouard28">Click Here</a>
          </div>
          <div>
            <span className="text-secondary">Linkedin:</span>
            <a href="https://www.linkedin.com/in/evinceedouard">Click Here</a>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Contact;
