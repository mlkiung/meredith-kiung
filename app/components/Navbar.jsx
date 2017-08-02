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

  const buttonStyle = styles.buttonStyle

  const rightButtons = (
    <div>
      <Link to={'/portfolio'}>
        <FlatButton label="Portfolio" style={buttonStyle} />
      </Link>
      <Link id="blog" to={'/posts'}>
        <FlatButton label="Blog" style={buttonStyle} />
      </Link>
    </div>
  )

  const leftButtons = (
    <div>
      <Link to={'/'}>
        <FlatButton
          label="Meredith Kiung"
          labelStyle={{fontSize: '1.75em', letterSpacing: '1px'}}
          style={Object.assign({ buttonStyle }, {fontFamily: "'Anton', sans-serif"})} />
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
