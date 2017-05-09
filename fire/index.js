const firebase = require('firebase')

// -- // -- // -- // Firebase Config // -- // -- // -- //
const config = {
  apiKey: 'AIzaSyA9UT4z0XIS8IOD1VzO5Z2C64McfwaCaCU',
  authDomain: 'bear-gets-digital.firebaseapp.com',
  databaseURL: 'https://bear-gets-digital.firebaseio.com',
  projectId: 'bear-gets-digital',
  storageBucket: 'bear-gets-digital.appspot.com',
  messagingSenderId: '309686017427'
}
// -- // -- // -- // -- // -- // -- // -- // -- // -- //

// Initialize the app, but make sure to do it only once.
//   (We need this for the tests. The test runner busts the require
//   cache when in watch mode; this will cause us to evaluate this
//   file multiple times. Without this protection, we would try to
//   initialize the app again, which causes Firebase to throw.
//
//   This is why global state makes a sad panda.)
firebase.__bonesApp || (firebase.__bonesApp = firebase.initializeApp(config))

module.exports = firebase
