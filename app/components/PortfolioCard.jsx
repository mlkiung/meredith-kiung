import React from 'react'

const PortfolioCardRight = (props) => {
  return (
    <div className="outer">
      <div className="inner scroll-img" id="sandcastle">{props.project.title}</div>
      <div className="inner static-color">
        <div className="one-third"></div>
        <div className="one-third middle middle-header">
          <div className="font-middle-header">{props.project.title.toUpperCase()}SANDCASTLE<hr className="hr" /></div>
          <div className="font-middle-body">{props.project.content}Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
        </div>
        <div className="one-third"></div>
      </div>
    </div>
  )
}

const PortfolioCardLeft = (props) => {
  return (
    <div className="outer">
      <div className="inner static-color">
        <div className="one-third"></div>
        <div className="one-third middle middle-header">
          <div className="font-middle-header">iFOODIE{props.project.title.toUpperCase()}<hr className="hr" /></div>
          <div className="font-middle-body">{props.project.content}Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
        </div>
        <div className="one-third"></div>
      </div>
      <div className="inner scroll-img" id="ifoodie">{props.project.title}</div>
    </div>
  )
}

export { PortfolioCardRight, PortfolioCardLeft }
