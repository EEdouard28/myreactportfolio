import React from 'react';
import './components.css';

function About() {
  return (
    <div className="container">
      <main id="about">
        <h1 className="lg-heading">
          About
          <span className="text-secondary">Me</span>
        </h1>
        <h2 className="sm-heading">Let me tell you a few things...</h2>
        <div className="about-info">
          {/* <img
            src="img/portrait.jpg"
            alt="Evince Edouard"
            className="bio-image"
          /> */}

          <div className="bio">
            <h3 className="text-secondary">Bio</h3>
            <p>
              Hi, my name is Evince (pronounced: 'Ev-ince') Edouard. I am
              passionate about solving problems and being an awesome team
              member. I am devoted to learning new skills and technologies
              whether through formal education or self-taught studies. I seek
              opportunities that combines the worlds of media creation and tech.
              I am a self taught music-producer/audio engineer and a healthcare
              professional as well.{' '}
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default About;
