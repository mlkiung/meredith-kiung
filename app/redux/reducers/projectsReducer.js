import React from 'react'

import { GET_ALL_PROJECTS } from 'APP/app/redux/constants'

const initialState = {}

const projects = (state = initialState, action) => {

  switch (action.type) {

    case GET_ALL_PROJECTS:
      return action.projects

    default:
      return state
  }
}

export default projects
