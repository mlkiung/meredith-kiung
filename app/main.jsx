'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import { Provider } from 'react-redux'

import NotFound from './components/NotFound'

import firebase from 'APP/fire'

import store from './store'
import { loadAllPosts, getAllPosts } from 'APP/app/redux/action-creators'

import NewPost from 'APP/app/containers/NewPost'
import Navbar from 'APP/app/components/Navbar'
import PostList from 'APP/app/components/PostList'
import PostCard from 'APP/app/components/PostCard'
import Post from 'APP/app/components/Post'
import AboutMe from 'APP/app/components/AboutMe'
import Projects from 'APP/app/components/Projects'

const onAppEnter = () => {
  firebase.database().ref('/posts').on('value', snap => {
    store.dispatch(loadAllPosts(snap.val()))
  })
}

const onPostEnter = (props) => {
  console.log('props', props)
  firebase.database().ref(`/posts/${props.params.postKey}`).on('value', snap => {
    console.log('snap', snap.val())
    store.dispatch(loadPost(snap.val()))
  })
}

const App = ({children}) =>
  <div>
    <Navbar />
    {children}
  </div>

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App} onEnter={onAppEnter}>
        <IndexRedirect to="/home"/>
        <Route path="/home" component={PostList} />
        <Route path="/posts" component={PostList} />
        <Route path="/posts/:postKey" component={Post} onEnter={onPostEnter} />
        <Route path="/about-me" component={AboutMe} />
        <Route path="/projects" component={Projects} />
        <Route path="/newpost" component={NewPost} />
      </Route>
      <Route path='*' component={NotFound}/>
    </Router>
  </Provider>,
  document.getElementById('main')
)
