import firebase from 'firebase'

import posts from '../reducers/newPostReducer'
import { ADD_NEW_POST, GET_ALL_POSTS } from '../constants'

const root = firebase.database().ref()
console.log('ROOT', root)

// addNewPost simply adds a new post to the database
export const addNewPost = (post) => {
  console.log('herro')
  console.log('post', post)
  dispatch =>
    console.log('durrr')
    firebase.database().ref(`${post.title}`).set({title: post.title, content: post.content})
}

export const loadNewPost = ({ post }) => ({
  type: ADD_NEW_POST,
  post
})

// getAllPosts updates the posts object every time a new post is added
export const getAllPosts = () => {
  dispatch =>
    root.on('child-added', snap => {
      console.log(snap.val())
      loadAllPosts(posts)
    })
}

export const loadAllPosts = ({ posts }) => ({
  type: GET_ALL_POSTS,
  posts
})
