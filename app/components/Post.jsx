import React, { Component } from 'react'
import { connect } from 'react-redux'

class Post extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    console.log('props in post', this.props)
    return(
      <div class="page-header">
          <h1>{this.props.post.title} <small>{/*this.props.post.subtitle*/}</small></h1>
          <div>{this.props.post.content}</div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    post: state.post
  }
}

export default connect(mapStateToProps)(Post)