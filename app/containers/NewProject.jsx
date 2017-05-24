import React, { Component } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'

import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'

import { addNewProject } from 'APP/app/redux/action-creators'

const _technologies = [
  'ReactJS',
  'React Native',
  'Node.js',
  'Redux',
  'Express',
  'Sequelize',
  'Angular.js',
  'MongoDB',
  'Firebase',
  'SQL',
]

class NewProject extends Component {
  state = {
    technologies: [],
    title: '',
    description: '',
    github: '',
    website: '',
    images: [],
  }
    // this.handleInputChange = this.handleInputChange.bind(this)
    // this.handleChange = this.handleChange.bind(this)
    // this.handleSubmit = this.handleSubmit.bind(this)
    // this.menuItems = this.menuItems.bind(this)
  // }

  handleInputChange = (event) => {
    const name = event.target.name
    const value = event.target.value

    this.setState({[name]: value})
  }

  handleChange = (event, index, technologies) => {
    this.setState({ technologies })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const project = this.state
    this.props.addNewProject(project)
    browserHistory.push('/portfolio')
  }

  menuItems = (technologies) => {
    return _technologies.map(_technology => (
      <MenuItem
        key={_technology}
        insetChildren={true}
        checked={technologies && technologies.indexOf(_technology) > -1}
        value={_technology}
        primaryText={_technology} />
    ))
  }

  render() {
    const technologies = this.state.technologies

    return (
      <div id="new-project-container">
        <form className="form-column">

          <label className="new-project-form-label">
            Project Title:
            <input
              name="title"
              className="new-project-input"
              type="text"
              onChange={this.handleInputChange} />
          </label>

          <label className="new-project-form-label">
            Project Description:
            <input
              name="description"
              className="new-project-input"
              type="text"
              onChange={this.handleInputChange} />
          </label>

          <label className="new-project-form-label">
            Technologies Used:
            <SelectField
              className="new-project-input"
              multiple={true}
              hintText="Select technologies used"
              value={technologies}
              onChange={this.handleChange} >
              {this.menuItems(technologies)}
            </SelectField>
          </label>

          <label className="new-project-form-label">
            Github Link:
            <input
              name="github"
              className="new-project-input"
              type="text"
              onChange={this.handleInputChange} />
          </label>

          <label className="new-project-form-label">
            Website Link:
            <input
              name="website"
              className="new-project-input"
              type="text"
              onChange={this.handleInputChange} />
          </label>

          <label className="new-project-form-label">
            Images:
            <input
              name="images"
              className="new-project-input"
              type="text"
              onChange={this.handleInputChange} />
          </label>

          <label className="new-project-form-label">
            <input
              name="submit"
              type="submit"
              onClick={this.handleSubmit} />
          </label>

        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({addNewProject})

export default connect(mapDispatchToProps)(NewProject)
