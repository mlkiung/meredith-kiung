import React from 'react'

import Paper from 'material-ui/Paper'

const styles = {
  Paper: {
    height: '100px',
    width: '100px',
  }
}

const AboutMe = () => (
  <div className="about-me-outer">
    <div className="about-me-inner">
      <Paper
        style={styles.Paper}
        zDepth={1}
        circle={true}
        >
       <img />
      </Paper>
    </div>
    <h1>About Me</h1>
    <div>After spending several years learning and mastering how to grow small businesses, I sought a way to apply that knowledge to tech-driven enterprises. That’s why I enrolled in Grace Hopper Academy—an experience that intensified my passion for cultivating big new ideas and developing the solutions to implement them. I’m an outcomes-driven builder, doer, and collaborator currently seeking an opportunity to help your organization do something great.
    </div>
  </div>
)

export default AboutMe
