import React, { Component } from 'react'

import { Link } from 'react-router'

import AboutMe from 'APP/app/components/AboutMe'

const Navbar = () => {
  return (
    <nav className="nav-giant color-stormy no-margin banner">
      <div className="container-fluid">
        <div className="navbar-header font-cloudy font-mono">
          <Link className="navbar-brand" to={'/'}>Bear Gets Digital</Link>
        </div>
        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav font-cloudy font-sans">
            <li><Link to={'/projects'}>Projects <span className="sr-only">(current)</span></Link></li>
            <li><Link to={'/about-me'}>About Me</Link></li>
          </ul>
          <form className="navbar-form navbar-right" role="search">
            <div className="form-group">
              <input type="text" className="form-control font-cloudy font-sans" placeholder="Search" />
            </div>
            <button type="submit" className="btn btn-default btn-submit font-cloudy font-sans">Submit</button>
          </form>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

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
