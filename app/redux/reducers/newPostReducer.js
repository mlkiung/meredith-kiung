import React from 'react'

import { GET_ALL_POSTS } from 'APP/app/redux/constants'

const initialState = {}

const posts = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_POSTS:
      return action.posts

    default:
      return state
  }
}

export default posts
