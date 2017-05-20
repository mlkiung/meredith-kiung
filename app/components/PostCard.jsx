import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import PostList from './PostList'
import { getPost } from '../redux/action-creators'

const PostCard = props => {

  let tags = props.post.tags.split(', ')

  return (
    <div id="PostCard">
      <div className="panel panel-default">
        <div className="panel-heading" id="post-card-no-border">
          <h3 className="panel-title font-serif">{props.post.title}</h3>
          <ol className="breadcrumb font-mono">{
              tags.map(tag => {
                return (
                  <li className="tags" key={tag}>
                    <Link to={'/posts'} id="tags-color">{tag}</Link>
                  </li>
                )
              })
            }
          </ol>
        </div>
        <div className="panel-body font-sans">
          {props.post.content}
        </div>
      </div>
    </div>
  )
}

export default PostCard