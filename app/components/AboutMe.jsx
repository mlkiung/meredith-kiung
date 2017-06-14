import React from 'react'

import Paper from 'material-ui/Paper'

const styles = {
  Paper: {
    height: '250px',
    width: '250px',
  }
}

const AboutMe = () => (
  <div className="about-me-container">
    <div className="about-me-outer">
      <div className="about-me-inner">
        <img id="avatar" src="images/avatar.png" />
      </div>
      {/*<div className="font-heading font-sans">About Me</div>
      <div className="font-body">*/}
        <div>
          <h1>Hello!</h1>
          <div>I’m Meredith, a New York City-based Software Engineer with a love of Javascript, puppies, and creating beautiful and responsive web and mobile apps using the latest technologies.</div>
          <h1>Background</h1>
          <div>After graduating from Johns Hopkins University with a degree in Psychological & Brain Sciences and a minor in Entrepreneurship & Management, I turned my efforts to helping small businesses stay current in their market. Using a multi-pronged strategic approach that I customized for every business, I maintain a track record of success in taking businesses to the best-in-brand level.</div>
          <h1>Developer Story</h1>
          <div>I began programming as an undergraduate at Johns Hopkins, and fell in love with it again as an adult. It was the proverbial ‘itch that couldn’t be scratched,’ so I did what any sane, fully-grown human being would do: I dropped everything that had ever made me successful and entered the tech world--not only as a noob, but also as a woman. I enrolled in the only coding bootcamp I wanted to go to--The Grace Hopper Program, which is an all-female division of Fullstack Academy that seeks to close the gender gap and make tech accessible for women. Coincidentally, it ended up being the best experience of my life.</div>
          <h1>Skills</h1>
          <div>
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
              <li>Docker</li>
              <li>Agile Development Methodologies</li>
            </ul>
          </div>
          <h1>Familiar With</h1>
          <div>
            <ul>
              <li>LESS / Sass</li>
              <li>SQL</li>
              <li>Mocha / Chai / Jasmine</li>
              <li>WebSockets / Socket.io</li>
              <li>Heroku</li>
              <li>AWS</li>
            </ul>
          </div>
          <h1>Contact Me</h1>
          <div>
            I love hearing from people!
            <br/>
            <br/>
            Be sure to check out my blog (link above!), where I post everything from tutorials and tips that I’ve found useful, to awkward stories and my thoughts on being a young female developer living and working in New York City.
            <br/>
            <br/>
            Also head over to my photo blog on Instagram, @code.ess, where I visually document my trials and tribulations--and sometimes the occasional coding meme :)
          </div>
        {/*</div>*/}
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
