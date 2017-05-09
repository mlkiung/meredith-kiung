import React from 'react'

import {ADD_NEW_POST} from 'APP/app/redux/constants'

const initialState = {}

export default function newPostReducer(state = initialState, action) {

  switch (action.type) {

    case ADD_NEW_POST:
      return action.newPost

    default:
      return state

  }
}
