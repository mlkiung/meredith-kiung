import React from 'React'

import { GET_ALL_PROJECTS, ADD_NEW_PROJECT } from 'APP/app/redux/constants'

const initialState = {}

const projects = (state = initialState, action) => {
  console.log('action in projectsReducer', action)

  switch (action.type) {
    case GET_ALL_PROJECTS:
      return action.projects

    case ADD_NEW_PROJECT:
      return action.project

    default:
      return state
  }
}

export default projects
