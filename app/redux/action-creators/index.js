import firebase from 'firebase'

import posts from '../reducers/newPostReducer'
import { GET_A_POST, GET_ALL_POSTS } from '../constants'

const db = firebase.database().ref('/')
const postsRef = db.child('posts')
console.log('ROOT', postsRef)
// const allPosts = postsRef.on('value', snap => snap.val())
// console.log('allPosts', allPosts())

// addNewPost simply adds a new post to the database
export const addNewPost = (post) => {
  const newPostKeyRef = postsRef.push()
  const newPostKey = newPostKeyRef.key
  console.log('newPostKey', newPostKey)
  newPostKeyRef.set({key: newPostKey, title: post.title, content: post.content, tags: post.tags})
}

// getPost gets a single post and loads it to state
export const getPost = post => {
  dispatch =>
    postsRef.on('child-added', snap => {
      loadPost(snap.val())
    })
}

export const loadPost = (post) => ({
  type: GET_A_POST,
  post
})

// getAllPosts updates the posts object every time a new post is added
export const getAllPosts = () => {
  postsRef.once('value').then(snap => {
    // dispatch(loadAllPosts(snap.val()))
    const posts = snap.val()
    console.log('posts2', posts)
    dispatch(loadAllPosts(posts))
  })
}

export const loadAllPosts = posts => ({
  type: GET_ALL_POSTS,
  posts: posts
})
