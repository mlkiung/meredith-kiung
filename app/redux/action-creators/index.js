import firebase from 'firebase'

import posts from '../reducers/newPostReducer'
import { GET_A_POST, GET_ALL_POSTS, GET_ALL_PROJECTS } from '../constants'

const db = firebase.database().ref('/')
const postsRef = db.child('posts')
const projectsRef = db.child('projects')


// addNewPost simply adds a new post to the database
export const addNewPost = (post) => {
  const newPostKeyRef = postsRef.push()
  const newPostKey = newPostKeyRef.key
  console.log('newPostKey', newPostKey)
  newPostKeyRef.set({key: newPostKey, title: post.title, content: post.content, tags: post.tags})
}

// getPost gets a single post and loads it to state
export const getPost = (post) => {
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

export const loadAllPosts = (posts) => ({
  type: GET_ALL_POSTS,
  posts: posts
})

export const addNewProject = (project) => {
  console.log('PROJECT', project)
  const newProjectKeyRef = projectsRef.push()
  const newProjectKey = newProjectKeyRef.key
  newProjectKeyRef.set({
    key: newProjectKey,
    title: project.title,
    description: project.description,
    technologies: project.technologies,
    github: project.github,
    website: project.website,
    images: project.images,
  })
}

export const loadAllProjects = (projects) => ({
  type: GET_ALL_PROJECTS,
  projects: projects
})
