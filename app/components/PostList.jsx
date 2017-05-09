import React, { Component } from 'react'

import Post from 'APP/app/components/Post'

export default class PostList extends Component {
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
