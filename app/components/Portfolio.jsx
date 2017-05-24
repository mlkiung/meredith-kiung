import React, { Component } from 'react'
import { connect } from 'react-redux'
import firebase from 'APP/fire'

import store from 'APP/app/store'
import {loadAllProjects} from 'APP/app/redux/action-creators'

import { PortfolioCardRight, PortfolioCardLeft } from './PortfolioCard'

class Portfolio extends Component {
  constructor(props) {
    super(props)

    this.state = {
      counter: 0,
      projects: this.makeProjectsArray(this.props.projects),
    }

    // this.makeProjectsArray(this.props.projects)

    this.rightOrLeft = this.rightOrLeft.bind(this)
    this.makeProjectsArray = this.makeProjectsArray.bind(this)
  }

  rightOrLeft = (project) => {
    console.log(this.state.projects)
    let counter = this.state.counter
    counter++
    this.setState({ counter })
    console.log('counter', this.state.counter)
    return counter % 2 === 0 ? <PortfolioCardRight project={project} /> : <PortfolioCardLeft project={project} />
  }

  makeProjectsArray = (projects) => {
    const projectsArr = []
    for (const key in projects) {
      projectsArr.push(projects[key])
    }
    console.log('PROJECTS ARRAY', projectsArr)
    return projectsArr
    // this.setState({projects: projectsArr})
  }

  render() {
    const projects = this.state.projects
    console.log('FUCKING PROJECTS', this.state.projects)
    console.log(this.props)

    return (
      <div className="portfolio-container">

        {projects && projects.map((project) => {
          console.log('PROJECT', project)
          return this.rightOrLeft(project)
        })}

      </div>

    )
  }
}

const mapStateToProps = state => ({projects: state.projects})

const mapDispatchToProps = dispatch => ({ loadAllProjects })

export default connect(mapStateToProps, mapDispatchToProps)(Portfolio)


// <div className="outer">
//           <div className="inner scroll-img" id="cup-of-sugar">CUP OF SUGAR</div>
//           <div className="inner static-color">
//             <div className="one-third"></div>
//             <div className="one-third middle middle-header">
//               <div className="font-middle-header">CUP OF SUGAR<hr className="hr" /></div>
//               <div className="font-middle-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
//             </div>
//             <div className="one-third"></div>
//           </div>
//         </div>
//         <div className="outer">
//           <div className="inner static-color">
//             <div className="one-third"></div>
//             <div className="one-third middle middle-header">
//               <div className="font-middle-header">CAT MOON DADDY<hr className="hr" /></div>
//               <div className="font-middle-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
//             </div>
//             <div className="one-third"></div>
//           </div>
//           <div className="inner scroll-img" id="ifoodie">Cat Moon Daddy</div>
//         </div>
//         <div className="outer">
//           <div className="inner scroll-img" id="sandcastle">Firebase Video</div>
//           <div className="inner static-color">
//             <div className="one-third"></div>
//             <div className="one-third middle middle-header">
//               <div className="font-middle-header">FIREBASE<hr className="hr" /></div>
//               <div className="font-middle-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
//             </div>
//             <div className="one-third"></div>
//           </div>
//         </div>
