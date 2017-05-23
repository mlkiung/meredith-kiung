import React, { Component } from 'react'
import { Link } from 'react-router'

import AppBar from 'material-ui/AppBar'
import FlatButton from 'material-ui/FlatButton'

const NavBar = () => {
  const styles = {
    buttonStyle: {
      backgroundColor: 'transparent',
      color: 'white',
      fontFamily: "'Questrial', sans-serif",
    }
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

  const buttonStyle = styles.buttonStyle
  const leftButtons = (
    <div>
      <Link to={'/'}>
        <FlatButton
          label="Meredith Kiung"
          labelStyle={{fontSize: '1.5em'}}
          style={Object.assign({ buttonStyle }, {fontFamily: "'Alfa Slab One', cursive"})} />
      </Link>
    </div>
  )

  return (
    <div>
      <AppBar
        id="app-bar"
        iconElementRight={rightButtons}
        iconElementLeft={leftButtons}
      />
    </div>
  )
}

export default NavBar
