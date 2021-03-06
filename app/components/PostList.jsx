import React, { Component } from 'react'
import { connect } from 'react-redux'

import PostCard from 'APP/app/components/PostCard'

class PostList extends Component {
  constructor(props) {
    super()
  }

  render() {
    const posts = this.props.posts
    const postsArray = []

    for (const key in posts) {
      postsArray.push(posts[key])
    }

    return (
      <div id="post-list">
        {postsArray.map(post => {
          return (
            <div key={post.key} className="post-card">
              <PostCard post={post}/>
            </div>
          )
        })}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps)(PostList)
