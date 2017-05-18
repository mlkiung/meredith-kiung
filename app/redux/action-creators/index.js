import firebase from 'firebase'

import posts from '../reducers/newPostReducer'
import { ADD_NEW_POST, GET_ALL_POSTS } from '../constants'

const db = firebase.database().ref('/')
const dbRef = db.child('posts')
console.log('ROOT', dbRef)

// addNewPost simply adds a new post to the database
export const addNewPost = (post) => {
    dbRef.push({title: post.title, content: post.content})
}

// getPost gets a single post and loads it to state
export const getPost = post => {
  dispatch =>
    root.on('child-added', snap => {
      loadPost(snap.val())
    })
}

export const loadPost = ({ post }) => ({
  type: ADD_NEW_POST,
  post
})

// getAllPosts updates the posts object every time a new post is added
export const getAllPosts = () => {
  dispatch =>
    firebase.database().ref('/').on('value', snap => {
      loadAllPosts(snap.val())
    })
}

const loadAllPosts = ({posts}) => {
  console.log('posts', posts)
  return {
    type: GET_ALL_POSTS,
    posts
  }
}
