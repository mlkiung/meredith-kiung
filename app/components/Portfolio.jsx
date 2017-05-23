import React, { Component } from 'react'
import { connect } from 'react-redux'

import { PortfolioCardRight, PortfolioCardLeft } from './PortfolioCard'

class Portfolio extends Component {
  constructor(props) {
    super(props)

    this.state = {
      counter: 0,
    }

    this.rightOrLeft = this.rightOrLeft.bind(this)
  }

  rightOrLeft = (project) => {
    let counter = this.state.counter
    counter++
    this.setState({counter})
    return counter % 2 === 0 ? <PortfolioCardRight project={project} /> : <PortfolioCardLeft project={project} />
  }

  render() {
    return (
      <div className="portfolio-container">
        {this.props.projects.map((project) => {
          return this.rightOrLeft(project)
        })}
        <PortfolioCardRight />
        <PortfolioCardLeft />
        <div className="outer">
          <div className="inner scroll-img" id="cup-of-sugar">CUP OF SUGAR</div>
          <div className="inner static-color">
            <div className="one-third"></div>
            <div className="one-third middle middle-header">
              <div className="font-middle-header">CUP OF SUGAR<hr className="hr" /></div>
              <div className="font-middle-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
            </div>
            <div className="one-third"></div>
          </div>
        </div>
        <div className="outer">
          <div className="inner static-color">
            <div className="one-third"></div>
            <div className="one-third middle middle-header">
              <div className="font-middle-header">CAT MOON DADDY<hr className="hr" /></div>
              <div className="font-middle-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
            </div>
            <div className="one-third"></div>
          </div>
          <div className="inner scroll-img" id="ifoodie">Cat Moon Daddy</div>
        </div>
        <div className="outer">
          <div className="inner scroll-img" id="sandcastle">Firebase Video</div>
          <div className="inner static-color">
            <div className="one-third"></div>
            <div className="one-third middle middle-header">
              <div className="font-middle-header">FIREBASE<hr className="hr" /></div>
              <div className="font-middle-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
            </div>
            <div className="one-third"></div>
          </div>
        </div>
      </div>

    )
  }
}

const mapStateToProps = state => {
  console.log('state in Portfolio', state)
  return {
    projects: state.projects
  }
}

export default connect(mapStateToProps)(Portfolio)
