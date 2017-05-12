import { combineReducers } from 'redux'

import posts from './newPostReducer'

const rootReducer = combineReducers({
  posts
})

export default rootReducer
