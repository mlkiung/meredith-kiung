import React from 'react'

import Paper from 'material-ui/Paper'

const styles = {
  Paper: {
    height: '250px',
    width: '250px',
  }
}

const AboutMe = () => (
  <div className="about-me-outer">
    <div className="about-me-inner">
      <img id="avatar" src="images/avatar.png" />
    </div>
    <div className="font-heading font-sans">About Me</div>
    <div className="font-body">After spending several years learning and mastering how to grow small businesses, I sought a way to apply that knowledge to tech-driven enterprises. That’s why I enrolled in Grace Hopper Academy—an experience that intensified my passion for cultivating big new ideas and developing the solutions to implement them. I’m an outcomes-driven builder, doer, and collaborator currently seeking an opportunity to help your organization do something great.
    </div>
    <div>
      <a href="https://github.com/mlkiung" target="_blank"><span className="fa fa-github fa-2x about-icons" aria-hidden="true"></span></a>
      <a href="https://www.linkedin.com/in/meredith-kiung/" target="_blank"><span className="fa fa-linkedin fa-2x about-icons" aria-hidden="true"></span></a>
      <a href="mailto:meredith-kiung@gmail.com"><span className="fa fa-envelope fa-2x about-icons" aria-hidden="true"></span></a>
    </div>
  </div>
)

export default AboutMe
