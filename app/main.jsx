'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import { Provider } from 'react-redux'

import NotFound from './components/NotFound'

import firebase from 'APP/fire'

import store from './store'

import Navbar from 'APP/app/components/Navbar'
import PostList from 'APP/app/components/PostList'
import Post from 'APP/app/components/Post'
import NewPost from 'APP/app/containers/NewPost'
import AboutMe from 'APP/app/components/AboutMe'
import Projects from 'APP/app/components/Projects'

const App = ({children}) =>
  <div>
    <Navbar />
    {children}
  </div>

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRedirect to="/home"/>
        <Route path="/home" component={PostList} />
        <Route path="/post" component={Post} />
        <Route path="/about-me" component={AboutMe} />
        <Route path="/projects" component={Projects} />
        <Route path="/newpost" component={NewPost} />
      </Route>
      <Route path='*' component={NotFound}/>
    </Router>
  </Provider>,
  document.getElementById('main')
)
