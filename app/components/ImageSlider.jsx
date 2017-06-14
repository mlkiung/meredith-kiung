import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class ImageSlider extends Component {
  componentDidMount() {
    // ALL THREE OF THESE METHODS WORK
    // $('.carousel.carousel-slider').carousel({indicators: true})
    // $(ReactDOM.findDOMNode(this)).carousel({indicators: true})
    this.$node = $(this.refs.imageSlider)
    this.$node.carousel({indicators: true})
  }

  render(props) {
    const images = this.props.images
    return (
      <div ref="imageSlider" className="carousel carousel-slider">
        {images && images.map((image, i) => {
          const idxStr = i.toString()
          return (
            <a key={i} className="carousel-item" href={`#${idxStr}!`}>
              <img src={image} />
            </a>
          )
        })}
      </div>
    )
  }
}

export default ImageSlider
