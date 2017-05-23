import { combineReducers } from 'redux'

import posts from './newPostReducer'
import projects from './projectsReducer'

const rootReducer = combineReducers({
  posts,
  projects
})

export default rootReducer
