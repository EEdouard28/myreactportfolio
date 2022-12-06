import React from 'react';

function Project() {
  return (
    <div className="container">
      {/* safeMed Project */}
      <div className="projects">
        <div className="item">
          <img
            className="projectImg"
            src={require('../assets/img/projects/project1.jpg')}
            alt="Project"
          />
          <a
            href="https://project2-safe-med.herokuapp.com/"
            className="btn-light"
          >
            <i className="fas fa-eye"></i>Project
          </a>

          <a
            href="https://github.com/rsenecal/Project2-safeMed"
            className="btn-dark"
          >
            <i className="fab fa-github"></i>Github
          </a>
        </div>
        {/* iEats Project */}
        <div className="item">
          <img
            className="projectImg"
            src={require('../assets/img/projects/project2.jpg')}
            alt="Project"
          />
          <a href="https://inidhi99.github.io/ieats/" className="btn-light">
            <i className="fas fa-eye"></i>Project
          </a>

          <a href="https://github.com/inidhi99/ieats" className="btn-dark">
            <i className="fab fa-github"></i>Github
          </a>
        </div>
        {/* backend project */}
        <div className="item">
          <img
            className="projectImg"
            src={require('../assets/img/projects/project3.jpg')}
            alt="Project"
          />

          <a
            href="https://github.com/EEdouard28/social-network-api"
            className="btn-light"
          >
            <i className="fas fa-eye"></i>Project
          </a>

          <a
            href="https://github.com/EEdouard28/social-network-api"
            className="btn-dark"
          >
            <i className="fab fa-github"></i>Github
          </a>
        </div>
      </div>
    </div>
  );
}

// how to hanle a tags and butting tags

export default Project;
