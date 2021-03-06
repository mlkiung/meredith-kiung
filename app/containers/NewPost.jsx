import React, { Component } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'

import { addNewPost } from '../redux/action-creators'

class NewPost extends Component {
  constructor() {
    super()

    this.state = {
      title: '',
      content: '',
      image: '',
      tags: ''
    }

    this.onChange = this.onChange.bind(this)
    // this.onContentChange = this.onContentChange.bind(this)
    this.onPublishPress = this.onPublishPress.bind(this)
    // this.onTagsChange = this.onTagsChange.bind(this)
  }

  onChange(event) {
    event.preventDefault()
    const name = event.target.name
    this.setState({[name]: event.target.value})
  }

  // onContentChange(event) {
  //   event.preventDefault()
  //   this.setState({content: event.target.value})
  // }

  // onTagsChange(event) {
  //   event.preventDefault()
  //   this.setState({tags: event.target.value})
  // }

  onPublishPress(event) {
    event.preventDefault()

    const title = this.state.title
    const content = this.state.content
    const tags = this.state.tags

    this.props.addNewPost({ title, content, tags })
    browserHistory.push('/')
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
                <input type="text" className="form-control" id="inputTitle" placeholder="Title" value={this.state.title} name="title" onChange={this.onChange}/>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="contentArea" className="col-lg-2 control-label" placeholder="Content">Content</label>
              <div className="col-lg-10">
                <textarea value={this.state.content} name="content" onChange={this.onChange} className="form-control" rows="3" id="contentArea"></textarea>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="tagArea" className="col-lg-2 control-label" placeholder="tags">Tags</label>
              <div className="col-lg-10">
                <textarea value={this.state.tags} name="tags" onChange={this.onChange} className="form-control" rows="3" id="tagArea"></textarea>
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
