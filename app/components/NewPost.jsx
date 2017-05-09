import React, { Component } from 'react'
import { connect } from 'react-redux'

class NewPost extends Component {
  constructor() {
    super()
  }

  onPublish(event) {
    event.preventDefault()

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
                <input type="text" className="form-control" id="inputTitle" placeholder="Title" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="contentArea" className="col-lg-2 control-label" placeholder="Content">Content</label>
              <div className="col-lg-10">
                <textarea className="form-control" rows="3" id="contentArea"></textarea>
              </div>
            </div>
            <div className="form-group">
              <div className="col-lg-10 col-lg-offset-2">
                <button type="reset" className="btn btn-default">Cancel</button>
                <button type="submit" className="btn btn-primary">Publish</button>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewPost)
