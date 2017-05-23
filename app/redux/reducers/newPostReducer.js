import React from 'react'

import { GET_A_POST, GET_ALL_POSTS } from 'APP/app/redux/constants'

const initialState = {}

const posts = (state = initialState, action) => {
  console.log('action in newPostReducer', action)

  switch (action.type) {

    case GET_ALL_POSTS:
      return action.posts

    case GET_A_POST:
      return action.post

    default:
      return state
  }
}

export default posts
