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
  }

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.projects !== this.props.projects) {
      const projectsArr = this.makeProjectsArray(nextProps.projects)
			const projectsComponents = projectsArr.map((project) => {
				return <PortfolioCard project = {project} key={project.key} />
      })
      this.setState({projects: projectsComponents})
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

export default connect(mapStateToProps)(Portfolio)
