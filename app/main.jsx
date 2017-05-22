'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import { Provider } from 'react-redux'
import injectTapEventPlugin from 'react-tap-event-plugin'

import muiTheme from './muiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

import NotFound from './components/NotFound'

import firebase from 'APP/fire'

import store from './store'
import { loadAllPosts, getAllPosts, loadPost } from 'APP/app/redux/action-creators'

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
  firebase.database().ref(`/posts/${props.params.postKey}`).on('value', snap => {
    store.dispatch(loadPost(snap.val()))
  })
}

const App = ({children}) =>
  <MuiThemeProvider muiTheme={getMuiTheme(muiTheme)}>
    <div>
      <Navbar />
      <div id="app-body">
        {children}
      </div>
    </div>
  </MuiThemeProvider>

injectTapEventPlugin()

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App} onEnter={onAppEnter}>
        <IndexRedirect to="/home"/>
        <Route path="/home" component={AboutMe} />
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
