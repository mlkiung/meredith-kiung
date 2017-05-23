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
import { loadAllPosts, loadAllProjects } from 'APP/app/redux/action-creators'

import NewPost from 'APP/app/containers/NewPost'
import Navbar from 'APP/app/components/Navbar'
import PostList from 'APP/app/components/PostList'
import PostCard from 'APP/app/components/PostCard'
import AboutMe from 'APP/app/components/AboutMe'
import Portfolio from 'APP/app/components/Portfolio'
import NewProject from 'APP/app/containers/NewProject'

const onAppEnter = () => {
  firebase.database().ref('/posts').on('value', snap => {
    store.dispatch(loadAllPosts(snap.val()))
  })
}

const onPortfolioEnter = () => {
  firebase.database().ref('/portfolio').on('value', snap => {
    store.dispatch(loadAllProjects(snap.val()))
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
        <Route path="/about-me" component={AboutMe} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/newpost" component={NewPost} />
        <Route path="/newproject" component={NewProject} />
      </Route>
      <Route path='*' component={NotFound}/>
    </Router>
  </Provider>,
  document.getElementById('main')
)
