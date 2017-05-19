import React, { Component } from 'react'

import { Link } from 'react-router'

import AboutMe from 'APP/app/components/AboutMe'

const Navbar = () => {
  return (
    <nav className="navbar navbar-default color-stormy no-margin">
      <div className="container-fluid">
        <div className="navbar-header">
          <Link className="navbar-brand font-cloudy" to={'/'}>Bear Gets Digital</Link>
        </div>
        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav font-cloudy">
            <li><Link to={'/projects'}>Projects <span className="sr-only">(current)</span></Link></li>
            <li><Link to={'/about-me'}>About Me</Link></li>
          </ul>
          <form className="navbar-form navbar-right" role="search">
            <div className="form-group">
              <input type="text" className="form-control font-cloudy" placeholder="Search" />
            </div>
            <button type="submit" className="btn btn-default btn-submit font-cloudy">Submit</button>
          </form>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
