import React from 'react';

function Contact() {
  return (
    <div className="container">
      <main id="contact">
        <h1 className="lg-heading">
          Contact
          <span className="text-secondary">Me</span>
        </h1>
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
