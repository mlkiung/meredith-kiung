import React, { Component } from 'react'
import { Link } from 'react-router'

import AppBar from 'material-ui/AppBar'
import FlatButton from 'material-ui/FlatButton'

const NavBar = () => {
  const styles = {
    buttonStyle: {
      backgroundColor: 'transparent',
      color: 'white',
      'font-family': "'Questrial', sans-serif"
    },
  }

  const rightButtons = (
    <div>
      <Link to={'/portfolio'}>
        <FlatButton label="Portfolio" style={styles.buttonStyle} />
      </Link>
      <Link to={'/posts'}>
        <FlatButton label="Blog" style={styles.buttonStyle} />
      </Link>
    </div>
  )

  const leftButtons = (
    <div>
      <Link to={'/'}>
        <FlatButton label="Bear Gets Digital" style={styles.buttonStyle} />
      </Link>
    </div>
  )

  return (
    <div>
      <AppBar
        iconElementRight={rightButtons}
        iconElementLeft={leftButtons}
      />
    </div>
  )
}

export default NavBar
