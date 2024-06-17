import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './App.css';

const App = () => {
  const [contacts] = useState([
    { type: 'email', icon: faEnvelope, value: 'maityrudra228@gmail.com', link: 'mailto:maityrudra228@gmail.com' },
    { type: 'github', icon: faGithub, value: 'Rudra-Maity', link: 'https://github.com/Rudra-Maity' },
    { type: 'linkedin', icon: faLinkedin, value: 'rudrapriya-maity', link: 'https://www.linkedin.com/in/rudrapriya-maity-12408926b/' },
  ]);

  return (
    <div className="container">
      <header>
        <h1>YOUR <span>NAME</span></h1>
        <hr />
        <h2>YOUR TITLE</h2>
        <hr />
      </header>
      <div className="main-content">
        <div className="left-column">
          <section className="contact">
            <h3>CONTACT</h3>
            {contacts.map((contact, index) => (
              <p key={index}>
                <FontAwesomeIcon icon={contact.icon} />{' '}
                <a href={contact.link} target="_blank" rel="noopener noreferrer">
                  {contact.value}
                </a>
              </p>
            ))}
          </section>
          <section className="skills">
            <h3>SKILLS</h3>
            <p>HTML, CSS, Bootstrap, GitHub, VS Code, JavaScript, MERN, MySQL, PHP</p>
          </section>
          <section className="education">
            <h3>EDUCATION</h3>
            <p><strong>E-commerce Site Project</strong></p>
            <p>Maulana Abul Kalam Azad University of Technology</p>
            <p>2021-2024</p>
          </section>
        </div>
        <div className="right-column">
          <section className="about">
            <h3>ABOUT</h3>
            <p>A brief paragraph about you and what kind of company you want to work for.</p>
          </section>
          <section className="work-experience">
            <h3>WORK EXPERIENCE</h3>
            <article>
              <h4>JOB TITLE</h4>
              <p>Company Name | NA - NA</p>
              <p>NA</p>
              <ul>
                <li>Cool accomplishment</li>
                <li>Cool accomplishment</li>
                <li>Cool accomplishment</li>
              </ul>
            </article>
          </section>
        </div>
      </div>
    </div>
  );
};

export default App;
