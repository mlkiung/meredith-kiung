import React, { Component } from 'react'
import { connect } from 'react-redux'
import firebase from 'APP/fire'

import store from 'APP/app/store'
import { loadAllProjects } from 'APP/app/redux/action-creators'

import { PortfolioCardRight, PortfolioCardLeft } from './PortfolioCard'

class Portfolio extends Component {
  constructor(props) {
    super(props)

    this.state = {
      projects: [],
    }

    this.rightOrLeft = this.rightOrLeft.bind(this)
    this.makeProjectsArray = this.makeProjectsArray.bind(this)
  }

  componentDidMount() {
    const projectsArr = this.makeProjectsArray(this.props.projects)
    const projectsComponents = projectsArr.map((project, i) => {
      return this.rightOrLeft(project, i)
    })
    this.setState({projects: projectsComponents})
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

  render() {
    return (
      <div className="portfolio-container">
        {this.state.projects}
      </div>
    )
  }
}

const mapStateToProps = state => ({projects: state.projects})

const mapDispatchToProps = dispatch => ({ loadAllProjects })

export default connect(mapStateToProps, mapDispatchToProps)(Portfolio)
