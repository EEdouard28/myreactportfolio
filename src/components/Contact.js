import React from 'react';

function Contact() {
  return (
    <div className="container">
      <main id="contact">
        <h1 class="lg-heading">
          Contact
          <span class="text-secondary">Me</span>
        </h1>
        <h2 class="sm-heading">This is how you can reach me...</h2>
        <div class="boxes">
          <div>
            <span class="text-secondary">Email:</span> Evince.Edouard@Gmail.com
          </div>
          <div>
            <span class="text-secondary">Github:</span>
            <a href="https://github.com/EEdouard28">Click Here</a>
          </div>
          <div>
            <span class="text-secondary">Linkedin:</span>
            <a href="https://www.linkedin.com/in/evinceedouard">Click Here</a>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Contact;
