import React from 'react'

import { ADD_NEW_POST, GET_ALL_POSTS } from 'APP/app/redux/constants'

const initialState = {}

const posts = (state = initialState, action) => {
  console.log('action in newPostReducer', action)

  switch (action.type) {

    case ADD_NEW_POST:
      return action.post

    case GET_ALL_POSTS:
      return action.allPosts

    default:
      return state
  }
}

export default posts
