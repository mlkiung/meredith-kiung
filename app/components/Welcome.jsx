import React, { Component } from 'react'
import TransitionGroup from 'react-transition-group'

import WelcomeText from 'APP/app/components/WelcomeText'

class Welcome extends Component {
  constructor() {
    super()

    this.state = {
      shouldShowText: false,
    }
  }

  render() {
    return (
      <div className="welcome-container">
        <TransitionGroup component={WelcomeText}>
          {this.state.shouldShowText ? <WelcomeText /> : null}
        </TransitionGroup>
      </div>
    )
  }
}

export default Welcome
