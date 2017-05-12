import React, { Component } from 'react'
import { connect } from 'react-redux'

import Post from 'APP/app/components/Post'

class PostList extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <Post />
      </div>
    )
  }
}

const mapStateToProps = state => ({posts: state.posts})

export default connect(mapStateToProps)(PostList)
