import React from 'react'
import { connect } from 'react-redux'

import { getPost } from '../redux/action-creators'

class Post extends React.Component {
  constructor() {
    super()
  }

  componentDidMount() {
    this.props.getPost()
  }

  render() {
    console.log('props in Post.jsx', this.props)
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

const mapStateToProps = state => ({ post: state.post })
const mapDispatchToProps = dispatch => ({ getPost })

export default connect(mapStateToProps, mapDispatchToProps)(Post)
