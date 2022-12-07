import React, { useState } from 'react';

function Contact() {
  // state variables for name
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    return name === 'firstName' ? setFirstName(value) : setLastName(value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    alert(`Hello ${firstName} ${lastName}`);
    setFirstName('');
    setLastName('');
  };

  return (
    <div className="container">
      <div className="contactForm">
        {/* Contact Form */}
        <p>Name area</p>
        <form className="form">
          <input
            value={firstName}
            name="firstName"
            onChange={handleInputChange}
            type="text"
            placeholder="First Name"
          />

          <input
            value="lastName"
            name="lastName"
            onChange={handleInputChange}
            type="text"
            placeholder="Last Name"
          />
          {/* <input
          value="email"
          name="email"
          onChange={handleInputChange}
          type="text"
          placeholder="Please Provide A Email Address"
          />
           <input
          value=
          name="message"
          onChange
          type="text"
          placeholder="Write A Message"
          /> */}
          <button type="button" onClick={handleFormSubmit}>
            Submit
          </button>
        </form>
      </div>

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
