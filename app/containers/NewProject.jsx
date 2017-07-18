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
  'Docker',
  'Mocha/Chai',
  'Jasmine',
  'Bootstrap',
  'Material-UI',
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

  handleInputChange = (event) => {
    // using one handleChange function for all inputs by declaring a name for each
    const name = event.target.name
    let value = event.target.value

    // if the input's name is 'images,' parse each element in the array
    // each image path will now start with 'images/../..'
    // set the state, matching the name of the input to the value
    if (name === 'images') {
      value = value.split(', ').map((val) => {
        const idx = val.indexOf('images/')
        return val.slice(idx)
      })
    }
    this.setState({[name]: value})
  }

  handleSelect = (event, index, technologies) => {
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
              onChange={this.handleSelect} >
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

/Users/mlkiung/Desktop/programming-projects/meredithkiung/public/images/WalmartProductManager/wpm-code.jpg
