import React, { Component } from 'react'
import { connect } from 'react-redux'

import { addNewPost } from '../redux/action-creators'

class NewPost extends Component {
  constructor() {
    super()

    this.state = {
      title: '',
      content: '',
    }

    this.onTitleChange = this.onTitleChange.bind(this)
    this.onContentChange = this.onContentChange.bind(this)
    this.onPublishPress = this.onPublishPress.bind(this)
  }

  onTitleChange(event) {
    event.preventDefault()
    this.setState({title: event.target.value})
  }

  onContentChange(event) {
    event.preventDefault()
    this.setState({content: event.target.value})
  }

  onPublishPress(event) {
    event.preventDefault()
    console.log(this.props)
    const title = this.state.title
    const content = this.state.content
    this.props.addNewPost({ title, content })
  }

  render() {
    return (
      <div>
        <form className="form-horizontal">
          <fieldset>
            <legend>New Post</legend>
            <div className="form-group">
              <label htmlFor="inputTitle" className="col-lg-2 control-label">Title</label>
              <div className="col-lg-10">
                <input type="text" className="form-control" id="inputTitle" placeholder="Title" value={this.state.title} onChange={this.onTitleChange}/>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="contentArea" className="col-lg-2 control-label" placeholder="Content">Content</label>
              <div className="col-lg-10">
                <textarea value={this.state.content} onChange={this.onContentChange} className="form-control" rows="3" id="contentArea"></textarea>
              </div>
            </div>
            <div className="form-group">
              <div className="col-lg-10 col-lg-offset-2">
                <button type="reset" className="btn btn-default">Cancel</button>
                <button type="submit" className="btn btn-primary btn-submit" onClick={this.onPublishPress}>Publish</button>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({addNewPost})

export default connect(() => ({ }), mapDispatchToProps)(NewPost)
