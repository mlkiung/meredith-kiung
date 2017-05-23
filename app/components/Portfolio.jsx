import React from 'react'

// this is a static page, essentially
// i add projects as they come along and redeploy
// an option for future development would be to make the left and right components their own components and to just pass the project down as props

const Portfolio = () => (
    <div className="portfolio-container">
      <div className="outer">
        <div className="inner scroll-img" id="sandcastle">Sandcastle Video</div>
        <div className="inner static-color">
          <div className="one-third"></div>
          <div className="one-third middle middle-header">
            <div className="font-middle-header">SANDCASTLE<hr className="hr" /></div>
            <div className="font-middle-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
          </div>
          <div className="one-third"></div>
        </div>
      </div>
      <div className="outer">
        <div className="inner static-color">
          <div className="one-third"></div>
          <div className="one-third middle middle-header">
            <div className="font-middle-header">iFOODIE<hr className="hr" /></div>
            <div className="font-middle-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
          </div>
          <div className="one-third"></div>
        </div>
        <div className="inner scroll-img" id="ifoodie">iFoodie</div>
      </div>
      <div className="outer">
        <div className="inner scroll-img" id="cup-of-sugar">CUP OF SUGAR</div>
        <div className="inner static-color">
          <div className="one-third"></div>
          <div className="one-third middle middle-header">
            <div className="font-middle-header">CUP OF SUGAR<hr className="hr" /></div>
            <div className="font-middle-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
          </div>
          <div className="one-third"></div>
        </div>
      </div>
      <div className="outer">
        <div className="inner static-color">
          <div className="one-third"></div>
          <div className="one-third middle middle-header">
            <div className="font-middle-header">CAT MOON DADDY<hr className="hr" /></div>
            <div className="font-middle-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
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
            <div className="font-middle-header">FIREBASE<hr className="hr" /></div>
            <div className="font-middle-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
          </div>
          <div className="one-third"></div>
        </div>
      </div>
    </div>
  )

export default Portfolio
