import React from 'react'

const PortfolioCardRight = (props) => {
  return (
    <div className="outer">
      <div className="inner scroll-img">{props.project.title}</div>
      <div className="inner static-color">
        <div className="one-third"></div>
        <div className="one-third middle middle-header">
          <div className="font-middle-header">{props.project.title.toUpperCase()}<hr className="hr" /></div>
          <div className="font-middle-body">{props.project.content}</div>
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
          <div className="font-middle-header">{props.project.title.toUpperCase()}<hr className="hr" /></div>
          <div className="font-middle-body">{props.project.content}</div>
        </div>
        <div className="one-third"></div>
      </div>
      <div className="inner scroll-img">{props.project.title}</div>
    </div>
  )
}

export { PortfolioCardRight, PortfolioCardLeft }
