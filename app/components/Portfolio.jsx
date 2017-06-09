import React, { Component } from 'react'
import { connect } from 'react-redux'

import firebase from 'APP/fire'
import store from 'APP/app/store'

import PortfolioCard from 'APP/app/components/PortfolioCard'

class Portfolio extends Component {
  constructor(props) {
    super(props)

    this.state = {
      projects: [],
    }

    this.makeProjectsArray = this.makeProjectsArray.bind(this)
    this.makeProjectsComponents = this.makeProjectsComponents.bind(this)
  }

  componentDidMount = () => {
    this.makeProjectsComponents(this.props.projects)
  }

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.projects !== this.props.projects) {
      this.makeProjectsComponents(nextProps.projects)
    }
  }

  makeProjectsArray = (projects) => {
    const projectsArr = []
    for (const key in projects) {
      projectsArr.push(projects[key])
    }
    return projectsArr
  }

  makeProjectsComponents = (projects) => {
    const projectsArr = this.makeProjectsArray(projects)
    const projectsComponents = projectsArr.map((project) => {
      return <PortfolioCard project={project} key={project.key}/>
    })
    this.setState({projects: projectsComponents})
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

export default connect(mapStateToProps)(Portfolio)
