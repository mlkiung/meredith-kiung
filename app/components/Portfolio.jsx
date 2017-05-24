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
      projects: [],
    }

    // this.makeProjectsArray(this.props.projects)

    this.rightOrLeft = this.rightOrLeft.bind(this)
    this.makeProjectsArray = this.makeProjectsArray.bind(this)
    // this.renderProject = this.renderProject.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.projects !== this.props.projects) {
      const projectsArr = this.makeProjectsArray(nextProps.projects)
      const projectsComponents = projectsArr.map((project, i) => {
        return this.rightOrLeft(project, i)
      })
      this.setState({projects: projectsComponents})
    }
  }

  rightOrLeft = (project, i) => {
    if (i % 2 === 0 || i === 0) {
      return <PortfolioCardRight project={project} key={project.key} />
    } else {
      return <PortfolioCardLeft project={project} key={project.key} />
    }
  }

  makeProjectsArray = (projects) => {
    const projectsArr = []
    for (const key in projects) {
      projectsArr.push(projects[key])
    }
    return projectsArr
  }

  // renderProject = (projects) => {
  //   projects && projects.map((project) => {
  //     // return this.rightOrLeft(project)
  //     return <PortfolioCardRight project={project} />
  //   })
  // }

  render() {
    const projects = this.state.projects

    return (
      <div className="portfolio-container">

        {/*projects && projects.map((project) => {
          console.log('PROJECT', project)
          // return this.rightOrLeft(project)
          return <PortfolioCardRight project={project} key={project.key} />
        })*/}

        {this.state.projects}

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
