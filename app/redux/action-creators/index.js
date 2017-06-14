import firebase from 'firebase'

import store from 'APP/app/store'
import posts from '../reducers/newPostReducer'
import projects from '../reducers/projectsReducer'
import { GET_ALL_POSTS, GET_ALL_PROJECTS } from '../constants'

const db = firebase.database().ref('/')
const postsRef = db.child('posts')
const projectsRef = db.child('projects')

// POSTS
export const addNewPost = (post) => {
  const newPostKeyRef = postsRef.push()
  const newPostKey = newPostKeyRef.key
  newPostKeyRef.set({key: newPostKey, title: post.title, content: post.content, tags: post.tags})
}

// Action Creator
export const loadAllPosts = (posts) => receiveAllPosts(posts)
// Action
const receiveAllPosts = (posts) => ({
  type: GET_ALL_POSTS,
  posts
})

// PROJECTS
export const addNewProject = (project) => {
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

// Action Creator
export const loadAllProjects = (projects) => receiveAllProjects(projects)
// Action
const receiveAllProjects = (projects) => ({
  type: GET_ALL_PROJECTS,
  projects
})

