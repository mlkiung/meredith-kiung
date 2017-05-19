import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import PostList from './PostList'
import { getPost } from '../redux/action-creators'

const PostCard = props => {
  console.log('props in Post', props)
  let tags = props.post.tags.split(', ')
  console.log('split tags', tags)
  return (
    <div id="PostCard">
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">{props.post.title}</h3>
          <ol className="breadcrumb">{
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
        <div className="panel-body">
          {props.post.content}
        </div>
      </div>
    </div>
  )
}

export default PostCard