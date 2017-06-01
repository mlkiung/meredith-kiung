import React, { Component } from 'react'
import Dialog from 'material-ui/Dialog'

import ImageModal from 'APP/app/components/ImageModal'

const PortfolioCard = (props) => {
  const project = props.project
  const images = project.images
  const technologies = project.technologies
  const github = project.github
  const website = project.website
  const modalKey = project.key

	AOS.init()

  return (
    <div className="outer">
      <div className="inner-info">
        {<div className="one-third middle middle-header aos-init aos-animate" data-aos="zoom-in" data-aos-easing="ease-in-out-back">
          <div className="font-middle-header">
            {project.title.toUpperCase()}
            <a href={github} target="_blank"><span className="fa fa-github about-icons" aria-hidden="true"></span></a>
            <a href={website} target="_blank"><i className="material-icons">link</i></a>
            <hr className="hr" />
          </div>
          <div className="font-middle-body">
            <div className="technologies-container">
              {technologies && technologies.map((technology, i) => {
                return (
                  <span key={i} className="technologies">{technology}</span>
                )
              })}
            </div>
            {project.description}
        		<ImageModal project={project} />
          </div>
        </div>}
      </div>
    </div>
  )
}

export default PortfolioCard
