import React, { Component } from 'react'
import { Link } from 'react-router'

import AppBar from 'material-ui/AppBar'
import FlatButton from 'material-ui/FlatButton'

const NavBar = () => {

  const styles = {
    buttonStyle: {
      backgroundColor: 'transparent',
      color: 'white',
    },
  }

  const rightButtons = (
    <div>
      <Link to={'/projects'}>
        <FlatButton label="Projects" style={styles.buttonStyle} />
      </Link>
      <Link to={'/about-me'}>
        <FlatButton label="About Me" style={styles.buttonStyle} />
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





































//const Navbar = () => {
//  return (
//    <nav className="navbar-default nav-giant color-stormy no-margin banner">
//      <div className="nav-fluid container-fluid">
//        <div className="navbar-header font-cloudy font-mono">
//          <Link className="nav-navbar-brand navbar-brand" id="nav-brand" to={'/'}>Bear Gets Digital</Link>
//        </div>
//        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
//          <ul className="nav navbar-nav nav-navbar-nav font-cloudy font-sans">
//            <li><Link id="nav-links" to={'/projects'}>Projects <span className="sr-only">(current)</span></Link></li>
//            <li><Link id="nav-links" to={'/about-me'}>About Me</Link></li>
//          </ul>
//          <form className="navbar-form navbar-right" role="search">
//            <div className="form-group">
//              <input type="text" className="nav-form-control font-cloudy font-sans" placeholder="Search" />
//            </div>
//            <button type="submit" className="nav-btn nav-btn-default btn-submit font-cloudy font-sans">Submit</button>
//          </form>
//        </div>
//      </div>
//    </nav>
//  )
//}
//
//export default Navbar

//*********************************************************************************

//ORIGINAL CODE -- KEEP UNTIL STYLING IS FIXED

//    <nav className="navbar navbar-default color-stormy no-margin banner">
//      <div className="container-fluid">
//        <div className="navbar-header font-cloudy font-mono">
//          <Link className="navbar-brand" to={'/'}>Bear Gets Digital</Link>
//        </div>
//        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
//          <ul className="nav navbar-nav font-cloudy font-sans">
//            <li><Link to={'/projects'}>Projects <span className="sr-only">(current)</span></Link></li>
//            <li><Link to={'/about-me'}>About Me</Link></li>
//          </ul>
//          <form className="navbar-form navbar-right" role="search">
//            <div className="form-group">
//              <input type="text" className="form-control font-cloudy font-sans" placeholder="Search" />
//            </div>
//            <button type="submit" className="btn btn-default btn-submit font-cloudy font-sans">Submit</button>
//          </form>
//        </div>
//      </div>
//    </nav>


//*********************************************************************************

//import React, { Component } from 'react'
//
//import { Link } from 'react-router'
//
//import AboutMe from 'APP/app/components/AboutMe'
//
//const Navbar = () => {
//  return (
//    <nav className="navbar-default nav-giant color-stormy no-margin banner">
//      <div className="nav-fluid container-fluid">
//        <div className="navbar-header font-cloudy font-mono">
//          <Link className="nav-navbar-brand navbar-brand" id="nav-brand" to={'/'}>Bear Gets Digital</Link>
//        </div>
//        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
//          <ul className="nav navbar-nav nav-navbar-nav font-cloudy font-sans">
//            <li><Link id="nav-links" to={'/projects'}>Projects <span className="sr-only">(current)</span></Link></li>
//            <li><Link id="nav-links" to={'/about-me'}>About Me</Link></li>
//          </ul>
//          <form className="navbar-form navbar-right" role="search">
//            <div className="form-group">
//              <input type="text" className="nav-form-control font-cloudy font-sans" placeholder="Search" />
//            </div>
//            <button type="submit" className="nav-btn nav-btn-default btn-submit font-cloudy font-sans">Submit</button>
//          </form>
//        </div>
//      </div>
//    </nav>
//  )
//}
//
//export default Navbar
