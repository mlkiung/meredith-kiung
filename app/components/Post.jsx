import React from 'react'
import { connect } from 'react-redux'

import { getPost } from '../redux/action-creators'

class Post extends React.Component {
  constructor() {
    super()
  }

  componentDidMount() {
    console.log('props in componentDidMount Post.jsx', this.props)
    // can't filter an object durrrrrrrrr
    // this.props.posts.filter(posts => {
    //   console.log(posts)
    //   // posts.post.title === title
    // })
  }

  render() {
    console.log('props in Post.jsx', this.props)
    console.log('state in Post.jsx', this.state)
    return (
      <div>
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">{/*this.props.post.title*/}</h3>
          </div>
          <div className="panel-body">
            {/*this.props.post.content*/}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({ posts: state.posts })
const mapDispatchToProps = dispatch => ({ getPost })

export default connect(mapStateToProps, mapDispatchToProps)(Post)
