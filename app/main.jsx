import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import { Provider } from 'react-redux'
import injectTapEventPlugin from 'react-tap-event-plugin'

import muiTheme from './muiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

import firebase from 'APP/fire'

import NotFound from './components/NotFound'

import store from './store'
import { loadAllPosts, loadAllProjects } from 'APP/app/redux/action-creators'

import Navbar from 'APP/app/components/Navbar'
import Welcome from 'APP/app/components/Welcome'
import AboutMe from 'APP/app/components/AboutMe'
import PostList from 'APP/app/components/PostList'
import PostCard from 'APP/app/components/PostCard'
import NewPost from 'APP/app/containers/NewPost'
import Portfolio from 'APP/app/components/Portfolio'
import NewProject from 'APP/app/containers/NewProject'

const onAppEnter = () => {
  firebase.database().ref('/posts').on('value', snap => {
    store.dispatch(loadAllPosts(snap.val()))
  })

  firebase.database().ref('/projects').on('value', snap => {
    store.dispatch(loadAllProjects(snap.val()))
  })
}

const App = ({children}) =>
  <MuiThemeProvider muiTheme={getMuiTheme(muiTheme)}>
    <div id="app-window">
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
        <Route path="/welcome" component={Welcome} />
        <Route path="/home" component={AboutMe} />
        <Route path="/about-me" component={AboutMe} />
        <Route path="/posts" component={PostList} />
        <Route path="/newpost" component={NewPost} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/newproject" component={NewProject} />
      </Route>
      <Route path='*' component={NotFound}/>
    </Router>
  </Provider>,
  document.getElementById('main')
)
