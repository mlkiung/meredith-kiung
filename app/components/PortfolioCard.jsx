import React from 'react'

const PortfolioCardRight = (props) => {
  console.log(props.project)
  return (
    <div className="outer">
      <div className="inner scroll-img"></div>
      <div className="inner static-color">
        <div className="one-third middle middle-header">
          <div className="font-middle-header">{props.project.title.toUpperCase()}<hr className="hr" /></div>
          <div className="font-middle-body">{props.project.description}</div>
        </div>
      </div>
    </div>
  )
}

const PortfolioCardLeft = (props) => {
  return (
    <div className="outer">
      <div className="inner static-color">
        <div className="one-third middle middle-header">
          <div className="font-middle-header">{props.project.title.toUpperCase()}<hr className="hr" /></div>
          <div className="font-middle-body">{props.project.description}</div>
        </div>
      </div>
      <div className="inner scroll-img"></div>
    </div>
  )
}

export { PortfolioCardRight, PortfolioCardLeft }
