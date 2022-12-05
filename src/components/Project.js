import React from 'react';

function Project() {
  return (
    <div className="container">
      <div className="projects">
        <a
          href="https://project2-safe-med.herokuapp.com/
"
        >
          <img
            className="projectImg"
            src={require('../assets/img/projects/project1.jpg')}
            alt="Project"
          />
        </a>
      </div>
    </div>
  );
}

// how to hanle a tags and butting tags

export default Project;
