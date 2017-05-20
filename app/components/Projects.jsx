import React from 'react'

//this is a static page, essentially
//i add projects as they come along and redeploy
//an option for future development would be to make the left and right components their own components and to just pass the project down as props

const Projects = () => {
  return (
    <div>
      <div className="outer">
        <div className="inner scroll-img" id="sandcastle">Sandcastle Video</div>
        <div className="inner static-color">
          <div className="one-third"></div>
          <div className="one-third middle middle-header">
            <div className="font-middle-header">Sandcastle</div>
            <div className="font-middle-body">This is the body</div>
          </div>
          <div className="one-third"></div>
        </div>
      </div>
      <div className="outer">
        <div className="inner static-color">
          <div className="one-third"></div>
          <div className="one-third middle middle-header">
            <div className="font-middle-header">iFoodie</div>
            <div className="font-middle-body">This is the body</div>
          </div>
          <div className="one-third"></div>
        </div>
        <div className="inner scroll-img" id="ifoodie">iFoodie</div>
      </div>
      <div className="outer">
        <div className="inner scroll-img" id="cup-of-sugar">Cup of Sugar</div>
        <div className="inner static-color">
          <div className="one-third"></div>
          <div className="one-third middle middle-header">
            <div className="font-middle-header">Cup of Sugar</div>
            <div className="font-middle-body">This is the body</div>
          </div>
          <div className="one-third"></div>
        </div>
      </div>
      <div className="outer">
        <div className="inner static-color">
          <div className="one-third"></div>
          <div className="one-third middle middle-header">
            <div className="font-middle-header">Cat Moon Daddy</div>
            <div className="font-middle-body">This is the body</div>
          </div>
          <div className="one-third"></div>
        </div>
        <div className="inner scroll-img" id="ifoodie">Cat Moon Daddy</div>
      </div>
      <div className="outer">
        <div className="inner scroll-img" id="sandcastle">Firebase Video</div>
        <div className="inner static-color">
          <div className="one-third"></div>
          <div className="one-third middle middle-header">
            <div className="font-middle-header">Firebase</div>
            <div className="font-middle-body">This is the body</div>
          </div>
          <div className="one-third"></div>
        </div>
      </div>
    </div>
  )
}

export default Projects
