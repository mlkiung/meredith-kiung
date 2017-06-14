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
    const text1 = `
      class HelloWorld extends Component {
        render() {
          return (
            <div>
    `
    const text2 = `
            < /div>
          )
        }
    `

    const button = (
      <button className="welcome-button" onClick={this.onButtonClick}>
        {`<MeredithKiung />`}
      </button>
    )

    return (
      <div className="welcome-component" >
        <pre className="code-component">{text1}</pre>
        {button}
        <pre className="code-component">{text2}</pre>
      </div>
    )
  }
}
