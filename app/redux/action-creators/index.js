import firebase from 'firebase'

import store from 'APP/app/store'
import posts from '../reducers/newPostReducer'
import projects from '../reducers/projectsReducer'
import { GET_A_POST, GET_ALL_POSTS, GET_ALL_PROJECTS } from '../constants'

const db = firebase.database().ref('/')
const postsRef = db.child('posts')
const projectsRef = db.child('projects')

// POSTS
export const addNewPost = (post) => {
  const newPostKeyRef = postsRef.push()
  const newPostKey = newPostKeyRef.key
  newPostKeyRef.set({key: newPostKey, title: post.title, content: post.content, tags: post.tags})
}

export const loadAllPosts = (posts) => receiveAllPosts(posts)

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

export const loadAllProjects = (projects) => receiveAllProjects(projects)

// export const loadAllProjects = () => {
//   projectsRef.on('value', snap => {
//     store.dispatch(receiveAllProjects(snap.val()))
//   })
// }

const receiveAllProjects = (projects) => ({
  type: GET_ALL_PROJECTS,
  projects
})


