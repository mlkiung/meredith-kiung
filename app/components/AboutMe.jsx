import React from 'react'

import Paper from 'material-ui/Paper'

const styles = {
  Paper: {
    height: '250px',
    width: '250px',
  }
}

const AboutMe = () => (
  <div className="about-me-container container-fluid">
    <div className="about-me-outer">
      <div className="about-me-inner">
        <img id="avatar" src="images/avatar.png" />
      </div>
      <div>
        <h1>Hello!</h1>
        <p>I am a New York City-based Software Engineer with a love of Javascript, dogs, and creating beautiful and responsive web and mobile apps.</p>
        <h1>Background</h1>
        <p>I graduated from Johns Hopkins University with a degree in Psychological & Brain Sciences and a minor in Entrepreneurship & Management. Upon graduation, I focused on helping small businesses grow and flourish through disciplined adherence to strategic processes. It proved exhilarating for many years. But I still sought more.</p>
        <h1>Developer Story</h1>
        <p>I realized that building a technology-based skill set would be the best way to rapidly optimize my value to companies, clients, and organizations. As such, I enrolled in The Grace Hopper Program--the all-female division of Fullstack Academy. I had begun programming as an undergraduate in college. I found myself falling in love with it as a young professional.</p>
        <h1>I've worked with:</h1>
        <ul>
          <li>Javascript (ES5 / ES6)</li>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>jQuery</li>
          <li>ReactJS</li>
          <li>React Native</li>
          <li>Redux</li>
          <li>Node.js</li>
          <li>Express</li>
          <li>Sequelize</li>
          <li>PostgreSQL</li>
          <li>Webpack / Babel</li>
          <li>Git / GitHub</li>
          <li>Firebase (Realtime Database / Hosting / Authentication)</li>
          <li>Agile Development Methodologies</li>
          <li>LESS / Sass</li>
          <li>SQL</li>
        </ul>
        <h1>Familiar With</h1>
        <ul>
          <li>Mocha / Chai / Jasmine</li>
          <li>WebSockets / Socket.io</li>
          <li>Heroku</li>
        </ul>
        <h1>Contact Me</h1>
        <p>I absolutely love to hear from people!</p>
        <p>Also head over to my photo blog on Instagram, @code.ess, where I visually document my trials and tribulations--and sometimes the occasional coding meme.</p>
      </div>
      <div id="contact-icons">
        <a href="https://github.com/mlkiung" target="_blank"><span className="fa fa-github fa-2x about-icons" aria-hidden="true"></span></a>
        <a href="https://www.linkedin.com/in/meredith-kiung/" target="_blank"><span className="fa fa-linkedin fa-2x about-icons" aria-hidden="true"></span></a>
        <a href="mailto:meredith-kiung@gmail.com"><span className="fa fa-envelope fa-2x about-icons" aria-hidden="true"></span></a>
      </div>
    </div>
  </div>
)

export default AboutMe
