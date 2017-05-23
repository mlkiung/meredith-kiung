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
       <img id="avatar" src="images/avatar.png"/>
    </div>
    <div className="font-heading font-sans">About Me</div>
    <div className="font-body">After spending several years learning and mastering how to grow small businesses, I sought a way to apply that knowledge to tech-driven enterprises. That’s why I enrolled in Grace Hopper Academy—an experience that intensified my passion for cultivating big new ideas and developing the solutions to implement them. I’m an outcomes-driven builder, doer, and collaborator currently seeking an opportunity to help your organization do something great.
    </div>
  </div>
)

export default AboutMe
