import React, { Component } from 'react'

import { Link } from 'react-router'

import AboutMe from 'APP/app/components/AboutMe'

class Navbar extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link className="navbar-brand" to={'/'}>Bear Gets Digital</Link>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li className="active"><Link to={'/projects'}>Projects <span className="sr-only">(current)</span></Link></li>
              <li><Link to={'/about-me'}>About Me</Link></li>
            </ul>
            <form className="navbar-form navbar-right" role="search">
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Search" />
              </div>
              <button type="submit" className="btn btn-default btn-submit">Submit</button>
            </form>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
