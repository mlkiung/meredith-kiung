import React, { Component } from 'react'

class ImageSlider extends Component {
  componentDidMount() {
    $('.slider').slider()
  }

  render() {
    const images = this.props.images

    return (
      <div className="slider">
        <ul className="slides">
          {images && images.map((image, i) => {
            return (
              <li key={i}>
                <img src={image} className="image-slider-img" />
                {/*<div className="caption center-align">
                  <h3>This is our big Tagline!</h3>
                  <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
                </div>*/}
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default ImageSlider
