import React, { Component } from 'react'
import { browserHistory } from 'react-router'

class WelcomeText extends Component {
  constructor() {
    super()

    this.onButtonClick = this.onButtonClick.bind(this)
  }

  onButtonClick = (event) => {
    event.preventDefault()
    browserHistory.push('/home')
  }

  render() {
    const text = (
      class HelloWorld extends Component {
        render() {
          return (
            <div>
              <button onClick={this.onButtonClick}>
                <MeredithKiung />
              </button>
            </div>
          )
        }
      }
    )

    return (
      <div className="welcome-component" >
        <pre className="code-component">{text}</pre>
      </div>
    )
  }
}
